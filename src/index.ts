import { httpServer } from './http_server/httpServer';
import { wsServer } from './ws_server/wsServer';

const HTTP_PORT = 8181;

httpServer.listen(HTTP_PORT, () => {
  console.log(`Start static http server on the ${HTTP_PORT} port!`);
  wsServer(httpServer);
});
