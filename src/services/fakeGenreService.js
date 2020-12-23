export const genre = [
  { _id: "5b21ca3eeb7fbfbcc471818", name: "Action" },
  { _id: "5b21ca3eeb7fbfbcc471814", name: "Comedy" },
  { _id: "5b21ca3eeb7fbfbcc47120", name: "Thriller" },
];

export function getGenres() {
  return genre.filter((g) => g);
}
