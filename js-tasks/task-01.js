function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

function makeNegative(num) {
  if (num > 0) {
    return -num;
  }
  return num;
}

function move(position, roll) {
  return position + roll * 2;
}

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  }
  return "Hello guest";
}

function litres(time) {
  return Math.floor(time * 0.5);
}

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
