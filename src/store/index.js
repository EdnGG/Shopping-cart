import { createStore } from "vuex";

export default createStore({
  state: {
    productos: [],
    carrito: {},
  },
  mutations: {
    aumentar(state, payload) {
      // state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1;
      state.carrito[payload].cantidad++;
    },
    disminuir(state, payload) {
      state.carrito[payload].cantidad--;
      // state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1;
      if (state.carrito[payload].cantidad === 0) {
        // El operador delete  elimina una propiedad de un objeto.
        // delete sólo es efectivo en propiedades de objetos. No tiene ningún efecto en variables o en nombres de funciones.
        delete state.carrito[payload];
      }
    },
    vaciarCarrito(state) {
      state.carrito = {};
    },
    setCarrito(state, payload) {
      state.carrito[payload.id] = payload;
      // console.log(state.productos);
    },
    setProducto(state, payload) {
      state.productos = payload;
      // console.log(state.productos);
    },
  },
  actions: {
    agregarAlCarro({ commit, state }, producto) {
      state.carrito.hasOwnProperty(producto.id)
        ? (producto.cantidad = state.carrito[producto.id].cantidad + 1)
        : (producto.cantidad = 1);
      commit("setCarrito", producto);
    },
    async fetchData({ commit }) {
      try {
        const res = await fetch("./api.json");
        const data = await res.json();
        commit("setProducto", data);
      } catch (e) {
        console.log(`Error: ${e.message}`);
      }
    },
  },
  getters: {
    totalCantidad(state) {
      return Object.values(state.carrito).reduce(
        (acc, { cantidad }) => acc + cantidad,
        0
      );
    },
    totalPrecio(state) {
      return Object.values(state.carrito).reduce(
        (acc, { cantidad, precio }) => acc + cantidad * precio,
        0
      );
    },
  },
  modules: {},
});
