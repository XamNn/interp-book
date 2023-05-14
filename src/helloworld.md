# Hello, world!

## Execute a source-code file
You can run Interp files (`*.it`) with the interp binary.
Create a file called `hello.it`:
```cs
Print("Hello, world!");
```

Then just simply run the command:
```cs
$ interp hello.it
Hello, world!
```

## Repl
the interp binary can also spin up an interactive session (a Read-Eval-Print-Loop).
```cs
$ interp
> Print("Hello, world!")
Hello, world!
```

To execute a file simply use `imp`.
```cs
> imp "hello.it"
Hello, world!
```

## Where next?
A good place to start is to look at the various [examples](./examples.md)! Happy coding :)
