// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button,Menu} from "ant-design-vue"
import { Layout,Icon,Input,Form,Card,Select,Radio,InputNumber,DatePicker,Steps,Divider,Alert,Row,Col } from 'ant-design-vue';
//import Antd from 'ant-design-vue';
//import 'ant-design-vue/dist/antd.css'

import store from './vuex/store';

//Vue.use(Antd)
Vue.component(Button.name,Button)
Vue.use(Menu)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Form)
Vue.use(Card)
Vue.use(Select)
Vue.use(Radio)
Vue.use(InputNumber)
Vue.use(DatePicker)
Vue.use(Steps)
Vue.use(Divider)
Vue.use(Alert)
Vue.use(Row)
Vue.use(Col)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h => h(App)
  // components: { App },
  // template: '<App/>'
})

// new Vue({
//   render: h => h(App)
// }).$mount("#app");
