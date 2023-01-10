    Bridge.define("System.ComponentModel.INotifyPropertyChanged", {
        $kind: 3
    });

    Bridge.define("System.ComponentModel.PropertyChangedEventArgs", {
        ctor: function (propertyName, newValue, oldValue) {
            this.$initialize();
            this.propertyName = propertyName;
            this.newValue = newValue;
            this.oldValue = oldValue;
        }
    });
