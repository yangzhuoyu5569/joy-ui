<template>
  <div>

    <el-container>
      <el-aside width="200px">
        <AppSidebar></AppSidebar>
      </el-aside>
      <el-container>
        <el-header>
          <AppNavbar></AppNavbar>
        </el-header>
        <el-main>
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { AppMain, AppSidebar, AppNavbar } from "@/layout/components";

export default {
name: "layout",
  components: {
    AppNavbar,
    AppSidebar,
    AppMain
  }
}
</script>

<style scoped>
  body {
    margin: 0;
    padding: 0;
  }

  .el-aside {
    height: 100vh;
  }

  .el-header {
    background: #fff;

    -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 21, 24, 0.1);
    -moz-box-shadow:    0px 1px 4px 0px rgba(0, 21, 24, 0.1);
    box-shadow:         0px 1px 4px 0px rgba(0, 21, 24, 0.1);


    /*-webkit-box-shadow: 0 1px 4px rgba(0 21 41 0.8);*/
    /*box-shadow: 0 1px 4px rgba(0 21 41 0.8);*/
  }
</style>
