<template>
  <q-page class="row items-center justify-evenly"> </q-page>
</template>

<script lang="ts">
import PokemonCtrl from 'src/controllers/PokemonCtrl';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {};
  },
  async mounted() {
    const pokemons = await PokemonCtrl.getPokemons();
    console.log(pokemons);
  },
});
</script>
