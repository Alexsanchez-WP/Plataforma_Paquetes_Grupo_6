import { ObjectId } from "mongodb";
import { mongoDBClient } from "../db/cliente";
require('dotenv').config()




//Mostrar todas las tareas por estados
export const getAllDataByStatus = async (estado) => {
    const cursor = await mongoDBClient.db('paquetes').collection('tareas').find({ isCompleted: estado });
    const data = await cursor.toArray();
    return await data;
}

//Recuperar una tareas especifica
export const getTaskById = async (id) => {
    const queryId = new ObjectId(id);
    const cursor = await mongoDBClient.db('paquetes').collection('tareas').findOne({ _id: queryId });
    const data = await cursor.toArray();
    return await data;
}

//Agregar un registro 
export const createTask = async (newTask) => {
    const { creator, title, task } = newTask;
    return await mongoDBClient.db('paquetes').collection('tareas').insertOne({
        isCompleted: false,
        creator: creator,
        title: title,
        task: task,
        createDate: new Date(),
        finish: null
    });
}

//Actualizar un registro
export const updateTask = async (taskId, newTask) => {
    const queryId = new Object(taskId);
    const { creator, title, task } = newTask;
    return await mongoDBClient.db('paquetes').collection('tareas').updateOne({ _id: queryId }, { $set: { creator, title, taks } });
}

//Eliminar un registro
export const deleteTask = async (taskId) => {
    const queryId = new Object(taskId);
    return await mongoDBClient.db('paquetes').collection('tareas').deleteOne({ _id: queryId });
}

//Actualizar un registro - Finalaizar tarea
export const completeTask = async (taskId) => {
    const queryId = new Object(taskId);
    return await mongoDBClient.db('paquetes').collection('tareas').updateOne({ _id: queryId }, { $set: { isCompleted: true, finish: new Date() } });
}