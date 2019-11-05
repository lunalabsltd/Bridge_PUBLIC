using System;
using System.Collections.Generic;
using System.Linq;
using Mono.Cecil;
using Mono.Cecil.Cil;

namespace Bridge.Contract.Dependencies
{
    public class Manager
    {
        private readonly Graph classDependencies = new Graph();
        private readonly BridgeTypes types;
        private readonly IEmitter emitter;
        private readonly ILogger logger;
        private readonly bool eliminateClasses;

        public Manager(BridgeTypes types, IEmitter emitter)
        {
            this.types = types;
            this.emitter = emitter;
            this.logger = emitter.Log;
            this.eliminateClasses = this.emitter.AssemblyInfo.DeadCode.EliminateClasses;
        }

        public void Build()
        {
            if (!eliminateClasses)
            {
                return;
            }

            this.logger.Trace("Building dependencies graph...");

            foreach (var type in this.types.Values)
            {
                this.AddDependencies(type.TypeDefinition);
            }

            foreach (var klass in this.emitter.AssemblyInfo.DeadCode.Classes)
            {
                this.classDependencies.Use(klass);
            }

            this.logger.Trace("Building dependencies graph done.");
        }

        private void AddDependencies(TypeDefinition type)
        {
            var name = Helpers.GetClassName(type);

            foreach (var method in type.Methods)
            {
                this.AddDependency(name, method);
            }
            foreach (var property in type.Properties)
            {
                this.AddDependency(name, property.GetMethod);
                this.AddDependency(name, property.SetMethod);
                this.AddDependencies(name, property.CustomAttributes);
            }
            foreach (var field in type.Fields)
            {
                this.AddDependency(name, field.FieldType);
                this.AddDependencies(name, field.CustomAttributes);
            }
            foreach (var face in type.Interfaces)
            {
                this.AddDependency(name, face);
            }
            this.AddDependencies(name, type.CustomAttributes);
            this.AddDependency(name, type.BaseType);
        }

        private void AddDependency(string name, MethodDefinition method)
        {
            if (method == null)
            {
                return;
            }

            this.AddDependencies(name, method.CustomAttributes);
            this.AddDependency(name, method.ReturnType);

            foreach (var param in method.Parameters)
            {
                this.AddDependency(name, param.ParameterType);
                this.AddDependencies(name, param.CustomAttributes);
            }

            if (!method.HasBody)
            {
                return;
            }

            var classes = method.Body.Instructions.Select(Manager.GetTypeDefinition).Where(c => c != null);

            foreach (var klass in classes)
            {
                this.AddDependency(name, klass);
            }
        }

        private static TypeDefinition GetTypeDefinition(Instruction instruction)
        {
            switch (instruction.Operand)
            {
                case null:
                {
                    return null;
                }
                case MethodDefinition method:
                {
                    return method.DeclaringType;
                }
                case FieldDefinition field:
                {
                    return field.DeclaringType;
                }
                case TypeDefinition type:
                {
                    return type;
                }
                case MethodReference methodRef:
                {
                    try
                    {
                        return methodRef.Resolve().DeclaringType;
                    }
                    catch (NotSupportedException)
                    {
                    }
                    break;
                }
                case FieldReference fieldRef:
                {
                    try
                    {
                        return fieldRef.Resolve().DeclaringType;
                    }
                    catch (NotSupportedException)
                    {
                    }
                    break;
                }
                case TypeReference typeRef:
                {
                    try
                    {
                        return typeRef.Resolve();
                    }
                    catch (NotSupportedException)
                    {
                    }
                    break;
                }
            }
            return null;
        }

        private void AddDependencies(string name, IEnumerable<CustomAttribute> attributes)
        {
            foreach (var attribute in attributes)
            {
                this.AddDependency(name, attribute.AttributeType);
            }
        }

        private void AddDependency(string name, TypeReference reference)
        {
            var type = this.Resolve(reference);
            if (type != null)
            {
                this.AddDependency(name, type);
            }
        }

        private void AddDependency(string name, TypeDefinition type)
        {
            var used = Helpers.GetClassName(type);
            this.classDependencies.AddDependency(name, used);
        }

        private TypeDefinition Resolve(TypeReference reference)
        {
            if (reference == null)
            {
                return null;
            }
            try
            {
                return reference.Resolve();
            }
            catch (NotSupportedException)
            {
                this.logger.Warn(string.Format("Can't resolve type reference: {0}", reference));
            }
            return null;
        }

        public bool IsUsed(string className)
        {
            return !this.eliminateClasses || this.classDependencies.IsUsed(className);
        }
    }
}
