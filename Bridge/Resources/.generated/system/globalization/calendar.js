    /*System.Globalization.Calendar start.*/
    Bridge.define("System.Globalization.Calendar", {
        inherits: [System.ICloneable],
        statics: {
            fields: {
                TicksPerMillisecond: System.Int64(0),
                TicksPerSecond: System.Int64(0),
                TicksPerMinute: System.Int64(0),
                TicksPerHour: System.Int64(0),
                TicksPerDay: System.Int64(0),
                MillisPerSecond: 0,
                MillisPerMinute: 0,
                MillisPerHour: 0,
                MillisPerDay: 0,
                DaysPerYear: 0,
                DaysPer4Years: 0,
                DaysPer100Years: 0,
                DaysPer400Years: 0,
                DaysTo10000: 0,
                MaxMillis: System.Int64(0),
                CurrentEra: 0
            },
            ctors: {
                init: function () {
                    this.TicksPerMillisecond = System.Int64(10000);
                    this.TicksPerSecond = System.Int64(10000000);
                    this.TicksPerMinute = System.Int64(600000000);
                    this.TicksPerHour = System.Int64([1640261632,8]);
                    this.TicksPerDay = System.Int64([711573504,201]);
                    this.MillisPerSecond = 1000;
                    this.MillisPerMinute = 60000;
                    this.MillisPerHour = 3600000;
                    this.MillisPerDay = 86400000;
                    this.DaysPerYear = 365;
                    this.DaysPer4Years = 1461;
                    this.DaysPer100Years = 36524;
                    this.DaysPer400Years = 146097;
                    this.DaysTo10000 = 3652059;
                    this.MaxMillis = System.Int64([-464735232,73466]);
                    this.CurrentEra = 0;
                }
            },
            methods: {
                /*System.Globalization.Calendar.ReadOnly:static start.*/
                ReadOnly: function (calendar) {
                    if (calendar == null) {
                        throw new System.ArgumentNullException.$ctor1("calendar");
                    }
                    if (calendar.IsReadOnly) {
                        return (calendar);
                    }

                    var clonedCalendar = Bridge.cast((Bridge.clone(calendar)), System.Globalization.Calendar);
                    clonedCalendar.SetReadOnlyState(true);

                    return (clonedCalendar);
                },
                /*System.Globalization.Calendar.ReadOnly:static end.*/

                /*System.Globalization.Calendar.CheckAddResult:static start.*/
                CheckAddResult: function (ticks, minValue, maxValue) {
                    if (ticks.lt(System.DateTime.getTicks(minValue)) || ticks.gt(System.DateTime.getTicks(maxValue))) {
                        throw new System.ArgumentException.$ctor1(System.String.formatProvider(System.Globalization.CultureInfo.invariantCulture, System.SR.Format$1("The result is out of the supported range for this calendar. The result should be between {0} (Gregorian date) and {1} (Gregorian date), inclusive.", Bridge.box(minValue, System.DateTime, System.DateTime.format), Bridge.box(maxValue, System.DateTime, System.DateTime.format)), null));
                    }
                },
                /*System.Globalization.Calendar.CheckAddResult:static end.*/

                /*System.Globalization.Calendar.GetSystemTwoDigitYearSetting:static start.*/
                GetSystemTwoDigitYearSetting: function (CalID, defaultYearValue) {
                    var twoDigitYearMax = 2029;
                    if (twoDigitYearMax < 0) {
                        twoDigitYearMax = defaultYearValue;
                    }
                    return (twoDigitYearMax);
                },
                /*System.Globalization.Calendar.GetSystemTwoDigitYearSetting:static end.*/


            }
        },
        fields: {
            _isReadOnly: false,
            twoDigitYearMax: 0
        },
        props: {
            MinSupportedDateTime: {
                get: function () {
                    return (System.DateTime.getMinValue());
                }
            },
            MaxSupportedDateTime: {
                get: function () {
                    return (System.DateTime.getMaxValue());
                }
            },
            AlgorithmType: {
                get: function () {
                    return 0;
                }
            },
            ID: {
                get: function () {
                    return 0;
                }
            },
            BaseCalendarID: {
                get: function () {
                    return this.ID;
                }
            },
            IsReadOnly: {
                get: function () {
                    return (this._isReadOnly);
                }
            },
            CurrentEraValue: {
                get: function () {
                    throw System.NotImplemented.ByDesign;
                }
            },
            DaysInYearBeforeMinSupportedYear: {
                get: function () {
                    return 365;
                }
            },
            TwoDigitYearMax: {
                get: function () {
                    return (this.twoDigitYearMax);
                },
                set: function (value) {
                    this.VerifyWritable();
                    this.twoDigitYearMax = value;
                }
            }
        },
        alias: ["clone", "System$ICloneable$clone"],
        ctors: {
            init: function () {
                this._isReadOnly = false;
                this.twoDigitYearMax = -1;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            /*System.Globalization.Calendar.clone start.*/
            clone: function () {
                var o = Bridge.clone(this);
                Bridge.cast(o, System.Globalization.Calendar).SetReadOnlyState(false);
                return (o);
            },
            /*System.Globalization.Calendar.clone end.*/

            /*System.Globalization.Calendar.VerifyWritable start.*/
            VerifyWritable: function () {
                if (this._isReadOnly) {
                    throw new System.InvalidOperationException.$ctor1("Instance is read-only.");
                }
            },
            /*System.Globalization.Calendar.VerifyWritable end.*/

            /*System.Globalization.Calendar.SetReadOnlyState start.*/
            SetReadOnlyState: function (readOnly) {
                this._isReadOnly = readOnly;
            },
            /*System.Globalization.Calendar.SetReadOnlyState end.*/

            /*System.Globalization.Calendar.Add start.*/
            Add: function (time, value, scale) {
                var tempMillis = (value * scale + (value >= 0 ? 0.5 : -0.5));
                if (!((tempMillis > -315537897600000.0) && (tempMillis < 315537897600000.0))) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("value", "Value to add was out of range.");
                }

                var millis = Bridge.Int.clip64(tempMillis);
                var ticks = System.DateTime.getTicks(time).add(millis.mul(System.Globalization.Calendar.TicksPerMillisecond));
                System.Globalization.Calendar.CheckAddResult(ticks, this.MinSupportedDateTime, this.MaxSupportedDateTime);
                return (System.DateTime.create$2(ticks));
            },
            /*System.Globalization.Calendar.Add end.*/

            /*System.Globalization.Calendar.AddMilliseconds start.*/
            AddMilliseconds: function (time, milliseconds) {
                return (this.Add(time, milliseconds, 1));
            },
            /*System.Globalization.Calendar.AddMilliseconds end.*/

            /*System.Globalization.Calendar.AddDays start.*/
            AddDays: function (time, days) {
                return (this.Add(time, days, System.Globalization.Calendar.MillisPerDay));
            },
            /*System.Globalization.Calendar.AddDays end.*/

            /*System.Globalization.Calendar.AddHours start.*/
            AddHours: function (time, hours) {
                return (this.Add(time, hours, System.Globalization.Calendar.MillisPerHour));
            },
            /*System.Globalization.Calendar.AddHours end.*/

            /*System.Globalization.Calendar.AddMinutes start.*/
            AddMinutes: function (time, minutes) {
                return (this.Add(time, minutes, System.Globalization.Calendar.MillisPerMinute));
            },
            /*System.Globalization.Calendar.AddMinutes end.*/

            /*System.Globalization.Calendar.AddSeconds start.*/
            AddSeconds: function (time, seconds) {
                return this.Add(time, seconds, System.Globalization.Calendar.MillisPerSecond);
            },
            /*System.Globalization.Calendar.AddSeconds end.*/

            /*System.Globalization.Calendar.AddWeeks start.*/
            AddWeeks: function (time, weeks) {
                return (this.AddDays(time, Bridge.Int.mul(weeks, 7)));
            },
            /*System.Globalization.Calendar.AddWeeks end.*/

            /*System.Globalization.Calendar.GetDaysInMonth start.*/
            GetDaysInMonth: function (year, month) {
                return (this.GetDaysInMonth$1(year, month, System.Globalization.Calendar.CurrentEra));
            },
            /*System.Globalization.Calendar.GetDaysInMonth end.*/

            /*System.Globalization.Calendar.GetDaysInYear start.*/
            GetDaysInYear: function (year) {
                return (this.GetDaysInYear$1(year, System.Globalization.Calendar.CurrentEra));
            },
            /*System.Globalization.Calendar.GetDaysInYear end.*/

            /*System.Globalization.Calendar.GetHour start.*/
            GetHour: function (time) {
                return (System.Int64.clip32((System.DateTime.getTicks(time).div(System.Globalization.Calendar.TicksPerHour)).mod(System.Int64(24))));
            },
            /*System.Globalization.Calendar.GetHour end.*/

            /*System.Globalization.Calendar.GetMilliseconds start.*/
            GetMilliseconds: function (time) {
                return System.Int64.toNumber((System.DateTime.getTicks(time).div(System.Globalization.Calendar.TicksPerMillisecond)).mod(System.Int64(1000)));
            },
            /*System.Globalization.Calendar.GetMilliseconds end.*/

            /*System.Globalization.Calendar.GetMinute start.*/
            GetMinute: function (time) {
                return (System.Int64.clip32((System.DateTime.getTicks(time).div(System.Globalization.Calendar.TicksPerMinute)).mod(System.Int64(60))));
            },
            /*System.Globalization.Calendar.GetMinute end.*/

            /*System.Globalization.Calendar.GetMonthsInYear start.*/
            GetMonthsInYear: function (year) {
                return (this.GetMonthsInYear$1(year, System.Globalization.Calendar.CurrentEra));
            },
            /*System.Globalization.Calendar.GetMonthsInYear end.*/

            /*System.Globalization.Calendar.GetSecond start.*/
            GetSecond: function (time) {
                return (System.Int64.clip32((System.DateTime.getTicks(time).div(System.Globalization.Calendar.TicksPerSecond)).mod(System.Int64(60))));
            },
            /*System.Globalization.Calendar.GetSecond end.*/

            /*System.Globalization.Calendar.GetFirstDayWeekOfYear start.*/
            GetFirstDayWeekOfYear: function (time, firstDayOfWeek) {
                var dayOfYear = (this.GetDayOfYear(time) - 1) | 0;
                var dayForJan1 = (this.GetDayOfWeek(time) - (dayOfYear % 7)) | 0;
                var offset = (((((dayForJan1 - firstDayOfWeek) | 0) + 14) | 0)) % 7;
                System.Diagnostics.Debug.Assert$1(offset >= 0, "Calendar.GetFirstDayWeekOfYear(): offset >= 0");
                return (((((Bridge.Int.div((((dayOfYear + offset) | 0)), 7)) | 0) + 1) | 0));
            },
            /*System.Globalization.Calendar.GetFirstDayWeekOfYear end.*/

            /*System.Globalization.Calendar.GetWeekOfYearFullDays start.*/
            GetWeekOfYearFullDays: function (time, firstDayOfWeek, fullDays) {
                var dayForJan1;
                var offset;
                var day;

                var dayOfYear = (this.GetDayOfYear(time) - 1) | 0;



                dayForJan1 = (this.GetDayOfWeek(time) - (dayOfYear % 7)) | 0;

                offset = (((((firstDayOfWeek - dayForJan1) | 0) + 14) | 0)) % 7;
                if (offset !== 0 && offset >= fullDays) {
                    offset = (offset - 7) | 0;
                }
                day = (dayOfYear - offset) | 0;
                if (day >= 0) {
                    return (((((Bridge.Int.div(day, 7)) | 0) + 1) | 0));
                }
                if (System.DateTime.lte(time, System.DateTime.addDays(this.MinSupportedDateTime, dayOfYear))) {
                    return this.GetWeekOfYearOfMinSupportedDateTime(firstDayOfWeek, fullDays);
                }
                return (this.GetWeekOfYearFullDays(System.DateTime.addDays(time, ((-(((dayOfYear + 1) | 0))) | 0)), firstDayOfWeek, fullDays));
            },
            /*System.Globalization.Calendar.GetWeekOfYearFullDays end.*/

            /*System.Globalization.Calendar.GetWeekOfYearOfMinSupportedDateTime start.*/
            GetWeekOfYearOfMinSupportedDateTime: function (firstDayOfWeek, minimumDaysInFirstWeek) {
                var dayOfYear = (this.GetDayOfYear(this.MinSupportedDateTime) - 1) | 0;
                var dayOfWeekOfFirstOfYear = (this.GetDayOfWeek(this.MinSupportedDateTime) - dayOfYear % 7) | 0;

                var offset = (((((firstDayOfWeek + 7) | 0) - dayOfWeekOfFirstOfYear) | 0)) % 7;
                if (offset === 0 || offset >= minimumDaysInFirstWeek) {
                    return 1;
                }

                var daysInYearBeforeMinSupportedYear = (this.DaysInYearBeforeMinSupportedYear - 1) | 0;
                var dayOfWeekOfFirstOfPreviousYear = (((dayOfWeekOfFirstOfYear - 1) | 0) - (daysInYearBeforeMinSupportedYear % 7)) | 0;

                var daysInInitialPartialWeek = (((((firstDayOfWeek - dayOfWeekOfFirstOfPreviousYear) | 0) + 14) | 0)) % 7;
                var day = (daysInYearBeforeMinSupportedYear - daysInInitialPartialWeek) | 0;
                if (daysInInitialPartialWeek >= minimumDaysInFirstWeek) {
                    day = (day + 7) | 0;
                }

                return (((((Bridge.Int.div(day, 7)) | 0) + 1) | 0));
            },
            /*System.Globalization.Calendar.GetWeekOfYearOfMinSupportedDateTime end.*/

            /*System.Globalization.Calendar.GetWeekOfYear start.*/
            GetWeekOfYear: function (time, rule, firstDayOfWeek) {
                if (firstDayOfWeek < 0 || firstDayOfWeek > 6) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("firstDayOfWeek", System.SR.Format$1("Valid values are between {0} and {1}, inclusive.", Bridge.box(System.DayOfWeek.Sunday, System.DayOfWeek, System.Enum.toStringFn(System.DayOfWeek)), Bridge.box(System.DayOfWeek.Saturday, System.DayOfWeek, System.Enum.toStringFn(System.DayOfWeek))));
                }
                switch (rule) {
                    case 0: 
                        return (this.GetFirstDayWeekOfYear(time, firstDayOfWeek));
                    case 1: 
                        return (this.GetWeekOfYearFullDays(time, firstDayOfWeek, 7));
                    case 2: 
                        return (this.GetWeekOfYearFullDays(time, firstDayOfWeek, 4));
                }
                throw new System.ArgumentOutOfRangeException.$ctor4("rule", System.SR.Format$1("Valid values are between {0} and {1}, inclusive.", Bridge.box(0, System.Globalization.CalendarWeekRule, System.Enum.toStringFn(System.Globalization.CalendarWeekRule)), Bridge.box(2, System.Globalization.CalendarWeekRule, System.Enum.toStringFn(System.Globalization.CalendarWeekRule))));
            },
            /*System.Globalization.Calendar.GetWeekOfYear end.*/

            /*System.Globalization.Calendar.IsLeapDay start.*/
            IsLeapDay: function (year, month, day) {
                return (this.IsLeapDay$1(year, month, day, System.Globalization.Calendar.CurrentEra));
            },
            /*System.Globalization.Calendar.IsLeapDay end.*/

            /*System.Globalization.Calendar.IsLeapMonth start.*/
            IsLeapMonth: function (year, month) {
                return (this.IsLeapMonth$1(year, month, System.Globalization.Calendar.CurrentEra));
            },
            /*System.Globalization.Calendar.IsLeapMonth end.*/

            /*System.Globalization.Calendar.GetLeapMonth start.*/
            GetLeapMonth: function (year) {
                return (this.GetLeapMonth$1(year, System.Globalization.Calendar.CurrentEra));
            },
            /*System.Globalization.Calendar.GetLeapMonth end.*/

            /*System.Globalization.Calendar.GetLeapMonth$1 start.*/
            GetLeapMonth$1: function (year, era) {
                if (!this.IsLeapYear$1(year, era)) {
                    return 0;
                }

                var monthsCount = this.GetMonthsInYear$1(year, era);
                for (var month = 1; month <= monthsCount; month = (month + 1) | 0) {
                    if (this.IsLeapMonth$1(year, month, era)) {
                        return month;
                    }
                }

                return 0;
            },
            /*System.Globalization.Calendar.GetLeapMonth$1 end.*/

            /*System.Globalization.Calendar.IsLeapYear start.*/
            IsLeapYear: function (year) {
                return (this.IsLeapYear$1(year, System.Globalization.Calendar.CurrentEra));
            },
            /*System.Globalization.Calendar.IsLeapYear end.*/

            /*System.Globalization.Calendar.ToDateTime start.*/
            ToDateTime: function (year, month, day, hour, minute, second, millisecond) {
                return (this.ToDateTime$1(year, month, day, hour, minute, second, millisecond, System.Globalization.Calendar.CurrentEra));
            },
            /*System.Globalization.Calendar.ToDateTime end.*/

            /*System.Globalization.Calendar.TryToDateTime start.*/
            TryToDateTime: function (year, month, day, hour, minute, second, millisecond, era, result) {
                result.v = System.DateTime.getMinValue();
                try {
                    result.v = this.ToDateTime$1(year, month, day, hour, minute, second, millisecond, era);
                    return true;
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.ArgumentException)) {
                        return false;
                    } else {
                        throw $e1;
                    }
                }
            },
            /*System.Globalization.Calendar.TryToDateTime end.*/

            /*System.Globalization.Calendar.IsValidYear start.*/
            IsValidYear: function (year, era) {
                return (year >= this.GetYear(this.MinSupportedDateTime) && year <= this.GetYear(this.MaxSupportedDateTime));
            },
            /*System.Globalization.Calendar.IsValidYear end.*/

            /*System.Globalization.Calendar.IsValidMonth start.*/
            IsValidMonth: function (year, month, era) {
                return (this.IsValidYear(year, era) && month >= 1 && month <= this.GetMonthsInYear$1(year, era));
            },
            /*System.Globalization.Calendar.IsValidMonth end.*/

            /*System.Globalization.Calendar.IsValidDay start.*/
            IsValidDay: function (year, month, day, era) {
                return (this.IsValidMonth(year, month, era) && day >= 1 && day <= this.GetDaysInMonth$1(year, month, era));
            },
            /*System.Globalization.Calendar.IsValidDay end.*/

            /*System.Globalization.Calendar.ToFourDigitYear start.*/
            ToFourDigitYear: function (year) {
                if (year < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("year", "Non-negative number required.");
                }
                if (year < 100) {
                    return (((Bridge.Int.mul((((((Bridge.Int.div(this.TwoDigitYearMax, 100)) | 0) - (year > this.TwoDigitYearMax % 100 ? 1 : 0)) | 0)), 100) + year) | 0));
                }
                return (year);
            },
            /*System.Globalization.Calendar.ToFourDigitYear end.*/


        },
        overloads: {
            "Clone()": "clone",
            "GetLeapMonth(int, int)": "GetLeapMonth$1"
        }
    });
    /*System.Globalization.Calendar end.*/
