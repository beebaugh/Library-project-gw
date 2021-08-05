function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) => account1.name.last > account2.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  const result = books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (borrow.id === account.id) { count++ };
    })
  })
  return count;
}


function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows[0].id === account.id).map((borrow) => { if (!borrow.borrows[0].returned) { 
     return {...borrow, author: authors.find(author => borrow.authorId === author.id)
   } 
  }
 })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

{medium:"The Real tas"}