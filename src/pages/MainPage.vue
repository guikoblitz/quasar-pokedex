<template>
  <q-page class="page-padding" style="background: #f5f5f5; overflow: hidden; height: calc(100vh - 100px)">
    <img src="../assets/background.svg" class="common-background" />
    <!-- <span class="q-pt-md text-h4 text-bold text-accent"> Pokédex </span> -->
    <q-card class="details-card row q-px-md">
      <div class="col-12 col-md-6 col-lg-5 q-my-sm" style="height: calc(100% - 24px); overflow: hidden">
        <q-input
          style="padding: 12px 12px 6px 12px"
          v-model="text"
          dense
          rounded
          standout="bg-grey text-white"
          placeholder="Search for a Pokémon"
          @keyup.enter="findPokemon()"
        >
          <template v-slot:append>
            <q-icon v-if="isFiltered" class="no-shadow" name="sync" flat style="cursor: pointer" @click="initialQuery()" />
            <q-icon v-else class="no-shadow" name="search" flat style="cursor: pointer" @click="findPokemon()" />
          </template>
        </q-input>
        <div class="scroll" style="height: calc(100% - 54px)">
          <q-list v-for="pokemon in pokemonList" :key="pokemon.id" class="col-12 col-md-6" style="padding: 6px 12px">
            <q-item
              clickable
              v-ripple
              class="pokemon-card q-pl-sm q-pt-xs row"
              :style="pokemonCardBackground(pokemon.type.primary)"
              @click="directToPokemonDetails(pokemon)"
            >
              <div class="col-3 q-pb-xs">
                <q-img :src="pokemon.image" class="col-4" style="height: 80px; width: 80px" />
              </div>
              <div class="col-9 row q-pl-md q-pt-xs">
                <div class="col-12">
                  <div class="row">
                    <span class="text-h4 text-bold text-white" style="white-space: nowrap; overflow: hidden">
                      {{ pokemon.name }}
                    </span>
                  </div>
                  <div class="row" style="heigth: 100%">
                    <div class="col-6 position-pokemon-type">
                      <img :src="`${getTypeImage(pokemon.type.primary)}`" style="height: 18px; width: 18px" />
                      <img
                        v-if="pokemon.type.secondary"
                        :src="`${getTypeImage(pokemon.type.secondary)}`"
                        style="height: 18px; width: 18px"
                      />
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
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-7" style="padding-left: 24px"></div>
    </q-card>

    <!-- <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab color="accent" round icon="add" direction="up">
        <q-fab-action color="blue-6" icon="tune" />
        <q-fab-action color="blue-6" icon="sync" @click="initialQuery()" />
      </q-fab>
    </q-page-sticky> -->
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
.page-padding {
  padding: 0px 12vw;
}

.details-card {
  width: 100%;
  height: 100%;
  border-radius: 0px;
  background: #f5f5f5;
  height: calc(100vh - 100px);
  overflow: hidden;
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

.pokeball-stamp {
  opacity: 0.1;
  position: absolute;
  left: 180px;
  top: -80px;
  z-index: 0;
  white-space: nowrap;
  transform: rotate(-12deg);
}

/* .filter-red {
  filter: invert(25%) sepia(88%) saturate(4575%) hue-rotate(4deg) brightness(96%) contrast(90%);
} */

.pokemon-card {
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
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
