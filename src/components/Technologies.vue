<template>
    <section v-if="showTechnologies" class="technologies-image-background">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <button type="button" @click="closeTechnologies()" class="btn"><i class="fa fa-close"></i></button>
      <h4 class="titleTechnologies"><strong>{{technologiesTitle}}</strong></h4>
      <hr class="line">
      <img src="../../public/static/javacript.png" alt="javascript" height="50" width="50">
      <img src="../../public/static/css3.jpg" alt="ccs3" height="50" width="50">
      <img src="../../public/static/html5.png" alt="ccs3" height="50" width="50">
      <img src="../../public/static/axios.jpg" alt="ccs3" height="50" width="50">
      <img src="../../public/static/vuejs.jpg" alt="ccs3" height="50" width="50">
      <img src="../../public/static/nodejs.png" alt="ccs3" height="50" width="50">
      <img src="../../public/static/express.jpg" alt="ccs3" height="50" width="50">
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
      background: -moz-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,0.61) 47%, rgba(237,237,237,0.17) 100%);
      background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(47%, rgba(246,246,246,0.61)), color-stop(100%, rgba(237,237,237,0.17)));
      background: -webkit-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,0.61) 47%, rgba(237,237,237,0.17) 100%);
      background: -o-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,0.61) 47%, rgba(237,237,237,0.17) 100%);
      background: -ms-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,0.61) 47%, rgba(237,237,237,0.17) 100%);
      background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(246,246,246,0.61) 47%, rgba(237,237,237,0.17) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );
      max-width: 40%;
      margin-left: 30%;
      margin-top: 10%;

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
    .btn {
      color: black;
      padding: 12px 16px;
      font-size: 20px;
      cursor: pointer;
      margin-left: 92.6%;
    }
</style>
