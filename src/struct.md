# Structs

Structs define a type that matches any record that has the specified fiels and types.
```cs
struct Dog {
    breed String,
    name String,
    age Int[0..]
}

pub Dog(breed String, name String, age Int[0..]) Dog {
    ret { breed=breed, name=name, age=age };
}
```
