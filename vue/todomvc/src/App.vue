<template>
  <div>
    <!-- <counter :count="count" v-on:increment="incrementCount"/> -->
    <counter-brother :count="count"/>
  </div>
</template>

<script>
import Counter from './components/Counter';
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
  },
  components: {
    'counter': Counter,
  }
}
</script>

<style>

</style>
