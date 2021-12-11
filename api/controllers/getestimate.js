const mongoose = require('mongoose');
const Estimate = mongoose.model('Estimate');

module.exports.getEstimate = async () => {
    return await mongoose.getCollection()
    .collection("estimates")
    .find({})
    .toArray();
}