const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  upVotes:{
    type: Number,
    default: 0
  },
  downVotes:{
    type: Number,
    default: 0
  },
  userID:{
    type: String,
    required: false
  }
})

module.exports = mongoose.model("Comments", commentSchema)