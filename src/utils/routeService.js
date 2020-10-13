const BASE_URL = '/api/routes';

module.exports = {
    getAll,
    create,
    update,
    deleteOne
};

function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

function create(route) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(route)
    }).then(res => res.json());
}

function update(route) {
    return fetch(`${BASE_URL}/${route._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(route)
    }).then(res => res.json());
}

function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
}