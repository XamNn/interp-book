# Foreign Functions
Pure Rust functions can be called from Interp.

## ImportForeign
This function can be used to import a foreign function.
```cs
var MyForeignFunc = ImportForeign(
    "path_to_shared_object",
    "ForeignFunc"
);

MyForeignFunc();
```

## Creating a Foreign Function
Start by creating a cargo project.
```bash
$ cargo new extend_interp_lib --lib
```

Edit the Cargo.toml:
```toml
[package]
name = "interp_extend_lib"
version = "0.1.0"
edition = "2021"

[dependencies]
interplang = { path = "../../interp/interplang" } # Path to interplang

[lib]
crate-type=["dylib"] # Make a dynamic rust library
```

Edit src/lib.rs:
```rust
use interplang::vm::value::Value;
use interplang::parser::loc::Loc;

#[no_mangle]
pub fn Interp_Hello(args: Vec<(Value, Loc)>, named_args: Vec<(String, Value, Loc)>, loc: Loc) -> Value {
    Value::String("Hello".to_owned())
}
```

Then you can import it with ImportForeign:
```cs
pub HelloFunction = ImportForeign(
    "target/debug/libinterp_extend_lib.so",
    "Hello"
);

Print(HelloFunction());
# outpuit: Hello
```