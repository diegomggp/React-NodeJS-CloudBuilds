require('dotenv').config();
require('./utils/db_mongo')
const express = require('express');
const morgan = require('morgan');
const error404 = require('./middlewares/error404')
const app = express();
const cors = require('cors');

// Módulos de Rutas
const usersApiRoutes = require('./routes/usersApiRoutes');

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));

app.use(morgan('combined'))
app.use(cors());

// Rutas 
app.get('/', (req, res) => {
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000'; // Puedes configurar BASE_URL como una variable de entorno en tu plataforma de alojamiento
    res.json({ msj: `Bienvenido. Usa las siguientes rutas para obtener información sobre usuarios: ${baseUrl}/api/users` });
});

app.use('/api/users', usersApiRoutes); // Rutas web users

app.use(error404); // Middleware Para ruta no encontrada (404)

const port = process.env.PORT || 3000; // Usar el puerto proporcionado por Cloud Run o 3000 como valor predeterminado

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});




// require('dotenv').config();
// require('./utils/db_mongo')
// const express = require('express');
// const morgan = require('morgan');
// const error404 = require('./middlewares/error404')
// const app = express();
// const cors = require('cors');

// // Módulos de Rutas
// const usersApiRoutes = require('./routes/usersApiRoutes');

// // Middlewares
// app.use(express.json()); // Habilitar tipo de dato a recibir
// app.use(express.urlencoded({ extended: true }));

// app.use(morgan('combined'))
// app.use(cors());

// // Rutas 
// app.get('/', (req, res) => {
//     res.json({ msj: `Bienvenido. Usa las siguientes rutas para obtener información sobre usuarios: /api/users` })
// });

// app.use('/api/users', usersApiRoutes); // Rutas web users

// app.use(error404); // Middleware Para ruta no encontrada (404)

// const port = process.env.PORT || 3000; // Usar el puerto proporcionado por Cloud Run o 3000 como valor predeterminado

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });
