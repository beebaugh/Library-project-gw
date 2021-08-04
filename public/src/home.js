function getTotalBooksCount(books) {
  const bookCount = books.map(book => book.borrows);
  return bookCount.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.reduce(a => a + 1, 0);
}

function getBooksBorrowedCount(books) {
  const borrowed = books.filter(book => book.borrows[0].returned === false);
  return borrowed.length;
}

function getMostCommonGenres(books) {
  const commonGenres = []; 
   for (let book of books) { 
     const genre = commonGenres.find( (currentGenre) => currentGenre.name === book.genre ); 
     if (genre) { genre.count++; } 
     else { commonGenres.push({ name: book.genre, count: 1 }); 
    }
  } return _topFive(commonGenres); 
}

function getMostPopularBooks(books) {
let result = [];

books.forEach((book) => {result.push({'name': book.title,'count': book.borrows.length})});
return result.sort((a,b)=>(b.count - a.count)).splice(0,5)
}

function getMostPopularAuthors(books, authors) {
  let answer = [];
  authors.forEach(author => {
    const auth = {}; 
    const {name: {first, last}} = author 
    auth.name = `${first} ${last}`;
    auth.count = 0;
    books.forEach(book => {
      if (book.authorId === author.id) {
        auth.count += book.borrows.length
      }
    }) 
    answer.push(auth);
  });

  return answer.sort((a,b)=>(b.count - a.count)).splice(0,5);
}

function _topFive(array) { 
  const result = array.sort((countA, countB) => (countA.count < countB.count ? 1 : -1)).slice(0, 5); 
  return result; 
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
