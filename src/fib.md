# Fibbonacci Sequence

```cs
fun Fib(n Int[0..]) Int[0..] {
    if n <= 1 {
        ret 1;
    }
    ret Fib(n - 1) + Fib(n - 2);
}

Print(Fib(9));
# output: 55
```
> Read more about [Functions](./function.md), [Integers](./int.md), [If Statement](./if.md), or [Print](./Print.md)