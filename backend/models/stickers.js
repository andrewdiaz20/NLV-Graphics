const mongoose = require('mongoose')
const { Schema } = mongoose

const stickerSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

module.exports = mongoose.model('sticker', stickerSchema)