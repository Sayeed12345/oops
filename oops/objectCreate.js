//object of photos
const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },

    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${this.years} years old`;
    }
};


const Book1 = Object.create(bookProtos);
Book1.title = 'book one';
Book1.author = 'john doe';
Book1.year = '2017';
console.log(Book1.getSummary());
console.log(Book1);

const Book2 = Object.create(bookProtos, {
    title: { value: 'Book two' },
    author: { value: 'john parker' },
    year: { value: '2015' }
});
console.log(Book2);
