# String

A String is a sequence of characters. They are encoded in UTF-8.

A String literal is defined like so:


```cs
var string = "My String";
```

Strings can be printed with the `Print` function.

```cs
Print("Hello, world!");
```

## Indexing
Strings can be indexed with [Ints](./int.md), index 0 is the first element.
```cs
string[3] # fourth unicode character
```

## Concatenation
You can concatenate Strings with the `+` operator.
```cs
Print("Hello, " + "world!");
```

## Format
Strings can be formatted with the `Format` function.
```cs
Print(Format("{} + {} = {}", 1, 2, 1 + 2));
# Output = 1 + 2 = 3
```

## Interpolation
Another way to format is interpolation.
```cs
Print("1 + 2 = {1 + 2}");
# Output = 1 + 2 = 3
```