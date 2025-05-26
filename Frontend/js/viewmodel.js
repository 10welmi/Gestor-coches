import { obtenerCoches, crearCoche } from './model.js';
import { ref, onMounted } from 'vue';

export function crearViewModel() {
  const coches = ref([]);
  const nuevoCoche = ref({
    marca: '',
    modelo: '',
    anio: '',
    color: ''
  });

  const cargarCoches = async () => {
    coches.value = await obtenerCoches();
  };

  const agregarCoche = async () => {
    if (!nuevoCoche.value.marca || !nuevoCoche.value.modelo) return;
    const cocheCreado = await crearCoche(nuevoCoche.value);
    coches.value.push(cocheCreado);

    // Reiniciar el formulario
    nuevoCoche.value = { marca: '', modelo: '', anio: '', color: '' };
  };

  onMounted(cargarCoches);

  return {
    coches,
    nuevoCoche,
    agregarCoche
  };
}
