<template>
  <div id="app">
    <Header v-bind:socialLinks="socialLinks"></Header>
    <router-view></router-view>
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
          id: 2,
          name: 'instagram',
          fontAwesomeClass: 'fab',
          href: 'https://www.instagram.com/mads_kam_'
        },
        {
          id: 3,
          name: 'youtube',
          fontAwesomeClass: 'fab',
          href: 'https://www.youtube.com/channel/UCw-kFI2X7Gjb2L2QeTqtfaQ'
        },
        {
          id:1,
          name: 'linkedin-in',
          fontAwesomeClass: 'fab',
          href: "https://linkedin.com/in/madison-kaminsky-ab35aa1b3"
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
  /* height: 100%; */
  border: 10px solid #000;
}
header + div {
    flex: 1 0 auto;
}
footer {
  flex-shrink: 0;
}
#nav {
  text-align: center;
}
a.router-link-exact-active {
  color: #42b983;
}
@media (max-width: 767px) {
  div#app {
    height: auto;
  }
}
</style>
