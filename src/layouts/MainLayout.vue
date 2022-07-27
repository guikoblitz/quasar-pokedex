<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar class="layout-elements">
        <q-toolbar-title class="row justify-center">
          <!-- <q-btn icon="keyboard_backspace" flat color="white" /> -->
          <div>Pokédex</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-toolbar class="layout-elements"> Made with PokéAPI </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
.layout-elements {
  background: red;
  display: flex;
  justify-content: center;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  data() {
    return {};
  },
});
</script>
