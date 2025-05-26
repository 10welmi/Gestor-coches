const mongoose = require('mongoose');
const Car = require('./models/car');
const connectDB = require('./config/db');

const dades = [
  {
    marca: 'BMW',
    modelo: 'X3',
    anio: 2022,
    color: 'Negre',
    estado: 'disponible',
    imagen: 'bmw.png'
  },
  {
    marca: 'Toyota',
    modelo: 'Yaris',
    anio: 2021,
    color: 'Blanc',
    estado: 'reservado',
    imagen: 'toyota.png'
  },
  {
    marca: 'Audi',
    modelo: 'A3',
    anio: 2023,
    color: 'Gris',
    estado: 'alquilado',
    imagen: 'audi.png'
  }
];

const importar = async () => {
  try {
    await connectDB();
    await Car.deleteMany();
    await Car.insertMany(dades);
    console.log('🚗 Dades carregades correctament!');
    process.exit();
  } catch (error) {
    console.error('❌ Error al carregar dades:', error);
    process.exit(1);
  }
};

importar();
