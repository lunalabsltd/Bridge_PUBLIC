    /*System.ThrowHelper start.*/
    Bridge.define("System.ThrowHelper", {
        statics: {
            methods: {
                /*System.ThrowHelper.ThrowArrayTypeMismatchException:static start.*/
                ThrowArrayTypeMismatchException: function () {
                    throw new System.ArrayTypeMismatchException.ctor();
                },
                /*System.ThrowHelper.ThrowArrayTypeMismatchException:static end.*/

                /*System.ThrowHelper.ThrowInvalidTypeWithPointersNotSupported:static start.*/
                ThrowInvalidTypeWithPointersNotSupported: function (targetType) {
                    throw new System.ArgumentException.$ctor1(System.SR.Format("Cannot use type '{0}'. Only value types without pointers or references are supported.", targetType));
                },
                /*System.ThrowHelper.ThrowInvalidTypeWithPointersNotSupported:static end.*/

                /*System.ThrowHelper.ThrowIndexOutOfRangeException:static start.*/
                ThrowIndexOutOfRangeException: function () {
                    throw new System.IndexOutOfRangeException.ctor();
                },
                /*System.ThrowHelper.ThrowIndexOutOfRangeException:static end.*/

                /*System.ThrowHelper.ThrowArgumentOutOfRangeException:static start.*/
                ThrowArgumentOutOfRangeException: function () {
                    throw new System.ArgumentOutOfRangeException.ctor();
                },
                /*System.ThrowHelper.ThrowArgumentOutOfRangeException:static end.*/

                /*System.ThrowHelper.ThrowArgumentOutOfRangeException$1:static start.*/
                ThrowArgumentOutOfRangeException$1: function (argument) {
                    throw new System.ArgumentOutOfRangeException.$ctor1(System.ThrowHelper.GetArgumentName(argument));
                },
                /*System.ThrowHelper.ThrowArgumentOutOfRangeException$1:static end.*/

                /*System.ThrowHelper.ThrowArgumentOutOfRangeException$2:static start.*/
                ThrowArgumentOutOfRangeException$2: function (argument, resource) {
                    throw System.ThrowHelper.GetArgumentOutOfRangeException(argument, resource);
                },
                /*System.ThrowHelper.ThrowArgumentOutOfRangeException$2:static end.*/

                /*System.ThrowHelper.ThrowArgumentOutOfRangeException$3:static start.*/
                ThrowArgumentOutOfRangeException$3: function (argument, paramNumber, resource) {
                    throw System.ThrowHelper.GetArgumentOutOfRangeException$1(argument, paramNumber, resource);
                },
                /*System.ThrowHelper.ThrowArgumentOutOfRangeException$3:static end.*/

                /*System.ThrowHelper.ThrowArgumentException_DestinationTooShort:static start.*/
                ThrowArgumentException_DestinationTooShort: function () {
                    throw new System.ArgumentException.$ctor1("Destination is too short.");
                },
                /*System.ThrowHelper.ThrowArgumentException_DestinationTooShort:static end.*/

                /*System.ThrowHelper.ThrowArgumentException_OverlapAlignmentMismatch:static start.*/
                ThrowArgumentException_OverlapAlignmentMismatch: function () {
                    throw new System.ArgumentException.$ctor1("Overlapping spans have mismatching alignment.");
                },
                /*System.ThrowHelper.ThrowArgumentException_OverlapAlignmentMismatch:static end.*/

                /*System.ThrowHelper.ThrowArgumentOutOfRange_IndexException:static start.*/
                ThrowArgumentOutOfRange_IndexException: function () {
                    throw System.ThrowHelper.GetArgumentOutOfRangeException(System.ExceptionArgument.index, System.ExceptionResource.ArgumentOutOfRange_Index);
                },
                /*System.ThrowHelper.ThrowArgumentOutOfRange_IndexException:static end.*/

                /*System.ThrowHelper.ThrowIndexArgumentOutOfRange_NeedNonNegNumException:static start.*/
                ThrowIndexArgumentOutOfRange_NeedNonNegNumException: function () {
                    throw System.ThrowHelper.GetArgumentOutOfRangeException(System.ExceptionArgument.index, System.ExceptionResource.ArgumentOutOfRange_NeedNonNegNum);
                },
                /*System.ThrowHelper.ThrowIndexArgumentOutOfRange_NeedNonNegNumException:static end.*/

                /*System.ThrowHelper.ThrowLengthArgumentOutOfRange_ArgumentOutOfRange_NeedNonNegNum:static start.*/
                ThrowLengthArgumentOutOfRange_ArgumentOutOfRange_NeedNonNegNum: function () {
                    throw System.ThrowHelper.GetArgumentOutOfRangeException(System.ExceptionArgument.$length, System.ExceptionResource.ArgumentOutOfRange_NeedNonNegNum);
                },
                /*System.ThrowHelper.ThrowLengthArgumentOutOfRange_ArgumentOutOfRange_NeedNonNegNum:static end.*/

                /*System.ThrowHelper.ThrowStartIndexArgumentOutOfRange_ArgumentOutOfRange_Index:static start.*/
                ThrowStartIndexArgumentOutOfRange_ArgumentOutOfRange_Index: function () {
                    throw System.ThrowHelper.GetArgumentOutOfRangeException(System.ExceptionArgument.startIndex, System.ExceptionResource.ArgumentOutOfRange_Index);
                },
                /*System.ThrowHelper.ThrowStartIndexArgumentOutOfRange_ArgumentOutOfRange_Index:static end.*/

                /*System.ThrowHelper.ThrowCountArgumentOutOfRange_ArgumentOutOfRange_Count:static start.*/
                ThrowCountArgumentOutOfRange_ArgumentOutOfRange_Count: function () {
                    throw System.ThrowHelper.GetArgumentOutOfRangeException(System.ExceptionArgument.count, System.ExceptionResource.ArgumentOutOfRange_Count);
                },
                /*System.ThrowHelper.ThrowCountArgumentOutOfRange_ArgumentOutOfRange_Count:static end.*/

                /*System.ThrowHelper.ThrowWrongKeyTypeArgumentException:static start.*/
                ThrowWrongKeyTypeArgumentException: function (T, key, targetType) {
                    throw System.ThrowHelper.GetWrongKeyTypeArgumentException(key, targetType);
                },
                /*System.ThrowHelper.ThrowWrongKeyTypeArgumentException:static end.*/

                /*System.ThrowHelper.ThrowWrongValueTypeArgumentException:static start.*/
                ThrowWrongValueTypeArgumentException: function (T, value, targetType) {
                    throw System.ThrowHelper.GetWrongValueTypeArgumentException(value, targetType);
                },
                /*System.ThrowHelper.ThrowWrongValueTypeArgumentException:static end.*/

                /*System.ThrowHelper.GetAddingDuplicateWithKeyArgumentException:static start.*/
                GetAddingDuplicateWithKeyArgumentException: function (key) {
                    return new System.ArgumentException.$ctor1(System.SR.Format("An item with the same key has already been added. Key: {0}", key));
                },
                /*System.ThrowHelper.GetAddingDuplicateWithKeyArgumentException:static end.*/

                /*System.ThrowHelper.ThrowAddingDuplicateWithKeyArgumentException:static start.*/
                ThrowAddingDuplicateWithKeyArgumentException: function (T, key) {
                    throw System.ThrowHelper.GetAddingDuplicateWithKeyArgumentException(key);
                },
                /*System.ThrowHelper.ThrowAddingDuplicateWithKeyArgumentException:static end.*/

                /*System.ThrowHelper.ThrowKeyNotFoundException:static start.*/
                ThrowKeyNotFoundException: function (T, key) {
                    throw System.ThrowHelper.GetKeyNotFoundException(key);
                },
                /*System.ThrowHelper.ThrowKeyNotFoundException:static end.*/

                /*System.ThrowHelper.ThrowArgumentException:static start.*/
                ThrowArgumentException: function (resource) {
                    throw System.ThrowHelper.GetArgumentException(resource);
                },
                /*System.ThrowHelper.ThrowArgumentException:static end.*/

                /*System.ThrowHelper.ThrowArgumentException$1:static start.*/
                ThrowArgumentException$1: function (resource, argument) {
                    throw System.ThrowHelper.GetArgumentException$1(resource, argument);
                },
                /*System.ThrowHelper.ThrowArgumentException$1:static end.*/

                /*System.ThrowHelper.GetArgumentNullException:static start.*/
                GetArgumentNullException: function (argument) {
                    return new System.ArgumentNullException.$ctor1(System.ThrowHelper.GetArgumentName(argument));
                },
                /*System.ThrowHelper.GetArgumentNullException:static end.*/

                /*System.ThrowHelper.ThrowArgumentNullException:static start.*/
                ThrowArgumentNullException: function (argument) {
                    throw System.ThrowHelper.GetArgumentNullException(argument);
                },
                /*System.ThrowHelper.ThrowArgumentNullException:static end.*/

                /*System.ThrowHelper.ThrowArgumentNullException$2:static start.*/
                ThrowArgumentNullException$2: function (resource) {
                    throw new System.ArgumentNullException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                /*System.ThrowHelper.ThrowArgumentNullException$2:static end.*/

                /*System.ThrowHelper.ThrowArgumentNullException$1:static start.*/
                ThrowArgumentNullException$1: function (argument, resource) {
                    throw new System.ArgumentNullException.$ctor3(System.ThrowHelper.GetArgumentName(argument), System.ThrowHelper.GetResourceString(resource));
                },
                /*System.ThrowHelper.ThrowArgumentNullException$1:static end.*/

                /*System.ThrowHelper.ThrowInvalidOperationException:static start.*/
                ThrowInvalidOperationException: function (resource) {
                    throw System.ThrowHelper.GetInvalidOperationException(resource);
                },
                /*System.ThrowHelper.ThrowInvalidOperationException:static end.*/

                /*System.ThrowHelper.ThrowInvalidOperationException$1:static start.*/
                ThrowInvalidOperationException$1: function (resource, e) {
                    throw new System.InvalidOperationException.$ctor2(System.ThrowHelper.GetResourceString(resource), e);
                },
                /*System.ThrowHelper.ThrowInvalidOperationException$1:static end.*/

                /*System.ThrowHelper.ThrowInvalidOperationException_OutstandingReferences:static start.*/
                ThrowInvalidOperationException_OutstandingReferences: function () {
                    System.ThrowHelper.ThrowInvalidOperationException(System.ExceptionResource.Memory_OutstandingReferences);
                },
                /*System.ThrowHelper.ThrowInvalidOperationException_OutstandingReferences:static end.*/

                /*System.ThrowHelper.ThrowSerializationException:static start.*/
                ThrowSerializationException: function (resource) {
                    throw new System.Runtime.Serialization.SerializationException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                /*System.ThrowHelper.ThrowSerializationException:static end.*/

                /*System.ThrowHelper.ThrowSecurityException:static start.*/
                ThrowSecurityException: function (resource) {
                    throw new System.Security.SecurityException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                /*System.ThrowHelper.ThrowSecurityException:static end.*/

                /*System.ThrowHelper.ThrowRankException:static start.*/
                ThrowRankException: function (resource) {
                    throw new System.RankException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                /*System.ThrowHelper.ThrowRankException:static end.*/

                /*System.ThrowHelper.ThrowNotSupportedException$1:static start.*/
                ThrowNotSupportedException$1: function (resource) {
                    throw new System.NotSupportedException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                /*System.ThrowHelper.ThrowNotSupportedException$1:static end.*/

                /*System.ThrowHelper.ThrowNotSupportedException:static start.*/
                ThrowNotSupportedException: function () {
                    throw new System.NotSupportedException.ctor();
                },
                /*System.ThrowHelper.ThrowNotSupportedException:static end.*/

                /*System.ThrowHelper.ThrowUnauthorizedAccessException:static start.*/
                ThrowUnauthorizedAccessException: function (resource) {
                    throw new System.UnauthorizedAccessException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                /*System.ThrowHelper.ThrowUnauthorizedAccessException:static end.*/

                /*System.ThrowHelper.ThrowObjectDisposedException$1:static start.*/
                ThrowObjectDisposedException$1: function (objectName, resource) {
                    throw new System.ObjectDisposedException.$ctor3(objectName, System.ThrowHelper.GetResourceString(resource));
                },
                /*System.ThrowHelper.ThrowObjectDisposedException$1:static end.*/

                /*System.ThrowHelper.ThrowObjectDisposedException:static start.*/
                ThrowObjectDisposedException: function (resource) {
                    throw new System.ObjectDisposedException.$ctor3(null, System.ThrowHelper.GetResourceString(resource));
                },
                /*System.ThrowHelper.ThrowObjectDisposedException:static end.*/

                /*System.ThrowHelper.ThrowObjectDisposedException_MemoryDisposed:static start.*/
                ThrowObjectDisposedException_MemoryDisposed: function () {
                    throw new System.ObjectDisposedException.$ctor3("OwnedMemory<T>", System.ThrowHelper.GetResourceString(System.ExceptionResource.MemoryDisposed));
                },
                /*System.ThrowHelper.ThrowObjectDisposedException_MemoryDisposed:static end.*/

                /*System.ThrowHelper.ThrowAggregateException:static start.*/
                ThrowAggregateException: function (exceptions) {
                    throw new System.AggregateException(null, exceptions);
                },
                /*System.ThrowHelper.ThrowAggregateException:static end.*/

                /*System.ThrowHelper.ThrowOutOfMemoryException:static start.*/
                ThrowOutOfMemoryException: function () {
                    throw new System.OutOfMemoryException.ctor();
                },
                /*System.ThrowHelper.ThrowOutOfMemoryException:static end.*/

                /*System.ThrowHelper.ThrowArgumentException_Argument_InvalidArrayType:static start.*/
                ThrowArgumentException_Argument_InvalidArrayType: function () {
                    throw System.ThrowHelper.GetArgumentException(System.ExceptionResource.Argument_InvalidArrayType);
                },
                /*System.ThrowHelper.ThrowArgumentException_Argument_InvalidArrayType:static end.*/

                /*System.ThrowHelper.ThrowInvalidOperationException_InvalidOperation_EnumNotStarted:static start.*/
                ThrowInvalidOperationException_InvalidOperation_EnumNotStarted: function () {
                    throw System.ThrowHelper.GetInvalidOperationException(System.ExceptionResource.InvalidOperation_EnumNotStarted);
                },
                /*System.ThrowHelper.ThrowInvalidOperationException_InvalidOperation_EnumNotStarted:static end.*/

                /*System.ThrowHelper.ThrowInvalidOperationException_InvalidOperation_EnumEnded:static start.*/
                ThrowInvalidOperationException_InvalidOperation_EnumEnded: function () {
                    throw System.ThrowHelper.GetInvalidOperationException(System.ExceptionResource.InvalidOperation_EnumEnded);
                },
                /*System.ThrowHelper.ThrowInvalidOperationException_InvalidOperation_EnumEnded:static end.*/

                /*System.ThrowHelper.ThrowInvalidOperationException_EnumCurrent:static start.*/
                ThrowInvalidOperationException_EnumCurrent: function (index) {
                    throw System.ThrowHelper.GetInvalidOperationException_EnumCurrent(index);
                },
                /*System.ThrowHelper.ThrowInvalidOperationException_EnumCurrent:static end.*/

                /*System.ThrowHelper.ThrowInvalidOperationException_InvalidOperation_EnumFailedVersion:static start.*/
                ThrowInvalidOperationException_InvalidOperation_EnumFailedVersion: function () {
                    throw System.ThrowHelper.GetInvalidOperationException(System.ExceptionResource.InvalidOperation_EnumFailedVersion);
                },
                /*System.ThrowHelper.ThrowInvalidOperationException_InvalidOperation_EnumFailedVersion:static end.*/

                /*System.ThrowHelper.ThrowInvalidOperationException_InvalidOperation_EnumOpCantHappen:static start.*/
                ThrowInvalidOperationException_InvalidOperation_EnumOpCantHappen: function () {
                    throw System.ThrowHelper.GetInvalidOperationException(System.ExceptionResource.InvalidOperation_EnumOpCantHappen);
                },
                /*System.ThrowHelper.ThrowInvalidOperationException_InvalidOperation_EnumOpCantHappen:static end.*/

                /*System.ThrowHelper.ThrowInvalidOperationException_InvalidOperation_NoValue:static start.*/
                ThrowInvalidOperationException_InvalidOperation_NoValue: function () {
                    throw System.ThrowHelper.GetInvalidOperationException(System.ExceptionResource.InvalidOperation_NoValue);
                },
                /*System.ThrowHelper.ThrowInvalidOperationException_InvalidOperation_NoValue:static end.*/

                /*System.ThrowHelper.ThrowArraySegmentCtorValidationFailedExceptions:static start.*/
                ThrowArraySegmentCtorValidationFailedExceptions: function (array, offset, count) {
                    throw System.ThrowHelper.GetArraySegmentCtorValidationFailedException(array, offset, count);
                },
                /*System.ThrowHelper.ThrowArraySegmentCtorValidationFailedExceptions:static end.*/

                /*System.ThrowHelper.GetArraySegmentCtorValidationFailedException:static start.*/
                GetArraySegmentCtorValidationFailedException: function (array, offset, count) {
                    if (array == null) {
                        return System.ThrowHelper.GetArgumentNullException(System.ExceptionArgument.array);
                    }
                    if (offset < 0) {
                        return System.ThrowHelper.GetArgumentOutOfRangeException(System.ExceptionArgument.offset, System.ExceptionResource.ArgumentOutOfRange_NeedNonNegNum);
                    }
                    if (count < 0) {
                        return System.ThrowHelper.GetArgumentOutOfRangeException(System.ExceptionArgument.count, System.ExceptionResource.ArgumentOutOfRange_NeedNonNegNum);
                    }

                    System.Diagnostics.Debug.Assert(((array.length - offset) | 0) < count);
                    return System.ThrowHelper.GetArgumentException(System.ExceptionResource.Argument_InvalidOffLen);
                },
                /*System.ThrowHelper.GetArraySegmentCtorValidationFailedException:static end.*/

                /*System.ThrowHelper.GetArgumentException:static start.*/
                GetArgumentException: function (resource) {
                    return new System.ArgumentException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                /*System.ThrowHelper.GetArgumentException:static end.*/

                /*System.ThrowHelper.GetArgumentException$1:static start.*/
                GetArgumentException$1: function (resource, argument) {
                    return new System.ArgumentException.$ctor3(System.ThrowHelper.GetResourceString(resource), System.ThrowHelper.GetArgumentName(argument));
                },
                /*System.ThrowHelper.GetArgumentException$1:static end.*/

                /*System.ThrowHelper.GetInvalidOperationException:static start.*/
                GetInvalidOperationException: function (resource) {
                    return new System.InvalidOperationException.$ctor1(System.ThrowHelper.GetResourceString(resource));
                },
                /*System.ThrowHelper.GetInvalidOperationException:static end.*/

                /*System.ThrowHelper.GetWrongKeyTypeArgumentException:static start.*/
                GetWrongKeyTypeArgumentException: function (key, targetType) {
                    return new System.ArgumentException.$ctor3(System.SR.Format$1("The value \"{0}\" is not of type \"{1}\" and cannot be used in this generic collection.", key, targetType), "key");
                },
                /*System.ThrowHelper.GetWrongKeyTypeArgumentException:static end.*/

                /*System.ThrowHelper.GetWrongValueTypeArgumentException:static start.*/
                GetWrongValueTypeArgumentException: function (value, targetType) {
                    return new System.ArgumentException.$ctor3(System.SR.Format$1("The value \"{0}\" is not of type \"{1}\" and cannot be used in this generic collection.", value, targetType), "value");
                },
                /*System.ThrowHelper.GetWrongValueTypeArgumentException:static end.*/

                /*System.ThrowHelper.GetKeyNotFoundException:static start.*/
                GetKeyNotFoundException: function (key) {
                    return new System.Collections.Generic.KeyNotFoundException.$ctor1(System.SR.Format("The given key '{0}' was not present in the dictionary.", Bridge.toString(key)));
                },
                /*System.ThrowHelper.GetKeyNotFoundException:static end.*/

                /*System.ThrowHelper.GetArgumentOutOfRangeException:static start.*/
                GetArgumentOutOfRangeException: function (argument, resource) {
                    return new System.ArgumentOutOfRangeException.$ctor4(System.ThrowHelper.GetArgumentName(argument), System.ThrowHelper.GetResourceString(resource));
                },
                /*System.ThrowHelper.GetArgumentOutOfRangeException:static end.*/

                /*System.ThrowHelper.GetArgumentOutOfRangeException$1:static start.*/
                GetArgumentOutOfRangeException$1: function (argument, paramNumber, resource) {
                    return new System.ArgumentOutOfRangeException.$ctor4((System.ThrowHelper.GetArgumentName(argument) || "") + "[" + (Bridge.toString(paramNumber) || "") + "]", System.ThrowHelper.GetResourceString(resource));
                },
                /*System.ThrowHelper.GetArgumentOutOfRangeException$1:static end.*/

                /*System.ThrowHelper.GetInvalidOperationException_EnumCurrent:static start.*/
                GetInvalidOperationException_EnumCurrent: function (index) {
                    return System.ThrowHelper.GetInvalidOperationException(index < 0 ? System.ExceptionResource.InvalidOperation_EnumNotStarted : System.ExceptionResource.InvalidOperation_EnumEnded);
                },
                /*System.ThrowHelper.GetInvalidOperationException_EnumCurrent:static end.*/

                /*System.ThrowHelper.IfNullAndNullsAreIllegalThenThrow:static start.*/
                IfNullAndNullsAreIllegalThenThrow: function (T, value, argName) {
                    if (!(Bridge.getDefaultValue(T) == null) && value == null) {
                        System.ThrowHelper.ThrowArgumentNullException(argName);
                    }
                },
                /*System.ThrowHelper.IfNullAndNullsAreIllegalThenThrow:static end.*/

                /*System.ThrowHelper.GetArgumentName:static start.*/
                GetArgumentName: function (argument) {
                    System.Diagnostics.Debug.Assert$1(System.Enum.isDefined(System.ExceptionArgument, Bridge.box(argument, System.ExceptionArgument, System.Enum.toStringFn(System.ExceptionArgument))), "The enum value is not defined, please check the ExceptionArgument Enum.");

                    return System.Enum.toString(System.ExceptionArgument, argument);
                },
                /*System.ThrowHelper.GetArgumentName:static end.*/

                /*System.ThrowHelper.GetResourceString:static start.*/
                GetResourceString: function (resource) {
                    System.Diagnostics.Debug.Assert$1(System.Enum.isDefined(System.ExceptionResource, Bridge.box(resource, System.ExceptionResource, System.Enum.toStringFn(System.ExceptionResource))), "The enum value is not defined, please check the ExceptionResource Enum.");

                    return System.SR.GetResourceString(System.Enum.toString(System.ExceptionResource, resource));
                },
                /*System.ThrowHelper.GetResourceString:static end.*/

                /*System.ThrowHelper.ThrowNotSupportedExceptionIfNonNumericType:static start.*/
                ThrowNotSupportedExceptionIfNonNumericType: function (T) {
                    if (!Bridge.referenceEquals(T, System.Byte) && !Bridge.referenceEquals(T, System.SByte) && !Bridge.referenceEquals(T, System.Int16) && !Bridge.referenceEquals(T, System.UInt16) && !Bridge.referenceEquals(T, System.Int32) && !Bridge.referenceEquals(T, System.UInt32) && !Bridge.referenceEquals(T, System.Int64) && !Bridge.referenceEquals(T, System.UInt64) && !Bridge.referenceEquals(T, System.Single) && !Bridge.referenceEquals(T, System.Double)) {
                        throw new System.NotSupportedException.$ctor1("Specified type is not supported");
                    }
                },
                /*System.ThrowHelper.ThrowNotSupportedExceptionIfNonNumericType:static end.*/


            }
        }
    });
    /*System.ThrowHelper end.*/
