<template>
  <v-container class="">
    <h1 class="primary--text my-3">Buscador de Libros</h1>
    <div class="d-flex justify-center align-center mb-5">
      <div id="busqueda">
        <v-text-field
          @keyup.enter="vamos(inputBook), (buscas = true)"
          v-model="inputBook"
          class="mt-3 pr-16"
          dense
          color="warning"
          prepend-icon="mdi-magnify"
          label="Ingresa un nombre o titulo"
        ></v-text-field>
      </div>
      <div>
        <v-btn
          @click="vamos(inputBook), (buscas = true)"
          color="warning"
          class=" mt-3 "
          >buscar <v-icon right dark small>mdi-magnify-scan</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="d-flex justify-center">
      <v-alert
        elevation="5"
        min-width="60vw"
        dense
        type="error"
        v-show="mensajeDeError"
      >
        Debes ingresar el<strong>Título o autor</strong> del libro que buscas!
      </v-alert>
    </div>
    <transition name="slide-fade">
      <v-container id="resultados">
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
                      max-width="500"
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
                            <v-spacer></v-spacer>
                            <v-btn @click="dialog.value = false" icon>
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
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
          v-if="buscas"
          app
          fixed
          class="mt-16"
          v-model="page"
          circle
          color="warning"
          :length="Math.ceil(dataBooks.length / perPage)"
        ></v-pagination>
      </v-container>
    </transition>
    <v-overlay :value="overlay">
      <div class="d-flex-row justify-center text-center mb-16">
        <h3 class="">Estoy buscando</h3>
        <h3 class="">{{ inputBook }}</h3>
      </div>
      <v-progress-circular :width="10" indeterminate size="128" color="amber">
      </v-progress-circular>
    </v-overlay>
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
      overlay: false,
      mensajeDeError: false,
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
      if (this.inputBook != "") {
        this.mensajeDeError = false;
        this.overlay = true;
        await axios
          .get(`https://openlibrary.org/search.json?q=${this.inputBook}`)
          .then((response) => (this.dataBooks = response.data.docs))
          .then((dataBooks) => {
            console.log(dataBooks);
            this.overlay = false;
          })
          .catch((err) => {
            console.log("error => " + err);
          });
      } else {
        this.mensajeDeError = true;
      }
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

<style scoped>
#busqueda {
  width: 50vw;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
