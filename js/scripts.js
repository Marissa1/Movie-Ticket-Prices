function Tickets(movieName, time, age) {
  this.movieName = movieName;
  this.time = time;
  this.age = age;
}
Tickets.prototype.price = function () {
  return 5 + this.movieName + this.time + this.age;
};

var calculatePrice = function(){
  if (movieNamedInput === "new") {
    var Moviename = 2
  } else if (movieNamedInput === "old") {
    var movieName = 1
  };
  if (ageInput < 60) {
    age= 2
  } else if (ageInput > 60) {
    age = 0
  };
}

$(document).ready(function() {
  $("#blankForm").submit(function(event) {
    event.preventDefault();
    var movieNamedInput = $("input[name=movies]:checked").val();
    var timeInput = $("input[name=times]:checked").val();
    var ageInput = parseInt($("input#age").val());
    var newTicket = new Tickets(movieNamedInput, timeInput, ageInput);
    calculatePrice();



  });


});
