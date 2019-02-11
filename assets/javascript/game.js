
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

var player;
var enemy = null;
var fighters = 0;
var start = false;
//ONCLICK FUNCTIONS FOR CHOOSING PLAYER TO USE
$("#cobi").click(function () {

  //SET PLAYER AS FIGHTER AND ADJUST HTML
  player = obi;
  $("#character").html($("#cobi").html());
  $("#cobi").empty();

  //SET ENEMIES AVAILABLE
  $("#luke").appendTo("#enemies");
  $("#vader").appendTo("#enemies");
  $("#r2d2").appendTo("#enemies");
  $("#characterlist").empty();
  start = true;
});

$("#cluke").click(function () {

  //SET PLAYER AS FIGHTER AND ADJUST HTML
  player = luke;
  $("#character").html($("#cluke").html());
  $("#cluke").empty();

  //SET ENEMIES AVAILABLE
  $("#obi").appendTo("#enemies");
  $("#vader").appendTo("#enemies");
  $("#r2d2").appendTo("#enemies");
  $("#characterlist").empty();
  start = true;

});

$("#cvader").click(function () {

  //SET PLAYER AS FIGHTER AND ADJUST HTML
  player = vader;
  $("#character").html($("#cvader").html());
  $("#cvader").empty();

  //SET ENEMIES AVAILABLE
  $("#obi").appendTo("#enemies");
  $("#luke").appendTo("#enemies");
  $("#r2d2").appendTo("#enemies");
  $("#characterlist").empty();
  start = true;
});

$("#cr2d2").click(function () {

  //SET PLAYER AS FIGHTER AND ADJUST HTML
  player = r2d2;
  $("#character").html($("#cr2d2").html());
  $("#cr2d2").empty();

  //SET ENEMIES AVAILABLE
  $("#obi").appendTo("#enemies");
  $("#luke").appendTo("#enemies");
  $("#vader").appendTo("#enemies");
  $("#characterlist").empty();
  start = true;

});


//ONCLICK FUNCTION FOR CHOOSING ENEMY
$("#obi").click(function () {
  if (enemy === null && start === true) {
    $("#enemies").remove("#obi");
    $("#obi").appendTo("#defender");
    enemy = obi;
  }
});
$("#luke").click(function () {
  if (enemy === null && start === true) {
    $("#enemies").remove("#luke");
    $("#luke").appendTo("#defender");
    enemy = luke;
  }
});
$("#vader").click(function () {
  if (enemy === null && start === true) {
    $("#enemies").remove("#vader");
    $("#vader").appendTo("#defender");
    enemy = vader;
  }
});
$("#r2d2").click(function () {
  if (enemy === null && start === true) {
    $("#enemies").remove("#r2d2");
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
    }else{



$("#ehealth").html("Health: " + enemy.health);

    player.atk += player.atk;
    
    
    }
  }
  //IF PLAYER HEALTH GOES BELOW 0
  if(player.health < 1){
    $("#character").html("<h3>YOU DIED! RELOAD THE PAGE AND PLAY AGAIN!</h3>");
  }
});