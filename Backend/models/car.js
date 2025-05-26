const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  anio: { type: Number, required: true },
  color: { type: String, required: true },
  estado: { 
    type: String, 
    enum: ['disponible', 'reservado', 'alquilado'], 
    default: 'disponible' 
  }
});

module.exports = mongoose.model('Car', carSchema);
