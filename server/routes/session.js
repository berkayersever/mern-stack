import express from 'express';
import Joi from 'joi';
import { UserModel } from '../models/User';
import { signin } from '../validations/user';
import { parseError, sessionizeUser } from '../scripts/helpers';
// const Joi = require('joi');
// const sessionRouter = express.Router();

export default (app) => {
    app.post('', async (req, res) => {
        try {
            const { email, password } = req.body;
            await Joi.validate({ email, password }, signin);

            const user = await UserModel.findOne({ email });
            if (user && user.comparePasswords(password)) {
                const sessionUser = sessionizeUser(user);

                req.session.user = sessionUser;
                res.send(sessionUser);
            } else {
                throw new Error('Invalid login credentials');
            }
        } catch (err) {
            res.status(401).send(parseError(err));
        }
    });

    app.delete('', ({ session }, res) => {
        try {
            const user = session.user;
            if (user) {
                session.destroy(err => {
                    if (err) throw (err);
                    res.clearCookie(process.env.SESSION_NAME);
                    res.send(user);
                });
            } else {
                throw new Error('Something went wrong');
            }
        } catch (err) {
            res.status(422).send(parseError(err));
        }
    });

    app.get('', ({ session: { user }}, res) => {
        res.send({ user });
    });
};