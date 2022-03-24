import PokemonCtrl from 'src/controllers/PokemonCtrl';
import { Pokemon } from 'src/classes/Pokemon';
import { defineComponent } from 'vue';
import { returnPokemonId } from 'src/util/AppUtil';
import { POKEMON_TYPES_CARD } from 'src/util/Constantes';
import { Loading } from 'quasar';

export default defineComponent({
  name: 'MainPage',
  data() {
    return {
      pokemonList: [] as Pokemon[],
      lastPokemon: 0,
      text: '',
      isFiltered: false,
      isDetailsOpening: false,
    };
  },
  async mounted() {
    this.isDetailsOpening = false;
    this.$store.dispatch('general/setPokemon', null);
    this.getNextPokemon();
    await this.initialQuery();
  },
  methods: {
    formatPokemonId(pokemonId: number): string {
      return returnPokemonId(pokemonId);
    },
    pokemonCardBackground(primaryType: string): string {
      const type = primaryType.toUpperCase();
      return `background: ${POKEMON_TYPES_CARD[type]}`;
    },
    async initialQuery(): Promise<void> {
      try {
        Loading.show({ message: 'Loading Pokémon...' });
        this.pokemonList = await PokemonCtrl.getPokemons();
        this.getLastPokemonId();
        this.isFiltered = false;
        this.text = '';
        Loading.hide();
      } catch (e) {
        console.log(e);
      }
    },
    async findPokemon(): Promise<void> {
      try {
        Loading.show({ message: 'Searching Pokémon...' });
        if (this.text !== '') {
          const pokemon = await PokemonCtrl.getPokemon(this.text);
          if (pokemon) {
            this.pokemonList = [];
            this.pokemonList.push(pokemon);
            this.isFiltered = true;
          }
        } else {
          await this.initialQuery();
        }
      } catch (e) {
        console.log(e);
      } finally {
        Loading.hide();
      }
    },
    getNextPokemon(): void {
      window.onscroll = async () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow && !this.isDetailsOpening) {
          Loading.show({ message: 'Loading more Pokémon...' });
          const newPokemons = await PokemonCtrl.getPokemons(30, this.lastPokemon);
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
    getTypeImage(type: string): string {
      const typeLower = type.toLowerCase();
      return `types/${typeLower}.svg`;
    },
    directToPokemonDetails(pokemon: Pokemon): void {
      this.isDetailsOpening = true;
      this.$store.dispatch('general/setPokemon', pokemon);
      this.setRouter('pokemonDetailsPage');
    },
    setRouter(path: string) {
      this.$router.push(path).catch(() => {});
    },
  },
});
