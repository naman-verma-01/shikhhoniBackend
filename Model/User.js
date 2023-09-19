const { mongoose } = require("mongoose")


//state schema
const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    password: String,
}, { timestamp: true }

);


const User = mongoose.model('shikkhoniUser', userSchema);
module.exports = User