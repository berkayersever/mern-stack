import { UserModel } from '../models/User';

export default (app) => {
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
};