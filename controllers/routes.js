const Route = require('../models/route');


module.exports = {
    index,
    create,
    show,
    update,
    deleteOne
};

async function index(req, res) {
    const routes = await Route.find({});
    res.status(200).json(routes);
}

async function create(req, res) {
    console.log(req.user)
    req.body.user = req.user;
    const route = await Route.create(req.body);
    res.status(201).json(route);
}

async function show(req, res) {
    const route = await Route.findById(req.params.id);
    res.status(200).json(route);
}

async function update(req, res) {
    const updatedRoute = await Route.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedRoute)
}

async function deleteOne(req, res) {
    const deletedRoute = await Route.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedRoute);
}

