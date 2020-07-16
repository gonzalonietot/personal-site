<template>
  <section v-if="showContact" class="contact-image-background">
    <v-toolbar
      data-app
      dark
      prominent
      height="60"
      color="#00838F"
    >
      <v-toolbar-title>{{ contactTitle }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="closeContact">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <template>
      <v-form 
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          class="form"
          :counter="20"
          :rules="nameRules"
          label="Nombre"
          required
        />
        <v-text-field
          v-model="email"
          class="form"
          :rules="emailRules"
          label="Email"
          required
        />
        <v-text-field
          v-model="message"
          class="form"
          :rules="messageRules"
          label="Mensaje"
          required
        />
      </v-form>
      <v-btn style="margin-left: 88%; color: black" type="submit" icon @click="sendEmail">
        <v-icon>mdi-send</v-icon>
      </v-btn>
      <v-snackbar
        v-model="successEmail"
        :bottom="y === 'bottom'"
        :color="color"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :right="x === 'right'"
        :timeout="timeout"
        :top="y === 'top'"
        :vertical="mode === 'vertical'"
      >
        {{ textSuccess }}
      </v-snackbar>
    </template>
  </section>
</template>

<script>
  import emailjs from 'emailjs-com'
  export default {
    name: 'Contact',
    props: {
      showContact: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        contactTitle: 'Contacto',
        valid: true,
        name: '',
        email: '',
        message: '',
        nameRules: [
          v => !!v || 'Nombre es requerido',
          v => (v && v.length <= 20) || 'Supera el máximo de caracteres permitido',
        ],
        emailRules: [
          v => !!v || 'E-mail es requerido',
          v => /.+@.+\..+/.test(v) || 'E-mail inválido',
        ],
        messageRules: [
          v => !!v || 'Mensaje es requerido',
        ],
        color: 'blue',
        mode: '',
        x: null,
        y: 'top',
        timeout: 3000,
        toName: 'Gonzalo Nieto',
        successEmail: false,
        textSuccess: 'Email enviado correctamente',
        emailReply: "maurogonzalonieto2011@hotmail.com.ar"
      }
    },
    mounted() {
      emailjs.init("user_m18gpHeoWn3IR6PJ2GpDm")
    },
    methods: {
      closeContact () {
        this.$emit('update:showContact', false)
      },
      validate () {
        this.$refs.form.validate()
      },
      async sendEmail() {
        try {
          let data = {
            reply_to: this.emailReply,
            to_name: this.toName,
            from_name: this.name,
            from_email: this.email,
            message: this.message
          }
          if (this.$refs.form.validate()) {
            await emailjs.send("gmail", "template_DS5RpxAn", data)
            this.successEmail = true
            this.$refs.form.reset()
          }
        } catch (e) {
          //
        }
      },
    }
  }
</script>

