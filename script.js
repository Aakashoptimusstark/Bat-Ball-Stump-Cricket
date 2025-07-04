const Name= prompt("Hello👋.. Your Lucky Name")
document.querySelector("h2").innerHTML="Hello "+ Name;

let scoreStr = localStorage.getItem('score');
let score;
resetScore();

function resetScore(scoreStr) {
  score = scoreStr ? JSON.parse(scoreStr) : {
    win: 0,
    lose: 0,
    draw: 0,
  };
  score.displayScore = function () {
    return `Score: Won:${score.win}, Lost:${score.lose}, Draw:${score.draw}`;
  };

  showResult();

}

function funBat() {
  let computerChoice = generatedComputerChoice();

  let resultMsg = getResult('Bat', computerChoice);

  showResult('Bat', computerChoice, resultMsg);
}

function funBall() {
  computerChoice = generatedComputerChoice();

  resultMsg = getResult('Ball', computerChoice);
  
  showResult('Ball', computerChoice, resultMsg); 
}

function funStump() {
  computerChoice = generatedComputerChoice();
  
  resultMsg = getResult('Stump', computerChoice);

  showResult('Stump', computerChoice, resultMsg);
}

function funReset() {
  localStorage.clear()
  resetScore(scoreStr);
}


function generatedComputerChoice() {
  let randomNumber = Math.random() * 3;

  if (randomNumber > 0 && randomNumber <= 1) {
    return 'Bat';

  } else if (randomNumber > 1 && randomNumber <= 2) {
    return 'Ball';

  } else {
    return 'Stump';
  }
}

function getResult(userMove, computerMove) {
  if (userMove === 'Bat') {
    if (computerMove === 'Ball') {
      score.win++;
      return 'you win';
    } else if (computerMove === 'Stump') {
      score.lose++;
      return 'computer win';

    } else if (computerMove === 'Bat') {
      score.draw++;
      return 'draw';
    }
  } else if (userMove === 'Ball') {
    if (computerMove === 'Ball') {
      score.draw++;
      return 'draw';
    } else if (computerMove === 'Stump') {
      score.win++;
      return 'you win';
    } else if (computerMove === 'Bat') {
      score.lose++
      return 'computer win';
    }

  } else {
    if (computerMove === 'Ball') {
      score.lose++
      return 'computer win';
    } else if (computerMove === 'Stump') {
      score.draw++;
      return 'draw';
    } else if (computerMove === 'Bat') {
      score.win++;
      return 'you win';
    }
  }
}

function showResult(userMove, computerMove, result) {
  localStorage.setItem('Score', JSON.stringify(score));

  document.querySelector('#user-move').innerText = userMove ? `${Name} choosen ${userMove}` : '';

  document.querySelector('#computer-move').innerText = computerMove ? `computer chosen ${computerMove}` : '';

  document.querySelector('#result').innerText = result ? result : '';

  document.querySelector('#score').innerText = score.displayScore();

  // alert(`     you choose ${userMove}. 
  // Computer choice is ${computerMove}
  //  ${result}
  //  ${score.displayScore()}`);

}