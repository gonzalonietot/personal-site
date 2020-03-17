<template>
    <div class="image-background">
      <h1 class="name">{{name}}</h1>
        <h3 class="software-developer">{{softwareDeveloper}}</h3>
        <template v-if="!showAbout && !showTechnologies">
            <button type="button" class="about-me button" @click="openAboutMe()">{{aboutMe}}</button>
            <button type="button" class="technologies button" @click="openTechnologies()">{{technologies}}</button>
        </template>
        <about v-if="showAbout" :showAbout.sync="showAbout" />
        <technologies v-if="showTechnologies" :show-technologies.sync="showTechnologies"></technologies>
    </div>
</template>

<script>
import about from '../components/About.vue'
import technologies from '../components/Technologies'
export default {
  name: 'Home',
  components: {
    about,
    technologies
  },
  data() {
    return {
      showAbout: false,
      showTechnologies: false,
      showContact: false,
      name: 'Mauro Gonzalo Nieto',
      aboutMe: 'Sobre mi',
      technologies: 'Tecnologías',
      softwareDeveloper: 'Software developer'
    }
  },
  methods: {
    openAboutMe () {
      this.showAbout = true
    },
    openTechnologies () {
      this.showTechnologies = true
    }
  }
}
</script>

<style scoped>
    .image-background {
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/d/dd/Code_presentation_background.png");
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        height: 150%;
        width: 100%;
    }
    .name {
        color: white;
        text-align: center;
        font-size: 300%;
        font-family: monospace;
        transform: translate(1%,  100%);
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
    .button {
        border: 1px white solid;
        color: white;
        height:40px ;
        width: 150px;
    }

    @media screen and (max-width: 768px) {
        .image-background {
            background-image: url("https://upload.wikimedia.org/wikipedia/commons/d/dd/Code_presentation_background.png");
            background-repeat: no-repeat;
        }
        .name {
            transform: translate(1%, 50%);
            font-size: 35px;
            margin-left: 0;
            margin-right: 0;
        }
        .software-developer {
            transform: translate(1%, 150%);
            margin-left: 5%;
            margin-right: 20%;
            width: 90%;
        }
        .button {
            height: 30px;
            width: 130px;
        }
        .about-me {
            transform: translate(1%, 250%);
            margin-left: 30%;
        }
        .technologies {
            margin-left: 30%;
            transform: translate(1%, 300%);
        }
    }
</style>
