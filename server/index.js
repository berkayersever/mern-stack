import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import logger from './middleware/logger';
import withAdminPermission from './middleware/withAdminPermission';
import withAuthentication from './middleware/withAuthentication';
import getUserRoutes from './routes/users';
import getProductRoutes from './routes/products';
import getAuthRoutes from './routes/auth';
import getOrderRoutes from './routes/orders';
import db from './db';

const app = express();
const port = process.env.PORT;
// const secret = process.env.JWT_SECRET;
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(withAuthentication);
app.use(withAdminPermission);
app.use(logger);
getUserRoutes(app);
getProductRoutes(app);
getAuthRoutes(app);
getOrderRoutes(app);

app.get('/time', (req, res) =>
    res.send({ datetime: new Date().toJSON() })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));