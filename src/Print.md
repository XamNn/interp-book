# Print Function
Print is a versatile function.
Print a value to standard out followed by a newline.
```cs
Print(1);
```

Print also can take a few optional arguments.
```cs
Print(
    1,
    newline=false, # Optional, defaults to true
    stream="stderr" # Optional, "stdout" or "stderr", defaults to "stdout",
);
```
