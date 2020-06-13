<template>
  <div id="app">
    <Header v-bind:socialLinks="socialLinks"></Header>
    <Footer v-bind:socialLinks="socialLinks"></Footer>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
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
</style>
