<template>
    <section v-if="showTechnologies" class="technologies-image-background">
        <button type="button" @click="closeTechnologies()" class="btn"><i class="fa fa-close"></i></button>
        <h5 class="titleTechnologies"><strong>{{technologiesTitle}}</strong></h5>
        <hr class="line">
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
        background: white;
        max-width: 40%;
        margin-left: 30%;
        margin-top: 10%;

    }
    .titleTechnologies {
        padding-top: 10px;
        margin-left: 40%;
    }
    .line {
        margin-left: 46%;
    }
</style>
