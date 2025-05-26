<template>
  <div class="container">
    <h1>Gestor de Coches</h1>

    <form @submit.prevent="agregarCoche">
      <input v-model="nuevoCoche.marca" placeholder="Marca" required />
      <input v-model="nuevoCoche.modelo" placeholder="Modelo" required />
      <input v-model="nuevoCoche.anio" type="number" placeholder="Año" required />
      <input v-model="nuevoCoche.color" placeholder="Color" required />
      <select v-model="nuevoCoche.estado" required>
        <option disabled value="">Seleccionar estado</option>
        <option value="disponible">Disponible</option>
        <option value="reservado">Reservado</option>
        <option value="alquilado">Alquilado</option>
      </select>
      <button type="submit">Agregar coche</button>
    </form>

    <ul>
      <li v-for="car in coches" :key="car._id">
        <img :src="`/images/${car.imagen || 'placeholder.png'}`" alt="Imagen del coche" class="car-img" />
        <span>
          {{ car.marca }} - {{ car.modelo }} ({{ car.anio }}) - {{ car.color }}
          <strong :class="car.estado || 'disponible'">({{ car.estado || 'disponible' }})</strong>
        </span>
        <button class="edit" @click="editarCoche(car)">Editar</button>
        <button @click="eliminarCochePorId(car._id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Coche, obtenerCoches, crearCoche, eliminarCoche } from '../js/model.js';

const coches = ref([]);
const nuevoCoche = ref(new Coche({
  marca: '',
  modelo: '',
  anio: '',
  color: '',
  estado: 'disponible',
  imagen: ''
}));

const cargarCoches = async () => {
  coches.value = await obtenerCoches();
};

const agregarCoche = async () => {
  const imagenNombre = `${nuevoCoche.value.marca.toLowerCase()}.png`;
  nuevoCoche.value.imagen = imagenNombre;

  const cocheCreado = await crearCoche(nuevoCoche.value);
  coches.value.push(cocheCreado);

  nuevoCoche.value = new Coche({
    marca: '',
    modelo: '',
    anio: '',
    color: '',
    estado: 'disponible',
    imagen: ''
  });
};

const eliminarCochePorId = async (id) => {
  await eliminarCoche(id);
  coches.value = coches.value.filter(car => car._id !== id);
};

const editarCoche = (car) => {
  nuevoCoche.value = new Coche(car);
  eliminarCochePorId(car._id);
};

onMounted(cargarCoches);
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #ffffff10;
  border-radius: 8px;
  color: #f4f4f4;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  margin-bottom: 1.5rem;
}

form input,
form select,
form button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 0.75rem;
  border-radius: 4px;
  border: none;
  font-size: 1rem;
}

form input,
form select {
  background-color: #333;
  color: white;
}

form button {
  background-color: #2ecc71;
  color: white;
  cursor: pointer;
  font-weight: bold;
}

form button:hover {
  background-color: #27ae60;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #eee;
  color: #222;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.car-img {
  width: 80px;
  height: auto;
  border-radius: 4px;
}

li span {
  flex: 1;
}

li button {
  margin-left: 4px;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

li button.edit {
  background-color: #3498db;
}

li button:not(.edit) {
  background-color: #e74c3c;
}

.disponible {
  color: green;
  margin-left: 8px;
}
.reservado {
  color: orange;
  margin-left: 8px;
}
.alquilado {
  color: red;
  margin-left: 8px;
}
</style>
