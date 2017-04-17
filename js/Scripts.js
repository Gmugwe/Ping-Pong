// Business (or back-end) logic:

    var pingPongFunction = function (number) {
      var listResult="";
     };

  // start of user interface (front-end) logic:

  $(document).ready(function() {
      $("form#add").submit(function(event) {
        event.preventDefault();
        var number1 = parseInt($("#add1").val());
        var number2 = parseInt($("#add2").val());
        var result = add(number1, number2);
        $("#output").text(result);
      });
    });
