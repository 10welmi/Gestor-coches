const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const carRoutes = require('./routes/carRoutes');

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', carRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
