// 用原生js实现弹窗组件
/**
 * 获取dom元素
 *
 * @param {String} select 类名
 * @returns
 */
function getElement (select) {
    return document.getElementsByClassName(select)[0];
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
    this.closeDom = getElement('alert-close');
    this.closeDom.onclick = () => {
        this.hidden();
    };
    this.type = opts.type;
    this.title = opts.title;
    this.content = opts.content;
    if (opts.confirmCallback && toString.call(opts.confirmCallback) === '[object Function]') {
        this.confirmCallback = opts.confirmCallback;
    }
    if (opts.cancelCallback && toString.call(opts.cancelCallback) === '[object Function]') {
        this.cancelCallback = opts.cancelCallback;
    }
}
/**
 * 初始化弹窗
 *
 */
Alert.prototype.initAlert = function () {
    this.alertDom.setAttribute('style', 'display: none');
    this.alertDom.removeAttribute('class');
    this.alertDom.setAttribute('class', this.type + ' alert-wrapper');
    this.titleDom.innerHTML = this.title;
    this.contentDom.innerHTML = this.content;
    // 绑定回调
    if (this.confirmCallback) {
        getElement('confirm').onclick = this.confirmCallback;
    }
    if (this.cancelCallback) {
        getElement('cancel').onclick = this.cancelCallback;
    }
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
/**
 * 隐藏弹窗
 *
 */
Alert.prototype.hidden = function () {
    this.alertDom.setAttribute('style', 'display: none');
};

export default Alert;

