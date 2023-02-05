const winningCombinations = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6'],
    ['0', '3', '6']
];

const littleNewGame = document.querySelector('.littleNewGame');
const bigNewGame = document.querySelector('.bigNewGame');
const main = document.querySelector('.main');
const boards = document.querySelectorAll('.boards');
const playerX = document.querySelector('.playerX');
const playerO = document.querySelector('.playerO');
const reset = document.querySelector('.reset');
const players = document.querySelector('.players');
const winningMessage = document.querySelector('.winningMessage')
const winningMessageText = document.querySelector("#winningMessageText");
let circleTurn;
let toggle = true;
const activePlayer = document.querySelector('.activePlayer');
let pushedIndexX = [];
let pushedIndexO = [];

boards.forEach(cell => {
    cell.addEventListener('click', Event => {
        if (cell.textContent === '' && toggle) {
            toggle = !toggle;
            cell.textContent = "x";
            pushedIndexX.push(Event.target.id);
            playerO.classList.remove('activePlayer');
            playerX.classList.add('activePlayer');

            for (let winner = 0; winner < winningCombinations.length; winner++) {
                const final = winningCombinations[winner];

                if (pushedIndexX.includes(final[0]) && pushedIndexX.includes(final[1]) && pushedIndexX.includes(final[2])) {
                    winningMessage.classList.remove('none1');
                    winningMessageText.textContent = "X's wins!"
                    players.classList.add('playnone');
                    reset.classList.add('none');
                };
            };
        }

        if (cell.textContent === '') {
            toggle = !toggle;
            cell.textContent = "o"
            pushedIndexO.push(Event.target.id)
            playerX.classList.remove('activePlayer')
            playerO.classList.add('activePlayer')

            for (let winner = 0; winner < winningCombinations.length; winner++) {
                const final = winningCombinations[winner];

                if (pushedIndexO.includes(final[0]) && pushedIndexO.includes(final[1]) && pushedIndexO.includes(final[2])) {
                    winningMessage.classList.remove('none1');
                    winningMessageText.textContent = "O's wins!"
                    players.classList.remove('playnone');
                    reset.classList.add('none');
                }
            }
        };

    });

    littleNewGame.addEventListener('click', newgg)
    function newgg() {
        toggle = true;
        bigNewGame.classList.remove('none');
        littleNewGame.classList.add('none');
        main.classList.add('none');
        reset.classList.add('none');
        cell.textContent = '';
        winningMessage.classList.add('none1');
        players.classList.add('playnone');
        playerO.classList.add('activePlayer');
        playerX.classList.remove('activePlayer');
        pushedIndexX = [];
        pushedIndexO = [];
        console.log(littleNewGame);
    };

    reset.addEventListener('click', res)
    function res() {
        toggle = true;
        cell.textContent = '';
        pushedIndexX = [];
        pushedIndexO = [];
        playerO.classList.add('activePlayer');
        playerX.classList.remove('activePlayer');
    };

    bigNewGame.addEventListener('click', newg)
    function newg() {
        bigNewGame.classList.add('none');
        littleNewGame.classList.remove('none');
        main.classList.remove('none');
        reset.classList.remove('none');
        players.classList.remove('playnone');
        playerO.classList.add('activePlayer');
    };
})


