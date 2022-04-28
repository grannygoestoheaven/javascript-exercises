const getTheTitles = array => array.map(element => element.title);


// Do not edit below this line
// module.exports = getTheTitles;

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

console.log(getTheTitles(books));