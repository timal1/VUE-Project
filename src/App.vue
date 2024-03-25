<template>
    <Header/>
  <Homepage/>
  <Footer/>

</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Homepage from './components/Homepage.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Homepage
  }
}
</script>

<style lang="scss">
#app {
  font-family: "DM Serif Display", serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.container {
  margin: 0 auto;
  max-width: 1200px;
}
</style>
