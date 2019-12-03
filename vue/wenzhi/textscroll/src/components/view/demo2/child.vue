<template>
  <div class="container">
      <button @click="sendMsg">ok</button>
  </div>
</template>

<script>
export default {
    name: 'demoChild2',
 data() {
     return {
         message: '888'
     }
 },
 methods: {
     sendMsg() {
         this.$emit('wn',this.message)
     }
 },
};
</script>

<style>
</style>
