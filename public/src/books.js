function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
  const returned = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true)); 
  return [borrowed, returned];
}

function getBorrowersForBook(book, accounts) {
  let result = [];
    let borrowArr = book.borrows;  
    borrowArr.forEach(borrow=>{
      let account = accounts.find(acc => acc.id === borrow.id);
      let obj = account;
      obj['returned'] =  borrow.returned;
      result.push(obj);
    })

    return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
