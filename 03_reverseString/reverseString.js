const reverseString = function(string)
{
    string = string.split("");
    string = string.reverse();
    string = string.toString();
    string = string.replace(/,/g, '');
    return string ;
};

let string = 'hello';
console.log(reverseString(string));

// Do not edit below this line
module.exports = reverseString;
