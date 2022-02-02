/*
const promise1 = new Promise((resolve,reject) => {
    //resolve('VERILER ALINDI');   //+ -> .THEN()
    reject('BAGLANTI HATASI');    //- -> .CATCH()
});

promise1
    .then(value=>{
        console.log(value);
})
    .catch(error=>{
        console.log(error)
})
*/
const books =[                              // books
    {name: 'Book 1', author:'Yazar 1'},
    {name: 'Book 2', author:'Yazar 2'},
    {name: 'Book 3', author:'Yazar 3'}
];

const listBooks = () => {              //list the books
    books.map(book => {
        console.log(book.name)
    })
}

const addBook = (newBook) => {             //add  a book in list 
    
    const promise1 = new Promise((resolve,reject)=>{
        books.push(newBook);   // push that the new adding book
        //resolve(books);
        reject('BIR HATA OLUSTU');

    })
    return(promise1);
    
};

addBook({name: 'Book 4', author:'Yazar 4'},listBooks)   // add a new book function
    .then(()=>{
        console.log('YENI LISTE');
        listBooks();
    }).catch((error)=>{
        console.log(error);
    })


