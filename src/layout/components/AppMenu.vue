<template>
  <div>
    <el-menu
        :collapse="isCollapse"
        active-text-color="#4b93ff"
        background-color="#304156"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
    >
      <el-submenu>
<!--        一级-->
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
<!--        二级-->
        <el-menu-item>选项3</el-menu-item>

<!--        二加三级-->
        <el-submenu>
          <template slot="title">选项4</template>
          <el-menu-item>选项1</el-menu-item>
        </el-submenu>


      </el-submenu>



    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AppMenu",
  data() {
    return {
      isCollapse: false,
    }
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}

.el-menu {
 border: none !important;
}
</style>
