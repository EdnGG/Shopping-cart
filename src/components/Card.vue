<template>
  <div class="col-12 col-sm-4 col-md-3 col-lg-3 mb-3">
    <div class="card">
      <img
        style="height: 200px; width: 100%"
        :src="producto.thumbnailUrl"
        :alt="`imagen-${producto.title}`"
        class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">{{ producto.title }}</h5>
        <p>{{ producto.description }}</p>
        <p class="card-text">
          $ <span>{{ producto.precio }}</span>
        </p>
        <button @click="agregar(producto)" class="btn btn-dark btn-sm">
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["producto"],
  setup() {
    const store = useStore();
    const agregar = (producto) => {
      // dispatch accede a la accion que modifica la mutacion
      store.dispatch("agregarAlCarro", producto);
      console.log(producto);
    };
    return { agregar };
  },
};
</script>

<style>
/* .card {
  box-sizing: content-box !important;
} */
</style>