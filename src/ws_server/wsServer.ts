import { WebSocketServer } from 'ws';
import { Server } from 'http';

export const wsServer = (server: Server) => {
  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws) => {
    console.log('A new client connected');

    ws.send(JSON.stringify({ message: 'Welcome to the WebSocket server!' }));

    ws.on('message', (data: string) => {
      console.log(`Received message from client: ${data}`);
    });

    ws.on('close', () => {
      console.log('Connection closed');
    });
  });

  console.log(`WebSocket server is listening together with HTTP server ...`);
};
