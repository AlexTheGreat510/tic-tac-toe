/* VARIABLES */

const player1 = 'X'
const player2 = 'O'
const gameCells = document.querySelectorAll('th');
const gamePlayer1Score = document.getElementById('player1-score');
const gamePlayer2Score = document.getElementById('player2-score');

let player1Score = 0;
let player2Score = 0;
let currentPlayer = player1;

/* EVENTS */

gameCells.forEach((cell) => {
	cell.addEventListener('click', () => {

		/* change cell text */
		cell.innerText = currentPlayer;

		/* check the winner of the game */
		checkWinner(currentPlayer);

		/* toggle current player */
		if (currentPlayer === player1) currentPlayer = player2;
		else
			currentPlayer = player1;
	});
});

/* FUNCTION */

function emptyCells()
{
	gameCells.forEach((cell) => {
		cell.innerText = '[]';
	});
}

function isWinner(player)
{
	/* check if player1 is the winner */
	if (player === player1) {
		player1Score++;
		gamePlayer1Score.innerText = player1Score;
		alert(`Player1 (${player1}) is the winner! [${player1Score}]`);
		emptyCells();

	/* check if player2 is the winner */
	} else {
		player2Score++;
		gamePlayer2Score.innerText = player2Score;
		alert(`Player2 (${player2}) is the winner! [${player2Score}]`);
		emptyCells();
	}
}

function checkWinner(player)
{
	/* check table rows */
	if (gameCells[0].innerText === player && gameCells[1].innerText === player && gameCells[2].innerText === player) isWinner(player);
	else if (gameCells[3].innerText === player && gameCells[4].innerText === player && gameCells[5].innerText === player) isWinner(player);
	else if (gameCells[6].innerText === player && gameCells[7].innerText === player && gameCells[8].innerText === player) isWinner(player);

	/* check table columns */
	if (gameCells[0].innerText === player && gameCells[3].innerText === player && gameCells[6].innerText === player) isWinner(player);
	else if (gameCells[1].innerText === player && gameCells[4].innerText === player && gameCells[7].innerText === player) isWinner(player);
	else if (gameCells[2].innerText === player && gameCells[5].innerText === player && gameCells[8].innerText === player) isWinner(player);

	/* check table cross */
	if (gameCells[0].innerText === player && gameCells[4].innerText === player && gameCells[8].innerText === player) isWinner(player);
	else if (gameCells[2].innerText === player && gameCells[4].innerText === player && gameCells[6].innerText === player) isWinner(player);

	/* check if tie between players */
	if (!gameCells[0].innerText === '[]' && !gameCells[1].innerText === '[]' && !gameCells[2].innerText === '[]' &&
		!gameCells[3].innerText === '[]' && !gameCells[4].innerText === '[]' && !gameCells[5].innerText === '[]' &&
		!gameCells[6].innerText === '[]' && !gameCells[7].innerText === '[]' && !gameCells[8].innerText === '[]') {
		alert("Tie between players!");
		emptyCells();
	}
}