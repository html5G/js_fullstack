<template>
  <div class="look-one">
    {{ msg }}
    <div class="go-two" @click="goTwo">去look2</div>
  </div>
</template>

<script>
export default {
  name: "LookOne",
  data() {
    return {
      msg: "瞧一瞧"
    };
  },
  methods: {
    goTwo() {
      //   this.$router.push('/look/look-two')
      // this.$router.push({path:'/look/look-two'})
      this.$router.push({ name: "LookTwo", param: { id: 2345 } });
    }
  },
  beforeRouteEnter(to, from, next) {
    // ...
    console.log(from, to)
    next()
  },
  beforeRouteLeave (to, from, next) {
      // ...
      console.log(from,to)
      next()
  }
};
</script>