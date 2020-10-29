let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    const number = Math.floor(Math.random() * 10);
    return number;
};

const getAbsoluteDistance = (dist1, dist2) => {
    return Math.abs(dist1 - dist2);
};

const compareGuesses = (user, comp, target) => {
    const userDist = getAbsoluteDistance(user, target);
    const compDist = getAbsoluteDistance(comp, target);
    if (userDist > compDist) {
        return false;
    } else {
        return true;
    }
};

const updateScore = (scoreBoard) => {
    if (scoreBoard === 'human') {
        humanScore++;
    } else if (scoreBoard === 'computer') {
        computerScore++;
    }
};

const advanceRound = () => {
    currentRoundNumber++;
};