// =====================================================================
//  user-content.js
//  Contains code related user saved content
// =====================================================================

UserContent = {
    content: {
        movies: [],
        series: [],
        favoriteMovies: [],
        favoriteSeries: []
    },

    resetUserContent: function(){
        Storage.resetUserContent();
        UserContent.content = { movies: [], series: [], favoriteMovies: [], favoriteSeries: [] };
        Storage.saveUserContent();
    },
    /* Movie Functions */
    addMovie: function(movie){
        var findElement = _.find(UserContent.content.movies, function(item){ return item.imdbID === movie.imdbID; });
        console.log('Found Element' + findElement);
        if (findElement === undefined){
            UserContent.content.movies.push(movie);
            Storage.saveUserContent();
            Toast.showLongCenter('Movie Added!');
        } else {
            dialog("You cannot add the same movie twice!", "Error");
        }
    },
    removeMovie: function(movie){
        var findElement = _.find(UserContent.content.movies, function(item){ return item.imdbID === movie.imdbID; });
        console.log(findElement);
        if (findElement !== undefined){
            console.log('Element Found: ' + window.JSON.stringify(findElement));
            // Delete element from array
            var moviesFiltered = _.filter(UserContent.content.movies, function(item){ return item.imdbID !== movie.imdbID; });
            console.log('Element Deleted: ' + window.JSON.stringify(moviesFiltered));
            UserContent.content.movies = moviesFiltered;
            Storage.saveUserContent();
            Toast.showLongCenter('Movie Deleted!');
        } else {
            dialog("Could not find movie to remove!", "Error");
        }
    },
    /* Serie Functions */
    addSerie: function(serie){
        var findElement = _.find(UserContent.content.series, function(item){ return item.imdbID === serie.imdbID; });
        console.log(findElement);
        if (findElement === undefined){
            UserContent.content.series.push(serie);
            Storage.saveUserContent();
            Toast.showLongCenter('Serie Added!');
        } else {
            dialog("You cannot add the same serie twice!", "Error");
        }
    },
    removeSerie: function(serie){
        var findElement = _.find(UserContent.content.series, function(item){ return item.imdbID === serie.imdbID; });
        console.log(findElement);
        if (findElement !== undefined){
            console.log('Element Found: ' + window.JSON.stringify(findElement));
            // Delete element from array
            var seriesFiltered = _.filter(UserContent.content.series, function(item){ return item.imdbID !== serie.imdbID; });
            console.log('Element Deleted: ' + window.JSON.stringify(seriesFiltered));
            UserContent.content.series = seriesFiltered;
            Storage.saveUserContent();
            Toast.showLongCenter('Serie Deleted!');
        } else {
            dialog("Could not find serie to remove!", "Error");
        }
    },
    // Favorite Script //
    addFavoriteMovie: function(movie){
        var findElement = _.find(UserContent.content.favoriteMovies, function(item){ return item.imdbID === movie.imdbID; });
        console.log('Found Element' + findElement);
        if (findElement === undefined){
            UserContent.content.favoriteMovies.push(movie);
            Storage.saveUserContent();
            Toast.showLongCenter('Movie added to Favorites!');
        } else {
            dialog("You cannot favorite the same movie twice!", "Error");
        }
    },
    removeFavoriteMovie: function(movie){
        var findElement = _.find(UserContent.content.favoriteMovies, function(item){ return item.imdbID === movie.imdbID; });
        console.log(findElement);
        if (findElement !== undefined){
            console.log('Element Found: ' + window.JSON.stringify(findElement));
            // Delete element from array
            var moviesFiltered = _.filter(UserContent.content.favoriteMovies, function(item){ return item.imdbID !== movie.imdbID; });
            console.log('Element Deleted: ' + window.JSON.stringify(moviesFiltered));
            UserContent.content.favoriteMovies = moviesFiltered;
            Storage.saveUserContent();
            Toast.showLongCenter('Movie removed from Favorites!');
        } else {
            dialog("Could not find movie to remove!", "Error");
        }
    },
    addFavoriteSerie: function(serie){
        var findElement = _.find(UserContent.content.favoriteSeries, function(item){ return item.imdbID === serie.imdbID; });
        console.log('Found Element' + findElement);
        if (findElement === undefined){
            UserContent.content.favoriteSeries.push(serie);
            Storage.saveUserContent();
            Toast.showLongCenter('Serie added to Favorites!');
        } else {
            dialog("You cannot favorite the same serie twice!", "Error");
        }
    },
    removeFavoriteSerie: function(serie){
        var findElement = _.find(UserContent.content.favoriteSeries, function(item){ return item.imdbID === serie.imdbID; });
        console.log(findElement);
        if (findElement !== undefined){
            console.log('Element Found: ' + window.JSON.stringify(findElement));
            // Delete element from array
            var favoriteSeriesFiltered = _.filter(UserContent.content.favoriteSeries, function(item){ return item.imdbID !== serie.imdbID; });
            console.log('Element Deleted: ' + window.JSON.stringify(favoriteSeriesFiltered));
            UserContent.content.series = favoriteSeriesFiltered;
            Storage.saveUserContent();
            Toast.showLongCenter('Serie removed from Favorites!');
        } else {
            dialog("Could not find serie to remove from favorites!", "Error");
        }
    }

}
