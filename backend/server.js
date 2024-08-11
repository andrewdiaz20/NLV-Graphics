const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });
const cors = require('cors');


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
app.get('/sticker', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));



