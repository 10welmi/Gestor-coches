// src/models/model.js

export class Coche {
  constructor({ marca, modelo, anio, color, estado = 'disponible', _id = null, imagen = '' }) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
    this.estado = estado;
    this._id = _id;
    this.imagen = imagen || 'placeholder.jpg'; // por defecto
  }
}

const API_URL = 'http://localhost:3000/api/cars';

export async function obtenerCoches() {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.map(coche => new Coche(coche));
}

export async function crearCoche(coche) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(coche)
  });
  const creado = await res.json();
  return new Coche(creado);
}

export async function eliminarCoche(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}
