import express from 'express';
import bodyParser from 'body-parser';
import regeneratorRuntime from "regenerator-runtime";
import logger from './middleware/logger';
import withAuthentication from './middleware/withAuthentication';
import getUserRoutes from './routes/users';
import getProductRoutes from './routes/products';
import db from './db';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(withAuthentication);
app.use(logger);
getUserRoutes(app);
getProductRoutes(app);

// req => bodyParser.json => bodyParser.urlencoded => withAuthentication => logger => request handler

app.get('/', function (req, res) {
    throw new Error('BROKEN') // Express will catch this on its own.
});

app.get('/heartbeat', (req, res) => res.send({
    dateTime: new Date().toJSON()
}));

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.get('/time', (req, res) =>
    res.send({ datetime: new Date().toJSON()
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));