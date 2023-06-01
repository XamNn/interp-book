# For Loop

Do loops in Interp are unlike in other languages. They are simply a syntatic sugar.

Let's define an iterator function:
```cs
fun Range(function Function<Int, Void>, from Int, to Int) {
    var i = from - 1;
    while i < to {
        i += 1; # make the loop operation before the function call statement
                # so that the continue statement works as intended
        function(i);
    }
}
```

These two are identical!
```cs
do i in Range(0, 10) {
    Print(i);
}

# output:
# 0
# 1
# 2
# etc.

fun LoopBody(i Int) {
    Print(i);
}
Range(LoopBody, 0, 10);
```