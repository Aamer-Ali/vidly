// import * as genreAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7fbfbcc471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7fbfbcc471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7fbfbcc471816",
    title: "Die hard",
    genre: { _id: "5b21ca3eeb7fbfbcc471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "5b21ca3eeb7fbfbcc471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7fbfbcc471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7fbfbcc471818",
    title: "Trip to italy ",
    genre: { _id: "5b21ca3eeb7fbfbcc471814", name: "Comdey" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7fbfbcc47181a",
    title: "Airplane 101",
    genre: { _id: "5b21ca3eeb7fbfbcc471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7fbfbcc471b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7fbfbcc471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7fbfbcc471e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7fbfbcc47120", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
  },
  {
    _id: "5b21ca3eeb7fbfbcc471f",
    title: "The Sixth Sence",
    genre: { _id: "5b21ca3eeb7fbfbcc47120", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7fbfbcc4721",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7fbfbcc471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}
