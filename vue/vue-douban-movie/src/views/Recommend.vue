<template>
  <div class="recommend">
    <!-- 首页整个页面都支持better-scroll滚动 -->
    <ScrollView>
      <ListBlock
       :movies="playingMovies" 
       :title="`正在热映(${playingCount})`"
       @more="goMore"
       @select="selectItem"></ListBlock>
    </ScrollView>
    <div class="space" style="background-color: #f6f6f6;height: 10px"></div>
    <ScrollView>
      <ListBlock
       :movies="ty" 
       :title="`即将上映(${tx})`"
       @more="goMore"
       @select="selectItem"></ListBlock>
    </ScrollView>
  </div>
</template>

<script>
import ListBlock from '@/components/ListBlock'
import axios from 'axios'
export default {
  data() {
    return {
      playingMovies: [],
      ty: [],
      playingCount: 0,
      tx: 0
    }
  },
  components: {
    ListBlock
  },
  created() {
    this.getMovie()
  },
  methods: {
    getMovie() {
       axios.get('/api/api/movie/get_hot')
        .then(res => {
        console.log('111',res)
        if (res.data.code === 1001) {
          console.log('8888')
          const { comming, playing } = res.data.result
          this.playingMovies = playing.movies
          this.playingCount = playing.count
          this.ty = comming.movies
          this.tx = comming.count
        }
      })
    },
    goMore() {},
    selectItem() {
      console.log(id)
    }
  },
}
</script>

<style lang="stylus" scoped>

</style>