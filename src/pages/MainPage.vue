<template>
  <q-page class="q-pa-md" style="background: #f5f5f5">
    <span class="text-h4 text-bold text-accent"> Pokédex </span>
    <div class="row input-style">
      <q-input
        class="q-py-sm col-12 col-md-4"
        v-model="text"
        dense
        rounded
        standout="bg-grey text-white"
        placeholder="Search for a Pokémon"
        @keyup.enter="findPokemon()"
      >
        <template v-slot:append>
          <q-icon v-if="isFiltered" class="no-shadow" name="close" flat style="cursor: pointer" @click="initialQuery()" />
          <!-- <q-icon v-else class="no-shadow" name="search" flat style="cursor: pointer" @click="findPokemon()" /> -->
        </template>
      </q-input>
    </div>
    <img src="../assets/pokeball-1.svg" class="pokeball-stamp" style="height: 300px; width: 300px" />
    <div class="q-pt-sm row q-col-gutter-sm">
      <div v-for="pokemon in pokemonList" :key="pokemon.id" class="col-12 col-md-4">
        <div class="pokemon-card q-pl-sm q-pt-xs row" :style="pokemonCardBackground(pokemon.type.primary)">
          <div class="col-3 q-pb-xs">
            <q-img :src="pokemon.image" class="col-4" style="height: 80px; width: 80px" />
          </div>
          <div class="col-9 row q-pl-md q-pt-xs">
            <div class="col-12">
              <div class="row">
                <span class="text-h4 text-bold text-white">
                  {{ pokemon.name }}
                </span>
              </div>
              <div class="row" style="heigth: 100%">
                <div class="col-6 position-pokemon-type">
                  <img :src="`${getTypeImage(pokemon.type.primary)}`" style="height: 18px; width: 18px" />
                  <img v-if="pokemon.type.secondary" :src="`${getTypeImage(pokemon.type.secondary)}`" style="height: 18px; width: 18px" />
                </div>
                <br />
                <div class="col-6" style="display: flex; justify-content: end">
                  <div class="text-h4 text-bold text-white position-pokemon-id">
                    {{ formatPokemonId(pokemon.id) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab color="accent" round icon="add" direction="up">
        <q-fab-action color="blue-6" icon="tune" />
        <q-fab-action color="blue-6" icon="sync" @click="initialQuery()" />
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script src="./MainPage.ts"></script>

<style scoped>
.input-style ::v-deep .q-field__control {
  background: #0000000d;
  border: 1px solid black;
}

.input-color ::v-deep .q-field__control {
  background: #000000;
  color: black;
}
</style>

<style>
.pokeball-stamp {
  opacity: 0.1;
  position: absolute;
  left: 180px;
  top: -80px;
  z-index: 0;
  white-space: nowrap;
  transform: rotate(-12deg);
}

.pokemon-card {
  /* box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%); */
  border-radius: 20px;
  vertical-align: top;
  position: relative;
}

.position-pokemon-type {
  position: absolute;
  top: 46px;
}

.font-size-pokemon-type {
  font-size: 0.75rem;
}

.position-pokemon-id {
  color: #00000040 !important;
  position: absolute;
  bottom: -8px;
  right: 8px;
}

.scroll.relative-position.fit.hide-scrollbar {
  overflow: scroll;
}
</style>
