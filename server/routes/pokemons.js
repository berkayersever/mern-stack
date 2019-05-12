import { PokemonModel } from '../models/Pokemon';

export default (app) => {
    app.get('/v1/pokemons', async (req, res) => {
        const { categories } = req.query;
        const categoryList = categories ? categories.split(',') : [];
        const pokemons = await PokemonModel.find(categoryList.length > 0 ? { categories: { $in: categoryList } } : undefined) || [];
        res.send(pokemons);
    });

    app.get('/v1/pokemons/:id', async (req, res) => {
        try {
            const pokemon = await PokemonModel.findById(req.params.id);
            if (pokemon) {
                res.send(pokemons);
            }
            else {
                res.status(404).end;
            }
        }
        catch (e) {
            res.status(404).end;
        }
    });

    app.post('/v1/pokemons', async (req, res) => {
        if (!req.isAdmin) {
            return res.status(403).end();
        }
        const pokemon = await PokemonModel.create(req.body);
        if (pokemon) {
            res.status(200).end();
        }
        else {
            res.status(500).end();
        }
    });

    app.put('/v1/pokemons/:id', (req, res) => {
        if (!req.isAdmin) {
            return res.status(403).end();
        }
        PokemonModel.findByIdAndUpdate(req.params.id, req.body, (err) => {
            if (err) {
                res.status(500).end();
            }
            else {
                res.status(200).end();
            }
        });
    });

    app.delete('/v1/pokemons/:id', (req, res) => {
        if (!req.isAdmin) {
            return res.status(403).end();
        }
        PokemonModel.findByIdAndDelete(req.params.id, (err) => {
            if (err) {
                res.status(500).end();
            }
            else {
                res.status(200).end();
            }
        });
    });
};