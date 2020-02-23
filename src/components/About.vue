<template>
    <section v-if="showAbout" style="max-width: 600px">
            <v-card style="color: white">
                <h3>
                    <span class="headline" style="color:black">ACERCA DE MI</span>
                </h3>
                <v-card-text>
                    <ul class="list">
                        <li>Fecha de nacimiento: 01/11/1997</li>
                        <li>Nacionalidad: Argentina</li>
                        <li>Celular: (0351)- 3516745259</li>
                        <li>E-mail: maurogonzalonieto2011@hotmail.com.ar</li>
                    </ul>
                    <br>
                    <p class="about">Soy programador full stack, me desenvuelvo en tecnologías, tales como
                        HTML, CSS, Javascript, Vue.js, Node.js, Docker, MySql, MongoDB. Me considero
                        entusiasta con ganas de aprender nuevas tecnologías, dispuesto a enfrentar nuevos proyectos,
                        que brinden soluciones a la comunidad.</p>
                    <br>
                    <small><strong>*By Gonzalo Nieto</strong></small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="closeAboutMe()">Cerrar</v-btn>
                </v-card-actions>
            </v-card>
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
    methods: {
      closeAboutMe () {
        this.$emit('update:showAbout',false)
      }
    }
  }
</script>

<style scoped>
    .about-image-background {}
    .list {
        margin-left: 15px;
        font-size: 15px;
        color: black
    }
    .about {
        color: black;
        font-size: 16px
    }

</style>