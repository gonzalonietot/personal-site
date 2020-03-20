<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      style="position: fixed"
      shrink-on-scroll
      src="https://i.picsum.photos/id/974/1920/1080.jpg"
    >
      <v-avatar size="40" style="padding-top: 10px">
        <v-img src="../../public/static/personal.jpg"></v-img>
      </v-avatar>
      <v-spacer></v-spacer>
      <v-btn href="https://github.com/gnieto11"  target="_blank" icon><v-icon>mdi-github</v-icon></v-btn>
      <v-btn href="https://www.linkedin.com/in/gonzalo-nieto-03508a199/" target="_blank" icon><v-icon>mdi-linkedin</v-icon></v-btn>
      <v-btn href="mailto:maurogonzalonieto2011@hotmail.com.ar" icon><v-icon>mdi-email</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    name: 'Toolbar',
    data () {
      return {
        items: [
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me 2'},
        ],
      }
    }
  }
</script>

