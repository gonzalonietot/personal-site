<template>
    <section v-if="showAbout" class="about-image-background">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <button type="button" @click="closeAboutMe" class="btn"><i class="fa fa-close"></i></button>
        <h4 class="titleAboutMe"><strong>{{aboutMe}}</strong></h4>
        <hr class="line">
        <ul class="list">
            <li><strong style="padding-right: 10px;">
                {{nationality}}:</strong>{{country}}
                <i class="fa fa-globe icon" aria-hidden="true"></i>
            </li>
            <li><strong>{{gitHub}}</strong>:
                <a href="https://github.com/gnieto11" target="_blank">
                    <i class="fa fa-github icon" aria-hidden="true"></i>
                </a>
            </li>
            <li><strong>{{linkedin}}</strong>:
                <a href="https://www.linkedin.com/in/gonzalo-nieto-03508a199/"
                   target="_blank"><i class="fa fa-linkedin icon" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
        <p class="about"><strong style="color: black">{{presentation}}</strong></p>
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
        presentation: 'Soy desarrollador web-mobile full stack, me desenvuelvo en tecnologías, tales como\n' +
          '            HTML5, CSS3, Javascript, Vue.js, Node.js, Docker, MySql, MongoDB, Cordova. Me considero\n' +
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
        padding-top: 10px;
    }
    .btn {
        color: black;
        padding: 12px 16px;
        font-size: 20px;
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
    .titleAboutMe {
        margin-left: 40%;
    }
    .icon {
        margin-left: 2%;
        font-size: 20px;
        color: black
    }


    @media screen and (max-width: 768px) {
        .about-image-background {
            max-width: 90%;
            margin-top: 20%;
            margin-left: 5%;
        }
        .btn {
            margin-left: 85%;
        }
        .list {
            margin-left: 10%;
        }
        .line {
            margin-left: 46%;
        }
        .titleAboutMe {
            margin-left: 35%;
        }
    }

</style>
