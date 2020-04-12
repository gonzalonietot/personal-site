<template>
  <section v-if="showTechnologies" class="technologies-image-background">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <button type="button" class="btn" @click="closeTechnologies()">
      <i class="fa fa-close"></i>
    </button>
    <h4 class="titleTechnologies">
      <strong>{{ technologiesTitle }}</strong>
    </h4>
    <hr class="line">
    <div style="padding-bottom: 50px">
      <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">
        <img class="image" src="../../public/static/javacript.png" alt="javascript">
      </a>
      <a href="https://developer.mozilla.org/es/docs/HTML/HTML5" target="_blank">
        <img class="image" src="../../public/static/html5.png" alt="html5">
      </a>
      <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
        <img class="image" src="../../public/static/css3.png" alt="css3">
      </a>
      <a href="https://vuejs.org/v2/guide/" target="_blank">
        <img class="image" src="../../public/static/Vue.png" alt="vuejs">
      </a>
      <a href="https://nodejs.org/es/docs/" target="_blank">
        <img class="image-below" src="../../public/static/nodejs.png" alt="nodejs">
      </a>
      <a href="https://www.mysql.com/" target="_blank">
        <img class="image-below" src="../../public/static/mysql.png" alt="mysql">
      </a>
      <a href="https://expressjs.com/es/" target="_blank">
        <img class="image-below" src="../../public/static/express.png" alt="mysql">
      </a>
      <a href="https://git-scm.com/doc" target="_blank">
        <img class="image-below" src="../../public/static/git.png" alt="mysql">
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Technologies',
    props: {
      showTechnologies: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        technologiesTitle: 'Tecnologías'
      }
      },
    methods: {
      closeTechnologies () {
        this.$emit('update:showTechnologies',false)
      }
    }
  }
</script>

