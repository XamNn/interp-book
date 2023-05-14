# Variables
A variable has a name and holds a value. When a variable is referenced but does not exist [Void](./void.md) is returned.

Variables are defined with the `var` keyword.
```cs
var variable = "I'm the Value!";
```

After defining variables can be reassigned. Variables themselves do not have types designated for them.
```cs
variable = true;
```

Variables can be passed into [functions](./function.md). The value is copied.
```cs
Function(variable);
```

Functions can also take the reference of a variable, this way, the value is not copied.
```cs
Function(ref variable);
```

## In-place operations
You can short-hand operators when assigning.
```cs
variable += 1;
# Is the same as
variable = variable + 1;
```