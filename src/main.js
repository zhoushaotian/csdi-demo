// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import vueResource from 'vue-resource';
import Alert from './alert/alert';
Vue.config.productionTip = false;
Vue.use(vueResource);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});

let demoAlert = new Alert({
    title: '111',
    content: '222',
    type: 'success'
});
demoAlert.initAlert().show();

