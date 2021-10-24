<style scoped>
.layout {
  /*border: 1px solid rgba(215, 221, 228, 0);*/
  background: url("../assets/index.jpg");
  position: relative;
  border-radius: 4px;
  overflow: hidden;

}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}

.ivu-layout{
  background-image:url("../assets/index.jpg");
  background-size: cover;
  overflow: hidden;

}
.header-main{
  /*backdrop-filter: saturate(80%) blur(10px);*/
  /*background-color: rgba(255,255,255,.5) !important;*/
  background-color: transparent !important;
}
.menu-main{
  background-color:transparent !important;
}

.ivu-layout-sider{
  backdrop-filter: saturate(80%) blur(10px);
  background-color: rgba(255,255,255,.5) !important;
  /*background-color: transparent !important;*/
}

.ivu-menu-vertical{
/*
  background-color:transparent !important;
*/
  background-color: transparent !important;
}

.ivu-layout-content{
  background-color: transparent !important;
  /*background-color: rgba(255, 255, 255, 0.11)*/
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header class="header-main">
        <Menu mode="horizontal" theme="dark" class="menu-main" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate" @click="goIndex"></Icon>
              <a @click="goIndex">首页</a>
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider class="side-main" hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                首页
              </template>

              <router-link to="/index">
                <MenuItem name="1-1">用户管理</MenuItem>
              </router-link>


            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '480px', background: '#f5f5f1'}">
            <!-- 渲染组件 -->
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  methods: {
    goIndex() {
      this.$router.push({path: '/one'})
    }
  }

}
</script>
