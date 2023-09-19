const { mongoose } = require("mongoose")


//state schema
const mediaSchema = new mongoose.Schema({
    title: String,
    url: String,
    type: String,
    userId: String,
}, { timestamp: true }

);


const Media = mongoose.model('shikkhoniMedia', mediaSchema);
module.exports = Media