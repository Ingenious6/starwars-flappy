jQuery("#scoresbtn").on("click", function() {
 jQuery("#content").empty();
 jQuery("#content").append(
 "<ul>" +
 "</ul>"
 );
});

jQuery("#creditsbtn").on("click", function() {
  jQuery("#content").empty();

  jQuery("#creditsbtn").addClass("active");
  jQuery("#scoresbtn").removeClass("active");
  jQuery("#helpbtn").removeClass("active");

  jQuery("#noscores").hide();
  jQuery("#scores").hide();

  jQuery("#content").append(
      "<div>" + "This game was created by PLiantCactus451 (PC) under the license of Future by the Guardians of Mortis Company" + "</div>"
 );
});

jQuery("#helpbtn").on("click", function() {
  jQuery("#content").empty();

  jQuery("#scoresbtn").removeClass("active");
  jQuery("#creditsbtn").removeClass("active");
  jQuery("#helpbtn").addClass("active");

  jQuery("#noscores").hide();
  jQuery("#scores").hide();

  jQuery("#content").append(
    "<ul>"
    + "<li>" + "Press the UP ARROW or the SPACEBAR to jump" + "</li>"
    + "<li>" + "Avoid the pipes" + "</li>"
    + "<li>" + "If you crash, try, try again" + "</li>"
    + "<li>" + "Attempt to get the highest score" + "</li>"
    + "</ul>"
    );
  });





  function registerScore(score) {
     var playerName = prompt("What's your name?");
     var scoreEntry = "<li>" + playerName + ": " + score.toString() + "</li>";
     if (score > bestscore ) {
        bestscore = score;
        $("#scores").append(scoreEntry);
     }
  }
