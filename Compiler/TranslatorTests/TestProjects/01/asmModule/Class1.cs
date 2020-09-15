using Bridge;

namespace IntegrationTests.Module
{
 [ Constructor( "new pc.Color" ) ]
    [ Reflectable ]
    public struct Color {

        public float r;

        public float g;

        public float b;

        public float a;


        [ Template( "new pc.Color({0}.r * {1}.r, {0}.g * {1}.g, {0}.b * {1}.b, {0}.a * {1}.a)" ) ]
        public extern static Color operator *( [ Ref ]Color a, Color b );


        [ Template( "new pc.Color( {0}.r * {1}, {0}.g * {1}, {0}.b * {1}, {0}.a * {1} )" ) ]
        public extern static Color operator *( [ Ref ] Color a, float t );

	    [ Template( "{0}.add( {1} )" ) ]
        public extern static Color operator +( Color a, [ Ref ] Color b );

        public extern static Color red {

            [Template( "new pc.Color(1, 0, 0, 1)" )]
            get;

        }
    }

    public class Class1
    {
        void Test(){
            Color  c1 = Color.red;
            Color  c2 = Color.red;
            // Color  c3 = c1 + c2;


            //OK
            var res = c1 * c2;
            // var red = Color.red;
            // var res2 = c1 * 2;
        }

    }
}