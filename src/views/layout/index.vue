<template>
  <div class="layout-container">
    <!--侧边栏-->
    <el-container class="layout-container">
      <el-aside width="200px" class="aside">
        <AsideMenu class="aside-menu"></AsideMenu>
      </el-aside>
      <el-container>
        <!--头部区域-->
        <el-header class="header">
          <div>
            <i class="el-icon-s-fold"></i>
            <span>江苏传智播客科技教育有限公司</span>
          </div>
          <!--下拉菜单-->
          <el-dropdown width="300px">
            <div class="avatar-wrap">
             <img src="@/assets/12.webp" class="avatar">
             <span class="nickname">admin1</span> <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
            </div>
           <!-- <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
            </span>-->
            <el-dropdown-menu slot="dropdown">
             <div class="user-setting">
               <i class="iconfont icon-setting"></i> <el-dropdown-item style="text-align: center">设置</el-dropdown-item>
             </div>
             <div class="user-exit">
               <i class="iconfont icon-exit1"></i><el-dropdown-item style="text-align: center">退出</el-dropdown-item>
             </div>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <!--主体区域-->
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideMenu from '@/views/layout/components/aside'
export default {
  name: 'layoutIndex',
  components: {
    AsideMenu
  }
}
</script>

<style lang="less" scoped>
  .layout-container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .aside{
    background-color: rgb(211, 220, 230);
    .aside-menu{
      height: 100%;
    }
  }
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgb(211, 220, 230);
    .avatar-wrap{
      display: flex;
      align-items: center;
      .nickname{
        padding-left: 10px;
        font-size: 16px;
      }
      .avatar{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        }
      }
    }
    .user-setting{
      display: flex;
      align-items: center;
      margin-left: 10px;
      .iconfont{
        margin-left: 5px;
      }
    }
    .user-exit{
      display: flex;
      align-items: center;
      margin-left: 10px;
      .iconfont{
        margin-left: 5px;
      }
    }
  .main{
    background-color: rgb(233, 238, 243);
  }
</style>
