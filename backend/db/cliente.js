import DB_CONFIG from '../config/db.json';
import { MongoClient } from 'mongodb';
import { setUpMongoDBProcessWatchers } from './whatchers';

let mongoDBClient = null;
const listDataBase = async() => {
    try {

        if (mongoDBClient !== null) {
            const lista = await mongoDBClient.db().admin().listDataBase();
            console.log("Bases de datos disponibles");
            lista.database.forEach((db) => console.log(`==>${db.name}`));

        } else {
            console.log("ERROR : No se encuentra conectado a la base de datos");
        }

    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}

export const connectToMongoDB = async() => {
    try {
        mongoDBClient = new MongoClient(DB_CONFIG.URL_DB);
        await mongoDBClient.connect();
        console.log("INFO: Conexion establecida");
        await listDataBase();
        setUpMongoDBProcessWatchers();
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }

}
export { mongoDBClient };