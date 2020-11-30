<template>
  <th scope="row" colspan="2">Total Items</th>
  <td>{{ totalCantidad }}</td>
  <td>
    <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="vaciar">
      Empty Cart
    </button>
  </td>
  <td class="font-weight-bold">
    $ <span>{{ totalPrecio }}</span>
  </td>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    // getters y state se mapean en propiedades computed
    const totalCantidad = computed(() => store.getters.totalCantidad);
    const totalPrecio = computed(() => store.getters.totalPrecio);
    const vaciar = () => {
      store.commit("vaciarCarrito");
    };

    return { totalCantidad, totalPrecio, vaciar };
  },
};
</script>


