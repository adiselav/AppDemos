const express = require('express')
const app = express()
const sequelize = require('./database/database'); // Importă sequelize corect
const User = require('./database/models/UserModel'); // Importă modelul după sequelize
const router = require('./routes/index')
const cors = require('cors')

app.use(express.json()); // Pentru a permite request-uri JSON
app.use(router)
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Range', 'X-Content-Range']
}));

// modele(tabela entitate), controlere(C.R.U.D. = CREATE, READ, UPDATE, DELETE), route
// GET-READ POST-CREATE PUT-UPDATE PATCH-UPDATE DELETE-DELETE 
// prima ruta ever

app.get('/',(req, res) => {
    res.send('hello, express server')
});
const PORT = 8090
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})