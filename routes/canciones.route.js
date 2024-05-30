import { Router } from 'express';
import cancionesController from '../controllers/canciones.controller.js';

const router = Router();

// Define tus rutas aquí
router.get('/', cancionesController.getCanciones);
router.post('/' , cancionesController.createCancion)
router.delete('/:id' , cancionesController.deleteCancion)
router.put('/:id' , cancionesController.updateCancion)


export default router;