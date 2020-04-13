// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

namespace System.Globalization
{
    [Bridge.Enum(Bridge.Emit.Value)]
    [Flags]
    public enum NumberStyles
    {
        None = 0,
        AllowLeadingWhite = 1,
        AllowTrailingWhite = 2,
        AllowLeadingSign = 4,
        Integer = 7,
        AllowTrailingSign = 8,
        AllowParentheses = 16,
        AllowDecimalPoint = 32,
        AllowThousands = 64,
        Number = 111,
        AllowExponent = 128,
        Float = 167,
        AllowCurrencySymbol = 256,
        Currency = 383,
        Any = 511,
        AllowHexSpecifier = 512,
        HexNumber = 515
    }
}
