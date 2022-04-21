let array = [1,3,9,15];
let twoNum = [6,7];
let emptyArray = [];
let singleArgArray = [7];

const arraySum = function(args)
{
    let i = 0;
    let sum = array[0];
    if (array.length === 0)
    {
        return 0;
    }
    else if (array.length === 1)
    {
        return array[0];
    }
    while (i < array.length - 1)
    {
        sum = sum + args[i + 1];
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
        res = res * args[i + 1];
        i++;
    }
    return res;
}

// console.log(arraySum(array));
// console.log(arraySum(emptyArray));
// console.log(arraySum(singleArgArray));
console.log(multiply(array));
console.log(multiply(twoNum));