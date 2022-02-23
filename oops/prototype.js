//constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

}

//getSummary Prototype
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

//getAge
Book.prototype.getAge = function () {
    const year = new Date().getFullYear() - this.year;
    return `${this.title} is ${this.year} years old`;
}

//revised date
Book.prototype.revised = function (newYear) {
    this.year = newYear;
    this.revised = true;
}

//instantiate an object
const book1 = new Book('b1', 'john doe', 2013);
const book2 = new Book('b2', 'john smith', 2015);

console.log(book1.title);
console.log(book2.year);
console.log(book1);
console.log(book2.getSummary());
console.log(book1.getSummary());
console.log(book1.getAge());
console.log(book2);
book2.revised("2018");
console.log(book2);