const fibonacci = function(n)
{
    if (typeof(n) === 'string')
        n = parseInt(n);
    else if (n < 0)
        return "OOPS";

    let i = 0; // index
    let current = 0; // starting number #1
    let next = 1; // starting number #2
    let fib; // sum of next + current

    while (i < n) // let's display the 25th first numbers of the fibonacci sequence
    {   
        fib = next + current; // so 1 + 0 === 1
        current = next; // so the "next" of the present iterative step becomes the "current" of the upcoming iteration
        next = fib; // so the fib of the present iterative step becomes the next of the upcoming iteration
        i++;
        // console.log(current);
    }
    return current;
};

console.log(fibonacci(25));

// Do not edit below this line
module.exports = fibonacci;

