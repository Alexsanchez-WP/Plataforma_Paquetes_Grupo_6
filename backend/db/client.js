import { MongoClient } from "mongodb";
require('dotenv').config();


const uri = process.env.MONGO_HOST;
const client = new MongoClient(uri);

export const getAllData = async (collection) => {
    try {
        await client.connect();
        const database = await client.db("paquetes")
            .collection(collection)
            .find();

        return await database.toArray()
    } catch (error) {
        console.log("Error [getAllData]: ", error)
    } finally {
        await client.close();
    }
}


export const getOneData = async (collection, id) => {
    try {
        await client.connect();
        return await client.db("paquetes")
            .collection(collection)
            .findOne({ id });

    } catch (error) {
        console.log("Error [getOneData]: ", error)
    } finally {
        await client.close();
    }
}

export const createOne = async (collection, data) => {
    try {
        await client.connect();
        return await client.db('paquetes')
            .collection(collection)
            .insertOne(data);

    } catch (error) {
        console.log("Error [createOne]: ", error)
    } finally {
        await client.close();
    }
}
