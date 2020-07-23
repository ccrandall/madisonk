<template>
  <div class="works" :style="{ backgroundImage: 'url(\'' + bgImage + '\')'}">
    <PageHeading></PageHeading>
    <b-container>
        <b-row class="mb-5">
          <b-col>
            <h1 class="text-center mt-4 mb-4">Works</h1>
          </b-col>
        </b-row>
        <b-row class="mb-5">
            <b-col>
                <div>
                    <b-card-group deck>
                        <b-card bg-variant="dark" :header="work.title" text-variant="white" class="text-center" v-bind:key="work.id" v-for="work in works">
                            <b-card-text v-html="work.summary"></b-card-text>
                            <audio controls preload>
                                <source :src="work.audioFile" type="audio/mp3">
                            Your browser does not support the audio element.
                            </audio>
                        </b-card>
                    </b-card-group>
                </div>
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
        works: [
            {
                id: 1,
                title: 'Work Title',
                summary: 'Card text, summary',
                audioFile: require('@/assets/media/final-heartbreak.mp3')
            },
            {
                id: 2,
                title: 'Work Title 2',
                summary: 'Card text, summary',
                audioFile: require('@/assets/media/final-heartbreak.mp3')
            },
            {
                id: 3,
                title: 'Work Title 3',
                summary: 'Card text, summary',
                audioFile: require('@/assets/media/final-heartbreak.mp3')
            }
        ],
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