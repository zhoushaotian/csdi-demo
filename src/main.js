// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import vueResource from 'vue-resource';
import Alert from './alert/alert';
import './alert/alert.css';
Vue.config.productionTip = false;
Vue.use(vueResource);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});
let successAlert = new Alert({
    title: '这是一个成功消息的弹窗',
    content: '成功打开successAlert',
    type: 'success',
    confirmCallback: () => { alert('你点击了确定按钮！'); },
    cancelCallback: () => { alert('你点击了取消按钮！'); successAlert.hidden(); }
});
let infoAlert = new Alert({
    title: '这是一个通知消息的弹窗',
    content: '弹窗组件与分页表格组件源码请见:<a href="https://github.com/zhoushaotian/csdi-demo" target="_blank">github</a>',
    type: 'info',
    confirmCallback: () => { infoAlert.hidden(); },
    cancelCallback: () => { infoAlert.hidden(); }
});
let errorAlert = new Alert({
    title: '这是一个错误消息的弹窗',
    content: '成功打开errorAlert',
    type: 'error',
    confirmCallback: () => { alert('你点击了确定按钮！'); },
    cancelCallback: () => { alert('你点击了取消按钮！'); errorAlert.hidden(); }
});
let logAlert = new Alert({
    title: '这是一个日志消息的弹窗',
    content: '成功打开logAlert',
    type: 'log',
    confirmCallback: () => { alert('你点击了确定按钮！'); },
    cancelCallback: () => { alert('你点击了取消按钮！'); logAlert.hidden(); }
});
infoAlert.initAlert().show();
document.getElementsByClassName('success-button')[0].onclick = function () {
    successAlert.initAlert().show();
};
document.getElementsByClassName('error-button')[0].onclick = function () {
    errorAlert.initAlert().show();
};
document.getElementsByClassName('log-button')[0].onclick = function () {
    logAlert.initAlert().show();
};
document.getElementsByClassName('info-button')[0].onclick = function () {
    infoAlert.initAlert().show();
};

