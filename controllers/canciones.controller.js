import { modelCanciones } from "../model/canciones.model.js";

// Obtener todas las canciones
const getCanciones = (req, res) => {
    // Lógica para obtener todas las canciones
    res.json({ message: "Obteniendo todas las canciones" });
};

// Obtener una canción por ID
const getCancionById = (req, res) => {
    const { id } = req.params;
    // Lógica para obtener una canción por ID
    res.json({ message: `Obteniendo la canción con ID: ${id}` });
};


const createCancion = async (req, res) => {
    const { titulo, artista, tono } = req.body;

    if (!titulo || !artista || !tono) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const newCancion = {
        titulo,
        artista,
        tono
    };

    try {
        const cancion = await modelCanciones.createCancion(newCancion);
        return res.status(201).json({ message: "Canción creada" , cancion});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al crear la canción" });
    }
};


// Actualizar una canción por ID
const updateCancion = (req, res) => {
    const { id } = req.params;
    const { title, artist } = req.body;
    // Lógica para actualizar una canción por ID
    res.json({ message: `Canción con ID: ${id} actualizada`, data: { title, artist } });
};

// Eliminar una canción por ID
const deleteCancion = (req, res) => {
    const { id } = req.params;
    // Lógica para eliminar una canción por ID
    res.json({ message: `Canción con ID: ${id} eliminada` });
};

// Exportar todas las funciones como un objeto
export default {
    getCanciones,
    getCancionById,
    createCancion,
    updateCancion,
    deleteCancion
};