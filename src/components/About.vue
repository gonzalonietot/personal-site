<template>
  <section v-if="showAbout" class="about-image-background">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <button type="button" class="btn" @click="closeAboutMe">
      <i class="fa fa-close" />
    </button>
    <h4 class="titleAboutMe">
      <strong>{{ aboutMe }}</strong>
    </h4>
    <hr class="line">
    <p class="about">
      <strong style="color: black">{{ presentation }}</strong>
      <ul class="list">
        <li>
          <strong style="padding-right: 10px;">{{ nationality }}:</strong>{{ country }}
          <i class="fa fa-globe icon" aria-hidden="true" />
        </li>
        <li>
          <strong>{{ gitHub }}</strong>:
          <a href="https://github.com/gnieto11" target="_blank">
            <i class="fa fa-github icon" aria-hidden="true" />
          </a>
        </li>
        <li>
          <strong>{{ linkedin }}
          </strong>:
          <a href="https://www.linkedin.com/in/gonzalo-nieto-03508a199/" target="_blank">
            <i class="fa fa-linkedin icon" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </p>
    <br>
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
        presentation: 'Desarrollador full-stack, poseo mas de años de experiencia en el mundo IT, soy apasionado.  Actualmente estoy haciendo web principalmente' +
          ' con Javascript, Vue.js y Node.js, y estoy comenzando a realizar mobile con Flutter. En mis tiempos libres me gusta ' +
          'leer mucho, y conocer mas sobre este loco mundo que es sistemas.',
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