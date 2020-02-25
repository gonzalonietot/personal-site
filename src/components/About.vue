<template>
    <section v-if="showAbout" class="about-image-background">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <button @click="closeAboutMe" class="btn"><i class="fa fa-close"></i></button>
        <h5 style="margin-left: 40%;">{{aboutMe}}</h5>
        <hr class="line">
        <ul class="list">
            <li><strong>{{dateOfBirth}}</strong>: {{day}}
                <i style="margin-left: 2%; color: black" class="fa fa-birthday-cake" aria-hidden="true"></i>
            </li>
            <li><strong>{{nationality}}</strong>: {{country}}
                <i style="margin-left: 2%; font-size: 18px; color: black" class="fa fa-globe" aria-hidden="true"></i>
            </li>
            <li><strong>{{phone}}</strong>: {{cellPhoneNumber}}
                <i style="margin-left: 2%; font-size: 25px; color: black" class="fa fa-mobile" aria-hidden="true"></i>
            </li>
            <li><strong>{{email}}</strong>:
                <a style="color: midnightblue;" href="mailto:maurogonzalonieto2011@hotmail.com.ar">{{emailName}}</a>
                <a style="color: black;" href="mailto:maurogonzalonieto2011@hotmail.com.ar">
                    <i style="margin-left: 2%; font-size: 15px;" class="fa fa-envelope" aria-hidden="true"></i>
                </a>
            </li>
            <li><strong>{{gitHub}}</strong>:
                <a href="https://github.com/gnieto11" target="_blank">
                    <i style="margin-left: 2%;font-size: 20px; color: black" class="fa fa-github" aria-hidden="true"></i>
                </a>
            </li>
            <li><strong>{{linkedin}}</strong>:
                <a href="https://www.linkedin.com/in/gonzalo-nieto-03508a199/"
                   target="_blank"><i style="margin-left: 2%; font-size: 20px; color: black" class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
        <p class="about">{{presentation}}</p>
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
        emailName: 'maurogonzalonieto2011@hotmail.com.ar',
        presentation: 'Soy programador full stack, me desenvuelvo en tecnologías, tales como\n' +
          '            HTML, CSS, Javascript, Vue.js, Node.js, Docker, MySql, MongoDB. Me considero\n' +
          '            entusiasta con ganas de aprender nuevas tecnologías, dispuesto a enfrentar nuevos proyectos,\n' +
          '            que brinden soluciones a la comunidad.',
        gitHub: 'Github',
        userGitHub: 'gnieto11',
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

<style scoped>
    .about-image-background {
        background: rgba(255,255,255,1);
        background: -moz-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,0.61) 47%, rgba(237,237,237,0.17) 100%);
        background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(47%, rgba(246,246,246,0.61)), color-stop(100%, rgba(237,237,237,0.17)));
        background: -webkit-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,0.61) 47%, rgba(237,237,237,0.17) 100%);
        background: -o-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,0.61) 47%, rgba(237,237,237,0.17) 100%);
        background: -ms-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,0.61) 47%, rgba(237,237,237,0.17) 100%);
        background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(246,246,246,0.61) 47%, rgba(237,237,237,0.17) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );
        background-position: 0 50%;
        position: absolute;
        max-width: 40%;
        margin-top: 10%;
        margin-left: 30%;
    }
    .list {
        margin-top: 20px;
        margin-left: 5%;
        font-size: 13px;
    }
    .about {
        margin-left: 3%;
        font-size: 13px;
    }
    .btn {
        color: black;
        padding: 12px 16px;
        font-size: 16px;
        cursor: pointer;
        margin-left: 92.6%;
    }
    .line {
        background-color: darkcyan;
        height: 2px;
        width: 8%;
        margin-left: 45%;
        margin-top: 5px;
    }

    @media screen and (max-width: 768px) {
        .about-image-background {
            max-width: 90%;
            margin-top: 15%;
            margin-left: 5%;
        }
    }

</style>
