import { modelCanciones } from "../model/canciones.model.js";

// Obtener todas las canciones
const getCanciones =  async (req, res) => {
    // Lógica para obtener todas las canciones
    try {
        const canciones = await modelCanciones.getCanciones();
        return res.status(201).json({ message: "Se obtienen las canciones", canciones});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al crear la canción" });
    }
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
const deleteCancion = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "El ID es obligatorio" });
    }

    try {
        const cancion = await modelCanciones.getCancionById(id);

        if (!cancion) {
            return res.status(400).json({ message: "No se puede eliminar esta canción porque no existe" });
        }

        await modelCanciones.deleteCancion(id);

        return res.status(200).json({ message: "Canción eliminada exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al eliminar la canción" });
    }
};


// Exportar todas las funciones como un objeto
export default {
    getCanciones,
    getCancionById,
    createCancion,
    updateCancion,
    deleteCancion
};