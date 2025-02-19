const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint para iniciar evaluación
app.post('/api/start-assessment', (req, res) => {
    // Lógica para manejar la evaluación
    res.json({ message: 'Assessment started' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 