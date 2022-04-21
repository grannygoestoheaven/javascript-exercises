let array = [1,3,9,15];
let twoNum = [6,7];
let emptyArray = [];
let singleArgArray = [7];

const arraySum = function(args)
{
    let i = 0;
    let sum = args[0];
    if (args.length === 0)
    {
        return 0;
    }
    else if (args.length === 1)
    {
        return args[0];
    }
    while (i < args.length - 1)
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

const power = function() {
	
};

// console.log(arraySum(array));
// console.log(arraySum(emptyArray));
// console.log(arraySum(singleArgArray));
console.log(multiply(array));
console.log(multiply(twoNum));