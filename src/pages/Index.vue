<template>
  <q-page class="row items-center justify-evenly"> </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PokemonService from 'src/services/PokemonService';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {};
  },
  async mounted() {
    const pokemons = await PokemonService.getPokemons();
    console.log(pokemons);
  },
});
</script>
