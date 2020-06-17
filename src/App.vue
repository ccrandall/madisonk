<template>
  <div id="app">
    <Header v-bind:socialLinks="socialLinks"></Header>
    <PhotoGrid></PhotoGrid>
    <Footer v-bind:socialLinks="socialLinks"></Footer>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PhotoGrid from './components/PhotoGrid';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    PhotoGrid
  },
  data: function() {
    return {
      socialLinks: [
        {
          id: 1,
          name: 'twitter',
          fontAwesomeClass: 'fab',
          href: '#twitter'
        },
        {
          id: 2,
          name: 'instagram',
          fontAwesomeClass: 'fab',
          href: '#ig'
        },
        {
          id: 3,
          name: 'youtube',
          fontAwesomeClass: 'fab',
          href: '#youtube'
        }
      ]
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
div#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
header + div {
    flex: 1 0 auto;
}
footer {
  flex-shrink: 0;
}
</style>
