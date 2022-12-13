    var typemarkers = {
        None: -1,
        /// <summary>Language-specific type that is not part of NRefactory.TypeSystem itself.</summary>
        Other: 0,
        /// <summary>A <see cref="T:ICSharpCode.NRefactory.TypeSystem.ITypeDefinition" /> or <see cref="T:ICSharpCode.NRefactory.TypeSystem.ParameterizedType" /> that is a class.</summary>
        Class: 1,
        /// <summary>A <see cref="T:ICSharpCode.NRefactory.TypeSystem.ITypeDefinition" /> or <see cref="T:ICSharpCode.NRefactory.TypeSystem.ParameterizedType" /> that is an interface.</summary>
        Interface: 2,
        /// <summary>A <see cref="T:ICSharpCode.NRefactory.TypeSystem.ITypeDefinition" /> or <see cref="T:ICSharpCode.NRefactory.TypeSystem.ParameterizedType" /> that is a struct.</summary>
        Struct: 3,
        /// <summary>A <see cref="T:ICSharpCode.NRefactory.TypeSystem.ITypeDefinition" /> or <see cref="T:ICSharpCode.NRefactory.TypeSystem.ParameterizedType" /> that is a delegate.</summary>
        /// <remarks><c>System.Delegate</c> itself is TypeKind.Class</remarks>
        Delegate: 4,
        /// <summary>A <see cref="T:ICSharpCode.NRefactory.TypeSystem.ITypeDefinition" /> that is an enum.</summary>
        /// <remarks><c>System.Enum</c> itself is TypeKind.Class</remarks>
        Enum: 5,
        /// <summary>A <see cref="T:ICSharpCode.NRefactory.TypeSystem.ITypeDefinition" /> that is a module (VB).</summary>
        Module: 6,
        /// <summary>The <c>System.Void</c> type.</summary>
        /// <see cref="F:ICSharpCode.NRefactory.TypeSystem.KnownTypeReference.Void" />
        Void: 7,
        /// <see cref="F:ICSharpCode.NRefactory.TypeSystem.SpecialType.UnknownType" />
        Unknown: 8,
        /// <summary>The type of the null literal.</summary>
        /// <see cref="F:ICSharpCode.NRefactory.TypeSystem.SpecialType.NullType" />
        Null: 9,
        /// <summary>Type representing the C# 'dynamic' type.</summary>
        /// <see cref="F:ICSharpCode.NRefactory.TypeSystem.SpecialType.Dynamic" />
        Dynamic: 10,
        /// <summary>Represents missing type arguments in partially parameterized types.</summary>
        /// <see cref="F:ICSharpCode.NRefactory.TypeSystem.SpecialType.UnboundTypeArgument" />
        /// <see cref="M:ICSharpCode.NRefactory.TypeSystem.IType.GetNestedTypes(System.Predicate{ICSharpCode.NRefactory.TypeSystem.ITypeDefinition},ICSharpCode.NRefactory.TypeSystem.GetMemberOptions)" />
        UnboundTypeArgument: 11,
        /// <summary>The type is a type parameter.</summary>
        /// <see cref="T:ICSharpCode.NRefactory.TypeSystem.ITypeParameter" />
        TypeParameter: 12,
        /// <summary>An array type</summary>
        /// <see cref="T:ICSharpCode.NRefactory.TypeSystem.ArrayType" />
        Array: 13,
        /// <summary>A pointer type</summary>
        /// <see cref="T:ICSharpCode.NRefactory.TypeSystem.PointerType" />
        Pointer: 14,
        /// <summary>A managed reference type</summary>
        /// <see cref="T:ICSharpCode.NRefactory.TypeSystem.ByReferenceType" />
        ByReference: 15,
        /// <summary>An anonymous type</summary>
        /// <see cref="T:ICSharpCode.NRefactory.TypeSystem.AnonymousType" />
        Anonymous: 16,
        /// <summary>Intersection of several types</summary>
        /// <see cref="T:ICSharpCode.NRefactory.TypeSystem.IntersectionType" />
        Intersection: 17,
        /// <see cref="F:ICSharpCode.NRefactory.TypeSystem.SpecialType.ArgList" />
        ArgList: 18,
        NestedOffset: 1000
    };

    globals.Bridge.Typemarkers = typemarkers;
