const express = require('express');
const app = express();
const PORT = 3000;




app.get('/', (req, res) => {
    res.status(200).json({
        estado: "OK",
        mensaje: "Hola Mundo. Servidor Helpdesk inicializado correctamente por Jandry Zambrano."
    });
});


app.listen(PORT, () => {
    console.log(`Compilación exitosa: Servidor escuchando en http://localhost:${PORT}`);
});