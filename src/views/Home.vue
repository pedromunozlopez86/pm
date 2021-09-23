<template>
  <v-container class="">
    <h1 class="primary--text">Buscador de Libros</h1>
    <div class="d-flex justify-center">
      <v-text-field
        class="my-5"
        v-model="inputBook"
        dense
        color="warning"
        prepend-icon="mdi-magnify"
        label="Ingresa un nombre o titulo"
      ></v-text-field>

      <v-btn
        @click="vamos(inputBook), (buscas = true)"
        color="warning"
        class="ml-10 mt-3 "
        >buscar <v-icon right dark small>mdi-magnify-scan</v-icon>
      </v-btn>
    </div>
    <h3 class="mb-4 mt-0" v-if="buscas">Estas buscando...{{ inputBook }}</h3>
    <v-row>
      <v-col
        v-for="({ cover_i, title, author_name, key } = libro,
        i) in visiblePages"
        :key="i"
        cols="2"
      >
        <v-card
          min-width="100px"
          max-width="200px"
          max-height="260px"
          min-height="260px"
          class="my-1"
        >
          <v-container class="pa-0">
            <v-img
              class="ma-0 "
              position="top center"
              v-if="cover_i"
              :src="`https://covers.openlibrary.org/b/ID/${cover_i}-M.jpg`"
              max-height="20vh"
              min-height="20vh"
            ></v-img>
            <v-img
              v-else
              src="https://agencias.assist1.com.co/assets/images/no-image.png"
              max-height="20vh"
              min-height="20vh"
            ></v-img>

            <h5 class="text-truncate pt-5 pl-3">{{ title }}</h5>

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
                      class="text-center mt-10 px-2"
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
                            contain
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
                          ></v-img>
                          <p class="pt-10">Title: {{ infoBook.title }}</p>
                          <p>Author(s):{{ author_name.join(" - ") }}</p>

                          <div v-if="infoBook.description">
                            <p
                              class="font-weight-bold"
                              v-if="infoBook.description"
                            >
                              {{ infoBook.description.value }}
                            </p>
                            <p v-else>{{ infoBook.description }}</p>
                          </div>

                          <div v-else>Descripción No disponible</div>
                        </div>
                      </v-card-text>
                      <v-card-actions class="align-end">
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

    <v-pagination
      class="mt-16"
      v-model="page"
      circle
      color="warning"
      :length="Math.ceil(dataBooks.length / perPage)"
    ></v-pagination>
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
      infoBook: {},
      page: 1,
      perPage: 12,
      buscas: false,
    };
  },

  computed: {
    visiblePages() {
      return this.dataBooks.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
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
};
</script>
