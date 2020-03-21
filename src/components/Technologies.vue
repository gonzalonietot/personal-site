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

<style scoped>
    .technologies-image-background {
      background: rgba(255,255,255,1);
      background: -moz-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(237,237,237,0.23) 100%);
      background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(100%, rgba(237,237,237,0.23)));
      background: -webkit-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(237,237,237,0.23) 100%);
      background: -o-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(237,237,237,0.23) 100%);
      background: -ms-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(237,237,237,0.23) 100%);
      background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(237,237,237,0.23) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );
      max-width: 40%;
      margin-left: 30%;
      margin-top: 16%;
    }
    .btn {
      color: black;
      padding: 12px 16px;
      font-size: 20px;
      cursor: pointer;
      margin-left: 92.6%;
    }
    .titleTechnologies {
        margin-left: 40%;
    }
    .line {
      background-color: darkcyan;
      height: 2px;
      width: 8%;
      margin-left: 45%;
      margin-top: 5px;
    }
    .image {
      height:80px;
      width: 80px;
      margin-left: 8%;
    }
    .image-below {
      height:80px;
      width: 80px;
      margin-left: 8%;
      margin-top: 8%;
    }
    @media screen and (max-width: 768px) {
      .technologies-image-background {
        max-width: 90%;
        margin-top: 70%;
        margin-left: 5%;
      }
      .btn {
        margin-left: 85%;
      }
      .line {
        margin-left: 46%;
      }
      .titleTechnologies {
        margin-left: 30%;
      }
      .image {
        height:40px;
        width: 40px;
        margin-left: 8%;
      }
      .image-below {
        height:40px;
        width: 40px;
        margin-left: 8%;
        margin-top: 8%;
      }
    }
</style>
