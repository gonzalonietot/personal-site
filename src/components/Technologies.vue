<template>
  <section v-if="showTechnologies" class="technologies-image-background">
    <v-toolbar 
      data-app
      dark
      prominent
      height="60"
      color="#00838F"
    >
      <v-toolbar-title>{{ technologiesTitle }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="closeTechnologies">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-app style="height: 100px">
      <v-card flat tile>
        <v-window v-model="onboarding" reverse>
          <v-window-item
            v-for="n in img"
            :key="n.id"
          >
            <v-card
              height="200"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
                tag="v-card-text"
              >
                <v-col cols="7">
                  <v-img :src="n.src" />
                </v-col>
              </v-row>
            </v-card>
          </v-window-item>
        </v-window>
        <v-card-actions class="justify-space-between">
          <v-btn
            text
            @click="prev"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-item-group
            v-model="onboarding"
            class="text-center"
            mandatory
          >
            <v-item
              v-for="n in length"
              :key="`btn-${n}`"
              v-slot="{ active, toggle }"
            >
              <v-btn
                :input-value="active"
                icon
                @click="toggle"
              >
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
          <v-btn
            text
            @click="next"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-app>
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
    data () {
      return {
        length: 7,
        img: [
          {id: 1, src: 'https://victorroblesweb.es/wp-content/uploads/2017/03/vuejs2-victorroblesweb.jpg'},
          {id: 2, src: 'https://programacion.net/files/article/20151019061031_MySQL.jpg'},
          {id: 3, src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'},
          {id: 4, src: 'https://desarrolloweb.com/storage/tag_images/actual/sT1RLpDHzInATuKnDUkwXhKoaIOrtS97gBtgiQ6M.png'},
          {id: 5, src: 'https://www.hostingbo.net/wp-content/uploads/2019/09/html5-logo.png'},
          {id: 6, src: 'https://mariogl.com/wp-content/uploads/2018/01/git_logo-1-1.png'},
          {id: 7, src: 'https://miracomohacerlo.com/wp-content/uploads/2019/06/1129-1-1024x427.jpg'}
        ],
        onboarding: 0,
        technologiesTitle: 'Tecnologías'
      }
    },
    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
      closeTechnologies () {
        this.$emit('update:showTechnologies',false)
      }
    },
  }
</script>

