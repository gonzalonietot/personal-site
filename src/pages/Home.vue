<template>
  <div class="image-background">
    <h3 class="software-developer">
      {{ softwareDeveloper }}
    </h3>
    <template v-if="!showAbout && !showTechnologies && !showContact">
      <button type="button" class="about-me button" @click="openAboutMe()">
        {{ aboutMe }}
      </button>
      <button type="button" class="technologies button" @click="openTechnologies()">
        {{ technologies }}
      </button>
      <button type="button" class="contact button" @click="openContact()">
        {{ contact }}
      </button>
    </template>
    <v-footer
      class="footer"
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal">
          <strong class="subheading">{{ connect }}</strong>
          <v-spacer />
          <v-btn
            v-for="icon in icons"
            :key="icon.id"
            class="mx-4"
            dark
            icon
            target="_blank"
            :href="icon.href"
          >
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>{{ allRightsReserved }}<br>{{ fullName }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
    <about v-if="showAbout" :show-about.sync="showAbout" />
    <technologies v-if="showTechnologies" :show-technologies.sync="showTechnologies" />
    <contact v-if="showContact" :show-contact.sync="showContact" />
  </div>
</template>

<script>
  import About from '../components/About.vue'
  import Technologies from '../components/Technologies'
  import Contact from '../components/Contact'
  export default {
    name: 'Home',
    components: {
      Contact,
      About,
      Technologies
    },
    data() {
      return {
        showAbout: false,
        showTechnologies: false,
        showContact: false,
        fullName: 'Gonzalo Nieto',
        aboutMe: 'Sobre mi',
        technologies: 'Tecnologías',
        contact: 'Contacto',
        softwareDeveloper: 'Software developer',
        connect: 'Conéctate a mis redes sociales',
        allRightsReserved: 'Todos los derechos reservados',
        icons: [
          {id: 1 ,icon: 'mdi-twitter', href: 'https://twitter.com/gonzalonietot'},
          {id: 2, icon: 'mdi-linkedin', href: 'https://www.linkedin.com/in/gonzalo-nieto-03508a199/'},
          {id: 3, icon: 'mdi-instagram', href: 'https://www.instagram.com/gonzalonietot/'},
        ],
      }
    },
    methods: {
      openAboutMe () {
        this.showAbout = true
      },
      openTechnologies () {
        this.showTechnologies = true
      },
      openContact () {
        this.showContact = true
      }
    }
  }
</script>
