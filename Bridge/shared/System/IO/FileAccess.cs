namespace System.IO
{
    /// <summary><para>Defines constants for read, write, or read/write access to a file.</para></summary>
    [Flags]
    public enum FileAccess
    {
        /// <summary><para>Read access to the file. Data can be read from the file. Combine with Write for read/write access.</para></summary>
        Read = 1,
        /// <summary><para>Read and write access to the file. Data can be written to and read from the file.</para></summary>
        ReadWrite = 3,
        /// <summary><para>Write access to the file. Data can be written to the file. Combine with Read for read/write access.</para></summary>
        Write = 2,
    }
}