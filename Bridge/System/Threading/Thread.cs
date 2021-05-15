namespace System.Threading
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    public sealed class Thread
    {
        public int ManagedThreadId => 0;

        public static Thread CurrentThread => null;

        public delegate void ParameterizedThreadStart( object obj );
        public delegate void ThreadStart();

        public Thread(ThreadStart start)
        {
            Bridge.Script.Write("console.warn('Not implemented in Luna');");
        }

        public Thread(ThreadStart start, int maxStackSize)
        {
            Bridge.Script.Write("console.warn('Not implemented in Luna');");
        }

        public Thread(ParameterizedThreadStart start)
        {
            Bridge.Script.Write("console.warn('Not implemented in Luna');");
        }

        public Thread(ParameterizedThreadStart start, int maxStackSize)
        {
            Bridge.Script.Write("console.warn('Not implemented in Luna');");
        }

        public void Start()
        {
            Bridge.Script.Write("console.warn('Not implemented in Luna');");
        }

        public void Start(object parameter)
        {
            Bridge.Script.Write("console.warn('Not implemented in Luna');");
        }

        /// <summary>
        /// Suspends the current thread for the specified number of milliseconds.
        /// Implemented as a loop checking timeout each iteration.
        /// Please note maximum 1e7 iterations
        /// </summary>
        /// <param name="millisecondsTimeout">The number of milliseconds for which the thread is suspended. Should be positive or -1. -1 works the same as 0 (not Infinite)</param>
        [Bridge.Template("Bridge.sleep({millisecondsTimeout})")]
        public extern static void Sleep(int millisecondsTimeout);

        /// <summary>
        /// Suspends the current thread for the specified anout of time.
        /// Implemented as a loop checking timeout each iteration.
        /// Please note maximum 1e7 iterations
        /// </summary>
        /// <param name="timeout">The amount of time for which the thread is suspended. Should be positive or -1. -1 works the same as 0 (not Infinite)</param>
        [Bridge.Template("Bridge.sleep(null, {timeout})")]
        public extern static void Sleep(TimeSpan timeout);
    }
}