<template>
   <div class="container">
       <child :send-msg="massage"
        :send-date="date"
        :send-age="age"></child>
   </div>
</template>

<script>
import child from './child.vue'
export default {
    name: 'demo1',
    data() {
        return {
           massage: '777',
           date: '2018-6-11',
           age: '18'
        }
    },
}
</script>

<style>

</style>
