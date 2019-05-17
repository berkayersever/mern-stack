import express from 'express';
import { signup } from '../validations/user';
import { UserModel } from '../models/User';
import { parseError, sessionizeUser } from '../scripts/helpers';
// import AuthenticationService from "../service/AuthenticationService";
// import EmailService from "../service/EmailService";

const Joi = require(`@hapi/joi`);

export default (app) => {
    app.get('/v1/users', async (req, res) => {
        if (!req.isAdmin) {
            return res.status(403).end();
        }
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
        catch (err) {
            res.status(404).end;
        }
    });

    app.post('/v1/users', (req, res) => {
        if (!req.isAdmin) {
            return res.status(403).end();
        }
        // TODO: Implement
        // const username = req.body.username;
        // const email = req.body.email;
        // const role = req.body.role;
        // console.log('post: data =>', username, email, role);
        res.status(200).end();
    });

    app.post('/v1/users/signup', async (req, res) => {
        try {
            const { email, username, password, role } = req.body;
            // TODO: Fix Validation
            // await Joi.validate({ email, username, password, role }, signup);
            const newUser = new UserModel({ email, username, password, role });
            const sessionUser = sessionizeUser(newUser);
            await newUser.save();
            req.session.user = sessionUser;
            console.log(req.session);
            res.send(sessionUser);
        }
        catch (err) {
            res.status(400).end;
        }

        // const { email } = req.body;
        // if (email === undefined || email.split('@').length !== 2) {
        //     return res.status(400).end();
        // }
        //
        // const user = await UserModel.findOne({ email });
        // if (user) {
        //     const token = await AuthenticationService.generate(user);
        //     console.log('User exists. Generating a new token.');
        //     EmailService.sendEmail(user, token);
        //     res.status(200).end();
        // } else {
        //     const newUser = await UserModel.create({
        //         username: email.split('@')[0],
        //         email,
        //         role: 'customer',
        //     });
        //
        //     const token = await AuthenticationService.generate(newUser);
        //     console.log('Created a new user: ', newUser);
        //     EmailService.sendEmail(newUser, token);
        //     res.status(200).end();
        // }

    });

    app.post('/v1/users/register', (req, res) => {
        // TODO: Implement
        res.status(200).end();
    });

    app.put('/v1/users/:id', (req, res) => {
        if (!req.isAdmin) {
            return res.status(403).end();
        }
        // TODO: Implement
        // const id = req.params.id;
        // const username = req.body.username;
        // const email = req.body.email;
        // const role = req.body.role;
        // console.log('put: data =>', id, username, email, role);
        res.status(200).end();
    });

    app.delete('/v1/users/:id', (req, res) => {
        if (!req.isAdmin) {
            return res.status(403).end();
        }
        // TODO: Implement
        // console.log('delete: data =>', req.params.id);
        res.status(200).end();
    });
};