<template>
  <q-page class="q-pa-md" style="background: #f5f5f5; overflow: hidden">
    <div class="row q-pb-md">
      <q-icon name="close" size="md" @click="setRouter('/')" />
      <q-space></q-space>
      <q-icon name="favorite_border" size="md" />
    </div>
    <span class="text-h4 text-bold text-accent"> Pokédex </span>
  </q-page>
</template>

<script src="./PokemonDetailsPage.ts"></script>

<style scoped></style>
