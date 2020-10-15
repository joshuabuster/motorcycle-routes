const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    subscribedUsers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    name: {type: String, required: true},
    startPoint: {type: String, required: true},
    endPoint: {type: String, required: true},
    miles: {type: Number, required: true},
    difficulty: {type: String, required: true},
    rating: {type: Number, required: true},
},{
    timestamps: true
});

module.exports = mongoose.model('Route', routeSchema);