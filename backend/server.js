const express = require('express')
const { MongoClient } = require('mongodb')

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

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log('Databases:');
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}