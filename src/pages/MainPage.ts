import PokemonCtrl from 'src/controllers/PokemonCtrl';
import { Pokemon } from 'src/classes/Pokemon';
import { defineComponent } from 'vue';
import { returnPokemonId } from 'src/util/AppUtil';
import { POKEMON_TYPES_CARD } from 'src/util/Constantes';
import { Loading } from 'quasar';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      pokemonList: [] as Pokemon[],
      lastPokemon: 0,
    };
  },
  async mounted() {
    this.getNextPokemon();
    this.pokemonList = await PokemonCtrl.getPokemons();
    this.getLastPokemonId();
  },
  methods: {
    formatPokemonId(pokemonId: number): string {
      return returnPokemonId(pokemonId);
    },
    pokemonCardBackground(primaryType: string): string {
      const type = primaryType.toUpperCase();
      return `background: ${POKEMON_TYPES_CARD[type]}`;
    },
    getNextPokemon(): void {
      window.onscroll = async () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          Loading.show({ message: 'Loading more Pokémon...' });
          const newPokemons = await PokemonCtrl.getPokemons(20, this.lastPokemon);
          newPokemons.forEach((pokemon) => this.pokemonList.push(pokemon));
          this.getLastPokemonId();
          Loading.hide();
        }
      };
    },
    getLastPokemonId(): void {
      const index = this.pokemonList.length - 1;
      const lastPokemon = this.pokemonList[index];
      this.lastPokemon = lastPokemon.id;
    },
  },
});
