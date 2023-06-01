# Import
The `imp` statement can be used to include Interp code.

imp_this.it:
```cs
Print("Hello");
```

main.it:
```cs
imp "imp_this.it"
# output: Hello
```
You can also import a [String](./string.md) variable.
Note: Imports are cached, you can't import the same file twice.