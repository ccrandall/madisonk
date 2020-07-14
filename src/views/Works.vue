<template>
  <div class="works" :style="{ backgroundImage: 'url(\'' + bgImage + '\')'}">
    <PageHeading></PageHeading>
    <b-container>
        <b-row class="mb-5">
          <b-col>
            <h1 class="text-center mt-4 mb-4">Works</h1>
          </b-col>
        </b-row>
        <b-row>
            <b-col sm>
            </b-col>
            <!-- <b-col sm>
                
            </b-col>
            <b-col sm>
                
            </b-col> -->
        </b-row>

    </b-container>
  </div>
</template>

<script>
import PageHeading from '../components/layout/PageHeading';
import bgImage from '@/assets/images/site-bg.jpg';
export default {
  components: {
    PageHeading
  },
  data: function() {
    return {
      bgImage: bgImage
    };
  }
}
</script>

<style scoped>
.works {
  font-family: 'Playfair Display';
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
  background-position: top;
  background-color: #000;
  background-color: rgba(0,0,0,.65);
  color: #FFF;
}
.works .col-sm {
  font-size: 1.3rem;
}
.works:before {
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