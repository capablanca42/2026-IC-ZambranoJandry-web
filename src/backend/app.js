
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Base de datos MongoDB conectada exitosamente.'))
    .catch((err) => console.error('❌ Error crítico al conectar a MongoDB:', err));


app.get('/', (req, res) => {
    res.send('El motor del Helpdesk con IA está en línea y esperando jugadas.');
});


app.listen(PORT, () => {
    console.log(`🚀 Servidor backend corriendo con éxito en el puerto ${PORT}`);
});