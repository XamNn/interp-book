# Null
Null (keyword `null`) means that the variable exists, but has no value.

# As a Type

A common use for Null is in an [Or type](./type.md). For example if you optionally need a [String](./string.md), you can use the `or` and `Null` type.

```cs
fun TakesOptionalString(str String or Null) {
    Print(str);
}

TakesOptionalString("Hello");
TakesOptionalString(null);
```

This will print either the string or `<null>`

# In a List

Unlike [Void](./void.md), [Lists](./list.md) can contain Null.
