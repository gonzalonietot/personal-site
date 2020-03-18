<template>
    <div class="image-background">
      <h3 class="software-developer">{{softwareDeveloper}}</h3>
      <template v-if="!showAbout && !showTechnologies && !showContact" >
        <button type="button" class="about-me button" @click="openAboutMe()">{{aboutMe}}</button>
        <button type="button" class="technologies button" @click="openTechnologies()">{{technologies}}</button>
        <button type="button" class="contact button" @click="openContact()">{{contact}}</button>
      </template>
      <v-footer
        v-if="!showAbout && !showTechnologies && !showContact"
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
            <strong class="subheading">{{connect}}</strong>
            <v-spacer></v-spacer>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              dark
              icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>{{allRightsReserved}}<br>{{fullName}}</strong>
          </v-card-text>
        </v-card>
      </v-footer>
      <about v-if="showAbout" :showAbout.sync="showAbout" />
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
      connect: 'Conectate a mis redes sociales',
      allRightsReserved: 'Todos los derechos reservados',
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram',
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

<style scoped>
    .image-background {
        background-image: url("https://i.picsum.photos/id/556/1920/1080.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        height: 150%;
        width: 100%;
    }
    .software-developer {
        color: white;
        border: 1px white solid;
        text-align: center;
        transform: translate(1%, 600%);
        margin-left: 40%;
        margin-right: 40%;
    }
    .about-me {
        transform: translate(1%, 550%);
        margin-left: 45%;
    }
    .technologies {
        transform: translate(1%, 600%);
        margin-left: 45%;
    }
    .contact {
      transform: translate(1%, 650%);
      margin-left: 45%;
    }
    .button {
        border: 1px white solid;
        color: white;
        height:40px ;
        width: 150px;
    }
    .footer {
      background-color: black;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 40px;
      color: white;
    }

    @media screen and (max-width: 768px) {
        .image-background {
            background-image: url("https://i.picsum.photos/id/556/1920/1080.jpg");
            background-repeat: no-repeat;
        }
        .software-developer {
            transform: translate(1%, 600%);
            margin-left: 3%;
            margin-right: 20%;
            width: 90%;
        }
        .button {
            height: 30px;
            width: 130px;
        }
        .about-me {
            transform: translate(1%, 700%);
            margin-left: 30%;
        }
        .technologies {
            margin-left: 30%;
            transform: translate(1%, 750%);
        }
        .contact {
          transform: translate(1%, 800%);
          margin-left: 30%;
      }
    }
</style>
