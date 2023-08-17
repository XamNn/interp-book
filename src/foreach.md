# ForEach

```cs
fun ForEach(function Function<Any, Void>, list List) {
    var i = -1;
    while list[i + 1] != void {
        i += 1;
        function(list[i]);
    }
}

do or item in ForEach([1, 2, 3]) {
    Print(item);
}

# output:
# 1
# 2
# 3
```
> Read more about [Functions](./function.md), [Lists](./list.md), [variables](./variable.md), [While Loops](./while.md), [For Loops](./for.md), or [Print](./Print.md)