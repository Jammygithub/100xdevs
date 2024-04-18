const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();
const book = getBook(2);
// const title = book.title;

// const author = book.author;

// OBJECT DESTRUCTURING
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

title;
author;

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// Array Destructuring and REST Operator
const [primaryGenre, secondaryGenre, ...otherGenre] = genres;
primaryGenre;
secondaryGenre;
otherGenre;

const newGenre1 = [...genres, "epic fantasy"];
newGenre1;

const newGenre2 = ["epic fantasy", ...genres];
newGenre2;

const updatedBook = { book, publicationDate: "12-12-1990" };
updatedBook;

console.log("updatedBook:", updatedBook);

const newUpdatedBook = { ...book, publicationDate: "11-11-1990" };
console.log("newUpdatedBook:", newUpdatedBook);

const templateLiteral = `${title}. This is an example of template literal ${
  2 + 4
}`;
templateLiteral;

const pagesRange = pages > 1000 ? "Pages over 1000" : "pages less than 1000";
pagesRange;

const adoptation = `The book has ${hasMovieAdaptation ? "" : "not"} adopted`;
adoptation;

const getYear = (str) => str.split("-")[0];
const bookPublish = `The book was published in the year ${getYear(
  publicationDate
)}`;

bookPublish;

console.log(true && "Hello");
console.log(false && "Hi");
console.log(hasMovieAdaptation && "The Book has adoptation");

//falsy: 0, '', null, undefined, false

console.log(true || "some string");
console.log(false || "some string");

const rc = book.reviews.librarything.reviewsCount || "no data";
// nullish collasceing operator
const nrc = book.reviews.librarything.reviewsCount ?? "no data";

rc;
nrc;

//optional chaining
const book3 = getBook(3);
book3;
const rc3 = book3.reviews?.librarything?.reviewsCount ?? 0;

rc3;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;
