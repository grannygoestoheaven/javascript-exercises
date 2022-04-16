const sumAll = function(num1, num2)
{
    let i = num1;
    let sum = num1;

    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number')
        return "ERROR";
    if (num1 > num2)
    {
        i = num2;
        sum = num2;
        while (i < num1)
        {
            sum = sum + (i + 1);
            i++;
        }
        return sum;
    }
    while (i < num2)
    {
        sum = sum + (i + 1);
        i++;
    }
    return sum;
};

console.log(sumAll(45, 32));

// Do not edit below this line
module.exports = sumAll;