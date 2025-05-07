const number_one = 'The fantasy football player you have on your team is Man City footballer Haaland';
const number_two = 'The fantasy football player you have on your team is Newcastle FC footballer Anthony Gordon';
const number_three = 'The fantasy football player you have on your team is Man UTD FC footballer Bruno Fernandes';
const number_four = 'The fantasy football player you have on your team is Chelsea FC footballer Reece James';
const number_five = 'The fantasy football player you have on your team is Arsenal footballer Saliba';
const number_six = 'The fantasy football player you have on your team is Liverpool FC footballer Alisson';
const number_seven = 'The fantasy football player you have on your team is Tottenham Hotspur FC footballer Son Heung-min';
const number_eight = 'The fantasy football player you have on your team is Aston Villa FC footballer Ollie Watkins';
const number_nine = 'The fantasy football player you have on your team is Brighton & Hove Albion footballer Kaoru Mitoma';

const FantasyFootballPlayer = {
  number_one: number_one,
  number_two: number_two,
  number_three: number_three,
  number_four: number_four,
  number_five: number_five,
  number_six: number_six,
  number_seven: number_seven,
  number_eight: number_eight,
  number_nine: number_nine
};

function generateRandomMessage() {
    const keys = Object.keys(FantasyFootballPlayer);
    const randomIndex = keys[Math.floor(Math.random() * keys.length)];


let playerMessage;
switch (randomIndex) {
    case 'number_one':
        playerMessage = '${FantasyFootballPlayer[randomIndex]}';
        break;
    case 'number_two':
        playerMessage = '${FantasyFootballPlayer[randomIndex]}';
        break;
    case 'number_three':
        playerMessage = '${FantasyFootballPlayer[randomIndex]}';
        break;
    case 'number_four':
        playerMessage = '${FantasyFootballPlayer[randomIndex]}';
        break;
    case 'number_five':
        playerMessage = '${FantasyFootballPlayer[randomIndex]}';
        break;
    case 'number_six':
        playerMessage = '${FantasyFootballPlayer[randomIndex]}';
        break;
    case 'number_seven':
        playerMessage = '${FantasyFootballPlayer[randomIndex]}';
        break;
    case 'number_eight':
        playerMessage = '${FantasyFootballPlayer[randomIndex]}';
        break;
    case 'number_nine':
        playerMessage = '${FantasyFootballPlayer[randomIndex]}';
        break;
        default:
            playerMessage = '${FantasyFootballPlayer[randomIndex]}';
}

return playerMessage;
}

console.log(generateRandomMessage());