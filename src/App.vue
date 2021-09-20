<template>
  <v-app>
    <v-app-bar app color="warning" dark>
      <div class="d-flex align-center">
        <v-icon large>mdi-bookshelf</v-icon>
        <h2 class="pl-5">BuscaLibros</h2>
      </div>

      <v-spacer></v-spacer>
      <v-text-field hide-details="" dense></v-text-field>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon large>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
