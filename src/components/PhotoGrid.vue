<template>
  <div id="photo-grid">
    <div v-for="(image, index) in images" :style="styles" v-bind:key="index" :box-height="'300px'" :box-width="'20%'" :excess-text="'+ {{count}}'" v-on:clickExcess="triggerClick">
      <img v-bind:src="image.url" />
    </div>
  </div>
</template>

<script>
export default {
    props: {
        boxWidth: { type: String, default: '25%' },
        boxHeight: { type: String, default: '200px' },
        boxBorder: { type: Number, default: 0 },
        excessText: { type: String, default: 'View more {{count}} images'}
    },
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
                    title: 'image 1',
                    url: 'https://placehold.it/400'
                }, {
                    title: 'image 2',
                    url: 'https://placehold.it/400'
                }, {
                    title: 'image 3',
                    url: 'https://placehold.it/400'
                }, {
                    title: 'image 4',
                    url: 'https://placehold.it/400'
                }, {
                    title: 'image 5',
                    url: 'https://placehold.it/400'
                }, {
                    title: 'image 6',
                    url: 'https://placehold.it/400'
                }
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
#photo-grid {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
}

#photo-grid div {
    padding: 15px 30px;
}

#photo-grid div img {
    width: 100%;
}

</style>