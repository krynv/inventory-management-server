import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
    }
    /**
     * id
     * image
     * qr code
     * original location - source location
     * taken out log {
     *     date taken out
     *     user that has taken item out (maybe object or just string)
     *     reason for taking item out
     * }
     */

});

module.exports = mongoose.model('Item', itemSchema);