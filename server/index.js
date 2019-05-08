import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import regeneratorRuntime from "regenerator-runtime";
import logger from './middleware/logger';
import withAuthentication from './middleware/withAuthentication';
import getUserRoutes from './routes/users';
import getProductRoutes from './routes/products';
import db from './db';

const app = express();
const port = 8055;
const secret = process.env.JWT_SECRET;
// console.log("secret: ", secret);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(withAuthentication);
app.use(logger);
getUserRoutes(app);
getProductRoutes(app);

app.get('/time', (req, res) =>
    res.send({ datetime: new Date().toJSON()
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));