const removeFromArray = function(array, ...values)
{
    return array.filter((el) =>
    {
        let i = 0;
        while (i < values.length)
        {
            if (el === values[i])
            {
                return false;
            }
            i++;
        }
        return true;
    });
};

// Do not edit below this line
module.exports = removeFromArray;