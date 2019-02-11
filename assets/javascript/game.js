
//OBJECTS FOR CHARACTERS
var obi = {
  name: "Obi-wan Kenobi",
  health: 100,
  atk: 12,
  catk: 10
}
var luke = {
  name: "Luke Skywalker",
  health: 100,
  atk: 11,
  catk: 15
}
var vader = {
  name: "Darth Vader",
  health: 100,
  atk: 10,
  catk: 20
}
var r2d2 = {
  name: "R2D2",
  health: 100,
  atk: 8,
  catk: 9
}

var player = null;
var enemy = null;

//ONCLICK FUNCTION WHEN EACH IMAGE
//IF PLAYER IS NULL, USER IS SELECTING A PLAYER
//IF PLAYER IS NOT NULL && ENEMY IS NULL, USER IS SELECTING AN ENEMY
$("#obi").click(function () {
  if (player === null) {
    player = obi;
    $("#obi").appendTo("#character");

    //SET ENEMIES AVAILABLE
    $("#luke").appendTo("#enemies");
    $("#vader").appendTo("#enemies");
    $("#r2d2").appendTo("#enemies");
  }
  else if (enemy === null && player !== null) {
    $("#obi").appendTo("#defender");
    enemy = obi;
  }
});

$("#luke").click(function () {
  if (player === null) {
    player = luke;
    $("#luke").appendTo("#character");

    //SET ENEMIES AVAILABLE
    $("#obi").appendTo("#enemies");
    $("#vader").appendTo("#enemies");
    $("#r2d2").appendTo("#enemies");
  }
  else if (enemy === null && player !== null) {
    $("#luke").appendTo("#defender");
    enemy = luke;
  }
});

$("#vader").click(function () {
  if (player === null) {
    player = vader;
    $("#vader").appendTo("#character");

    //SET ENEMIES AVAILABLE
    $("#obi").appendTo("#enemies");
    $("#luke").appendTo("#enemies");
    $("#r2d2").appendTo("#enemies");
  }
  else if (enemy === null && player !== null) {
    $("#vader").appendTo("#defender");
    enemy = vader;
  }
});

$("#r2d2").click(function () {
  if (player === null) {
    player = r2d2;
    $("#r2d2").appendTo("#character");

    //SET ENEMIES AVAILABLE
    $("#obi").appendTo("#enemies");
    $("#luke").appendTo("#enemies");
    $("#vader").appendTo("#enemies");
  }
  else if (enemy === null && player !== null) {
    $("#r2d2").appendTo("#defender");
    enemy = r2d2;
  }
});


//ONCLICK FUNCTION FOR ATTACK BUTTON
$("#attack").click(function () {
  //check if an enemy has been selected
  if (enemy === null) {

  }
  //IF ENEMY IS READY
  else {
    //PLAYER ATTACKS ENEMY AND TAKES HEALTH, VICE VERSA
    //PLAYERS ATTACK INCREASES BY ATTACK POWER
    enemy.health -= player.atk;
    $("#pfight").html("You hit " + enemy.name + " and took " + player.atk + " points off his health!");

    player.health -= enemy.catk;
    $("#efight").html(enemy.name + " hit you and took " + enemy.catk + " points off your health!");

    $("#phealth").html("Health: " + player.health);
    //IF ENEMY RUNS OUR OF HEALTH 
    if (enemy.health < 1) {
      console.log("test");
      enemy = null;
      $("#defender").empty();
      $("#ehealth").empty();
      $("#enemies").html("<h2>YOU WON!</h2>")
    } else {

      $("#ehealth").html("Health: " + enemy.health);
      player.atk += player.atk;
    }
  }
  //IF PLAYER HEALTH GOES BELOW 0
  if (player.health < 1) {
    $("#character").html("<h3>YOU DIED! RELOAD THE PAGE AND PLAY AGAIN!</h3>");
  }
});

//ONCLICK FUNCTION FOR RESTART BUTTON
//RESET PAGE DYNAMICALLY
$("#restart").click(function () {
  $("#obi").appendTo("#characterlist");
  $("#luke").appendTo("#characterlist");
  $("#vader").appendTo("#characterlist");
  $("#r2d2").appendTo("#characterlist");

  $("#phealth").empty();
  $("#ehealth").empty();
  $("#pfight").empty();
  $("#efight").empty();

  player = null;
  enemy = null;

  obi.health = 100;
  obi.atk = 12;
  obi.catk = 10;
  luke.health = 100;
  luke.atk = 11;
  luke.catk = 15;
  vader.health = 100;
  vader.atk = 10;
  vader.catk = 20;
  r2d2.health = 100;
  r2d2.atk = 8;
  r2d2.catk = 9;
});