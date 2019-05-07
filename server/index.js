import express from 'express';
import bodyParser from 'body-parser';
import regeneratorRuntime from "regenerator-runtime";
import users from './mocks/users';
import logger from './middleware/logger';
import withAuthentication from './middleware/withAuthentication';
import { UserModel } from './models/User';
import { ProductModel } from './models/Product';
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

app.get('/v1/users', async (req, res) => {
    const users = await UserModel.find() || [];
    res.send(users);
});

app.get('/v1/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (user) {
            res.send(user);
        }
        else {
            res.status(404).end;
        }
    }
    catch (e) {
        res.status(404).end;
    }
});

app.post('/v1/users', (req, res) => {
    // TODO: Implement
    // const username = req.body.username;
    // const email = req.body.email;
    // const role = req.body.role;
    // console.log('post: data =>', username, email, role);
    res.status(200).end();
});

app.post('/v1/users/register', (req, res) => {
    // TODO: Implement
    res.status(200).end();
});

app.put('/v1/users/:id', (req, res) => {
    // TODO: Implement
    // const id = req.params.id;
    // const username = req.body.username;
    // const email = req.body.email;
    // const role = req.body.role;
    // console.log('put: data =>', id, username, email, role);
    res.status(200).end();
});

app.delete('/v1/users/:id', (req, res) => {
    // TODO: Implement
    // console.log('delete: data =>', req.params.id);
    res.status(200).end();
});

app.get('/v1/products', async (req, res) => {
    const products = await ProductModel.find() || [];
    res.send(products);
});

app.get('/v1/products/:id', async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        if (product) {
            res.send(product);
        }
        else {
            res.status(404).end;
        }
    }
    catch (e) {
        res.status(404).end;
    }
});

app.post('/v1/products', async (req, res) => {
    const product = await ProductModel.create(req.body);
    if (product) {
        res.status(200).end();
    }
    else {
        res.status(500).end();
    }
});

app.put('/v1/products/:id', (req, res) => {
    ProductModel.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) {
            res.status(500).end();
        }
        else {
            res.status(200).end();
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));