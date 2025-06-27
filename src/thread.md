# Thread

Interp supports real multi-threading with the ability to send messages to and from threads.

## Simple Use
```cs
var thread = do Thread() {
    var i = 0;
    var sum = 0;
    while i < 1000 {
        sum += i;
    }
    ret sum;
}

var sum = Join(thread);
Print(sum);
```

## Separate Virtual Machines
Each thread in Interp has it's own virtual machine. There is no GIL like in Python or Ruby. This means that memory is **NOT** shared! You will have to import all libraries separately.
```cs

imp "lib.it";

var thread = do Thread() {
    # this is needed here to use functions from 'lib.it' within the thread
    imp "lib.it";
}
```

## Thread Arguments
```cs
var thread = do x, y in Thread(1, 2) {
    if x == 1 & y == 2 {
        Print("Yes, they are equal!");
    }
}

Join(thread);
```

## Messags
Threads can send messages with eachother. Parent-thread argument comes before thread arguments.
```cs
var thread = do parent_thread in Thread() {
    Send(parent_thread, "Hello from thread!");
    var message_from_parent = Recv(parent_thread);
    Print(message_from_parent);
}

var message_from_thread = Recv(thread);
Print(message_from_thread);
Send(thread, "Hello from parent!");
Join(thread);
```