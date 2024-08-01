const express = require('express')
const { MongoClient } = require('mongodb');
const { resourceLimits } = require('worker_threads');

async function main(){
    const uri = "mongodb+srv://Franco8u:FuckYouMongoDb@cluster0.83njg8v.mongodb.net/";

    const client = new MongoClient(uri);
    
    try{
        await client.connect();

        await listDatabases(client);
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }        
}

main().catch(console.error);

async function createListing(client, newListing){
    await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId} `);
}

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log('Databases:');
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}

// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('Connected to MongoD'))
//     .catch(err => console.log(err));


// const PORT = process.env.PORT
// app.listen(PORT, console.log(`Listening on port ${PORT}`))