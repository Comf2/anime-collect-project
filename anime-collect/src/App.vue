
<template>
  <div class="w-full min-h-screen bg-gray-800">
    <MainImages></MainImages>
  </div>
</template>

<script>
import MainImages from './components/MainImages.vue';

  export default {
    name:'App',
    components: {
      MainImages

    },
    data() {
      return {
        posts: [],
      }
    },
    methods: {
      async getData() {

      }
    },
  }
</script>