<template>
  <button
      class="w-20 aspect-square bg-amber-200"
      @click="showImages()">
    this is a button
  </button>
  <div
      id="image-container"
      class="w-full px-5 flex gap-7 flex-wrap items-center justify-center">
    <div
        v-for="imageURl in imageURLS"
        class="">
      <img
          :src="`${imageURl}`"
          alt=""
          class="w-72"
          loading="lazy">
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import {ref} from "vue";

export default {
  name: 'MainImages',
  data() {
    return {
    imageURLS : [],
    }
  },

  methods: {
    async showImages() {
      const Image = await axios.get('https://api.waifu.im/search/')
          .then(response => {
            let imageURL = response.data.images[0].url;
            console.log(imageURL);
            this.imageURLS.push(imageURL)
          })
          .catch(error => {
            console.log('error')
          })
    },
  },
  mounted() {
    for (let i = 0; i < 8; i++) {
      this.showImages();
    }
  },
}

</script>
