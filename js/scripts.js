// function Ticket(time, age) {
//   // this.title = [];
//   this.time = time;
//   this.age = age;
// }

// Ticket.prototype.ticketInfo = function (){
//   return this.time + " ," + this.age;
// }

function Movie(movieTitle, runType, cost, time, age) {
  this.movieTitle = movieTitle;
  this.cost = cost;
  this.time = time;
  this.age = age;
  this.runType = runType;
}

// Movie.prototype.movieInfo = function() {
//   console.log(this.cost);
//   return this.movieTitle + " ," + this.cost + " ,"  + this.time + " ," + this.age;
// }

Movie.prototype.processPrice = function() {
  console.log(this.runType);
if (this.runType === true) {
    if (this.time < 5){  //matinee
      if (this.age >= 65) { // senior discount
          return this.cost = 8;
      } else {
          return this.cost = 9;
      }
    } else {                // not matinee
      if (this.age >= 65) {  // senior discount
        return this.cost = 9;
      } else {
        return this.cost = 10;
      }
    }
  } else {
      if (this.time < 5){  //matinee
        if (this.age >= 65) { // senior discount
            return this.cost = 6;
        } else {
            return this.cost = 7;
        }
      } else {                // not matinee
        if (this.age >= 65) {  // senior discount
          return this.cost = 7;
        } else {
          return this.cost = 8;
        }
      }
  }
}

$(document).ready(function() {
  $("form#new-ticket").submit(function(event)) {
    event.preventDefault();
    var titleInput =
    var timeInput =
    var ageInput =
    var runInput =
  }
});
