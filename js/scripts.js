function Tickets(movieName, time, age) {
  this.movieName = movieName;
  this.time = time;
  this.age = age;
}
Tickets.prototype.price = function () {
  return 5 + this.movieName + this.time + this.age;
};

var calculatePrice = function(newTicket){
  if (newTicket.movieName === "new") {
     newTicket.movieName = 2;
  } else {
    newTicket.movieName = 1;
  };
  if (newTicket.age < 60) {
    newTicket.age= 2;
  } else if (newTicket.age > 60) {
    newTicket.age = 0;
  };
  if (newTicket.time === "early") {
    newTicket.time = 0;
  } else if (newTicket.time === "late") {
      newTicket.time = 3;
  }
}

$(document).ready(function() {
  $("#blankForm").submit(function(event) {
    event.preventDefault();
    var movieNamedInput = $("input[name=movies]:checked").val();
    var timeInput = $("input[name=times]:checked").val();
    var ageInput = parseInt($("input#age").val());
    var newTicket = new Tickets(movieNamedInput, timeInput, ageInput);
    calculatePrice(newTicket);
    $(".results").text(newTicket.price());


  });


});
