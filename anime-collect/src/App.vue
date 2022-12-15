
<template>
  <div class="w-full min-h-screen bg-main-dark-300">
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