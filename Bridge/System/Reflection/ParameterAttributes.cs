namespace System.Reflection
{
    public enum ParameterAttributes
    {
        None = 0,
        In = 1,
        Out = 2,
        Lcid = 4,
        Retval = 8,
        Optional = 16, // 0x00000010
        HasDefault = 4096, // 0x00001000
        HasFieldMarshal = 8192, // 0x00002000
        Reserved3 = 16384, // 0x00004000
        Reserved4 = 32768, // 0x00008000
        ReservedMask = Reserved4 | Reserved3 | HasFieldMarshal | HasDefault, // 0x0000F000
    }
}
