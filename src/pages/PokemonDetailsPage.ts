import { POKEMON_TYPES_CARD, POKEMON_TYPES } from 'src/util/Constantes';
import { returnPokemonId, formatFirstLetterToUpperCase } from 'src/util/AppUtil';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokemonDetailsPage',
  data() {
    return {};
  },
  computed: {
    selectedPokemon() {
      if (this.$store.state.general.pokemon) {
        return this.$store.state.general.pokemon;
      }
      return null;
    },
  },
  beforeMount() {
    if (!this.$store.state.general.pokemon) {
      this.setRouter('/');
      // const pokemon = await // IndexDB get
    }
  },
  mounted() {
    console.log(this.$store.state.general.pokemon);
  },
  methods: {
    formatFirstLetterToUpperCase,
    setRouter(path: string) {
      this.$router.push(path).catch(() => {});
    },
    getPokemonBackgroundColor(primaryType: string): string {
      const type = primaryType.toUpperCase();
      return `background: ${POKEMON_TYPES_CARD[type]}`;
    },
    getPokemonBackgroundColorChip(primaryType: string): string {
      const type = primaryType.toUpperCase();
      return `background: ${POKEMON_TYPES[type]}`;
    },
    getTypeImage(type: string): string {
      const typeLower = type.toLowerCase();
      return `types/${typeLower}.svg`;
    },
    formatPokemonId(pokemonId: number): string {
      return returnPokemonId(pokemonId);
    },
  },
});
