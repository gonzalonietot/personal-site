<template>
    <section v-if="showAbout" class="about-image-background">
        <h3 style="margin-top: 10px">
            <span style="margin-left: 3%;">{{aboutMe}}</span>
        </h3>
        <ul class="list">
            <li>{{dateOfBirth}}: {{day}}</li>
            <li>{{nationality}}: {{country}}</li>
            <li>{{phone}}: {{cellPhoneNumber}}</li>
            <li>{{email}}: maurogonzalonieto2011@hotmail.com.ar</li>
        </ul>
        <br>
        <p class="about">Soy programador full stack, me desenvuelvo en tecnologías, tales como
            HTML, CSS, Javascript, Vue.js, Node.js, Docker, MySql, MongoDB. Me considero
            entusiasta con ganas de aprender nuevas tecnologías, dispuesto a enfrentar nuevos proyectos,
            que brinden soluciones a la comunidad.</p>
        <button type="button" style="margin-left: 95%; margin-bottom: 10px" @click="closeAboutMe()">Cerrar</button>
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
        aboutMe: 'Acerca de mi',
        dateOfBirth: 'Fecha de nacimiento',
        day: '01/11/1997',
        nationality: 'Nacionalidad',
        country: 'Argentina',
        phone: 'Celular',
        cellPhoneNumber: '(0351) 156745259',
        email: 'E-mail'
      }
    },
    methods: {
      closeAboutMe () {
        this.$emit('update:showAbout',false)
      }
    }
  }
</script>

<style scoped>
    .about-image-background {
        background-color: white;
        position: absolute;
        max-width: 100%;
        margin-top: 2%
    }
    .list {
        margin-left: 5%;
        font-size: 15px;
    }
    .about {
        font-size: 16px;
        margin-left: 3%
    }
    .button {
        border: 1px black solid;
        color: black;
    }

</style>