let shopping = [];

console.log([...shopping]);

function addToCart(item, price) {
    let product = {
        item: item,
        price: price
    };

    shopping.push(product);
}

addToCart("Shirt", 20);
addToCart("Pants", 30);
addToCart("Shoes", 50);

console.log([...shopping]);

shopping.pop();

console.log([...shopping]);

// Library Object Management

// create a library object
// name and an empty book array
// method to addBook, borrowBook and returnBook
let library = {
    name: "My Book Shelf",
    book: [],


    addBook(title, author){
        const newBook = {
            title: title,
            author: author,
            available: true
        }
        this.book.push(newBook)
        console.log(`${newBook.title} added successfully`)
    },

    borrowBook(title){
        const book= this.book.find(b => b.title === title);
        
        if (!book) return "Book Not Found";
        if (!book.available) return "Book already borrowed"

        book.available = false;
        return`You borrowed ${title}`
    },

    returnBook(title){
        const book = this.book.find(b => b.title === title)

        if (!book) return "This book does not belong to us";
        if (book.available) return "This book was not borrowed"

        book.available = true
        return `${title} returned`
    },

    showAvailableBooks(){
        return this.book
        .filter(book => book.available)
        .map(book => `${book.title} by ${book.author}`)
    }
};

console.log(library.addBook("The Hobbit", "J.R.R Tolien"))
console.log(library.addBook("Song of fire and ice", "George R.R Martin"))
console.log(library.addBook("Harry Potter", "J.K Rowling"))

console.log(library.borrowBook("Song of fire and ice"))

console.log(library.showAvailableBooks())

console.log(library.returnBook("Song of fire and ice"))

console.log(library.showAvailableBooks())

