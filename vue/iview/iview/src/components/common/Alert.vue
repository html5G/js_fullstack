<template >
    <div class="alert">{{msg}} </br>
    <Button type="success">ok</Button>
    </div>
</template>
<script>
// import Alert from '@/components/common/Alert'
export default {
    name: 'Alert',
    props: ['msg'],
    data () {
        return {}
    },
    // components: {
    //     'wn-alert': Alert
    // }
}
</script>
<style scope>
  .alert {
      font-size: 30px;
      text-align: center;
      width: 300px;
      height: 200px;
      border: 1px solid #aaaaaa;
      border-radius: 5px;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      z-index: 999;
      background-color: aqua;
  }
</style>
