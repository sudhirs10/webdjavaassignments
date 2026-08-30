const movies = [];
const movieCount = Number(prompt('How many movies do you want to rate?'));
for (let i = 0; i < movieCount; i = i + 1) {
  const title = prompt('Enter movie title');
  const rating = Number(prompt('Enter rating from 1 to 5'));
  const movie = {
    title: title,
    rating: rating,
  };
  movies.push(movie);
}
movies.sort(function (a, b) {
  return b.rating - a.rating;
});
const bestMovie = movies[0];
let movieList = '';
for (const movie of movies) {
  movieList = movieList + movie.title + ' - Rating: ' + movie.rating + '<br>';
}

document.querySelector('#result').innerHTML =
  '<h2>Movies</h2>' +
  movieList +
  '<h2>Highest Rated Movie</h2>' +
  bestMovie.title +
  ' - Rating: ' +
  bestMovie.rating;
