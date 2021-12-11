const mongoose = require('mongoose');

export { deleteEstimate } from '../controllers/deleteestimate';
export { getEstimate } from '../controllers/getestimate';

const estimateSchema = new mongoose.Schema({
    _id: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    rooms: {
        type: Number,
        required: true
    },
    feetsquared: {
        type: String,
        required: true
    },
    linearfeet: {
        type: String,
        required: true
    },
    totallabor: {
        type: String,
        required: true
    },
    totalmaterial: {
        type: String,
        required: true
    },
    totalcost: {
        type: String,
        required: true
    }
  });

mongoose.model('Estimate', estimateSchema);


