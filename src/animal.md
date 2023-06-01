# Animal

```cs
mod animals {

    atom Dog;
    atom Cat;

    enum AnimalType {
        Dog, Cat
    }

    struct Animal {
        type AnimalType,
        name String,
        age  Int[0..],
    }

    fun Animal(type AnimalType, name String, age Int[0..]) Animal {
        var obj = { type=type, name=name, age=age };
        ret obj;
    }

}

var bob = animals::Animal(animals::Cat, "Bob", 2);

Print(bob);
# output: {"type" = Atom("animals::Cat"), "name" = "Bob", "age" = 2}
```
> Read more about [modules](./module.md), [Atoms](./atom.md), [Enums](./enum.md), [Structs](./struct.md), [Integers](./int.md), [Strings](./string.md), [Keytables](./object.md), [Functions](./function.md), [variables](./variable.md), or [Print](./Print.md)
