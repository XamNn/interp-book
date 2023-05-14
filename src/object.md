# Object
Objects (or Dicts) are the most powerful Value in the language.
They contain key-value-pairs. Keys and Values can be of any [Type](./type.md).

Objects can be constructed in a few ways:
```cs
var obj = {foo = 1, bar = 2};

var other_obj = {}
other_obj.foo = 1;
other_obj.bar = 2;

var third_obj = {}
third_obj["foo"] = 1;
third_obj["bar"] = 2;

# Other than strings can also be keys 
third_obj[3] = 3;

Print(third_obj);
# output: {"foo" = 1, "bar" = 2, 3 = 3}
```

## KeyValuePairs
You can iterate all field of an object with the KeyValuePairs function.
```cs
var obj = {a = 1, b = 2};
Print(KeyValuePairs(obj));
# output: [{"key" = "a", "value" = 1}, {"key" = "b", "value" = 2}]
```
