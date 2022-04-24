// const palindromes = function (string) {
//     let reversedString = string;
//     reversedString = reversedString.split("");
//     reversedString = reversedString.reverse();
//     reversedString = reversedString.toString();
//     reversedString = reversedString.replace(/,/g, '');

    // if (reversedString === string)
    //     return true;
    // else
    //     return false;
// };

const palindromes = function (string)
{
    string = string.split("");
    let lowString = string.map(function(element)
    {
        for (let i = 0; i < element.length; i++)
        {
            if (element[i] === '"' || element[i] === '.' || element[i] === '!' || element[i] === ' ')
            {
              continue;
            }
            return element.toLowerCase();
        }
    });
    lowString = lowString.toString();
    lowString = lowString.replace(/,/g, '');
    const reverseString = function(lowString)
    {
        lowString = lowString.split("");
        lowString = lowString.reverse();
        lowString = lowString.toString();
        lowString = lowString.replace(/,/g, '');
        return lowString;
    }
    
    let newString = reverseString(lowString);
    if (newString === lowString)
        return true;
    else
        return false;
}

// Do not edit below this line
module.exports = palindromes;