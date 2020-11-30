<template>
  <div class="container">
    <h1 class="text-center">e-Shopping Car</h1>

    <hr />
    <Carrito />
    <div class="row">
      <!-- In esta hecho para objetos
      of es para objetos y arrays -->
      <Card
        v-for="producto of productos"
        :key="producto.id"
        :producto="producto"
      />
      <!-- la linea :producto="producto" son los props 
      que pasan de padre a hijo (variable/nombre) -->
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
import Carrito from "./components/Carrito";
import Card from "./components/Card";
// import Footer from "./components/Footer";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
export default {
  name: "App",
  components: {
    Card,
    Carrito,
    // Footer,
  },
  // Create viene adentro de setup
  setup() {
    const store = useStore();
    // Antes de que se motado va a ejecutar algo
    onMounted(() => {
      store.dispatch("fetchData");
    });

    const productos = computed(() => {
      return store.state.productos;
    });
    // const carrito = computed(() => store.state.carrito);
    return { productos }; // carrito
  },
};
</script>

<style >
#app {
  background-color: rgb(204, 223, 223);
  color: rgb(92, 98, 100);
}
</style>


