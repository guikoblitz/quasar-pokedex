<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated> -->
    <!-- <q-toolbar>
        <q-toolbar-title class="row justify-between">
          <q-btn icon="keyboard_backspace" flat color="white" />
          <div>Pokédex</div>
          <div style="width: 36px"></div>
        </q-toolbar-title>
      </q-toolbar> -->
    <!-- </q-header> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  data() {
    return {};
  },
});
</script>
