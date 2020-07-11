<template>
  <div class="about" :style="{ backgroundImage: 'url(\'' + bgImage + '\')'}">
    <PageHeading></PageHeading>
    <b-container>
      <b-row class="justify-content-center">
        <b-col md="9" class="about_content">
          <p>Madison Kaminsky is a graduate of Sonoma State University where she earned a Bachelor of Music in Piano Performance and a Bachelor of Arts in composition.</p>
          <p>Born &amp; raised in Los Angeles, Madison honed her skills by participating in as many musical opportunities as possible: piano lessons, musical theater, film camp, and more. In middle school she competed in Knott's Berry Farm's "Music in the Parks" competition where she won the award for Best Accompanist. In high school she was the pianist for numerous musicals, several that earned Jerry Herman Award orchestral nominations with ceremonies at the famed Pantages Theater in Hollywood.  The Pantages would continue to be a source of influence when it offered Madison the chance to sit in the pit and observe the orchestra during a performance of The Phantom of the Opera. An opportunity to participate in a Disneyland behind-the-scenes animation film score session solidified her dream to one day score tv and films.</p>
          <p>Madison graduated from Oak Park High School where she was awarded the Woody Herman Jazz Award her Senior year. She was also awarded the P & M Thompson Music Scholarship from Sonoma State University where she was actively involved with numerous orchestras, scored student films, and twice-performed in the annual “Sonoma Musica Viva” series. She was fortunate to study under Marilyn Thompson and attend Master Classes with renowned musicians and composers including Matt Browne and Chris Harris - experiences that continue to shape and influence her pursuits.</p>
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
<style scoped>
.about {
  font-family: 'Playfair Display';
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
  background-position: top;
  background-color: #000;
  background-color: rgba(0,0,0,.65);
  color: #FFF;
}
.about_content {
  font-size: 1.3rem;
}
.about:before {
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