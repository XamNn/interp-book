# Void 

Void (keyword `void`) has two uses.

## Denoting 'nonexistent'
When you reference a [variable](./variable.md) or [field](./record.md) that does not exist, you will get Void.
This will also usually throw an error, except when checking if something is void.

Assuming `variable` does not exist.

The following is valid:
```cs
if variable == void {
    Print("variable does not exists")
}
```

The following throws an error:
```cs
Print(variable);
```
```
<stdin>:1:7:mistaken reference to void. (possible typo)
  |
1 | Print(variable);
  |       ^
```

## As a function return value

Void as a return type means that the [function](./function.md) never returns any value at all.
If a return type is not specified, it defaults to Void

These are equivalent:
```cs
fun PrintHello() {
    Print("Hello");
}
```

```cs
fun PrintHello() Void {
    Print("Hello");
}
```

## Lists

A [list](./list.md) can't have Void as an item.
When a List index returns Void it means the end of the List.

## Any type

Void is the only Value that does not fit in to the [Any type](./type.md).
