const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getListOfTitles = function() {
  const titles = [];
  this.films.forEach((film) => {
    titles.push(film.title)
  })
  return titles;
}

Cinema.prototype.findFilmByTitle = function(title) {
  let film;
  film = this.films.find(film => film.title === title);
  return film;
}

Cinema.prototype.filterFilmsByGenre = function(genre) {

  const genreFilms = this.films.filter((film) => {
    return film.genre === genre;
  })
  return genreFilms;
}

Cinema.prototype.checkFilmsByYear = function(year) {
  const yearFilms = this.films.filter((film) => {
    return film.year === year;
  })
  return yearFilms;
}

Cinema.prototype.checkNoFilmsYear = function(year) {
  const yearFilms = this.films.some((film) => {
  return film.year === year  

  })
  return yearFilms
}

Cinema.prototype.checkAllFilmsLength = function(length) {
  const longFilms = this.films.every((film) => {
    return film.length > length;
  })
  return longFilms;
}

Cinema.prototype.calcTotalRunningTime = function() {
  const total = this.films.reduce((runningTotal, film) => {
    return runningTotal += film.length;
  }, 0);
  return total;
} 
module.exports = Cinema;
