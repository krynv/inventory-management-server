import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const catSchema = new Schema({
    name: {
        type: String,
    }
});

module.exports = mongoose.model('Cat', catSchema);