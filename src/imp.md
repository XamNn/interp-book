# Importing Code
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

# Importing Libraries
To import libraries, such as [oak](./oak.md) with [packi](./packi.md), use the `as` keyword.
```cs
imp "@packi/lib.it"
packi::Require("oak", "0.0.1");
imp "@oak-0.0.1/lib.it" as oak;
```