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
                this.AddDependencies(name, method.CustomAttributes);

                if (!method.HasBody)
                {
                    continue;
                }

                var calls = method.Body.Instructions.Select(this.GetMethodDefinition).Where(c => c != null);

                foreach (var call in calls)
                {
                    this.AddDependency(name, call.DeclaringType);
                }
            }
            foreach (var field in type.Fields)
            {
                this.AddDependency(name, field.FieldType);
                this.AddDependencies(name, field.CustomAttributes);
            }
            this.AddDependencies(name, type.CustomAttributes);
            this.AddDependency(name, type.BaseType);
        }

        private MethodDefinition GetMethodDefinition(Instruction instruction)
        {
            if (!(instruction.OpCode == OpCodes.Call ||
                  instruction.OpCode == OpCodes.Newobj ||
                  instruction.OpCode == OpCodes.Callvirt))
            {
                return null;
            }
            MethodDefinition method = null;
            if (instruction.Operand is MethodReference reference)
            {
                try
                {
                    method = reference.Resolve();
                }
                catch (NotSupportedException)
                {
                }
            }
            else
            {
                method = instruction.Operand as MethodDefinition;
            }
            if (method == null)
            {
                this.logger.Warn(string.Format("Can't resolve method reference: {0}", instruction.Operand));
            }
            return method;
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

            this.logger.Trace(string.Format("Added dependency: {0} -> {1}", name, used));
        }

        private TypeDefinition Resolve(TypeReference reference)
        {
            try
            {
                return reference?.Resolve();
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