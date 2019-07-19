<template>
    <div>
        <p>H1 from</p>
        <NLink to="/">
            Home Page
        </NLink>
        
    </div>
</template>

<script>
export default {
    asyncData() {
        return {
            name: process.static ? 'static': (process.server ? 'server':'client')
        }
    },
    head: {
        title: 'About'
    }
}
</script>

<style>

</style>
