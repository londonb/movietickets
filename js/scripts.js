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
  // } else if (this.movieTitle.includes("Room") === true){
  // console.log(this.movieTitle);
  //     if (this.time < 5){  //matinee
  //       if (this.age >= 65) { // senior discount
  //           return this.cost = 8;
  //       } else {
  //           return this.cost = 9;
  //       }
  //     } else {                // not matinee
  //       if (this.age >= 65) {  // senior discount
  //         this.cost = 9;
  //       } else {
  //
  //       }
  //     }
  //   } else if (this.movieTitle.indexOf("The Revenants") === 2){
  //     if (this.time < 5){  //matinee
  //       if (this.age >= 65) { // senior discount
  //           return this.cost = 8;
  //       } else {
  //           return this.cost = 9;
  //       }
  //     } else {                // not matinee
  //       if (this.age >= 65) {  // senior discount
  //         return this.cost = 9;
  //       } else {
  //
  //       }
  //     }
  //   } else if (this.movieTitle.indexOf("The Martian") === 3){
  //     if (this.time < 5){  //matinee
  //       if (this.age >= 65) { // senior discount
  //           return this.cost = 8;
  //       } else {
  //           return this.cost = 9;
  //       }
  //     } else {                // not matinee
  //       if (this.age >= 65) {  // senior discount
  //         return this.cost = 9;
  //       } else {
  //
  //       }
  //     }
  //   } else {
  //     console.log("There is an issue");
  //   }
  // }

  //
  //
  // function Carol(movieTitle, rating, cost) {
  //   this.movieTitle = "Carol";
  //   this.rating = rating;
  //   this.cost = 10;
  // }
  //
  // function Room(movieTitle, rating, cost) {
  //   this.movieTitle = "Room";
  //   this.rating = rating;
  //   this.cost = 10;
  // }
  //
  // function Revenants(movieTitle, rating, cost) {
  //   this.movieTitle = "The Revenants";
  //   this.rating = rating;
  //   this.cost = 8;
  // }
  // function Martian(movieTitle, rating, cost) {
  //   this.movieTitle = "The Martian";
  //   this.rating = rating;
  //   this.cost = 8;
  // }
  //
  // Movie.prototype.movieInfo = function() {
  //   return this.movieTitle + " ," + this.rating;
  // }
