<template>
  <div
      id="image-container"
      class="w-full px-5 flex justify-center">
    <div
    data-purpose="image-column"
    class="flex flex-col"
    v-for="item in colAmount">
      <div
          class=" w-72 p-3 rounded-lg group relative isolate"
          v-for="image in columns.urls[item-1]">
        <img
            :src="`${image}`"
            alt=""
            class="rounded-[inherit] group-hover:brightness-50"
            loading="lazy"
        >
        <div
            class=" hidden w-full h-full absolute p-9 top-0 flex-col items-end justify-between group-hover:flex "
            >
              <button
                class="bg-main-blue-300 px-5 py-3 rounded-full hover:bg-main-blue-400 main-button">
                Add
              </button>
              <div
                  data-purpose="low-buttons-container"
                  class="flex justify-around gap-2"
              >
                <button
                    class="p-3 bg-white rounded-full aspect-square grid place-items-center main-button"
                >
                  <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" />
                </button>
                <button
                    class="p-3 bg-white rounded-full aspect-square grid place-items-center main-button"
                >
                  <font-awesome-icon icon="fa-solid fa-ellipsis" />
                </button>
              </div>
        </div>
      </div>


    </div>

  </div>

</template>
<script>
  //TODO: separate into components, and comment code, after that work on navbar
import axios from 'axios';

export default {
  name: 'MainImages',
  data() {
    return {
      imageURLS : [],

      colAmount : this.getColAmount(),
      rowIncrement : 3,
      rowIncrementCount : 0,

      columns : {
        urls : [

        ],

      }


    }
  },

  methods: {
    initImages(){
      for (let i = 0; i < this.colAmount; i++) {
        this.getImages();
      }
      this.rowIncrementCount++;
      if(this.rowIncrementCount < this.rowIncrement){
        setTimeout(() => this.initImages(), 1000);
      }
      else this.rowIncrementCount = 0;
    },

    async getImages() {
      const Image = await axios.get('https://api.waifu.im/search/')
          .then(response => {
            let imageURL = response.data.images[0].url;
            this.showImages(imageURL);
          })
          .catch(error => {
            console.log('error')
          })
    },

    showImages(imageURL){
      this.imageURLS.push(imageURL);
      if(this.imageURLS.length >= this.rowIncrement){
        this.columns.urls.push(this.imageURLS);
        this.imageURLS = [];
        console.log(this.columns.urls);
      }
    },

    getColAmount(){
      let columnAmount = Math.floor(window.innerWidth/288);
      this.colAmount = columnAmount;
      return columnAmount;
    }
  },
  mounted() {
    this.initImages();

    window.addEventListener('resize', this.getColAmount);
  },
}

</script>
