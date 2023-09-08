let resultDict = {
    "rock scissors" : 1,
    "rock paper" : 0,
    "paper rock" : 1,
    "paper scissors" : 0,
    "scissors paper" : 1,
    "scissors rock" : 0
}

const statusIcons = document.querySelectorAll('.player img');
const resultText = document.querySelector('.result');
const pointCounters = document.querySelectorAll('.player div');

const buttons = document.querySelectorAll('.icons button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getRandomNum());
    });
});

function getRandomNum() {
    return Math.floor(Math.random() * 3);
}

function increasePoints(pointElement) {
    let pointText = pointElement.textContent;
    let pointCount = +pointText[pointText.length - 1];
    pointCount++;
    pointElement.textContent = pointText.substring(0, pointText.length - 1) + pointCount;
    return pointCount;
}

function playRound(playerSelection, randomNum) {
    let computerSelection = buttons[randomNum].id;
    statusIcons[0].src = "images/" + playerSelection + ".png";
    statusIcons[1].src = "images/" + computerSelection + ".png";
    
    if (playerSelection == computerSelection) {
        resultText.textContent = "her was a decent movie";
    }

    else {
        let wonRound = resultDict[playerSelection + " " + computerSelection];
        if (wonRound) {
            resultText.textContent = "ChatGPT can't do my homework";
            var newScore = increasePoints(pointCounters[0]);
            if (newScore == 5) {
                setTimeout(function() {
                    alert("Arnold was the best governor!");
                  }, 0);
                  window.location.reload();
            }
        }
        else {
            resultText.textContent = "AI is taking our jobs";
            var newScore = increasePoints(pointCounters[1]);
            if (newScore == 5) {
                setTimeout(function() {
                    alert("Point of Singularity Reached!");
                  }, 0);
                  window.location.reload();
            }
        }
    }
}