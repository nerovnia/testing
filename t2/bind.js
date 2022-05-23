function changeScore(amount) {
  this.score = this.score + amount;
  console.log(this.score);
}

var user0001 = {
  name: 'Афанасий',
  score: 1300
}

var user0002 = {
  name: 'Анастасия',
  score: 2500
}

var changeScoreUser0001 = changeScore.bind(user0001);
var changeScoreUser0002 = changeScore.bind(user0002);

changeScoreUser0001(400); // 1700
changeScoreUser0001(-800); // 900

changeScoreUser0002(-700); // 1800
changeScoreUser0002(300); // 2100