import Server from "./classes/server";
import { SERVER_PORT } from "./global/environment";
import router from "./routes/router";
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

// BodyParser
server.app.use(bodyParser.urlencoded({
    extended: true
}));
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({
    origin: true, 
    credentials: true
}));

// Services Routes
server.app.use('/', router);

server.start(() => {
    console.log(`Servidor Inicializado en el Puerto ${SERVER_PORT}`);
});