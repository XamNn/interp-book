# Oak

Oak is the de-facto standard library for the language.
[Get from Packi](https://packi.kriikkula.net/oak).

---
## fs module

---
### SetWorkingDir(dir String) Bool or Null
Set the current working directory.


---
### Glob(glob String) List&lt;String&gt;
List files with a unix glob.


---
### enum FileType 
File  
Directory  

Specifies if a file is a dictory or a regular file.

---
### FileType(file String) FileType or Null
List files with a unix glob.


---
### MakeDir(name String)
Create a new directory.


---
### Remove(file String, mode FileType)
Delete a file or directory.


---
## iter module

---
### ForEach(function Function&lt;Any, Void&gt;, iterable Iterable)
Iterate and apply the function to each of the items in a list or characters in a string.


---
### Range
Apply function to every integer between the specified range.
The step is the amount incremented after each integer.


---
### Loop(function Function)
Apply the function indefinitely.
Break can be called inside the function.


---
### Zip(function Function, list0 Iterable, list1 Iterable)
Applies the function to corresponding items in both lists.
For example: function(list0[0], list1[0]); function(list0[1], list1[1]);


---
### Find(haystack Iterable, needle Any) Int or Null
Return the index of the item in the list.
Returns null if the item is not present inside the list.


---
### Contains(haystack Iterable, needle Any) Bool
Returns true if the list contains the item.


---
## list module

---
### Reverse(list List) List
Reverses the list.


---
### Initialize(size Int[0..], value Any) List
Initialize a list of size with the specified value as each element.


---
## math module


---
### Sin(n Float) Float
Sine function


---
### Cos(n Float) Float
Cosine function


---
### Tan(n Float) Float
Tangent function


---
### Asin(n Float) Float
Arcsine function


---
### Acos(n Float) Float
Arc cosine function


---
### Atan(n Float) Float
Inverse tangent function


---
### Sinh(n Float) Float
Hyperbolic sine function


---
### Cosh(n Float) Float
Hyperbolic cosine function


---
### Atan2(n Float, n2 Float) Float
2-argument arctangent function


---
### Max(numbers List&lt;Number&gt;) Number
Returns the largest nubmer.


---
### Min(numbers List&lt;Number&gt;) Number
Returns the smallest number.


---
## os module

---
### enum OS 
Windows, Linux, MacOS  

Type of the current operating system.

---
### Shell(command String, capture Bool = true) String or Null
Execute a script on the default shell of the operating system.


---
### Quit(n Int)
Exit the current process.


---
## string module

---
### StartsWith(string String, pattern String) Bool
Returns true if the string starts with the pattern.


---
### EndsWith(string String, pattern String) Bool
Returns true if the string ends with the pattern.


---
### Find(string String, pattern String) Int or Null
Returns the index of the patterns first character where the pattern is found in the string, or null.


---
### Contains(string String, pattern String) Bool
Returns true if the pattern is found as a substring inside the string.


---
### TrimStart(string String, pattern String or List&lt;String&gt; = WHITESPACE) String
Remove every occurance of the pattern(s) from the start of the string.


---
### TrimEnd(string String, pattern String or List&lt;String&gt; = WHITESPACE) String
Remove every occurance of the pattern(s) from the end of the string.


---
### Trim(string String, pattern String or List&lt;String&gt; = WHITESPACE) String
Remove every occurance of the pattern(s) from the string.


---
### Split(string String, separator String = "", ignoreEmpties Bool = false) List&lt;String&gt;
Splits the string into substrings.


---
### Replace(string String, from String, to String) String
Replace every occurance of "from" to "to".


---
### Join(strings List&lt;String&gt;, separator String = "") String
Join strings together separarted by another string.


---
### CharToUnicode(char String) Int or Null
Returns the unicode code point for the specified character.
char must be a single character.


---
### UnicodeToChar(codepoint Int) String or Null
Returns the character for the specified unicode code point.
char must be a single character.


---
### Lowercase(string String) String
Returns the lowercase variant of the string.


---
### Uppercase(string String) String
Returns the uppercase variant of the string.


---
## time module

---
### enum Duration 
Int[0..]  

Duration of time.

---
### enum Time 
Int[0..]  

Represents a date/time.

---
### Milliseconds(milliseconds Int[0..]) Duration
Duration as milliseconds.


---
### Seconds(seconds Int[0..]) Duration
Duration as seconds.


---
### Minutes(minutes Int[0..]) Duration
Duration as minutes.


---
### Sleep(duration Duration)
Pause the thread for the specified duration of milliseconds.


---
### Now() Time
Get the current time in milliseconds .


---
### Elapsed(time Time) Duration
Returns the duration of time from the specified time to this moment as milliseconds.


---
### FormatDuration(time Duration) String
Get a nice format for a duration.


---
