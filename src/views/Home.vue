<template>
  <div class="home">
    <div class="animated fadeIn">
      <div id="logo" class="logo animated fadeOut"></div>
    </div>
    <b-container>
      <b-row class="mb-5">
        <b-col cols="3" class="p-5">
          <h3>BIOGRAPHY</h3>
        </b-col>
        <b-col cols="9" class="p-5">
          <h3>Madison Kaminsky</h3>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="9">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam repudiandae repellat tempora. Ullam nemo laudantium ex, tenetur labore assumenda vitae autem culpa excepturi possimus illo reprehenderit cum unde officiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam repudiandae repellat tempora. Ullam nemo laudantium ex, tenetur labore assumenda vitae autem culpa excepturi possimus illo reprehenderit cum unde officiis</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam repudiandae repellat tempora. Ullam nemo laudantium ex, tenetur labore assumenda vitae autem culpa excepturi possimus illo reprehenderit cum unde officiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam repudiandae repellat tempora. Ullam nemo laudantium ex, tenetur labore assumenda vitae autem culpa excepturi possimus illo reprehenderit cum unde officiis</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  methods: {
    removeOverlay: function() {
      setTimeout(function() {
        document.getElementsByClassName('home')[0].removeChild(document.getElementsByClassName('animated')[0]);
      }, 8000);
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
.logo {
    z-index: 0;
    background-image: url(/../../images/MadSoundzMusic_LOGO_BLACK.png);
    background-repeat: no-repeat;
    background-position: top center;
    background-color: rgba(255,255,255,1);
    background-size: 70%;
}
.animated{
    -webkit-animation-duration: 8s;
    animation-duration: 8s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    
}


.fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
}
.fadeIn {
    
    -webkit-animation-name: fadeOut;
    animation-name: fadeIn;
    -webkit-animation-direction: reverse; 
    animation-direction: reverse;
}
    </style>