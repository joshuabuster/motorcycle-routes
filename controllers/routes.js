const Route = require('../models/route');


module.exports = {
    index,
};

async function index(req, res) {
    const routes = await Route.find({});
    res.status(200).json(routes);
}

