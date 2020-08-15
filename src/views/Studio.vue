<template>
  <div class="studio" :style="{ backgroundImage: 'linear-gradient(50deg, black, transparent), url(\'' + bgImage + '\')'}">
    <PageHeading></PageHeading>
    <b-container>
        <b-row class="mb-5">
          <b-col>
            <h1 class="text-center mt-4 mb-4">Studio</h1>
            <h2 class="text-center">K.Kawai Baby Grand Piano</h2>
          </b-col>
        </b-row>
        <b-row>
            <b-col sm>
                <ul class="list-unstyled text-center">
                    <li><strong>Software:</strong></li>
                    <li>Cubase Pro 10</li>
                    <li>Logic Pro</li>
                    <li>Garageband</li>
                    <li>Composer Cloud X</li>
                    <li>Sibelius</li>
                    <li>Adobe Premiere</li>
                    <li>Ableton</li>
                </ul>
            </b-col>
            <b-col sm>
                <ul class="list-unstyled text-center">
                <li><strong>Hardware:</strong></li>
                <li>Apple Macintosh</li>
                <li>Yamaha MOXF8</li>
                <li>Kurzweil PC88mx</li>
                <li>Roland JV-880 Synth Module</li>
                <li>M-Audio AIR 192 - 6 Interface</li>
                </ul>
            </b-col>
            <b-col sm>
                <ul class="list-unstyled text-center">
                <li><strong>Mics:</strong></li>
                <li>Neuman TLM 103</li>
                <li>Sennheiser E865</li>
                <li>Shure Beta58A</li>
                <li>Shure 55SH - Series II</li>
                <li>M-Audio 192-6</li>
                <li>Audio Technica 2020</li>
                </ul>
            </b-col>
        </b-row>

    </b-container>
  </div>
</template>

<script>
import PageHeading from '../components/layout/PageHeading';
import bgImage from '@/assets/images/studio2-small.jpg';
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
.studio {
  font-family: 'Playfair Display';
  background-size: 65%;
  position: relative;
  background-repeat: no-repeat;
  background-position: right top;
  background-color: #000;
  color: #FFF;
}
.studio .col-sm {
  font-size: 1.3rem;
}
.studio:before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* background: radial-gradient(black, transparent);
  background: rgba(0,0,0,.5); */
}
@media (max-width: 767px) {
  .studio {
    background-size: cover;
    background-position: top center;
  }
}
</style>