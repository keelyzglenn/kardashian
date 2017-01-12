$(document).ready(function() {
  $("form#quiz").submit(function(event){
    var age = parseInt($("input#age").val());
    var food = parseInt($("select#food").val());
    var idol = parseInt($("select#idol").val());

      if (age) {
        if (age >= 25 && food === 1 && idol === 3) {
          $("#kard").text("Kim");
        };
        if (age >= 25 && food === 1 && idol === 4) {
          $("#kard").text("Khloe");
        };
        if (age >= 25 && food === 2 && idol === 3) {
          $("#kard").text("Kourtney");
        };
        if (age >= 25 && food === 2 && idol === 4) {
          $("#kard").text("Kylie");
        };
        if (age <25 && food === 1 && idol === 3) {
          $("#kard").text("Kendall");
        };
        if (age <25 && food === 1 && idol === 4) {
          $("#kard").text("Scott");
        };
        if (age <25 && food === 2 && idol === 3) {
          $("#kard").text("Kanye");
        };
        if (age <25 && food === 2 && idol === 4) {
          $("#kard").text("Rob");
        };
        $("#quote").show();

    } else {
      alert("Go away you cheater you didn't enter age");
    }

    event.preventDefault();
  });
});
