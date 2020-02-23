<template>
    <section v-if="showAbout" class="about-image-background">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <button @click="closeAboutMe" class="btn"><i class="fa fa-close"></i></button>
        <h3 style="margin-top: 10px">
            <u style="margin-left: 40%;font-weight: 800;font-size: 32px;">{{aboutMe}}</u>
        </h3>
        <ul class="list">
            <li><strong style="text-decoration: underline;">{{dateOfBirth}}</strong>: {{day}}</li>
            <li><strong style="text-decoration: underline;">{{nationality}}</strong>: {{country}}</li>
            <li><strong style="text-decoration: underline;">{{phone}}</strong>: {{cellPhoneNumber}}</li>
            <li><strong style="text-decoration: underline;">{{email}}</strong>: <a href="mailto:maurogonzalonieto2011@hotmail.com.ar">{{emailName}}</a></li>
        </ul>
        <p class="about">Soy programador full stack, me desenvuelvo en tecnologías, tales como
            HTML, CSS, Javascript, Vue.js, Node.js, Docker, MySql, MongoDB. Me considero
            entusiasta con ganas de aprender nuevas tecnologías, dispuesto a enfrentar nuevos proyectos,
            que brinden soluciones a la comunidad.</p>
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
        aboutMe: 'Acerca de mi',
        dateOfBirth: 'Fecha de nacimiento',
        day: '01/11/1997',
        nationality: 'Nacionalidad',
        country: 'Argentina',
        phone: 'Celular',
        cellPhoneNumber: '(0351) 156745259',
        email: 'E-mail',
        emailName: 'maurogonzalonieto2011@hotmail.com.ar'
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
        background-repeat: no-repeat;
        background-color: antiquewhite;
        background-size: cover;
        background-position: 0 50%;
        position: absolute;
        max-width: 100%;
        margin-top: 2%
    }
    .list {
        margin-top: 20px;
        margin-left: 5%;
        font-size: 15px;
    }
    .about {
        font-size: 16px;
        margin-left: 3%
    }
    .btn {
        background-color: DodgerBlue;
        border: none;
        color: white;
        padding: 12px 16px;
        font-size: 16px;
        cursor: pointer;
        margin-left: 97%;
    }
    .btn:hover {
        background-color: RoyalBlue;
    }
    .headline2 {
        position: relative;
        border: 1px solid #DF5D5C;
        color: #DF5D5C;
        font: 12px 'PT Sans',sans-serif;
        line-height: 0;
        border-top: none;
    }

</style>