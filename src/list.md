# List
Lists are sequences of values.

```cs
var list = [1, "str", true, [2.3]];
```

## Indexing
Lists can be indexed with [Ints](./int.md), index 0 is the first element.
```cs
list[0]
```

## Concatenation
Lists can be concatenated with the `+` operator.
```cs
[1, 2, 3] + [4, 5, 6] == [1, 2, 3, 4, 5, 6]
```

## Length
List length can be checked with the `Len` function.

```cs
Print(Len([1, 2, 3]));
# output: 3
```

## As a Type
To match all lists, simply use `List` .
To match a list which all values match a type, you can use a generic type argument.
```cs
fun TakesIntList(arg List<Int>) {
    Print(arg)
}
```
