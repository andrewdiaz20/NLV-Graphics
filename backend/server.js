const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });




mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoD'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`listening on port ${PORT}`))


async function connect() {
    try {
        const conn = await client.connect();
        const db = await conn.db('NLV-Graphics');
        const coll = await db.collection('Products');
        const result = await coll.find().toArray();
        return result;
    }catch(err) { console.log(err)}
    return;
}

const Products = mongoose.model('Products',ProductsSchema)
module.exports = Bread

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/Products', async (req,res) => {
    const result = await connect();
    res.send(result);
})

app.use('/Products', Products)

// const sticker  = require('./routes/stickers');
// require('dotenv').config({ path: '.env' });
// import cors from 'cors';
// import { connect } from 'mongoose';
// const mongoose = require('mongoose')
// const express = require('express')

//middlewares
//cors is for the front end
// app.use(cors())
//tells server that it should parse out incoming json
// app.use(json())
//allows Epxress application to parse incoming requests with URL-encoded payloads || easier to handle for data submitted via POST requests
// app.use(urlencoded({extended: true}))



