// src/services/websocket.js

const ws = new WebSocket('ws://localhost:8000/ws/game/');

ws.onopen = () => {
    console.log("Connected to WebSocket!");
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    // Handle AI moves or multiplayer game state updates
};

export default ws;
