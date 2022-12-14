<template>
  <button
      class="w-20 aspect-square bg-amber-200"
      >
    this is a button {{colAmount}}
  </button>
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
        >
        <div
            class=" hidden w-full h-full absolute p-7 top-0 flex-col items-end justify-between group-hover:flex "
            >
              <button
                class="bg-amber-200 px-5 py-3 rounded-full ">
                Add
              </button>
              <div
                  data-purpose="low-buttons-container"
                  class="flex justify-around gap-2"
              >
                <button
                    class="w-7 aspect-square p-3 bg-white rounded-full"
                >

                </button>
                <button
                    class="w-7 aspect-square p-3 bg-white rounded-full"
                >

                </button>
              </div>
        </div>
      </div>


    </div>

  </div>

</template>
<style>
.image-hover-content:before{
  content:'';
  position: absolute;
  inset:0;
  background: red;
}
</style>
<script>
//TODO: create content for each column individually, refactor till desired effect is got
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
