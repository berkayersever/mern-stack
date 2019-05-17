import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import session from 'express-session';
import connectStore from "connect-mongo";
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import logger from './middleware/logger';
import withAdminPermission from './middleware/withAdminPermission';
import withAuthentication from './middleware/withAuthentication';
import getUserRoutes from './routes/users';
import getProductRoutes from './routes/products';
import getSessionRoutes from './routes/session';
import getAuthRoutes from './routes/auth';
import getOrderRoutes from './routes/orders';
import db from './db';

const app = express();
const MongoStore = connectStore(session);
const port = process.env.PORT;
// const secret = process.env.JWT_SECRET;
app.use(session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        collection: 'session',
        ttl: parseInt(process.env.SESSION_LIFETIME) / 1000
    }),
    saveUninitialized: false,
    resave: false,
    cookie: {
        sameSite: true,
        // TODO: Replace 'false' with " process.env.NODE_ENV === 'production' "
        secure: false,
        maxAge: parseInt(process.env.SESSION_LIFETIME)
    }
}));
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
getSessionRoutes(app);
getAuthRoutes(app);
getOrderRoutes(app);

app.get('/time', (req, res) =>
    res.send({ datetime: new Date().toJSON() })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));