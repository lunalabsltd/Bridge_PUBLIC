    Bridge.define("System.Collections.IEnumerable", {
        $kind: Bridge.Typemarkers.Interface
    });
    Bridge.define("System.Collections.ICollection", {
        inherits: [System.Collections.IEnumerable],
        $kind: Bridge.Typemarkers.Interface
    });
    Bridge.define("System.Collections.IList", {
        inherits: [System.Collections.ICollection],
        $kind: Bridge.Typemarkers.Interface
    });
    Bridge.define("System.Collections.IDictionary", {
        inherits: [System.Collections.ICollection],
        $kind: Bridge.Typemarkers.Interface
    });

    Bridge.define("System.Collections.Generic.IEnumerable$1", function (T) {
        return {
            inherits: [System.Collections.IEnumerable],
            $kind: Bridge.Typemarkers.Interface,
            $variance: [1]
        };
    });

    Bridge.define("System.Collections.Generic.ICollection$1", function (T) {
        return {
            inherits: [System.Collections.Generic.IEnumerable$1(T)],
            $kind: Bridge.Typemarkers.Interface
        };
    });

    Bridge.define("System.Collections.Generic.IEqualityComparer$1", function (T) {
        return {
            $kind: Bridge.Typemarkers.Interface,
            $variance: [2]
        };
    });

    Bridge.define("System.Collections.Generic.IDictionary$2", function (TKey, TValue) {
        return {
            inherits: [System.Collections.Generic.ICollection$1(System.Collections.Generic.KeyValuePair$2(TKey, TValue))],
            $kind: Bridge.Typemarkers.Interface
        };
    });

    Bridge.define("System.Collections.Generic.IList$1", function (T) {
        return {
            inherits: [System.Collections.Generic.ICollection$1(T)],
            $kind: Bridge.Typemarkers.Interface
        };
    });

    Bridge.define("System.Collections.Generic.ISet$1", function (T) {
        return {
            inherits: [System.Collections.Generic.ICollection$1(T)],
            $kind: Bridge.Typemarkers.Interface
        };
    });

    Bridge.define("System.Collections.Generic.IReadOnlyCollection$1", function (T) {
        return {
            inherits: [System.Collections.Generic.IEnumerable$1(T)],
            $kind: Bridge.Typemarkers.Interface
        };
    });

    Bridge.define("System.Collections.Generic.IReadOnlyList$1", function (T) {
        return {
            inherits: [System.Collections.Generic.IReadOnlyCollection$1(T)],
            $kind: Bridge.Typemarkers.Interface,
            $variance: [1]
        };
    });

    Bridge.define("System.Collections.Generic.IReadOnlyDictionary$2", function (TKey, TValue) {
        return {
            inherits: [System.Collections.Generic.IReadOnlyCollection$1(System.Collections.Generic.KeyValuePair$2(TKey, TValue))],
            $kind: Bridge.Typemarkers.Interface
        };
    });
