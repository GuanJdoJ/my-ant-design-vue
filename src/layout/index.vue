<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo"></div>
      <!-- :defaultOpenKeys="[this.$route.meta.parentName]" -->
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[this.$route.path]">
        <template v-for="item in sideBarPath">
          <a-menu-item v-if="!item.children" :key="item.path">
            <a-icon :type="item.meta.icon" />
            <span>{{item.meta.title}}</span>
            <router-link :to="item.path"></router-link>
          </a-menu-item>
          <sub-menu v-else :menu-info="item" :key="item.path"/>
        </template>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff' , minHeight: 'calc(100vh - 112px)'}">
        <app-main/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import AppMain from './components/AppMain'
import sideBarPath from "@/router/sideBarPath"
import SubMenu from './components/Sidebar/SubMenu'

export default {
  components: {
    AppMain,
    'sub-menu': SubMenu,
  },
  data () {
    return {
      collapsed: false,
      sideBarPath:sideBarPath,
    }
  },
  methods:{
    
  }
}

</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
