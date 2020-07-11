<template>
  <div class="contact" :style="{ backgroundImage: 'url(\'' + bgImage + '\')'}">
    <PageHeading></PageHeading>
    <b-container>
        <b-row class="mb-5">
          <b-col>
            <h1 class="text-center mt-4 mb-4">This is a contact page</h1>
            <p>Contact information here</p>
          </b-col>
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

<style>

</style>
<style scoped>
.contact {
  font-family: 'Playfair Display';
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
  background-position: top;
  background-color: #000;
  background-color: rgba(0,0,0,.65);
  color: #FFF;
  font-size: 1.3rem;
}
.contact:before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: radial-gradient(black, transparent);
  background: rgba(0,0,0,.5);
}

@media (max-width: 767px) {
  .text-sm-center {
    text-align: center !important;
  }
}
</style>