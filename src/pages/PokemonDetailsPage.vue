<template>
  <q-page style="background: #f5f5f5; overflow: hidden">
    <img src="../assets/background.svg" class="common-background" />
    <div class="q-px-md q-pt-md" :style="getPokemonBackgroundColor(selectedPokemon.type.primary)" style="height: 50vh">
      <div class="row q-pb-md">
        <q-icon name="close" size="md" color="white" @click="setRouter('/')" />
        <q-space></q-space>
        <q-icon name="favorite_border" size="md" color="white" />
      </div>
      <div>
        <div class="row">
          <span class="text-h4 text-bold text-white"> {{ selectedPokemon.name }} </span>
          <q-space></q-space>
          <div style="display: flex; align-items: end">
            <span class="text-h6 text-bold text-white"> {{ formatPokemonId(selectedPokemon.id) }} </span>
          </div>
        </div>
        <div>
          <q-chip dense :style="getPokemonBackgroundColorChip(selectedPokemon.type.primary)" style="padding-left: 0">
            <img :src="`${getTypeImage(selectedPokemon.type.primary)}`" style="height: 26px; width: 26px" />
            <div class="text-white q-pl-xs">{{ formatFirstLetterToUpperCase(selectedPokemon.type.primary) }}</div>
          </q-chip>
          <q-chip
            v-if="selectedPokemon.type.secondary"
            dense
            :style="getPokemonBackgroundColorChip(selectedPokemon.type.secondary)"
            style="padding-left: 0"
          >
            <img :src="`${getTypeImage(selectedPokemon.type.secondary)}`" style="height: 26px; width: 26px" />
            <div class="text-white q-pl-xs">{{ formatFirstLetterToUpperCase(selectedPokemon.type.secondary) }}</div>
          </q-chip>
        </div>
        <!-- <div style="display: flex; justify-content: flex-end">
          <img src="../assets/pokeball-3.svg" class="pokeball-background" style="height: 200px; width: 200px" />
        </div> -->
        <div class="q-pb-xs">
          <q-img :src="selectedPokemon.image" class="position-pokemon-image" style="height: 300px; width: 300px" />
        </div>
      </div>
    </div>
    <div class="position-information-card">
      <!-- <span class="text-h6 text-bold text-accent"> {{ selectedPokemon.name }} </span> -->
    </div>
  </q-page>
</template>

<script src="./PokemonDetailsPage.ts"></script>

<style >
.pokeball-background {
  opacity: 0.1;
  position: absolute;
  /* left: 220px; */
  top: 100px;
  padding-left: 20px;
  z-index: 0;
  white-space: nowrap;
  transform: rotate(12deg);
}

.common-background {
  opacity: 0.1;
  position: absolute;
  width: 150%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}

.position-pokemon-image {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: 45vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  text-align: center;
}

.position-information-card {
  background: white;
  height: 65vh;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  left: 0;
  right: 0;
  bottom: -75px;
}
</style>
