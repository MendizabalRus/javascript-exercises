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

const getTheTitles = function() {
    return books.map((book) => {
      return book.title;
    });
};

// Do not edit below this line
module.exports = getTheTitles;