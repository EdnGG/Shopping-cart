<template>
  <div class="my-5">
    <h4>Items on e-Car</h4>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Action</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody id="items">
        <!-- {{
          items
        }} -->
        <Item v-for="item in items" :key="item.id" :item="item" />
      </tbody>
      <tfoot>
        <tr id="footer">
          <th scope="row" colspan="5" v-if="Object.keys(items).length === 0">
            Shopping Cart Empty... Lets buy something
          </th>
          <Footer v-else />
        </tr>
      </tfoot>
    </table>
    <!-- <h4>Cards</h4>
      <div class="row" id="cards"></div> -->
  </div>
</template>

<script>
import Footer from "./Footer";
import Item from "./Item";

import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: {
    Item,
    Footer,
  },
  setup() {
    const store = useStore();
    const items = computed(() => store.state.carrito);

    return { items };
  },
};
</script>

