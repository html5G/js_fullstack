<template>
  <div class="container">{{msg}}
    <child @wn='getWn'></child>  
  </div> 
</template>

<script>
import child from './child.vue'
export default {
  name: 'demoChild2',
 data() {
     return {
     msg: ''
     }
 },
 comments: {
     child
 },
 methods: {
     getWn (data) {
          this.msg = data
     }
 },
};
</script>

<style>
</style>
