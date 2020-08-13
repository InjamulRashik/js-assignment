// ****Feet to mile converter****

function feetToMile(feet) {
  if (feet == 0) {
    return "Please insert a value";
  } else {
    var mile = feet / 5280;
    return mile;
  }
}
var result = feetToMile(500);
console.log(result);

// ****Wood Calculator****

function woodCalculator(chair, table, bed) {
  if (chair < 0 || table < 0 || bed < 0) {
    return "Please Insert valid value";
  } else {
    var totalWood = chair * 1 + table * 2 + bed * 5;
    return totalWood;
  }
}
var totalWoodNeeded = woodCalculator(1, 1, 1);
console.log(totalWoodNeeded);

// ****Brick Calculator****

function brickCalculator(floor) {
  var bricksNeed = 1000;

  if (floor < 0) {
    return "Please input Floor value";
  } else if (floor <= 10) {
    var bricksNeed = floor * (15 * bricksNeed);
    return bricksNeed;
  } else if (floor > 10 && floor <= 20) {
    var firstTenFloor = 10;

    var afterTenFloor = floor - firstTenFloor;

    var bricksWithinTwenty =
      firstTenFloor * (15 * bricksNeed) + afterTenFloor * (12 * bricksNeed);

    return bricksWithinTwenty;
  } else {
    flAfterTwenty = floor - 20;
    twentyFlBricks = 10 * (15 * bricksNeed) + 10 * (12 * bricksNeed);
    totalBricks = flAfterTwenty * (10 * bricksNeed) + twentyFlBricks;
    return totalBricks;
  }
}

var brickAmount = brickCalculator(50);

console.log(brickAmount);

// ****Tiny Friend****

function tinyFriend(friendName) {
  var tinyName = friendName[0];
  if (friendName.length == 0) {
    return "Please input Names!";
  } else {
    for (var i = 0; i < friendName.length; i++) {
      var name = friendName[i];
      if (name.length == 0) {
        return "Can not use empty string";
      } else {
        if (name.length <= tinyName.length) {
          tinyName = name;
        }
      }
    }
  }
  return tinyName;
}
const result = tinyFriend([
  "GeneralHanzo",
  "GeneralMeem",
  "ZahinRay",
  "Friktion",
]);
console.log(result);
