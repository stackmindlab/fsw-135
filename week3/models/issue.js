const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    userID:{
        type: Number,
        required: false
    }
})

module.exports = mongoose.model("Issue", issueSchema)