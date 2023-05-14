# The While Loop
While loops execute the given code in a loop until the condition evaluates to `false` or a break statement is encountered.

```cs
var i = 0;
while i < 10 {
    Print(i);
    i += 1;
}
```

While loops can be named.
`brk` exits the loop, if not named, the inner-most loop in exited from.
`cnt` jumps to the start of the loop.
```cs
loop: while true {
    while true {
        brk loop;
    }
}
```