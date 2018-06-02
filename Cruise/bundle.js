/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_js__ = __webpack_require__(7);





const me = {

    // common used elements
    $angleUp: Object(__WEBPACK_IMPORTED_MODULE_0__tools__["e" /* $id */])('angle-up'),
    $angleDown: Object(__WEBPACK_IMPORTED_MODULE_0__tools__["e" /* $id */])('angle-down'),
    $dropdown: Object(__WEBPACK_IMPORTED_MODULE_0__tools__["e" /* $id */])('dropdown'),
    $modal: Object(__WEBPACK_IMPORTED_MODULE_0__tools__["e" /* $id */])('modal'),
    $inputResource: Object(__WEBPACK_IMPORTED_MODULE_0__tools__["e" /* $id */])('input-resources'),

    // optional data for an app item
    options: {
        osIcons: ['cent_os', 'debin', 'suse', 'ubuntu', 'windows'],
        tags: [
            {name: 'idle', class: 'tag-idle'},
            {name: 'building', class: 'tag-building'}
        ],
        resources: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']
    },


    initAppList: function () {
        const appNum = 5;
        let cache = '';
        for (let i = 1; i < appNum + 1; i++) {
            const randomItem = me.generateRandomItem(i);
            cache += __WEBPACK_IMPORTED_MODULE_2__template_js__["a" /* appItem */](randomItem);
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__tools__["a" /* $append */])(Object(__WEBPACK_IMPORTED_MODULE_0__tools__["e" /* $id */])('app-list'), cache)
    },

    generateRandomItem: function (i) {
        const random = (i % 2);
        const itemData = {
            osIcon: me.options.osIcons[Math.floor(Math.random() * me.options.osIcons.length)],
            appName: 'bjstdmngbgr0' + i + '.thoughtworks.com',
            tag: {
                name: me.options.tags[random].name,
                class: me.options.tags[random].class
            },
            ip: '192.168.1.' + Math.ceil(Math.random() * 100),
            path: '/var/lib/cruise-agent',
            resources: me.options.resources.sort().slice(0, 3),
            btn: {
                flag: Boolean(random) ? '' : 'none',
                name: 'Deny'
            }
        };
        return itemData;
    },

    /**
     * bind avatar btn click event
     */
    bindBtnAvatar: function () {
        const avatar = Object(__WEBPACK_IMPORTED_MODULE_0__tools__["e" /* $id */])('user-avatar');
        avatar.onclick = function (e) {
            (me.$dropdown.style.display !== 'block') ? me.dropMenu() : me.rollupMenu();
        }
    },

    /**
     * bind trash icon click event
     */
    bindIconTrash: function () {
        const delIcons = Object(__WEBPACK_IMPORTED_MODULE_0__tools__["b" /* $class */])('icon-trash');
        for (let i = 0; i < delIcons.length; i++) {
            delIcons[i].onclick = function (e) {
                me.rmResource(e);
            }
        }
    },

    /**
     * bind plus icon click event
     */
    bindIconPlus: function () {
        const addBtns = Object(__WEBPACK_IMPORTED_MODULE_0__tools__["b" /* $class */])('icon-plus');
        for (let i = 0; i < addBtns.length; i++) {
            addBtns[i].onclick = function (e) {
                me.addResources(e);
            }
        }
    },

    /**
     * bind modal's "Add Resources" button click event
     *
     * @param e     //triggered event
     * @param _modal    //event source modal
     */
    bindBtnAdd: function (e, _modal) {
        const addBtn = Object(__WEBPACK_IMPORTED_MODULE_0__tools__["e" /* $id */])('add-res-btn');
        addBtn.onclick = function () {
            const inputVal = me.$inputResource.value;
            if (inputVal) {
                me.appendResource(e, inputVal);
                me.closeModal(_modal);
            } else {
                alert('Invalid input!');
            }
        }
    },

    /**
     * bind modal's "Cancel" button click event
     *
     * @param _modal    // event source modal
     */
    bindBtnCancel: function (_modal) {
        const btnCancel = Object(__WEBPACK_IMPORTED_MODULE_0__tools__["e" /* $id */])('cancel-btn');
        btnCancel.onclick = function () {
            me.closeModal(_modal);
        }
    },

    /**
     * bind modal close-icon click event
     *
     * @param _modal    //event source modal
     */
    bindIconClose: function (_modal) {
        const iconClose = Object(__WEBPACK_IMPORTED_MODULE_0__tools__["e" /* $id */])('modal-close-icon');
        iconClose.onclick = function () {
            me.closeModal(_modal);
        }
    },

    /**
     * add resources
     *
     * @param e     // triggered event
     */
    addResources: function (e) {
        const modal = me.$modal;
        const ups = Object(__WEBPACK_IMPORTED_MODULE_0__tools__["b" /* $class */])('point-up');
        const downs = Object(__WEBPACK_IMPORTED_MODULE_0__tools__["b" /* $class */])('point-down');

        if (window.screen.height - e.screenY > 250) {
            Object(__WEBPACK_IMPORTED_MODULE_0__tools__["f" /* $show */])(ups[0]);
            Object(__WEBPACK_IMPORTED_MODULE_0__tools__["f" /* $show */])(ups[1]);
            Object(__WEBPACK_IMPORTED_MODULE_0__tools__["d" /* $hide */])(downs[0]);
            Object(__WEBPACK_IMPORTED_MODULE_0__tools__["d" /* $hide */])(downs[1]);
            modal.style.left = e.clientX - 20 + "px";
            modal.style.top = e.clientY + 30 + "px";
        } else {
            Object(__WEBPACK_IMPORTED_MODULE_0__tools__["d" /* $hide */])(ups[0]);
            Object(__WEBPACK_IMPORTED_MODULE_0__tools__["d" /* $hide */])(ups[1]);
            Object(__WEBPACK_IMPORTED_MODULE_0__tools__["f" /* $show */])(downs[0]);
            Object(__WEBPACK_IMPORTED_MODULE_0__tools__["f" /* $show */])(downs[1]);
            modal.style.left = e.clientX - 20 + "px";
            modal.style.top = e.clientY - 200 + "px";
        }

        me.rollupMenu(); // rollup user menu
        Object(__WEBPACK_IMPORTED_MODULE_0__tools__["f" /* $show */])(modal);

        // bind self events
        me.bindIconClose(modal);   // icon-close
        me.bindBtnCancel(modal);   // cancel-btn
        me.bindBtnAdd(e, modal);    // addRes-btn

    },

    /**
     * append resource to agent
     *
     * @param e     // triggered event
     * @param v     // inputted value(s)
     */
    appendResource: function (e, v) {
        const srcEle = e.target || e.srcElement;
        const parentUl = srcEle.parentElement.getElementsByClassName('env-list')[0];
        const v_arr = (v.length > 1) ? v.split(',') : v;
        for (let i = 0; i < v_arr.length; i++) {
            const liEle = Object(__WEBPACK_IMPORTED_MODULE_0__tools__["c" /* $create */])('li', 'env-item');
            const spanEle = Object(__WEBPACK_IMPORTED_MODULE_0__tools__["c" /* $create */])('span', 'env-name');
            const iconEle = Object(__WEBPACK_IMPORTED_MODULE_0__tools__["c" /* $create */])('i', 'icon-trash');
            spanEle.innerText = v_arr[i];
            liEle.appendChild(spanEle).appendChild(iconEle);
            parentUl.appendChild(liEle);
        }
        me.bindIconTrash(); // bind new generated trash-icon(s)
    },

    /**
     * remove a resource after trash-icon clicked
     *
     * @param e     // triggered event
     */
    rmResource: function (e) {
        const srcEle = e.target || e.srcElement;
        srcEle.parentElement.parentElement.remove();
    },

    /**
     * close modal
     *
     * @param _modal    // modal to close
     */
    closeModal: function (_modal) {
        Object(__WEBPACK_IMPORTED_MODULE_0__tools__["d" /* $hide */])(_modal);
        me.$inputResource.value = '';
    },

    /**
     * drop the user menu
     */
    dropMenu: function () {
        Object(__WEBPACK_IMPORTED_MODULE_0__tools__["d" /* $hide */])(me.$angleDown);
        Object(__WEBPACK_IMPORTED_MODULE_0__tools__["f" /* $show */])(me.$angleUp);
        Object(__WEBPACK_IMPORTED_MODULE_0__tools__["f" /* $show */])(me.$dropdown);
    },

    /**
     * rollup user menu
     */
    rollupMenu: function () {
        Object(__WEBPACK_IMPORTED_MODULE_0__tools__["d" /* $hide */])(me.$angleUp);
        Object(__WEBPACK_IMPORTED_MODULE_0__tools__["f" /* $show */])(me.$angleDown);
        Object(__WEBPACK_IMPORTED_MODULE_0__tools__["d" /* $hide */])(me.$dropdown);
    }
}

/**
 * initializing
 */
window.onload = function () {
    me.initAppList();
    me.bindBtnAvatar();
    me.bindIconTrash();
    me.bindIconPlus();
}




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = $id;
/* harmony export (immutable) */ __webpack_exports__["b"] = $class;
/* harmony export (immutable) */ __webpack_exports__["c"] = $create;
/* harmony export (immutable) */ __webpack_exports__["f"] = $show;
/* harmony export (immutable) */ __webpack_exports__["d"] = $hide;
/* harmony export (immutable) */ __webpack_exports__["a"] = $append;
function $id(eleId) {
    return document.getElementById(eleId);
}

function $class(className) {
    return document.getElementsByClassName(className);
}

function $create(tag, className) {
    const el = document.createElement(tag);
    el.className = className;
    return el;
}

function $show(ele) {
    ele.style.display = 'block';
}

function $hide(ele) {
    ele.style.display = 'none';
}

function $append(parent, text) {
    let temp = document.createElement('div');
    temp.innerHTML = text;
    let frag = document.createDocumentFragment();
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);// firstChild will be deleted after this operation
    }
    parent.appendChild(frag);
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "html {\n  overflow: hidden; }\n\nhtml, body {\n  height: 100%;\n  overflow-y: auto;\n  padding: 0;\n  margin: 0;\n  background-color: #f3f3f3;\n  color: #2d4054;\n  font-family: \"Avenir\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  font-size: 14px; }\n\ndiv, p, ul, input {\n  padding: 0;\n  margin: 0; }\n\nbutton:hover, li:hover, #user-avatar:hover, .icon-plus:hover, .icon-trash:hover {\n  cursor: pointer; }\n\n.header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  background-color: #fff;\n  height: 60px;\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);\n  text-align: center;\n  z-index: 1; }\n  .header .header-content {\n    width: 1200px;\n    margin: 0 auto;\n    padding: 0 20px;\n    box-sizing: border-box; }\n    .header .header-content .logo {\n      height: 40px;\n      padding: 10px 0; }\n    .header .header-content .avatar-wrapper {\n      height: 60px;\n      width: 80px;\n      display: inline-block;\n      position: relative;\n      float: right; }\n      .header .header-content .avatar-wrapper .avatar {\n        border-radius: 50%;\n        width: 40px;\n        padding: 10px; }\n      .header .header-content .avatar-wrapper i {\n        position: absolute;\n        top: 25px;\n        right: 0; }\n      .header .header-content .avatar-wrapper .icon-angle-up {\n        display: none; }\n\n.main {\n  position: relative;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: 60px auto 26px;\n  left: 0;\n  width: 1200px;\n  height: 100%;\n  background-color: #f3f3f3; }\n\n.sidebar {\n  position: fixed;\n  float: left;\n  width: 246px;\n  top: 60px;\n  bottom: 24px;\n  border: solid 1px #eee;\n  background-color: #2d4054; }\n  .sidebar .side-menu ul.menu-list {\n    list-style: none;\n    padding: 25px 0; }\n    .sidebar .side-menu ul.menu-list li {\n      color: #ccc;\n      height: 45px;\n      line-height: 45px;\n      padding-left: 30px; }\n      .sidebar .side-menu ul.menu-list li:hover {\n        background-color: #435466;\n        color: #00b4cf; }\n      .sidebar .side-menu ul.menu-list li i {\n        font-size: 20px;\n        margin-right: 20px; }\n    .sidebar .side-menu ul.menu-list li.selected {\n      background-color: #435466;\n      color: #00b4cf; }\n  .sidebar .history {\n    margin-top: 120px; }\n    .sidebar .history .history-title {\n      font-size: 24px;\n      color: #ccc;\n      padding: 15px; }\n    .sidebar .history ul {\n      padding-left: 30px;\n      height: 150px;\n      overflow-y: auto; }\n      .sidebar .history ul li {\n        font-size: 12px;\n        color: #999;\n        line-height: 2em; }\n        .sidebar .history ul li:hover {\n          color: #00b4cf; }\n\n.content {\n  position: relative;\n  width: 922px;\n  margin-left: 248px;\n  height: 100%;\n  padding: 14px 28px; }\n  .content .card-row {\n    width: 100%;\n    display: -webkit-box; }\n    .content .card-row .card {\n      height: 115px;\n      display: flex;\n      display: -webkit-flex;\n      -webkit-box-flex: 1;\n      position: relative;\n      color: #fff; }\n      .content .card-row .card i {\n        position: absolute;\n        font-size: 144px;\n        opacity: 0.2;\n        left: 80px; }\n    .content .card-row .building {\n      background-color: #FFB900; }\n    .content .card-row .idle {\n      background-color: #7fbc39;\n      margin: 0 14px; }\n    .content .card-row .card-title {\n      position: absolute;\n      padding: 15px 10px;\n      font-size: 18px;\n      font-weight: bold; }\n    .content .card-row .count {\n      position: absolute;\n      right: 24px;\n      bottom: 20px;\n      font-size: 48px; }\n    .content .card-row .statistics {\n      background-color: #fff;\n      color: #000; }\n      .content .card-row .statistics .s-item {\n        position: absolute;\n        width: 33.33%;\n        height: 100%; }\n        .content .card-row .statistics .s-item p {\n          text-align: center;\n          padding: 18px; }\n        .content .card-row .statistics .s-item .item-title {\n          font-size: 12px; }\n        .content .card-row .statistics .s-item .item-count {\n          font-size: 20px; }\n      .content .card-row .statistics :nth-child(2) {\n        left: 33.34%; }\n      .content .card-row .statistics :nth-child(3) {\n        right: 0; }\n  .content .filter-bar {\n    width: 100%;\n    margin: 14px 0;\n    background: #fff;\n    display: -webkit-box; }\n    .content .filter-bar .filter-item {\n      height: 50px;\n      line-height: 50px;\n      display: flex;\n      display: -webkit-flex;\n      -webkit-box-flex: 1;\n      position: relative; }\n    .content .filter-bar :nth-child(1) .filter-title {\n      position: absolute;\n      width: 33.33%;\n      height: 100%;\n      border-right: solid 0.5px #f3f3f3;\n      text-align: center; }\n      .content .filter-bar :nth-child(1) .filter-title:hover {\n        color: #00b4cf;\n        border-bottom: 3px solid #00b4cf; }\n    .content .filter-bar :nth-child(1) .selected {\n      color: #00b4cf;\n      border-bottom: 3px solid #00b4cf; }\n    .content .filter-bar :nth-child(1) :nth-child(2) {\n      left: 33.34%; }\n    .content .filter-bar :nth-child(1) :nth-child(3) {\n      right: 0; }\n    .content .filter-bar .search-item {\n      margin: 0 14px; }\n      .content .filter-bar .search-item input {\n        position: absolute;\n        height: 30px;\n        width: 66.7%;\n        border: 0;\n        background-color: #f3f3f3;\n        margin: 10px 0;\n        box-shadow: 1px 1px inset rgba(0, 0, 0, 0.2); }\n      .content .filter-bar .search-item i {\n        position: absolute;\n        font-size: 20px;\n        color: #999;\n        margin: 15px 0;\n        padding: 0 10px; }\n    .content .filter-bar .show-style i {\n      position: absolute;\n      font-size: 20px;\n      margin: 15px 30px; }\n      .content .filter-bar .show-style i:hover {\n        color: #00b4cf; }\n    .content .filter-bar .show-style .selected {\n      color: #00b4cf; }\n    .content .filter-bar .show-style .icon-th-list {\n      right: 0; }\n    .content .filter-bar .show-style .icon-th-card {\n      right: 50px; }\n  .content .app-list {\n    width: 100%;\n    padding-bottom: 50px; }\n    .content .app-list .app-item {\n      height: 100px;\n      width: 100%;\n      margin-bottom: 14px;\n      background-color: #fff;\n      position: relative; }\n      .content .app-list .app-item .os-img {\n        position: absolute;\n        height: 80px;\n        width: 80px;\n        padding: 10px; }\n      .content .app-list .app-item .first-line {\n        position: absolute;\n        right: 0;\n        top: 0;\n        height: 50px;\n        width: 85%; }\n        .content .app-list .app-item .first-line i {\n          font-size: 16px;\n          padding: 0 10px; }\n        .content .app-list .app-item .first-line span {\n          line-height: 50px; }\n        .content .app-list .app-item .first-line .app-name {\n          color: #00b4cf;\n          font-weight: bold;\n          width: 250px;\n          display: inline-block; }\n        .content .app-list .app-item .first-line .app-tag {\n          color: #fff;\n          line-height: 14px;\n          padding: 2px 7px; }\n        .content .app-list .app-item .first-line .tag-idle {\n          background-color: #7fbc39;\n          margin: 0 45px 0 15px; }\n        .content .app-list .app-item .first-line .tag-building {\n          background-color: #ff9a2a;\n          margin: 0 18px 0 15px; }\n        .content .app-list .app-item .first-line .app-info {\n          display: inline-block;\n          margin-right: 30px; }\n      .content .app-list .app-item .second-line {\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        height: 50px;\n        width: 85%;\n        line-height: 50px; }\n        .content .app-list .app-item .second-line .icon-plus {\n          position: relative;\n          top: 3px;\n          font-size: 18px;\n          background-color: #00b4cf;\n          color: #fff;\n          padding: 6px 7px;\n          margin: 10px; }\n          .content .app-list .app-item .second-line .icon-plus:hover {\n            background-color: #01869a; }\n        .content .app-list .app-item .second-line .env-list {\n          color: #000;\n          display: inline-block;\n          list-style: none; }\n          .content .app-list .app-item .second-line .env-list .env-item {\n            display: inline-block;\n            margin: 0 10px 0 0; }\n            .content .app-list .app-item .second-line .env-list .env-item .env-name {\n              line-height: 1em;\n              background-color: #efefef;\n              padding: 8px; }\n              .content .app-list .app-item .second-line .env-list .env-item .env-name .icon-trash {\n                margin: 0 5px; }\n                .content .app-list .app-item .second-line .env-list .env-item .env-name .icon-trash:hover {\n                  cursor: pointer; }\n      .content .app-list .app-item .action-btns {\n        position: absolute;\n        right: 0px;\n        bottom: 10px; }\n        .content .app-list .app-item .action-btns .deny-btn {\n          height: 30px;\n          margin-right: 20px;\n          border: 0;\n          padding: 0 20px;\n          color: #fff;\n          font-size: 14px;\n          background-color: #00b4cf; }\n          .content .app-list .app-item .action-btns .deny-btn:hover {\n            background-color: #01869a; }\n          .content .app-list .app-item .action-btns .deny-btn i.icon-deny {\n            padding-right: 10px; }\n\n.footer {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 24px;\n  background-color: #fff;\n  text-align: center;\n  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.3); }\n  .footer .copyright {\n    line-height: 24px; }\n\n#modal {\n  display: none;\n  position: absolute;\n  width: 570px;\n  height: 150px;\n  z-index: 100;\n  padding: 12px;\n  border: 1px solid #00b4cf;\n  background-color: #ffffff;\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3); }\n  #modal .icon-close {\n    position: absolute;\n    color: #00b4cf;\n    font-size: 20px;\n    right: 12px;\n    top: 5px;\n    padding: 3px; }\n  #modal .input-section {\n    margin: 10px 0; }\n    #modal .input-section .modal-tips {\n      height: 34px;\n      line-height: 34px;\n      color: #777; }\n    #modal .input-section input {\n      height: 34px;\n      border: 1px solid #BABABA;\n      border-radius: 3px;\n      width: 98%;\n      color: #00b4cf;\n      padding-left: 10px;\n      box-shadow: 1px 1px inset rgba(0, 0, 0, 0.2); }\n  #modal .btn-section {\n    height: 30px;\n    width: 100%;\n    margin: 20px 0; }\n    #modal .btn-section :nth-child(1) {\n      background-color: #00b4cf; }\n      #modal .btn-section :nth-child(1):hover {\n        background-color: #01869a; }\n    #modal .btn-section :nth-child(2) {\n      background-color: #435466; }\n      #modal .btn-section :nth-child(2):hover {\n        background-color: #2d4054; }\n  #modal button {\n    height: 30px;\n    margin-right: 20px;\n    border: 0;\n    padding: 0 20px;\n    color: #fff;\n    font-size: 14px; }\n  #modal .up-angle1 {\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    top: -40px;\n    border-top: 20px solid transparent;\n    border-right: 11px solid transparent;\n    border-bottom: 20px solid #00b4cf;\n    border-left: 11px solid transparent; }\n  #modal .up-angle2 {\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    top: -38px;\n    border-top: 20px solid transparent;\n    border-right: 11px solid transparent;\n    border-bottom: 20px solid #fff;\n    border-left: 11px solid transparent; }\n  #modal .down-angle1 {\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    bottom: -40px;\n    border-top: 20px solid #00b4cf;\n    border-right: 11px solid transparent;\n    border-bottom: 20px solid transparent;\n    border-left: 11px solid transparent; }\n  #modal .down-angle2 {\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    bottom: -38px;\n    border-top: 20px solid #fff;\n    border-right: 11px solid transparent;\n    border-bottom: 20px solid transparent;\n    border-left: 11px solid transparent; }\n\n#dropdown {\n  display: none;\n  right: 90px;\n  top: 60px;\n  position: absolute;\n  width: 140px;\n  background-color: #fff;\n  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);\n  z-index: 99; }\n  #dropdown ul {\n    list-style: none;\n    padding: 10px 0; }\n    #dropdown ul li {\n      height: 34px;\n      line-height: 34px;\n      padding: 0 10px; }\n      #dropdown ul li:hover {\n        background-color: #e1e4e6; }\n      #dropdown ul li i {\n        margin-right: 10px; }\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = appItem;
function appItem(data) {
    return '<div class="app-item">\
                <img class="os-img" src="./assets/os-icons/'+ data.osIcon +'.png">\
                <div class="first-line">\
                    <i class="icon-desktop"></i>\
                    <span class="app-name">'+ data.appName +'</span>\
                    <span class="app-tag '+ data.tag.class +'">' + data.tag.name + '</span>\
                    <i class="icon-info"></i>\
                    <span class="app-info">'+ data.ip +'</span>\
                    <i class="icon-folder"></i>\
                    <span class="app-info">'+ data.path +'</span>\
                </div>\
                <div class="second-line">\
                    <i class="icon-plus"></i>\
                    <ul class="env-list">\
                        <li class="env-item">\
                            <span class="env-name">'+ data.resources[0] +' <i class="icon-trash"></i></span>\
                        </li>\
                        <li class="env-item">\
                            <span class="env-name">'+ data.resources[1] +' <i class="icon-trash"></i></span>\
                        </li>\
                        <li class="env-item">\
                            <span class="env-name">'+ data.resources[2] +' <i class="icon-trash"></i></span>\
                        </li>\
                    </ul>\
                </div>\
                <div class="action-btns" style="display: '+ data.btn.flag +'">\
                    <button class="deny-btn"><i class="icon-deny"></i>'+ data.btn.name +'</button>\
                </div>\
            </div>';
}

/***/ })
/******/ ]);