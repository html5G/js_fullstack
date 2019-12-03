<template>
  <div class="header">
    <div class="logo">后台管理系统</div>
    <div class="user-info">
      <el-dropdown>
        <span class="el-dropdown-link">
        {{name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
          <el-dropdown-item></el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
    name:'header',
    data(){
        return{
            name:''
        }
    },
    computed: {
        return localStorage.getItem('userItem')
    },
}
</script>
<style scoped>
.header{
  background-color: #409eff;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;

}
.header .logo{
float: left;
width: 250px;
text-align: center;
}
.user-info{
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;

}
.el-dropdown-link{
  text-align: center;
  position: relative;
  display: inline-block;
  color: #fff;
  padding-left: 50px;
  cursor: pointer;
  vertical-align: middle;
}
</style>
