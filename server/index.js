import express from 'express';
import bodyParser from 'body-parser';
import users from './mocks/users';
import logger from './middleware/logger';
import withAuthentication from './middleware/withAuthentication';
import { UserModel } from './models/User';
import db from './db';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(withAuthentication);
app.use(logger);

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

app.get('/v1/users/:id', (req, res) => {
    res.send(users[0]);
});

app.get('/v1/users', (req, res) => {
    res.send(users);
});

app.post('/v1/users', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const role = req.body.role;
    console.log('post: data =>', username, email, role);
    res.status(200).end();
});

app.put('/v1/users/:id', (req, res) => {
    const id = req.params.id;
    const username = req.body.username;
    const email = req.body.email;
    const role = req.body.role;
    console.log('put: data =>', id, username, email, role);
    res.status(200).end();
});

app.delete('/v1/users/:id', (req, res) => {
    console.log('delete: data =>', req.params.id);
    res.status(200).end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));