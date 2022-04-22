let array = [1,3,6,15];
let twoNum = [4,3];
let emptyArray = [];
let singleArgArray = [7];
let bob = [4,8];

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

const powerImpArr = function(args)
{
    let i = 0;
    let res = args[0];
    while(i < args[args.length - 1] - 1);
    {
        res = res * args[0];
        i++;
    }
    return res;
}

const powerImp = function(nb1, nb2)
{
    let i = 0;
    let res = nb1;
    while(i < nb2)
    {
        res = res * nb1;
        i++;
    }
    return res;
}

const power = function(nb1, nb2)
{
    return nb1 ** nb2;
}

const factorial = function(n)
{
    let i = n;
    let res = n;

    if (n < 0)
        return -1;
    else if (n === 0 || n === 1)
        return 1;
    while (i > 1)
    {
        res = res * (i - 1);
        i--;
    }
    return res;
};

console.log(factorial(5));