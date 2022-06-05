<template>
  <!-- <div class="gallery" :style="{ backgroundImage: 'url(\'' + bgImage + '\')'}"> -->
  <div class="gallery">
    <PageHeading></PageHeading>
    <b-container>
      <b-row class="mb-5">
          <b-col>
            <h1 class="text-center mt-4 mb-4">Gallery</h1>
          </b-col>
        </b-row>
        <b-row class="mb-5">
            <b-col md="12">
                <div class="img_wrap">
                    <div :style="{ backgroundImage: 'url(\'' + img1 + '\')'}"></div>
                </div>
                <div class="img_wrap">
                    <div :style="{ backgroundImage: 'url(\'' + img2 + '\')'}"></div>
                </div>
                <div class="img_wrap">
                    <div :style="{ backgroundImage: 'url(\'' + img3 + '\')'}"></div>
                </div>
                <div class="img_wrap">
                    <div :style="{ backgroundImage: 'url(\'' + img4 + '\')'}"></div>
                </div>            
                <div class="img_wrap">
                    <div :style="{ backgroundImage: 'url(\'' + img5 + '\')'}"></div>
                </div>          
                <div class="img_wrap">
                    <div :style="{ backgroundImage: 'url(\'' + img6 + '\')'}"></div>
                </div>
                <div class="img_wrap">
                    <div :style="{ backgroundImage: 'url(\'' + img7 + '\')'}"></div>
                </div>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>
<script>
import PageHeading from '../components/layout/PageHeading';
import img1 from '../assets/images/IMG_1.jpg';
import img2 from '../assets/images/IMG_2.jpg';
import img3 from '../assets/images/IMG_3.jpg';
import img4 from '../assets/images/IMG_4.jpg';
import img5 from '../assets/images/IMG_5.jpg';
import img6 from '../assets/images/IMG_6.jpg';
import img7 from '../assets/images/IMG_7.jpg';
//import bgImage from '@/assets/images/site-bg.jpg';

export default {
  components: {
    PageHeading
  },
  data: function() {
    return {
      //bgImage: bgImage
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
      img5: img5,
      img6: img6,
      img7: img7,
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

.gallery img {
  max-width: 300px;
}

.gallery .img_wrap {
  min-height: 300px;
}

.gallery .col-md-12 {display: flex;flex-wrap: wrap;}

.gallery .col-md-12 > div {flex: 0 1 33%;}

.gallery .img_wrap div {
  margin: 20px;
  min-height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center
}

</style>