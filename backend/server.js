const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });
const cors = require('cors');
const stickers = require('./models/stickers');
const { default: Stickers } = require('../frontend/src/Components/stickers');


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

const sticker = (req, res, next) => {
    // Your middleware logic here
    next();
};

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/sticker', sticker);
// app.get('/sticker', async (req, res) => {
//     try{
//     const sticker = await sticker.find();
//     res.json({sticker});
//     }catch(err){
//         res.status(500).json({ message: err.message })
//     }
// });


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));



