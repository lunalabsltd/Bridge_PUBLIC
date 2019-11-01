    //System.Globalization.GlobalizationMode start.
    Bridge.define("System.Globalization.GlobalizationMode", {
        statics: {
            props: {
                Invariant: false
            },
            ctors: {
                init: function () {
                    this.Invariant = System.Globalization.GlobalizationMode.GetGlobalizationInvariantMode();
                }
            },
            methods: {
                //System.Globalization.GlobalizationMode.GetInvariantSwitchValue:static start.
                GetInvariantSwitchValue: function () {
                    return true;


                },
                //System.Globalization.GlobalizationMode.GetInvariantSwitchValue:static end.

                //System.Globalization.GlobalizationMode.GetGlobalizationInvariantMode:static start.
                GetGlobalizationInvariantMode: function () {
                    return System.Globalization.GlobalizationMode.GetInvariantSwitchValue();
                },
                //System.Globalization.GlobalizationMode.GetGlobalizationInvariantMode:static end.


            }
        }
    });
    //System.Globalization.GlobalizationMode end.
