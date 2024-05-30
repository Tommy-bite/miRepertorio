import { pool } from "../db/conection.js";

const createCancion = async (newCancion) => {
  try {
    const { titulo, artista, tono } = newCancion;

    const query = {
      text: "INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *",
      values: [titulo, artista, tono],
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

const deleteCancion = async (id) => {
  try {
    const query = {
      text: "DELETE FROM canciones WHERE id = $1",
      values: [id],
    };

    const { rows } = await pool.query(query);

    return rows;
  } catch (error) {
    throw error;
  }
};


const updateCancion = async (id, editCancion) => {
    try {

        const {titulo, tono, artista} = editCancion;

      const query = {
        text: "UPDATE canciones SET titulo = $1, tono = $2, artista = $3 WHERE id = $4",
        values: [titulo, tono, artista, id],
      };
  
      const { rows } = await pool.query(query);
  
      return rows;
    } catch (error) {
      throw error;
    }
  };

const getCancionById = async (id) => {
    try {
        const query = {
            text: "SELECT * FROM canciones WHERE id = $1",
            values: [id],
        };

        const { rows } = await pool.query(query);

        return rows[0] || null;
    } catch (error) {
        throw error;
    }
};

export const modelCanciones = {
  createCancion,
  getCanciones,
  deleteCancion,
  getCancionById,
  updateCancion
};
