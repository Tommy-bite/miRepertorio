

import {pool} from "../db/conection.js";

const createCancion = async (newCancion) => {
    try {
        const { titulo, artista, tono } = newCancion;
        
        const query = {
            text: "INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *",
            values: [titulo, artista, tono]
        };

        const { rows } = await pool.query(query);

        return rows[0]; 
    } catch (error) {
        throw error; 
    }
};

const getCanciones = async (newCancion) => {
    try {
        
        const query = {
            text: "SELECT * FROM canciones",
        };

        const { rows } = await pool.query(query);

        return rows; 
    } catch (error) {
        throw error; 
    }
};

export const modelCanciones =  {
    createCancion,
    getCanciones
};
