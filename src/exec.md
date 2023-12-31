# Exec

With the Exec function you can execute an executable with arguments, and get the standard output as a [String](./string.md).
```cs
Print(Exec("echo", "Hello, world!");)
# output: Hello, world!
```

You can disable capturing with the capture argument
```cs
Exec("echo", "Hello, world!", capture=false)
# output: Hello, world!
```
