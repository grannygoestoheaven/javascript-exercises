const caesar = function(string, shift)
{
    characterArray = Array.from(string);
    console.log(string);
    console.log(characterArray);
    let letters = /^[A-Za-z]+$/;
    let newstring = characterArray.map(element => 
    {
        // if (shift > 26) {shift = (shift / 26) + 26};
        // if shift - 26 < 0 {shift = shift}
        if(shift < 0)
        {
            /* The idea is to turn a negative shift in its positive equivalent
            For example, a shift of -5 would become a +21
            I found this technique on stackoverflow :
            */
           shift = 26 + (shift % 26);
        }
        // if(shift > 25)
        // {
        //     shift = 26 - (shift % 26);
        // }
        let asciiCode = element.charCodeAt();
        if(((asciiCode + shift) >= 65 && (asciiCode + shift) <= 90) || ((asciiCode + shift) >= 97 && (asciiCode + shift) <= 122))
        {
            asciiCode = asciiCode + shift;
            return (String.fromCharCode(asciiCode));
        }
        if((asciiCode + shift) > 90 && (asciiCode + shift < 97))
        {
            asciiCode = (asciiCode - 90) + 64 + shift; // this technique allows to wrap around the alphabet
            return (String.fromCharCode(asciiCode));
        }
        if((asciiCode + shift) > 122)
        {
            asciiCode = (asciiCode - 122) + 96 + shift;
            return (String.fromCharCode(asciiCode));
        }
        if(element !== letters)
        {
            return element; 
        }
    });
    // console.log(newstring);
    return newstring.join("");
};

let string = 'A';
let stringBis = 'Mjqqt, Btwqi!';
let hello = 'Hello, World!'
console.log(-5 % 26);
// let string2 = 'Aaa is a notation and BB are initials !';
// let string3 = 'Nnn vf n abgngvba naq OO ner vavgvnyf'

// console.log(caesar(stringBis, -5));
console.log(caesar(stringBis, -5));
// console.log(caesar(string2, 13));

// Do not edit below this line
module.exports = caesar;