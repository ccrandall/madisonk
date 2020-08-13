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
            <b-col md="6" v-bind:key="work.id" v-for="work in works">
                <div>
                    <b-card-group deck>
                        <b-card :header="work.title" border-variant="light" class="text-center mb-4">
                            <b-card-text v-html="work.summary"></b-card-text>
                            <audio controls preload controlsList="nodownload" v-if="work.audioFile">
                                <source :src="work.audioFile" type="audio/mp3">
                            Your browser does not support the audio element.
                            </audio>
                            <div v-if="work.pdfFile">
                                <a :href="work.pdfFile">Download PDF</a>
                            </div>
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
                id: 3,
                title: 'Wherever You Are',
                summary: 'Piano Solo'
            },
            {
                id: 2,
                title: 'Eerie Movements of the Night',
                summary: 'Piano + 2 Cellos',
                audioFile: require('@/assets/media/eerie-movements-of-the-night.mp3')
            },
            {
                id: 4,
                title: 'Prelude to an Angel',
                summary: 'Standard Orchestral instrumentation',
                audioFile: require('@/assets/media/Prelude-for-an-Angel2edit.mp3')
            },
            {
                id: 1,
                title: 'Final Heartbreak',
                summary: 'Violin 1, Violin 2, Viola, and Cello',
                audioFile: require('@/assets/media/final-heartbreak.mp3')
            },
            {
                id: 5,
                title: 'From Twilight Till Dawn',
                summary: 'Standard Orchestral instrumentation ',
                audioFile: require('@/assets/media/FromTwilightTillDawn.mp3')
            },
            {
                id: 6,
                title: 'Farewell',
                summary: 'Trumpet, French Horn, Trombone, and Tuba',
                audioFile: require('@/assets/media/final-heartbreak.mp3')
            },
        ],
        bgImage: bgImage
    };
  }
}
</script>

<style scoped>
.bg-primary {
    background-color: #a61d49;
    background: linear-gradient(-180deg, rgba(166,29,73,1) 0%, rgba(246,152,182,1) 100%)
}
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
.works .card {
    border: none;
    border-radius: 0;
    background: transparent;
}

.works .card a {
    color: #FFF;
}

.works .card .card-header {
    font-size: 1.5em;
}

.works .card .card-header:after {
    content: '';
    background: #FFF;
    width: 14%;
    height: 2px;
    display: block;
    margin: 10px auto;
}
</style>