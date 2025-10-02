console.log("JavaScript file loaded");
let gameSessions = {};
let currentPlayer = null;
let currentGameID = null;
function createGame() {
	console.log("Create Game triggered");
	const name = document.getElementById("playerName").value.trim();
	const time = parseInt(document.getElementById("gameTime").value);
	if (!name) return updateStatus("Please enter a name.");
	if (!time || time < 1) return updateStatus("Enter a valid game time.");
	const gameID = "game_" + Math.floor(Math.random() * 10000);
	gameSessions[gameID] = {
		players: [name],
		timeLimit: time,
		started: false
	};
	currentPlayer = name;
	currentGameID = gameID;
	document.getElementById("gameIDDisplay").innerText = `Game ID: ${gameID}`;
	updateStatus(`Players: ${gameSessions[gameID].players.join(", ")}`);
}
function joinGame() {
	console.log("Join Game triggered");
	const name = document.getElementById("playerName").value.trim();
	const gameID = prompt("Enter Game ID to join:");
	if (!name) return updateStatus("Please enter a name.");
	if (!gameSessions[gameID]) return updateStatus("Game not found.");
	gameSessions[gameID].players.push(name);
	currentPlayer = name;
	currentGameID = gameID;
	document.getElementById("gameIDDisplay").innerText = `Joined Game: ${gameID}`;
	updateStatus(`Joined game ${gameID}. Players: ${gameSessions[gameID].players.join(", ")}`);
}
function updateStatus(msg) {
	document.getElementById("gameStatus").innerText = msg;
}