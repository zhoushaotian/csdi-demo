// 用原生js实现弹窗组件
/**
 * 获取dom元素
 *
 * @param {String} select 类名
 * @returns
 */
function getElement (select) {
    return document.getElementsByClassName(select);
}
/**
 * 弹窗构造函数
 *
 * @param {Object} opts 弹窗配置
 */
function Alert (opts) {
    this.alertDom = getElement('alert-wrapper');
    this.titleDom = getElement('alert-title');
    this.contentDom = getElement('alert-content');
    this.confirmDom = getElement('confirm');
    this.cancelDom = getElement('cancel');
    this.type = opts.type;
    this.title = opts.title;
    this.content = opts.content;
}
/**
 * 初始化弹窗
 *
 */
Alert.prototype.initAlert = function () {
    this.alertDom.setAttribute('style', 'display: hidden');
    this.alertDom.removeAttribute('class');
    this.alertDom.setAttribute('class', this.type);
    this.titleDom = this.title;
    this.contentDom = this.content;
    return this;
};

/**
 * 显示弹窗
 *
 */
Alert.prototype.show = function () {
    this.alertDom.setAttribute('style', 'display: block');
    return this;
};
Alert.prototype.hidden = function () {
    this.alertDom.setAttribute('style', 'display: hidden');
};

export default Alert;

