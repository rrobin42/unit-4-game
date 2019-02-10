
//OBJECTS FOR CHARACTERS
var obi = {
  health: 100,
  atk: 12,
  catk: 10
}
var luke = {
  health: 100,
  atk: 11,
  catk: 15
}
var vader = {
  health: 100,
  atk: 10,
  catk: 20
}
var r2d2 = {
  health: 100,
  atk: 8,
  catk: 9
}

var player;
var enemy;
var fighters = 0;
//ONCLICK FUNCTIONS FOR CHOOSING PLAYER TO USE OR FIGHT AGAINST
$("#cobi").click(function () {

  //IF PLAYER HAS NOT SELECTED A FIGHTER
  if (fighters === 0) {
    fighters++;

    //SET PLAYER AS FIGHTER AND ADJUST HTML
    player = obi;
    $("#character").html($("#cobi").html());
    $("#cobi").empty();
  }
  //ELSE IF THEY HAVE SELECTED A FIGHTER, THEN THEY MUST BE SELECTING AN OPPONENT
  else {
    //SET ENEMY
    enemy = obi;
    $("#defender").html($("#cobi").html());
    $("#cobi").empty();
  }

});
$("#cobi").click(function () {

});
$("#cobi").click(function () {

});
$("#cobi").click(function () {

});
$("#attack").click(function () {
  //check if an enemy has been selected
  if (enemy === null) {

  }
  //IF ENEMY IS READY
  else {
    //PLAYER ATTACKS ENEMY AND TAKES HEALTH, VICE VERSA
    //PLAYERS ATTACK INCREASES BY ATTACK POWER
    enemy.health -= player.atk;

    //IF ENEMY RUNS OUR OF HEALTH 
    if (enemy.health <= 0) {

    }

    player.health -= enemy.catk;
    player.atk += player.atk;
  }
});