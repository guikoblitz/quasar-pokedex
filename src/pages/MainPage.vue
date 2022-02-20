<template>
  <q-page class="q-pa-md" style="background: #f5f5f5">
    <span class="text-h4 text-bold text-accent"> Pokédex </span>
    <div class="row input-style">
      <q-input class="q-pt-sm col-10" dense rounded placeholder="Search for a Pokémon">
        <template v-slot:append>
          <q-icon class="no-shadow" name="search" flat style="cursor: pointer"> </q-icon>
        </template>
      </q-input>
      <q-btn class="col-2" icon="tune" flat color="grey-7"></q-btn>
    </div>
    <img src="../assets/pokeball-1.svg" class="pokeball-stamp" style="height: 300px; width: 300px" />
    <div class="q-pt-sm">
      <div v-for="pokemon in pokemonList" :key="pokemon.id">
        <div class="pokemon-card q-mt-sm q-pl-sm q-pt-xs row" :style="pokemonCardBackground(pokemon.type.primary)">
          <div class="col-3 q-pb-xs">
            <q-img :src="pokemon.image" class="col-4" style="height: 80px; width: 80px" />
          </div>
          <div class="col-9 row q-pl-md q-pt-xs">
            <div class="col-12">
              <div class="row">
                <span class="text-h5 text-bold text-white">
                  {{ pokemon.name }}
                </span>
              </div>
              <div class="row" style="heigth: 100%">
                <div class="col-6">
                  <span class="text-h6 text-bold text-white position-pokemon-type font-size-pokemon-type">
                    {{ pokemon.type.primary.toUpperCase() }}
                    {{ pokemon.type.secondary ? `${pokemon.type.secondary.toUpperCase()}` : '' }}
                  </span>
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
  </q-page>
</template>

<script src="./MainPage.ts"></script>

<style scoped>
.input-style ::v-deep .q-field__control {
  border-radius: 50px;
  background: #0000000d;
  padding-left: 16px;
  padding-right: 8px;
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
  top: 28px;
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
