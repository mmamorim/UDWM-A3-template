<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <topo @toggleMenu="toggleLeftDrawer"/>
    <menu_opcoes ref="menuopcoesref" @selectItem="selectItem"/>
    <q-page-container>
      <div class="p-2" v-if="route == 'Atividades'">
        Atividades
      </div>
      <div class="p-2" v-if="route == 'Categorias'">
        Categorias
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import topo from "./components/topo.vue"
import menu_opcoes from "./components/menu.vue"

export default {
  components: { topo, menu_opcoes },
  data() {
    return {
      leftDrawerOpen: true,
      route: 'Atividades'
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.$refs.menuopcoesref.toggleLeftDrawer()
    },
    selectItem(item) {
      console.log(item);
      this.route = item.label
    }
  },
}
</script>
<style></style>