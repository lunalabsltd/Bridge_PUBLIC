using System;
using System.Collections.Generic;
using System.Linq;
using ICSharpCode.NRefactory.CSharp;
using Mono.Cecil;
using Mono.Cecil.Cil;
using TypeDefinition = Mono.Cecil.TypeDefinition;

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

            // Referenced from inside of bridge.js, so have to use it manually.
            this.classDependencies.Use("System.TimeoutException");

            foreach (var klass in this.emitter.AssemblyInfo.DeadCode.Classes)
            {
                this.classDependencies.Use(klass);
            }

            foreach (var type in this.types.Values.Where(t => t.IsMainAssembly))
            {
                var name = Helpers.GetClassName(type.TypeDefinition);
                this.classDependencies.Use(name);
            }

            this.logger.Trace("Building dependencies graph done.");
        }

        private void AddDependencies(TypeDefinition type)
        {
            foreach (var nested in type.NestedTypes)
            {
                this.AddDependencies(nested);
            }

            var name = Helpers.GetClassName(type);

            foreach (var method in type.Methods)
            {
                this.AddDependencies(name, method);
            }
            foreach (var property in type.Properties)
            {
                this.AddDependencies(name, property.GetMethod);
                this.AddDependencies(name, property.SetMethod);
                this.AddDependencies(name, property.CustomAttributes);
            }
            foreach (var field in type.Fields)
            {
                this.AddDependencies(name, field.FieldType);
                this.AddDependencies(name, field.CustomAttributes);
            }
            foreach (var face in type.Interfaces)
            {
                this.AddDependencies(name, face);
            }
            this.AddDependencies(name, type.CustomAttributes);
            this.AddDependencies(name, type.BaseType);

            // Current version of Cecil doesn't include SerializableAttribute in CustomAttributes collection,
            // so have to add it manually.
            if (type.IsSerializable) {
                this.classDependencies.AddDependency(name, "System.SerializableAttribute");
            }
        }

        private void AddDependencies(string name, MethodDefinition method)
        {
            if (method == null)
            {
                return;
            }

            this.AddDependencies(name, method.CustomAttributes);
            this.AddDependencies(name, method.ReturnType);

            foreach (var param in method.Parameters)
            {
                this.AddDependencies(name, param.ParameterType);
                this.AddDependencies(name, param.CustomAttributes);
            }

            if (!method.HasBody)
            {
                return;
            }

            foreach (var instruction in method.Body.Instructions)
            {
                this.AddDependencies(name, instruction);
            }
        }

        private void AddDependencies(string name, Instruction instruction)
        {
            switch (instruction.Operand)
            {
                case null:
                {
                    return;
                }
                case MethodDefinition method:
                {
                    this.AddDependencies(name, method.DeclaringType);
                    break;
                }
                case FieldDefinition field:
                {
                    this.AddDependencies(name, field.DeclaringType);
                    break;
                }
                case TypeDefinition type:
                {
                    this.AddDependencies(name, type);
                    break;
                }
                case MethodReference methodRef:
                {
                    this.AddDependencies(name, methodRef);
                    break;
                }
                case FieldReference fieldRef:
                {
                    this.AddDependencies(name, fieldRef);
                    break;
                }
                case TypeReference typeRef:
                {
                    this.AddDependencies(name, typeRef);
                    break;
                }
            }
        }

        private void AddDependencies(string name, IEnumerable<CustomAttribute> attributes)
        {
            foreach (var attribute in attributes)
            {
                this.AddDependencies(name, attribute.AttributeType);
            }
        }

        private void AddDependencies(string name, TypeReference reference)
        {
            if (reference == null)
            {
                return;
            }
            if (reference.IsGenericInstance)
            {
                this.AddDependencies(name, ((GenericInstanceType)reference).GenericArguments);
            }
            var type = this.Resolve(reference);
            if (type != null)
            {
                this.AddDependencies(name, type);
            }
        }

        private void AddDependencies(string name, TypeDefinition type)
        {
            var used = Helpers.GetClassName(type);
            this.classDependencies.AddDependency(name, used);
        }

        private void AddDependencies(string name, MethodReference reference)
        {
            if (reference == null)
            {
                return;
            }
            if (reference.IsGenericInstance)
            {
                this.AddDependencies(name, ((GenericInstanceMethod)reference).GenericArguments);
            }
            var method = this.Resolve(reference);
            if (method != null)
            {
                this.AddDependencies(name, method.DeclaringType);
            }
        }

        private void AddDependencies(string name, IEnumerable<TypeReference> references)
        {
            foreach (var reference in references)
            {
                this.AddDependencies(name, reference);
            }
        }

        private void AddDependencies(string name, FieldReference reference)
        {
            if (reference == null)
            {
                return;
            }
            var field = this.Resolve(reference);
            if (field != null)
            {
                this.AddDependencies(name, field.DeclaringType);
            }
        }

        private TypeDefinition Resolve(TypeReference reference)
        {
            try
            {
                return reference.Resolve();
            }
            catch (NotSupportedException)
            {
            }
            return null;
        }

        private MethodDefinition Resolve(MethodReference reference)
        {
            try
            {
                return reference.Resolve();
            }
            catch (NotSupportedException)
            {
            }
            return null;
        }

        private FieldDefinition Resolve(FieldReference reference)
        {
            try
            {
                return reference.Resolve();
            }
            catch (NotSupportedException)
            {
            }
            return null;
        }

        public bool IsUsed(string className)
        {
            return !this.eliminateClasses || this.classDependencies.IsUsed(className);
        }
    }
}
