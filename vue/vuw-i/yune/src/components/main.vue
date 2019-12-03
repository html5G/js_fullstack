<template>
    <div class="main-content">{{msg}}</div>
</template>
<script>
export default {
    name:'mainContent',
    data(){
        return {
            msg:'hello world'
        }
    },
    components: {
        Header
    }
}
</script>
