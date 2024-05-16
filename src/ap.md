# ap

Command line argument parser.
[Get from Packi](https://packi.kriikkula.net/ap).

## Usage
```

var argsdef = {
    args = {
        files = { name = "files", flag = false, help = "Files to process", multiple = true },
        color = { name = "color",  flag = false, help = "Set the color", multiple = false },
        flag  = { name = "flag", flag = true, help = "Set this flag for fun", multiple = false },
        p     = { name = "port", flag = false, help = "Port number", multiple = false },
    },
    rest = {
        name = "strings",
        multiple = true,
    }
};

var args = ap::Handle(argsdef, versiontext = "Packi+ 1.0.0");

Print("strings: {args.rest}");
Print("files:   {args.args.files}");
Print("color:   {args.args.color}");
Print("flag:    {args.args.flag != void}");
Print("port:    {args.args.p}");
```
