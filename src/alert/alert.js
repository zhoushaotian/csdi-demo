// 用原生js实现弹窗组件
/**
 * 获取dom元素
 *
 * @param {String} select 类名
 * @returns
 */
function getElement(select) {
    return document.getElementsByClassName(select);
}
/**
 * 弹窗构造函数
 *
 * @param {Object} opts 弹窗配置
 */
function Alert(opts) {
    this.titleDom = getElement('alert-title');
    this.contentDom = getElement('alert-content');
    this.type = opts.type;
    this.title = opts.title;
    this.contnet
}
Alert.prototype.initAlert = function() {
    
}
