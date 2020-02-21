<template>
    <div>
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
        background-image: url("https://images3.alphacoders.com/228/thumb-1920-228417.jpg");
        padding: 350px;
        background-position: center;
    }
    .software-developer {
        color: white;
        border: 1px white solid;
        text-align: center
    }

    .centrado {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
