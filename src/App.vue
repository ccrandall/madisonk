<template>
  <div id="app">
    <Header v-bind:socialLinks="socialLinks"></Header>
  </div>
</template>

<script>
import Header from './components/layout/Header';

export default {
  name: 'App',
  components: {
    Header
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
