const mongoose = require('mongoose');
const Estimate = mongoose.model('Estimate');

module.exports.deleteEstimate = async (estimateName) => {
    const connection = mongoose.getCollection();
    await connection
        .collection("estimates")
        .deleteOne({name: estimateName});
}
