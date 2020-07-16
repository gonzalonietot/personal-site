<template>
  <section v-if="showAbout" class="about-image-background">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <v-toolbar
      data-app
      dark
      prominent
      height="60"
      color="#00838F"
    >
      <v-toolbar-title>{{ aboutMe }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="closeAboutMe">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <p class="about">
      <strong>
        Desarrollador web full-stack, proactivo, apasionado por la programación. Si tengo que hablar un poco sobre mi
        estoy muy interesado en realizar aportes a la comunidad IT, ya sea desde el open source, o de otras maneras.
        Actualmente estoy trabajando Vue.js, Node.js y MySql como principales tecnologías, y estoy entrando mas al mundo
        mobile con Flutter.
        <br>
        Cualquier consulta están mis redes para contactame, saludos :)
      </strong>
    </p>
    <v-container fluid>
      <v-row justify="center" style="margin-left: 50px">
        <v-col cols="5">
          <v-img aspect-ratio="1.4" src="../../public/static/naruto.jpg" />
        </v-col>
        <v-col cols="5">
          <v-img aspect-ratio="1.4" src="../../public/static/naruto1.jpg" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'About',
    props: {
      showAbout: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        aboutMe: 'Acerca de mí',
        nationality: 'Nacionalidad',
        country: 'Argentina',
        gitHub: 'Github',
        linkedin: 'Linkedin'
      }
    },
    methods: {
      closeAboutMe () {
        this.$emit('update:showAbout',false)
      }
    }
  }
</script>