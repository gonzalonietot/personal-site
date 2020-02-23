<template>
    <div class="image-background">
        <h1 class="name">Mauro Gonzalo Nieto</h1>
        <h2 class="software-developer">Software developer</h2>
        <template style="border: 1px white solid;">
            <v-btn height="35" width="150" class="about-me" outlined color="#FFFFFF" @click="openAboutMe()">Sobre mi</v-btn>
            <v-btn height="35" width="150" class="technologies" outlined color="#FFFFFF">Tecnologías</v-btn>
            <v-btn height="35" width="150" class="contact" outlined color="#FFFFFF">Contacto</v-btn>
        </template>
        <about v-if="showAbout" :showAbout.sync="showAbout" />
    </div>
</template>

<script>
import about from '../components/About.vue'
export default {
  name: 'Home',
  components: {
    about
  },
  data() {
    return {
      showAbout: false
    }
  },
  methods: {
    openAboutMe () {
      this.showAbout = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .image-background {
        background-image: url("https://www.fondosni.com/images/2012-10-21/Globo%20sobre%20el%20mundo-510880.jpg");
        height: 730px;
        max-height: 800px;
        background-position: center;
    }
    .name {
        color: white;
        text-align: center;
        font-size: 300%;
        transform: translate(1%, 200%);
        margin-left: 30%;
        margin-right: 30%;
    }
    .software-developer {
        color: white;
        border: 1px white solid;
        text-align: center;
        transform: translate(1%, 500%);
        margin-left: 40%;
        margin-right: 40%;
    }
    .about-me {
        transform: translate(1%, 520%);
        margin-left: 45%;
    }
    .technologies {
        transform: translate(1%, 590%);
        margin-left: 45%;
    }
    .contact {
        transform: translate(1%, 660%);
        margin-left: 45%;
    }
</style>
