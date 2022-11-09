// const getTheTitles = function(array)
// {
//     let i = 0;
//     let j = 0;
//     let newArr = [];
//     while (i < array.length)
//     {
//         newArr.push(Object.values(array[i])[j]);
//         i++;
//     }
//     return newArr;
// }

/*
- get the value corresponding to the key 'title' in an object --> use Object.prop and precise the key from which we want the value from
- do a map method of the array of objects that we have and pass in arguments the function we made above
*/

const getTheTitles = array => array.map(book => book.title);

// Do not edit below this line
module.exports = getTheTitles;
