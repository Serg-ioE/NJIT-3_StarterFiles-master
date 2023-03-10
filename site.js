/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/
const vue_app = Vue.createApp({
  // This automatically imports your movies.json file and puts it into
  //   the variable: movies
  created() {
    fetch("movies.json")
      .then((response) => response.json())
      .then((json) => {
        this.movies = json;
      });
  },
  data() {
    return {
      // This holds your movies.json data.
      movies: [],
      /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
      titleTWO: "IMDB + Sergio's Top 8 movies",
      owner: "Sergio",
      github: "https://github.com/Serg-ioE/NJIT-3_StarterFiles-master",
      /* ^^ Vue Variables above ^^ establishes variables for the title of the website, the owner of the website, and the link to the github repository with final submission */ 
    };
  },
  methods: {
    /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
    getMonthText(dateArray) {
      let month = ""; // establishes month variable that will hold the converted month in string(word) form from a number for each movie
      switch (dateArray[1]) { // switch case checks for the number month within the dateArray parameter and switches the month variable to its string form of the corresponding month
        case 1:
          month = "January";
          break;
        case 2:
          month = "February";
          break;
        case 3:
          month = "March";
          break;
        case 4:
          month = "April";
          break;
        case 5:
          month = "May";
          break;
        case 6:
          month = "June";
          break;
        case 7:
          month = "July";
          break;
        case 8:
          month = "August";
          break;
        case 9:
          month = "September";
          break;
        case 10:
          month = "October";
          break;
        case 11:
          month = "November";
          break;
        case 12:
          month = "December";
          break;
      }
      return month + ", " + dateArray[2] + ", " + dateArray[0]; // returns the date information in Us format (month, day, year)
    },
    // ^^ Above Function ^^ Converts the numerical date to the date in Us format (month, day, year) for the given parameter (which is for each movie)
    posterClick(index) {
      if ( // If statement that checks if the posterindex has reached the end of movies.posters for the clicked movie
        this.movies[index].posterindex >=
        this.movies[index].posters.length - 1
      ) {
        this.movies[index].posterindex = 0;
      } else {
        this.movies[index].posterindex++;
      }
    },
    // ^^ Above Function ^^ Increments the posterindex in movies.posterindex for the clicked movie, also resets the posterindex to 0 when it has reached the greater than the length of movies.posters for the clicked movie
    timeText(time) {
      var minuteTime = time % 60; // divides time by 60 then stores the remainder to minuteTime
      var hourTime = Math.trunc(time / 60); // divides time by 60 then stores the integer part of the result in hourTime
      return hourTime + "h " + minuteTime + "m"; // returns the newly formatted runtime for the movie
    },
    // ^^ Above Function ^^ Converts the runtime for each movie from minutes to hours and minutes (ex: 2h 12m) based on the parameter(time)
  },
});

vue_app.mount("#vue_app"); // establishes the Vue app to the component with the id vue_app (located: index.html.body.div#vue_app)
