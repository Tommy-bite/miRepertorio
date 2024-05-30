import express from 'express';
import cancionesRoutes from './routes/canciones.route.js'

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
})

app.use('/canciones', cancionesRoutes)


// Middleware para manejar rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).send('Oh no pagina no encontrada');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:' + PORT );
})