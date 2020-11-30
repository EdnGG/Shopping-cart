<template>
  <tr>
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.title }}</td>
    <td>{{ item.cantidad }}</td>
    <td>
      <button class="btn btn-success btn-sm" @click="aumentar(item.id)">
        +
      </button>
      <button class="btn btn-warning btn-sm" @click="disminuir(item.id)">
        -
      </button>
    </td>
    <td>${{ item.precio * item.cantidad }}</td>
  </tr>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["item"],
  setup() {
    const store = useStore();
    const aumentar = (id) => {
      store.commit("aumentar", id);
    };
    const disminuir = (id) => {
      store.commit("disminuir", id);
    };

    return { aumentar, disminuir };
  },
};
</script>

<style>
</style>