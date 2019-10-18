<template>
  <div>
    <Header />
    <Hero/>
    <div id="app">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Hero,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0.01em;
}
.layout-padding { max-width: 1200px; margin: 0 auto;}
.title {
  padding: 15px 0;
  margin: 30px 40px;
  color: initial;
}
.title h1 {font-size: 30px;}
.title p {font-size: 20px;}
</style>
