# Modules

Modules group code into namespaces.
```cs
mod math {
    
    fun Sin(n Float) Float {
        ...
    }
    
    fun Cos(n Float) Float {
        ...
    }

}
```

Module members can be accessed anywhere with the full path specified.
```cs
Print(math::Sin(2.3));
```

Use statements (unique to each file) can be used to bring module members into the global namespace.
```cs
use math;
Print(Sin(2.3));
```