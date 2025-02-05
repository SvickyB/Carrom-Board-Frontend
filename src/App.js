import React, { useState, useEffect } from 'react';
import CarromBoard from './component/CarromBoard';
import socket from './services/websocket';

function App() {
  const [gameId, setGameId] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState('Player 1');
  
  useEffect(() => {
    // Join a game or initialize a new game
    const game_id = prompt("Enter Game ID to join, or leave blank to create a new game:");
    setGameId(game_id || Math.floor(Math.random() * 100000)); // create a new game if none
    socket.onopen = () => {
      console.log('Connected to the game server');
    };
    socket.onclose = () => {
      console.log('Disconnected from the game server');
    };
    
    // Handle game start or moves
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      console.log(data);
      if (data.move) {
        handleMove(data.move);
      }
    };
  }, []);

  const handleMove = (move) => {
    // Logic for updating the board or handling moves
    console.log("Move received:", move);
  };

  const handlePlayerMove = (move) => {
    // Send the player's move to the backend
    socket.send(JSON.stringify({
      move: move,
      player_turn: currentPlayer
    }));
  };

  return (
    <div className="App">
      <h1>Carrom Board Game</h1>
      {gameId && <p>Game ID: {gameId}</p>}
      <CarromBoard onMove={handlePlayerMove} />
    </div>
  );
}

export default App;
