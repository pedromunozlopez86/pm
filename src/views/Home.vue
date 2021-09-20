<template>
  <v-container class="">
    <div class="mt-15 d-flex-row justify-center">
      <h1>Buscador de Libros</h1>
      <v-text-field
        dense
        prepend-icon="mdi-magnify"
        label="Ingresa un nombre o titulo"
      ></v-text-field>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
      </v-btn>
    </div>
    <v-row>
      <v-col>
        <v-card max-width="400" class="mx-auto">
          <v-container>
            <h1>foto</h1>
            <h1>libro</h1>
            <h2>autor</h2>
            <h3>estrellas</h3>
            <p>descripcion</p>
            <v-btn>+ info</v-btn>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      items: [],
    };
  },
};
</script>
