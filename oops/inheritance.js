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

//Magazine constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

//inherit prototype
Magazine.prototype = Object.create(Book.prototype);

//instantiate magazine object
const mag1 = new Magazine('mag one', 'john parker', '2016', 'jan');
Magazine.prototype.constructor = Magazine;
console.log(mag1);