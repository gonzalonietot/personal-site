<template>
  <section v-if="showContact" class="contact-image-background">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <button type="button" class="btn" @click="closeContact()">
      <i class="fa fa-close" />
    </button>
    <h4 class="titleContact">
      <strong>{{ contactTitle }}</strong>
    </h4>
    <hr class="line">
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
      <v-snackbar
        v-model="errorEmail"
        :bottom="y === 'bottom'"
        :color="color"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :right="x === 'right'"
        :timeout="timeout"
        :top="y === 'top'"
        :vertical="mode === 'vertical'"
      >
        {{ textError }}
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
        errorEmail: false,
        successEmail: false,
        textSuccess: 'Email enviado correctamente',
        textError: 'El email no pudo enviarse'
      }
    },
    mounted() {
      emailjs.init("user_m18gpHeoWn3IR6PJ2GpDm");
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
            to_name: this.toName,
            from_name: this.name,
            from_email: this.email,
            message: this.message
          }
          if (this.$refs.form.validate()) {
            await emailjs.send("outlook", "template_DS5RpxAn", data)
            this.successEmail = true
            this.$refs.form.reset()
          }
        } catch (e) {
          this.errorEmail = true
        }
      },
    }
  }
</script>

