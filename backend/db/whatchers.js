import { mongoDBClient } from "./cliente";
//Cierre seguro
const gracefulShutdown = () => {
    console.log('Conexion con MongoDB cerrada');
    mongoDBClient.close();
}
export const setUpMongoDBProcessWatchers = () => {
    process.on('exit', gracefulShutdown);
    //Inteseccion de señales o comandos
    process.on('SIGINT', gracefulShutdown);
    process.on('SIGTERM', gracefulShutdown);
    process.on('SIGKILL', gracefulShutdown);
    //Execpciones no controladas
    process.on('uncaughtException', gracefulShutdown);
}