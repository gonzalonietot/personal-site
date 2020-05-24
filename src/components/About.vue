<template>
  <section v-if="showAbout" class="about-image-background">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <button type="button" class="btn" @click="closeAboutMe">
      <i class="fa fa-close"></i>
    </button>
    <h4 class="titleAboutMe">
      <strong>{{ aboutMe }}</strong>
    </h4>
    <hr class="line">
    <ul class="list">
      <li>
        <strong style="padding-right: 10px;">{{ nationality }}:</strong>{{ country }}
        <i class="fa fa-globe icon" aria-hidden="true"></i>
      </li>
      <li>
        <strong>{{ gitHub }}</strong>:
        <a href="https://github.com/gnieto11" target="_blank">
          <i class="fa fa-github icon" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <strong>{{ linkedin }}
        </strong>:
        <a href="https://www.linkedin.com/in/gonzalo-nieto-03508a199/" target="_blank">
          <i class="fa fa-linkedin icon" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
    <p class="about"><strong style="color: black">{{ presentation }}</strong>
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
        presentation: 'Desarrollador web-mobile full stack, trabajo con tecnologías, tales como\n' +
          '            HTML5, CSS3, Javascript, Vue.js, Node.js, MySql, MongoDB. Me considero\n' +
          '            entusiasta con ganas de aprender nuevas tecnologías, dispuesto a enfrentar nuevos proyectos,\n' +
          '            que brinden soluciones a la comunidad.',
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
