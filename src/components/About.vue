<template>
    <div>
        <h1 class="name">Mauro Gonzalo Nieto</h1>
        <h2 class="software-developer">Software developer</h2>
    </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div {
        background-image: url("https://www.fondosni.com/images/2012-10-21/Globo%20sobre%20el%20mundo-510880.jpg");
        height: 730px;
        max-height: 800px;
        background-position: center;
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
        transform: translate(1%, 500%);
        margin-left: 40%;
        margin-right: 40%;
    }
</style>
