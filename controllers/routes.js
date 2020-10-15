const Route = require('../models/route');


module.exports = {
    index,
    create,
    show,
    update,
    deleteOne,
    queueAdd,
    queueRemove
};

async function index(req, res) {
    const routes = await Route.find({});
    res.status(200).json(routes);
}

async function create(req, res) {
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

function queueAdd(req, res) {
    Route.findById(req.params.id, function(err, route) {
        route.subscribedUsers.push(req.user._id);
        route.save(function(err) {
            res.status(200).json(route)
        });
    });
}

function queueRemove(req, res) {
    Route.findById(req.params.id, function(err, route) {
        let index = route.subscribedUsers.indexOf(req.user._id);
        if (index > -1) route.subscribedUsers.splice(index, 1);
        route.save(function(err) {
            res.status(200).json(route)
        });
    });
}



