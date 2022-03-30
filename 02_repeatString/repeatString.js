const repeatString = function(string, num)
{
    if (num === 0)
    {
        return ("");
    }
    if (num < 0)
    {
        return "ERROR";
    }
    let i = 0;
    string = string.split();
    while (i < num - 1)
    {
        string = string.concat(string[0]);
        i++;
    }
    string = string.toString();
    string = string.replace(/,/g, '');
    return string;
};

// Do not edit below this line
module.exports = repeatString;