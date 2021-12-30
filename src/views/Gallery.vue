<template>
  <!-- <div class="gallery" :style="{ backgroundImage: 'url(\'' + bgImage + '\')'}"> -->
  <div class="gallery">
    <PageHeading></PageHeading>
    <b-container>
      <b-row class="justify-content-center">
        <b-col md="12" class="gallery_content">
          <h3>Photos coming soon!</h3>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import PageHeading from '../components/layout/PageHeading';
//import bgImage from '@/assets/images/site-bg.jpg';

export default {
  components: {
    PageHeading
  },
  data: function() {
    return {
      //bgImage: bgImage
    };
  }
}
</script>
<style scoped>
.gallery {
  font-family: 'Playfair Display';
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
  background-position: top;
  background-color: #000;
  background-color: rgba(0,0,0,.65);
  color: #FFF;
}
.gallery_content {
  font-size: 1.3rem;
}

.gallery_content h3 {
    text-align: center;
    margin: 2em 0;
}

.gallery_content h3:after {
    display: none;
}
.gallery:before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: radial-gradient(black, transparent);
  background: rgba(0,0,0,.5);
}

</style>