import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokemonDetailsPage',
  data() {
    return {};
  },
  mounted() {
    console.log(this.$store.state.general.pokemon);
  },
  methods: {
    setRouter(path: string) {
      this.$store.dispatch('general/setPokemon', null);
      this.$router.push(path).catch(() => {});
    },
  },
});
