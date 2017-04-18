//front-end
$(document).ready(function() {
  $("#game-form").submit(function(event) {
    var number1 = parseInt($("#pingpong").val());
//back-end
    for (var i = 1; i <= number1; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        $("#result").append("<li>pingpong</li>");
      } else if (i % 3 === 0) {
        $("#result").append("<li>ping</li>");
      } else if (i % 5 === 0) {
        $("#result").append("<li>pong</li>");
      } else {
        $("#result").append("<li>" + i + "</li>");
      }
    }
    event.preventDefault();
  });
});
