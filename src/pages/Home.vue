<template>
    <div class="image-background">
        <h1 class="name">{{name}}</h1>
        <h3 class="software-developer">{{softwareDeveloper}}</h3>
        <template v-if="!showAbout">
            <button class="about-me button" @click="openAboutMe()">{{aboutMe}}</button>
            <button class="technologies button">{{technologies}}</button>
            <button class="contact button" >{{contact}}</button>
        </template>
        <about v-if="showAbout" :showAbout.sync="showAbout" />
    </div>
</template>

<script>
import about from '../components/About.vue'
export default {
  name: 'Home',
  components: {
    about
  },
  data() {
    return {
      showAbout: false,
      name: 'Mauro Gonzalo Nieto',
      aboutMe: 'Sobre mi',
      technologies: 'Tecnologías',
      contact: 'Contacto',
      softwareDeveloper: 'Software developer'
    }
  },
  methods: {
    openAboutMe () {
      this.showAbout = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .image-background {
        background-image: url("https://aprender-libre.com/wp-content/uploads/2018/08/Iniciarse-como-Programador.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 5% 65%;
        position: absolute;
        height: 100%;
        width: 100%;
    }
    .name {
        color: white;
        text-align: center;
        font-size: 300%;
        transform: translate(1%, 200%);
        margin-left: 30%;
        margin-right: 30%;
    }
    .software-developer {
        color: white;
        border: 1px white solid;
        text-align: center;
        transform: translate(1%, 370%);
        margin-left: 40%;
        margin-right: 40%;
    }
    .about-me {
        transform: translate(1%, 420%);
        margin-left: 45%;
    }
    .technologies {
        transform: translate(1%, 450%);
        margin-left: 45%;
    }
    .contact {
        transform: translate(1%, 480%);
        margin-left: 45%;
    }
    .button {
        border: 1px white solid;
        color: white;
        height:40px ;
        width: 150px;
    }

    @media screen and (max-width: 768px) {
        .name {
            transform: translate(1%, 120%);
            font-size: 35px;
            margin-left: 0;
            margin-right: 0;
        }
        .software-developer {
            transform: translate(1%, 160%);
            margin-left: 20%;
            margin-right: 20%;
        }
        .button {
            height: 30px;
            width: 130px;
        }
        .about-me {
            transform: translate(1%, 400%);
            margin-left: 35%;
        }
        .technologies {
            margin-left: 35%;
        }
        .contact {
            transform: translate(1%, 500%);
            margin-left: 35%;
        }
    }
</style>
