const findTheOldest = function(array)
{
    let oldest = array.reduce((acc, current) =>
    {
      array.map(function(element)
      {
        if (!(element.yearOfDeath))
          element.yearOfDeath = new Date().getFullYear();
      })
      array.map(element => element.age = element.yearOfDeath - element.yearOfBirth);
      if (acc.age < current.age)
      {
          return current; // with reduce it means that the returned value will be assigned to acc
      }
      return acc;
    })
    return oldest;
};

// const findTheOldest = function(array)
// {
//     let i = 0;
//     let oldest = array.filter(element =>
//     {
//         element.age = element.yearOfBirth - element.yearOfDeath;
//         while (i < array.length)
//         {
//             if (element.age[i] < element.age[i + 1])
//                 return element[i + 1];
//             i++;
//             return element[i];
//         }
//     });
//     return oldest;
// }

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

  // console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;