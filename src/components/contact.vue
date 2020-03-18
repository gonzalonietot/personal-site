<template>
  <section v-if="showContact" class="contact-image-background">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <button type="button" @click="closeContact()" class="btn"><i class="fa fa-close"></i></button>
    <h4 class="titleContact"><strong>{{contactTitle}}</strong></h4>
    <hr class="line">
    <template>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          class="form"
          v-model="name"
          :counter="20"
          :rules="nameRules"
          label="Nombre"
          required
        >
        </v-text-field>
        <v-text-field
          class="form"
          v-model="email"
          :rules="emailRules"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          class="form"
          v-model="message"
          :rules="messageRules"
          label="Mensaje"
          required
        ></v-text-field>
      </v-form>
      <v-btn style="margin-left: 88%; color: black" icon><v-icon>mdi-send</v-icon></v-btn>
    </template>
  </section>
</template>

<script>
  export default {
    name: 'contact',
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
        ]
      }
    },
    methods: {
      closeContact () {
        this.$emit('update:showContact', false)
      },
      validate () {
        this.$refs.form.validate()
      }
    }
  }
</script>

<style scoped>
  .contact-image-background {
    background: rgba(255,255,255,1);
    background: -moz-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(237,237,237,0.23) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(100%, rgba(237,237,237,0.23)));
    background: -webkit-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(237,237,237,0.23) 100%);
    background: -o-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(237,237,237,0.23) 100%);
    background: -ms-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(237,237,237,0.23) 100%);
    background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(237,237,237,0.23) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );
    max-width: 40%;
    margin-left: 30%;
    margin-top: 16%;
  }
  .btn {
    color: black;
    padding: 12px 16px;
    font-size: 20px;
    cursor: pointer;
    margin-left: 92.6%;
  }
  .titleContact {
    margin-left: 40%;
  }
  .line {
    background-color: darkcyan;
    height: 2px;
    width: 8%;
    margin-left: 45%;
    margin-top: 5px;
  }
  .form {
    width: 90%;
    margin-left: 20px;
  }
  @media screen and (max-width: 768px) {
    .contact-image-background {
      max-width: 90%;
      margin-top: 70%;
      margin-left: 3%;
    }
    .btn {
      margin-left: 85%;
    }
    .line {
      margin-left: 46%;
    }
    .titleContact {
      margin-left: 30%;
    }
  }
</style>
