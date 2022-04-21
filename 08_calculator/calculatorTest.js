let array = [1,3,9,15];

const arraySum = function(array)
{
    let i = 0;
    let sum = array[0];
    while (i < array.length - 1)
    {
        sum = sum + array[i + 1];
        i++;
    }
    return sum;
}

const multiply = function(args)
{
    let i = 0;
    let res = args[0];
    while (i < args.length - 1)
    {
        res = res * array[i + 1];
        i++;
    }
    return res;
}
console.log(array[0]);
console.log(arraySum(array));
console.log(multiply(array));