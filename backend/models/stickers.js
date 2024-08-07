const mongoose = require('mongoose')
const { Schema } = mongoose

const stickerSchema = new mongoose.Schema({
    name: { type: String, required: true},
    pic: String,
    price: Number
})

module.exports = mongoose.model('sticker', stickerSchema)