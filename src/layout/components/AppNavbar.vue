<template>
  <div>
    <div class="nav-bar">
      <div class="nav-bar-left"></div>
      <div class="nav-bar-right">
        <div class="admin-info">
          <el-dropdown>
            <span class="el-dropdown-avatar">
              <el-avatar :src="avatar"></el-avatar>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      avatar: 'http://www.cszhuoyu.com/index/Imgholder/imghold?w=200&h=200&text=avatar',
      name: ''
    }
  },
  created() {
    const adminInfo = JSON.parse(this.$store.getters.adminInfo)
    this.avatar = adminInfo.avatar
    this.name = adminInfo.name
  },
  methods: {

  }
}
</script>

<style scoped>
  .nav-bar {
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-bar-right {
    margin-right: 15px;
    height: 60px;
    line-height: 60px;
  }

  .el-dropdown-avatar {
    display: inline-block;
    height: 40px;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
</style>
