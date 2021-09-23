<template>
  <v-app>
    <v-app-bar app color="warning" dark>
      <div class="d-flex align-center">
        <v-icon large>mdi-bookshelf</v-icon>
        <h2 class="pl-5">BuscaLibros</h2>
      </div>

      <v-spacer></v-spacer>

      <!--Modal-Info-->
      <div class="text-center">
        <v-dialog v-model="modalInfo" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-bind="attrs" v-on="on" icon>
              <v-icon large>mdi-information</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5  white--text warning lighten-1">
              Programado por Pedro Muñoz L.
            </v-card-title>

            <v-card-text class="mt-4">
              Esta página fue diseñada exclusivamente para la postulación de
              Frontend de Simplex, usando VueJs con el framework Vuetify, axios
              y deploy de Firebase.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="modalInfo = false">
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-app-bar>

    <v-main class="amber lighten-3" fluid>
      <router-view />
    </v-main>
    <v-footer
      app
      padless
      color="warning white--text d-flex justify-center pt-5"
    >
      <p class="font-weight-bold ">
        Pedro Muñoz L. | Frontend VueJs
      </p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Buscalibros",

  data() {
    return {
      modalInfo: false,
    };
  },
  metaInfo: [
    { title: "Prueba para Simplex" },
    { titleTemplate: "%s | Hecho por Pedro Muñoz L." },
    { link: { rel: "favicon", href: "logo.png" } },
  ],
};
</script>
