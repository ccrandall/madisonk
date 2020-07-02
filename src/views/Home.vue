<template>
  <div class="home">
    <div class="animated" @change.once="removeOverlay">
      <div id="logo" class="logo animated fadeOut"></div>
    </div>
    <div class="home_container fadeIn">
      <PhotoGrid></PhotoGrid>
      <b-container class="content p-5">
        <b-row>
          <b-col>
            <h1>Heading goes here</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas, dignissimos facilis accusamus beatae neque harum asperiores tempora sit obcaecati unde quos odio molestias enim. Quasi distinctio libero quisquam eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas, dignissimos facilis accusamus beatae neque harum asperiores tempora sit obcaecati unde quos odio molestias enim. Quasi distinctio libero quisquam eaque</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import PhotoGrid from '../components/PhotoGrid';
export default {
  name: 'Home',
  components: {
    PhotoGrid
  },
  data: function() {
    return {
      animationRun: false
    }
  },
  methods: {
    removeOverlay: function() {
      setTimeout(function() {
        document.getElementsByClassName('home')[0].removeChild(document.getElementsByClassName('animated')[0]);
      }, 5000);
      this.animationRun = true;
      document.getElementsByClassName('home_container')[0].style.opacity = 1;
    }
  },
  mounted: function() {
    this.removeOverlay();
  }
}
</script>

<style>
.home {
  font-family: 'Playfair Display';
}
.home .col-9 h3 {
    font-size: 2.5rem;
}
@-webkit-keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.logo {
    z-index: 0;
    background-image: url(/../../images/MadSoundzMusic_LOGO_BLACK.png);
    background-repeat: no-repeat;
    background-position: top center;
    background-color: rgba(255,255,255,1);
    background-size: 70%;
}
.animated{
    -webkit-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    
}
.home_container {
  opacity: 0;
}
.fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
}
.fadeIn {
    animation: fadeIn ease 5s;
    -webkit-animation: fadeIn ease 5s;
    -moz-animation: fadeIn ease 5s;
    -o-animation: fadeIn ease 5s;
    -ms-animation: fadeIn ease 5s;
}
    </style>