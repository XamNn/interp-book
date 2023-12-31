# Functions
In Interp, functions are first-class-citizens.
Functions are defined with the `fun` keyword.
Parameters can be defined with the parameter name followed by a [Type](./type.md).
The return type is specified after the parameter list. If no return type is specified, [Void](./void.md) is assumed. Values are returned with the `ret` keyword.
```cs
fun MyFunction(param1 Int, param2 String) Bool {
    ret true;
}
```

This is a function returning Void.
```cs
fun PrintHello() {
    Print("Hello, world!");
}
```

Functions can be assigned to [variables](./variable.md).
```cs
var my_var = PrintHello;
my_var();
# Output: Hello, world!
```

Functions can take variables by reference.
```cs
var take_ref = 1;
fun AddOne(arg Int) {
    var += 1;
}
AddOne(ref take_ref);
Print(take_ref);
# Output: 2
```

## Default and named parameters

Default values for paramters are allowed. Parameters can also be referred with their name.
```cs
fun Function(int foo, string bar = "default_string", baz Bool = false) {
    ...
}

Function(1, baz=true) # allowed
```

## Lambda Functions
Lambdas are a shorthand for defining functions.
```cs
fun ExecLambda(lambda Any) {
    lambda(1, 2);
}

ExecLambda(|a, b| => Print(a + b));
# Output: 3
```

## As a type
To match all functions, simply use `Function`.

If the function has a specific return type, use `Function<ReturnType>`.
The arguments can be specified before the return type. If you want a function that takes an [Int](./int.md) and returns an Int, you use `Function<Int, Int>`.
```cs
fun TakesFunction(func Function<Int, Int, Int>) {
    Print(func(1, 2));
}

fun Sum(x Int, y Int) Int {
    ret x + y;
}

TakesFunction(Sum);
```