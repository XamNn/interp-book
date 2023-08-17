# Keyable
Records (or Dicts) are the most powerful Value in the language.
They contain key-value-pairs. Keys and Values can be of any [Type](./type.md).

Records can be constructed in a few ways:
```cs
var table = {foo = 1, bar = 2};

var other_table = {}
other_table.foo = 1;
other_table.bar = 2;

var third_table = {}
third_table["foo"] = 1;
third_table["bar"] = 2;

# Other than strings can also be keys 
third_table[3] = 3;

Print(third_table);
# output: {"foo" = 1, "bar" = 2, 3 = 3}
```

## KeyValuePairs
You can iterate all field of an record with the KeyValuePairs function.
```cs
var table = {a = 1, b = 2};
Print(KeyValuePairs(table));
# output: [{"key" = "a", "value" = 1}, {"key" = "b", "value" = 2}]
```
