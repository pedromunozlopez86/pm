<template>
  <v-container class="">
    <div class="mt-15 d-flex-row justify-center">
      <h1>Buscador de Libros</h1>
      <v-text-field
        class="mt-4"
        v-model="inputBook"
        dense
        color="warning"
        prepend-icon="mdi-magnify"
        label="Ingresa un nombre o titulo"
      ></v-text-field>
      <v-btn @click="vamos(inputBook)" class="my-16"
        >buscar <v-icon right dark small>mdi-magnify-scan</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
    </div>
    <v-row>
      <v-col
        v-for="({ cover_i, title, author_name, key } = libro, i) in dataBooks"
        :key="i"
        cols="2"
      >
        <v-card
          min-width="100px"
          max-width="200px"
          max-height="250px"
          min-height="249px"
          class="my-3"
        >
          <v-container class="pa-0">
            <v-img
              class="ma-0 "
              position="top center"
              v-if="cover_i"
              :src="`https://covers.openlibrary.org/b/ID/${cover_i}-M.jpg`"
              max-height="15vh"
            ></v-img>
            <v-img
              v-else
              src="https://agencias.assist1.com.co/assets/images/no-image.png"
              max-width="100vw"
              height="130px"
            ></v-img>

            <h5 class="text-truncate pt-5 pl-3">{{ title }}</h5>
            <div class="">
              <h5></h5>
            </div>

            <v-row justify="space-around">
              <v-col cols="auto">
                <v-dialog
                  transition="dialog-top-transition"
                  max-width="600"
                  eager
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      tile
                      height="1.3rem"
                      color="warning"
                      dense
                      class="text-center mt-10"
                      v-bind="attrs"
                      v-on="on"
                      @click="modalOn(i, key)"
                      append-icon="arrow_drop_down"
                      >Más Info
                      <v-icon right dark>mdi-information</v-icon></v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="warning" dark>
                        <h3>{{ infoBook.title }}</h3>
                      </v-toolbar>
                      <v-card-text>
                        <div class="my-5">
                          <v-img
                            v-if="cover_i"
                            width="80vw"
                            height="50vh"
                            position="top center"
                            :src="
                              `http://covers.openlibrary.org/b/ID/${cover_i}-L.jpg`
                            "
                          ></v-img>
                          <v-img
                            contain
                            v-else
                            src="https://agencias.assist1.com.co/assets/images/no-image.png"
                            height="100%"
                          ></v-img>
                          <p class="pt-15">Title: {{ infoBook.title }}</p>
                          <p>Author(s):{{ author_name.join(" - ") }}</p>

                          <div v-if="infoBook.description">
                            <p
                              v-if="infoBook.description"
                              v-text="infoBook.description.value"
                            ></p>
                            <p v-else>{{ infoBook.description }}</p>
                          </div>
                          <div v-else>Descripción No disponible</div>
                        </div>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn
                          color="secondary"
                          text
                          @click="dialog.value = false"
                          >Cerrar</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  // name: "Home",
  data() {
    return {
      dataBooks: [],
      inputBook: "",
      urlImg: "",
      id: 0,
      autores: ["hola", "dos", "tres"],
      infoBook: {},
    };
  },

  methods: {
    async vamos() {
      await axios
        .get(`https://openlibrary.org/search.json?q=${this.inputBook}`)
        .then((response) => (this.dataBooks = response.data.docs))
        .then((dataBooks) => {
          console.log(dataBooks);
        })
        .catch((err) => {
          console.log("error => " + err);
        });
    },
    modalOn(i, key) {
      console.log(i + key);
      axios
        .get(`https://openlibrary.org${key}.json`)
        .then((response) => (this.infoBook = response.data))
        .then((infoBook) => console.log(infoBook));
      return this.infoBook;
    },
    getLibroInfo() {
      return this.modalOn();
    },
  },
  computed: {},
};
</script>
