<template>
  <div id="photo-grid">
      <b-container fluid>
          <b-row no-gutters cols-sm="2" cols="1" cols-md="5" cols-lg="5">
            <b-col v-for="(image, index) in images" :style="styles" v-bind:key="index" v-on:clickExcess="triggerClick">
                <div class="overlay-wrap">
                    <router-link :to="image.link">
                        <div class="overlay-inner">
                            <div class="overlay-content">
                                <div class="overlay-text double-block-padding">
                                    <div class="t-entry">
                                        <h2 class="t-entry-title font-202503 h2 font-weight-700 fontspace-111509">{{image.text}}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="background-cover" :id="'img-' + index" v-bind:style="{ backgroundImage: 'url(' + image.img_name + ')'}"></div>
            </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            styles: {
                width: this.boxWidth,
                height: this.boxHeight,
                'border-radius': this.boxBorder + 'px',
                overflow: 'hidden'
            },
            images: [
                {
                    id: 1,
                    img_name: '/images/madison_piano.jpg',
                    text: 'About',
                    link: '/about'
                },
                {
                    id: 2,
                    img_name: '/images/unsplash2.jpg',
                    text: 'Works',
                    link: '/works'
                },
                {
                    id: 3,
                    img_name: '/images/studio2.jpg',
                    text: 'Studio',
                    link: '/studio'
                },
                {
                    id: 4,
                    img_name: '/images/unsplash4.jpg',
                    text: 'Gallery',
                    link: '/gallery'
                },
                {
                    id: 5,
                    img_name: '/images/unsplash.jpg',
                    text: 'Contact',
                    link: '/contact'
                },
            ]
        }
    },
    methods: {
        triggerClick() {
            // Some code here...
        }
    }
}
</script>

<style scoped>
#photo-grid img {
    width: 100%;
    height: 100%;
}

#photo-grid .col {
    min-height: 300px;
}

#photo-grid .col:hover .overlay-wrap {
    background: rgba(255,255,255,.65);
}

#photo-grid .col:hover .overlay-text {
    transform: translate(0px, 0%);
    transition-delay: 250ms;
    opacity: 1;
}

#photo-grid .col:hover .background-cover {
    transform: scale(1.05, 1.05);
}

.overlay-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
}

.overlay-wrap a {
    color: #fff;
}

.overlay-inner {
    display: table;
    table-layout: fixed;
    position: absolute;
    width: 100%;
    height: 100%;
}

.overlay-content {
    text-align: center;
    display: table-cell;
    height: 100%;
    vertical-align: middle;
}
.overlay-text {
    width: 75%;
    display: inline-block;
    width: 100%;
    margin: 0 auto;
    transition: opacity 0.2s ease-in-out,transform 0.2s ease-in-out;
    /* opacity: 0; */
    transform: scale(0.9);
}
.double-block-padding {
    padding: 72px;
}

.t-entry {
    width: 100%;
}

.t-entry h2 {
    position: relative;
}

.t-entry:before {
    position: absolute;
    content: '';
    background: rgba(0,0,0,.5);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.background-cover {
    width: 100%;
    height: 100%;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    transform: scale(1, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition-property: transform,filter, opacity;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.57, 0.21, 0.69, 1);
}

div#img-0 {
    background-position: left center;
}

</style>