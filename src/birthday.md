# Birthday

```cs
struct Person {
    first_name String,
    last_name String,
    age Int[0..],
    birthday Function<Person, Void>
}

fun Person(first_name String, last_name String, age Int[0..]) Person {
    var obj = { first_name=first_name, last_name=last_name, age=age };
    fun Birthday(self Person) {
        self.age += 1;
    }
    obj.birthday = Birthday;
    ret obj;
}

var samuel = Person(
    "Samuel",
    "Kriikkula",
    19
);

Print(samuel.age); # 19
samuel.birthday();
Print(samuel.age); # 20
```
> Read more about [Structs](./struct.md), [variables](./variable.md), [Integers](./int.md), [Functions](./function.md), [Types](./type.md), [Records](./record.md), or [Print](./print.md)