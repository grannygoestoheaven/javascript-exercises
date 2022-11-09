// const getTheTitles = array.map(element => element.title);


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

  function getTitles()
  {
    return books.map(book => book.title);
  }

// console.log(getTheTitles(books));
console.log(getTitles(books));