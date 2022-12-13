    Bridge.define("System.ComponentModel.INotifyPropertyChanged", {
        $kind: Bridge.Typemarkers.Interface
    });

    Bridge.define("System.ComponentModel.PropertyChangedEventArgs", {
        ctor: function (propertyName, newValue, oldValue) {
            this.$initialize();
            this.propertyName = propertyName;
            this.newValue = newValue;
            this.oldValue = oldValue;
        }
    });
