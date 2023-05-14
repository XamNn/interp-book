# Print Function
Print is a versatile function.
Print a value to standard out followed by a newline.
```cs
Print(1);
```

Print also can take a second argument, an object that contains options.
```cs
Print(1, {
    newline=false, # Optional, defaults to true
    stream="stderr" # Optional, "stdout" or "stderr", defaults to "stdout",
});
```

Print can be used to write to a file:
```cs
Print("test", {
    file="test.txt",
    append=true      # Optional, defaults to false,
});
```
