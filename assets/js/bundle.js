/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/mylib/adjustviewport.js":
/*!****************************************!*\
  !*** ./src/js/mylib/adjustviewport.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ adjustViewport; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//---------------------------------------------
//
//  iPhone以下の画面サイズへの対応
//  ViewPortを書き換え縮小させる
//
//---------------------------------------------
var adjustViewport = /*#__PURE__*/function () {
  function adjustViewport() {
    _classCallCheck(this, adjustViewport);
  }

  //------------------------------------------------
  //  起動時375px以下なら375pxで固定
  //------------------------------------------------
  _createClass(adjustViewport, [{
    key: "set",
    value: function set(_executeWindowWidth) {
      var executeWindowWidth = _executeWindowWidth || 375;
      var elmViewport = document.querySelector('meta[name="viewport"]');
      var valueViewport = window.innerWidth < executeWindowWidth ? "width=".concat(executeWindowWidth, ", user-scalable=no, target-densitydpi=device-dpi") : 'width=device-width, initial-scale=1';
      elmViewport.setAttribute('content', valueViewport);
      return;
    }

    //------------------------------------------------
    //  resizeイベントで使用
    //  低予算爆速対応の場合使用する、デザインの固定化
    //------------------------------------------------
  }, {
    key: "task",
    value: function task() {
      //  未使用
      return;
      var fFixed = false;
      var ww = window.outerWidth; //  ブラウザのリアル幅( リアル幅なのでリアルタイム変更に対応できる )
      //const ww = window.innerWidth; //  コンテンツ領域の幅( viewport固定したら以降そのままになってしまう )
      var elmViewport = document.querySelector('meta[name="viewport"]');
      var fixedwidth = 375;

      //  TAB時の画面固定化
      //  PCデザイン(1440px)～SPデザイン入るまでの間
      if (768 < ww && ww <= 1440) {
        fFixed = true;
        fixedwidth = 1440;
      }

      //  SP時の画面固定化
      //  SP時(768px以下)デザインの完全固定化
      else if (ww <= 768) {
        fFixed = true;
        fixedwidth = 375;
      }
      /*
              //  SP時(375px以下)デザインの縮小方向固定化
              else if(  ww <= 375  ){
                  fFixed = true;
                  fixedwidth = 375;
              }
      */
      //  固定範囲なので固定する / 固定しない時は通常に戻す
      var valueViewport = fFixed ? "width=".concat(fixedwidth, ", user-scalable=no") : 'width=device-width, initial-scale=1';
      elmViewport.setAttribute('content', valueViewport);
    }
  }]);
  return adjustViewport;
}();


/***/ }),

/***/ "./src/js/mylib/content/accessibility.js":
/*!***********************************************!*\
  !*** ./src/js/mylib/content/accessibility.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ accessibility; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//  アクセシビリティ
//  フォーカス、入力、タブ操作など
//----------------------------------------
var accessibility = /*#__PURE__*/function () {
  function accessibility() {
    _classCallCheck(this, accessibility);
    //  ハンバーガー( 唯一 )
    this.acc_hamburger = document.querySelector('[data-acc="hamburger"]');
    //  固有 : グループ : メイン
    this.acc_group_main = document.querySelectorAll('[data-accgroup="main"]');
    //  固有 : グループ : SPメニュー
    this.acc_group_spmenu = document.querySelectorAll('[data-accgroup="spmenu"]');
  }
  _createClass(accessibility, [{
    key: "task_key",
    value: function task_key(i_event) {
      if (i_event.key === "Escape") {
        this.task_esc(i_event);
      }
      if (i_event.key === "Tab") {
        this.task_tab(i_event);
      }
      if (i_event.key === "ArrowUp" || i_event.key === "ArrowDown") {
        this.task_Cursor(i_event);
      }
    }

    //----------------------------------------
    //  全体キー処理 : ESC
    //----------------------------------------
  }, {
    key: "task_esc",
    value: function task_esc(i_event) {
      //  現在開いている要素
      var exp = this.acc_hamburger.getAttribute("aria-expanded");
      //  メインハンバーガーが開いている
      if (exp == "true") {
        //  現状ハンバーガーの方で閉じ処理している
      }
    }

    //----------------------------------------
    //  全体キー処理 : Tab
    //----------------------------------------
  }, {
    key: "task_tab",
    value: function task_tab(i_event) {
      //  アクティブな要素を取得
      var elm = document.activeElement;

      //  ハンバーガーが開いているかの確認
      var exp = this.acc_hamburger.getAttribute("aria-expanded");

      //  メインハンバーガーが開いている
      if (exp == "true") {
        //  指定グループ(spmenu)でなければ指定グループのstartに戻す
        if (elm.dataset['accgroup'] != "spmenu") {
          var ret = this.searchAcc("spmenu", "start");
          if (ret) ret.focus();
          i_event.preventDefault();
        }
      }
      //  メインハンバーガーが閉じている
      else {}
    }
    //----------------------------------------
    //  全体キー処理 : カーソル
    //----------------------------------------
  }, {
    key: "task_Cursor",
    value: function task_Cursor(i_event) {
      //  アクティブな要素を取得
      var elm = document.activeElement;
      elm = elm ? elm : window;

      //  ハンバーガーが開いているかの確認
      var exp = this.acc_hamburger.getAttribute("aria-expanded");

      //  メインハンバーガーが開いている
      if (exp == "true") {
        i_event.preventDefault();
      }
    }

    //----------------------------------------
    //  処理 : タブキーループ - start
    //  グループ最初でTABが押された時の処理
    //----------------------------------------
  }, {
    key: "set_TabLoop_start",
    value: function set_TabLoop_start(i_target, i_groupName) {
      var _this = this;
      var ret;
      i_target.addEventListener("keydown", function (e) {
        if (e.key !== 'Tab') return;
        if (!e.shiftKey) return;
        ret = _this.searchAcc(i_groupName, "last");
        if (ret) {
          ret.focus();
          e.preventDefault();
        }
      });
    }
    //----------------------------------------
    //  処理 : タブキーループ - last
    //  グループ最後でTABが押された時の処理
    //----------------------------------------
  }, {
    key: "set_TabLoop_last",
    value: function set_TabLoop_last(i_target, i_groupName) {
      var _this2 = this;
      var ret;
      i_target.addEventListener("keydown", function (e) {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) return;
        ret = _this2.searchAcc(i_groupName, "start");
        if (ret) {
          ret.focus();
          e.preventDefault();
        }
      });
    }

    //----------------------------------------
    //  処理 : ハンバーガー処理
    //----------------------------------------
  }, {
    key: "set_Hamburger",
    value: function set_Hamburger(i_target, i_groupName) {
      var _this3 = this;
      var ret;
      i_target.addEventListener("keydown", function (e) {
        //  現在のaccgroupを確認
        var group = i_target.dataset['accgroup'];
        //  メインループ中
        if (group == 'main') {
          //  何もしない
          return;
        }

        //  SPメニュー中
        if (group == 'spmenu') {
          //  このハンバーガーがグループのどの位置か
          var grpary = _toConsumableArray(document.querySelectorAll('[data-accgroup="spmenu"]'));
          ret = null;
          //  最初の要素 : Shift+Tabでバックしたら最後へ
          if (grpary[0] === i_target) {
            if (e.key !== 'Tab') return;
            if (!e.shiftKey) return;
            ret = _this3.searchAcc("spmenu", "last");
          }
          //  最後の要素 : Tabで進んだら最初の要素へ
          if (grpary[grpary.length - 1] === i_target) {
            if (e.key !== 'Tab') return;
            ret = _this3.searchAcc("spmenu", "start");
          }
          if (ret) {
            ret.focus();
            e.preventDefault();
          }
        }
      });
    }

    //----------------------------------------
    //  検索 : 指定グループの、指定機能を検索
    //----------------------------------------
  }, {
    key: "searchAcc",
    value: function searchAcc(i_groupName, i_FuncName) {
      //  指定名称のグループを全て検索
      //  スプレッド構文でノードリスト→配列化
      var accarray = _toConsumableArray(document.querySelectorAll('[data-accgroup="' + i_groupName + '"]'));
      //  配列にして操作
      for (var i = 0; i < accarray.length; i++) {
        var tar = accarray[i];
        //  指定名称のグループから指定名称の機能を検索
        var accfuncname = tar.dataset['acc'];
        if (accfuncname == i_FuncName) {
          return tar;
        }
      }
      return null;
    }

    //----------------------------------------
    //  登録 : 基本的なグループの設定
    //----------------------------------------
  }, {
    key: "set_group_basic",
    value: function set_group_basic(i_groupName) {
      var _this4 = this;
      //  グループ名でNode取得
      var aryqs = document.querySelectorAll('[data-accgroup="' + i_groupName + '"]');
      //  配列に変換
      var ary = _toConsumableArray(aryqs);
      //  最初と最後にフラグを立てる
      ary[0].dataset['acc'] = "start";
      //  ハンバーガーの場合spmenuの一番最初にstart付けても意味がないので消す
      if (i_groupName == "spmenu") {
        ary[0].dataset['acc'] = "";
      }

      //  配列数が２以上なら最後にlastを付ける
      if (1 < ary.length) {
        ary[ary.length - 1].dataset['acc'] = "last";
      }
      aryqs.forEach(function (target) {
        //  機能名の取得
        var accfuncname = target.dataset['acc'];
        switch (accfuncname) {
          case "start":
            _this4.set_TabLoop_start(target, i_groupName);
            break;
          case "last":
            _this4.set_TabLoop_last(target, i_groupName);
            break;
          case "hamburger":
            _this4.set_Hamburger(target);
            break;
        }
      });
    }

    //----------------------------------------
    //  各種イベントの登録
    //----------------------------------------
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      //  グループごとに設定
      //  「メイン」
      this.set_group_basic("main");
      //  「SPメニュー」
      this.set_group_basic("spmenu");
    }
  }]);
  return accessibility;
}();


/***/ }),

/***/ "./src/js/mylib/content/btn_cookie.js":
/*!********************************************!*\
  !*** ./src/js/mylib/content/btn_cookie.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buttonCookieEngine; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//  ライブラリ js-cookie使用
//  <head>で読み込み
//--------------------------------------------------
//  アイテム
//--------------------------------------------------
var buttonCookie = /*#__PURE__*/function () {
  function buttonCookie(i_parentgroup, i_btnclass, i_cookiename, i_cookietype) {
    _classCallCheck(this, buttonCookie);
    this.parentgroup = i_parentgroup;
    this.btn = i_btnclass;
    this.cookiename = i_cookiename;
    this.cookietype = i_cookietype;

    //this.setInit();
    this.get();
    //  cssにデータをセット
    this.setcssdata();
  }

  // スクロールを禁止にする関数
  _createClass(buttonCookie, [{
    key: "disableScroll",
    value: function disableScroll(event) {
      event.preventDefault();
    }

    //  初期値で上書き
  }, {
    key: "setInit",
    value: function setInit() {
      switch (this.cookietype) {
        case "bool":
          Cookies.set(this.cookiename, "false");
          break;
        default:
          Cookies.set(this.cookiename, "false");
          break;
      }
    }
  }, {
    key: "set",
    value: function set(i_state) {
      Cookies.set(this.cookiename, i_state);
    }
  }, {
    key: "get",
    value: function get() {
      //  クッキーがなければ初期値をセット
      var ret = Cookies.get(this.cookiename);
      if (typeof ret === "undefined") {
        this.setInit();
      } else {}
      return ret;
    }
  }, {
    key: "checktype_bool",
    value: function checktype_bool() {
      if (this.cookietype == "bool") return true;
      return false;
    }
  }, {
    key: "setcssdata",
    value: function setcssdata() {
      this.btn.dataset.data = Cookies.get(this.cookiename);
    }

    //  グループに、このデータ名と同じデータ名があればdataを同じにする
  }, {
    key: "groupupdate",
    value: function groupupdate() {
      var _this = this;
      var name = this.cookiename;
      this.parentgroup.forEach(function (target) {
        if (target.cookiename == name) {
          target.btn.dataset.data = Cookies.get(_this.cookiename);
        }
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      //  クッキー取得
      var cook = Cookies.get(this.cookiename, this.cookiestate);
      //  クッキーの
      switch (cook) {
        case "true":
          Cookies.set(this.cookiename, "false");
          //  データ属性の追加
          this.setcssdata();
          break;
        case "false":
          Cookies.set(this.cookiename, "true");
          //  データ属性の追加
          this.setcssdata();
          break;
      }
      return this.get();
    }
  }]);
  return buttonCookie;
}(); //--------------------------------------------------
//  エンジン
//--------------------------------------------------
var buttonCookieEngine = /*#__PURE__*/function () {
  // パララックスアイテム
  function buttonCookieEngine() {
    _classCallCheck(this, buttonCookieEngine);
    this.items = [];
  }

  //  アイテムの追加
  _createClass(buttonCookieEngine, [{
    key: "add",
    value: function add(i_item) {
      //  クリックイベントセット
      i_item.btn.addEventListener("click", function () {
        if (i_item.checktype_bool()) {
          i_item.toggle();
        }
        i_item.groupupdate();
      });
      this.items.push(i_item);
    }

    //  処理
  }, {
    key: "task",
    value: function task() {}

    //  個別アイテム処理
  }, {
    key: "taskItem",
    value: function taskItem(i_Item) {}

    //  指定クラスがあれば全部登録
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      var _this2 = this;
      var jsbtns = document.querySelectorAll('.js-cookiebutton');
      var itemgroup = this.items;
      jsbtns.forEach(function (target) {
        var name = target.dataset['name'] || "dummy";
        var type = target.dataset['type'] || "default";
        var data = target.dataset['data'] || "false";
        var btn = new buttonCookie(itemgroup, target, name, type);
        _this2.add(btn);
      });
    }
  }]);
  return buttonCookieEngine;
}();


/***/ }),

/***/ "./src/js/mylib/content/btn_gototop.js":
/*!*********************************************!*\
  !*** ./src/js/mylib/content/btn_gototop.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buttonGotoTop; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//========================================================
//
//  コンテンツ / トップに戻るボタン
//  読み込み
//  import buttonGotoTop from './content/btn_gototop';
//  初期化
//  const btnGotoTop = new buttonGotoTop(ボタンのクラス, 切替Y位置);
//  const btnGotoTop = new buttonGotoTop('.js-gotoTop', 80);
//  使い方
//  window.addEventListener('scroll', () => {
//    btnGotoTop.task();
//  });
//
//========================================================
var buttonGotoTop = /*#__PURE__*/function () {
  function buttonGotoTop(i_id, i_overPosition) {
    _classCallCheck(this, buttonGotoTop);
    this.btn = document.querySelector(i_id);
    this.overPosition = i_overPosition;
    this.init();
  }
  _createClass(buttonGotoTop, [{
    key: "init",
    value: function init() {
      this.task();
    }

    //  指定Y位置超えてるか確認
  }, {
    key: "checkOver",
    value: function checkOver() {
      return document.documentElement.scrollTop > this.overPosition;
    }

    //  hideを消して表示
  }, {
    key: "disp",
    value: function disp() {
      this.btn.classList.remove("hide");
    }

    //  hideを付けて非表示
  }, {
    key: "hide",
    value: function hide() {
      this.btn.classList.add("hide");
    }

    //  スクロールイベント内で処理
  }, {
    key: "task",
    value: function task() {
      this.checkOver() ? this.disp() : this.hide();
      //console.log("きてますよ" + this.checkOver());
    }

    //  イベント登録
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      //  クリックイベントセット
      this.btn.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }]);
  return buttonGotoTop;
}();


/***/ }),

/***/ "./src/js/mylib/content/btn_humburger.js":
/*!***********************************************!*\
  !*** ./src/js/mylib/content/btn_humburger.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buttonHumburger; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//  ハンバーガー
//----------------------------------------
var buttonHumburger = /*#__PURE__*/function () {
  function buttonHumburger(i_id, i_closebtn, i_header, i_spmenu) {
    _classCallCheck(this, buttonHumburger);
    this.btn = document.querySelector(i_id);
    this.closebtn = document.querySelector(i_closebtn);
    this.header = document.querySelector(i_header);
    this.spmenu = document.querySelector(i_spmenu);
    //  バックグラウンド
    this.background = document.querySelector(".p-spmenu__background");
  }

  // スクロールを禁止にする関数
  _createClass(buttonHumburger, [{
    key: "disableScroll",
    value: function disableScroll(event) {
      event.preventDefault();
    }
  }, {
    key: "addScrollStop",
    value: function addScrollStop() {
      document.addEventListener('touchmove', this.disableScroll, {
        passive: false
      });
      document.addEventListener('wheel', this.disableScroll, {
        passive: false
      });
    }
  }, {
    key: "removeScrollStop",
    value: function removeScrollStop() {
      document.removeEventListener('touchmove', this.disableScroll, {
        passive: false
      });
      document.removeEventListener('wheel', this.disableScroll, {
        passive: false
      });
    }

    //  ハンバーガー開く
  }, {
    key: "open",
    value: function open() {
      this.btn.classList.toggle("open");
      this.spmenu.classList.toggle("open");
      this.background.classList.toggle("open");
      //  開いた スクロール停止
      if (this.btn.classList.contains("open")) {
        //  非表示 → 表示
        this.spmenu.dataset['hide'] = "false";
        this.addScrollStop();
        //  ハンバーガーのアクセシビリティ属性変更(メイン→SPMENU)
        this.btn.setAttribute("aria-expanded", "true");
        this.btn.dataset['accgroup'] = "spmenu";
        this.btn.dataset['acc'] = "start";
      }
      //  閉じた スクロール解除
      else {
        this.close();
      }
    }

    //  ハンバーガー閉じる( 主にメニュークリック時 )
  }, {
    key: "close",
    value: function close() {
      this.btn.classList.remove("open");
      this.spmenu.classList.remove("open");
      this.background.classList.remove("open");
      // スクロール解除
      this.removeScrollStop();
      //  ハンバーガーのアクセシビリティ属性変更(SPMENU→メイン)
      this.btn.setAttribute("aria-expanded", "false");
      this.btn.dataset['accgroup'] = "main";
      this.btn.dataset['acc'] = "";
    }

    //  ESCキーの処理
  }, {
    key: "taskEsc",
    value: function taskEsc() {
      this.close();
    }

    //  各種イベントの登録
  }, {
    key: "eventRegistration",
    value: function eventRegistration(i_inner, i_ullia, i_contact) {
      var _this = this;
      //  元
      //  クリックイベントセット
      this.btn.addEventListener("click", function () {
        _this.open();
      });
      //  ul liのメニューがクリックされたら閉じる
      var str_ullia = i_inner + " " + i_ullia;
      var spmenu_li_a = document.querySelectorAll(str_ullia);
      spmenu_li_a.forEach(function (lia) {
        lia.addEventListener("click", function () {
          _this.close();
        });
      });

      //  コンタクトボタンが押されたら閉じる
      var str_contact = i_inner + " " + i_contact;
      var spmenu_contact = document.querySelectorAll(str_contact);
      if (spmenu_contact) {
        spmenu_contact.forEach(function (lia) {
          lia.addEventListener("click", function () {
            _this.close();
          });
        });
      }

      //  閉じるボタンが押されたら閉じる
      if (this.closebtn) {
        this.closebtn.addEventListener("click", function () {
          _this.close();
        });
      }
      //  閉じる時にアニメーション監視
      this.spmenu.addEventListener('transitionend', function () {
        //  アニメーション終了時にopenが付いてない = closeした
        if (!_this.spmenu.classList.contains("open")) {
          console.log(_this.spmenu.dataset);
          //  非表示→表示
          _this.spmenu.dataset['hide'] = "true";
        }
      });
    }
  }]);
  return buttonHumburger;
}();


/***/ }),

/***/ "./src/js/mylib/content/btn_modal.js":
/*!*******************************************!*\
  !*** ./src/js/mylib/content/btn_modal.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buttonModal; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//  モーダルボタン
//----------------------------------------
var buttonModal = /*#__PURE__*/function () {
  function buttonModal(i_btnclass, i_modal, i_background) {
    _classCallCheck(this, buttonModal);
    this.btn = document.querySelector(i_btnclass);
    this.modal = document.querySelector(i_modal);
    this.background = document.querySelector(i_background);
    if (!this.btn) return;
    if (!this.modal) return;
  }

  // スクロールを禁止にする関数
  _createClass(buttonModal, [{
    key: "disableScroll",
    value: function disableScroll(event) {
      event.preventDefault();
    }
  }, {
    key: "addScrollStop",
    value: function addScrollStop() {
      document.addEventListener('touchmove', this.disableScroll, {
        passive: false
      });
      document.addEventListener('mousewheel', this.disableScroll, {
        passive: false
      });
    }
  }, {
    key: "removeScrollStop",
    value: function removeScrollStop() {
      document.removeEventListener('touchmove', this.disableScroll, {
        passive: false
      });
      document.removeEventListener('mousewheel', this.disableScroll, {
        passive: false
      });
    }

    //  ハンバーガー開く
  }, {
    key: "open",
    value: function open() {
      if (!this.btn) return;
      if (!this.modal) return;
      this.btn.classList.toggle("open");
      this.modal.classList.toggle("open");
      //  開いた スクロール停止
      if (this.btn.classList.contains("open")) {
        this.addScrollStop();
      }
      //  閉じた スクロール解除
      else {
        this.removeScrollStop();
      }
    }

    //  ハンバーガー閉じる( 主にメニュークリック時 )
  }, {
    key: "close",
    value: function close() {
      if (!this.btn) return;
      if (!this.modal) return;
      this.btn.classList.remove("open");
      this.modal.classList.remove("open");
      // スクロール解除
      this.removeScrollStop();
    }

    //  各種イベントの登録
  }, {
    key: "eventRegistration",
    value: function eventRegistration(i_inner, i_ullia, i_contact) {
      var _this = this;
      //  元
      if (!this.btn) return;
      //  クリックイベントセット
      this.btn.addEventListener("click", function () {
        _this.open();
      });
      //  ul liのメニューがクリックされたら閉じる
      var str_ullia = i_inner + " " + i_ullia;
      var modal_li_a = document.querySelectorAll(str_ullia);
      modal_li_a.forEach(function (lia) {
        lia.addEventListener("click", function () {
          _this.close();
        });
      });

      //  コンタクトボタンが押されたら閉じる
      var str_contact = i_inner + " " + i_contact;
      var modal_contact = document.querySelectorAll(str_contact);
      modal_contact.forEach(function (lia) {
        lia.addEventListener("click", function () {
          _this.close();
        });
      });

      //  背景がクリックされたら閉じる
      this.background.addEventListener("click", function () {
        _this.close();
      });
    }
  }]);
  return buttonModal;
}();


/***/ }),

/***/ "./src/js/mylib/content/contactform.js":
/*!*********************************************!*\
  !*** ./src/js/mylib/content/contactform.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ contactForm; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//========================================================
//
//  コンタクトフォーム
//
//========================================================
var contactForm = /*#__PURE__*/function () {
  function contactForm() {
    var _this = this;
    _classCallCheck(this, contactForm);
    //--------------------------------------------------
    //  「に同意して送信」と連動するチェックボックス反応
    //--------------------------------------------------
    //  イベント登録
    _defineProperty(this, "eventRegistration", function () {
      //console.log("きてはいるが・・");
      if (!_this.pfcf_form) return;
      //console.log(this.pfcf_form);
      _this.pfcf_form.addEventListener('submit', function (e) {
        var ret = _this.check_cfi_all(_this);
      });

      // ラベルに乗った
      if (_this.pp_cpl) {
        _this.pp_cpl.addEventListener('mouseenter', function () {
          _this.cci.addClass("hover");
        });
        //  ラベルから離れた
        _this.pp_cpl.addEventListener('mouseleave', function () {
          _this.cci.removeClass("hover");
        });
      }
      // 疑似チェックボックスに乗った
      if (_this.cci) {
        _this.cci.addEventListener('mouseenter', function () {
          _this.pp_cpl.addClass("hover");
          _this.cci.addClass("hover");
        });
        // 疑似チェックボックスから離れた
        _this.cci.addEventListener('mouseleave', function () {
          _this.pp_cpl.removeClass("hover");
          _this.cci.removeClass("hover");
        });
      }
      //--------------------------------------------------
      //      モーダルリンクをクリック
      //--------------------------------------------------
      if (_this.mdlpp_open) _this.mdlpp_open.addEventListener('click', function () {
        //ボタンをクリックしたら
        //        console.log("モーダルクリック");
        var jsccn = document.querySelector("input[name='your-check']");
        jsccn.setAttribute("disabled", true);
        thid.mdlpp.classList.add("p-mdlpp__open"); // modalクラスにopenクラス付与
        thid.mdlpp_overlay.classList.add("p-mdlpp__open"); // overlayクラスにopenクラス付与
        //  スクロールバーを隠す前にバーの幅調べる
        var scrollBarWidth = window.innerWidth - document.body.clientWidth;
        //        console.log("[sbw]" + scrollBarWidth + " : (" + window.innerWidth + ") - (" + document.body.clientWidth + ")");
        _this.body.style.paddingRight = scrollBarWidth + 'px';
        _this.header.style.paddingRight = scrollBarWidth + 'px';
        _this.body.style.overflowY = 'hidden'; // 本文の縦スクロールを無効
        jsccn.attr("disabled", false);
      });
      //  ×ボタンをクリックしたら
      if (_this.mdlpp_close) _this.mdlpp_close.addEventListener('click', function () {
        _this.close_modalpp();
      });
      //  オーバーレイをクリックしたら
      if (_this.mdlpp_overlay) _this.mdlpp_overlay.addEventListener('click', function () {
        _this.close_modalpp();
      });
      //--------------------------------------------------------
      //  change処理  ContactFormInput
      //--------------------------------
      //  お名前
      _this.in_yourname.addEventListener('change', function () {
        _this.judge_cfi_name();
      });
      // メールアドレス
      _this.in_yourmail.addEventListener('change', function () {
        _this.judge_cfi_email();
      });
      // 問い合わせ内容
      // テキストエリアはhtmlのタグにjsを入れて判定する
      if (_this.in_yourmessage) {
        _this.in_yourmessage.addEventListener('change', function () {
          _this.judge_cfi_message();
        });
        _this.in_yourmessage.addEventListener('keyup', function () {
          _this.judge_cfi_message();
        });
      }
      //--------------------------------
      //  チェックボックス
      if (_this.in_yourcheck) _this.in_yourcheck.addEventListener('change', function () {
        _this.judge_cfi_checkbox();
      });
    });
    _defineProperty(this, "close_modalpp", function () {
      //        console.log("モーダルクローズ");
      _this.mdlpp.classList.remove("p-mdlpp__open"); // overlayクラスからopenクラスを外す
      _this.mdlpp_overlay.classList.remove("p-mdlpp__open"); // overlayクラスからopenクラスを外す
      _this.body.style.overflowY = 'auto'; // 本文の縦スクロールを有効
      _this.body.style.paddingRight = '0px';
      _this.header.style.paddingRight = '0px';
    });
    //  変数
    //  メールアドレス正規表現(Regular expressions)
    this.regex = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    this.rx_tel = /^0\d{9,10}$/;
    this.CFI_NONE = 0; // 入力が空
    this.CFI_OK = 1; //  入力受付
    this.CFI_WARNING = 2; //  入力内容に問題

    this.id_ContactName = document.querySelector('#js_contact_name');
    this.id_ReqName = document.querySelector('#req-name');
    this.id_ContactEMail = document.querySelector('#js_contact_email');
    this.id_ReqEMail = document.querySelector('#req-email');
    this.id_ReqEMail2 = document.querySelector('#req-email2');
    this.id_ContactCheck = document.querySelector('#js_contact_check');
    this.id_ContactMessage = document.querySelector('#js_contact_message');
    this.id_ReqMessage = document.querySelector('#req-message');
    this.pp_cpl = document.querySelector('.p-contact__form-checkpplabel');
    this.cci = document.querySelector('.p-common-check-icon');
    this.pfcf_form = document.querySelector('#id_contact');
    this.body = document.querySelector('body');
    this.header = document.querySelector('.header');
    this.mdlpp = document.querySelector('#js-mdlpp');
    this.mdlpp_overlay = document.querySelector('#js-mdlpp-overlay');
    this.mdlpp_close = document.querySelector('#js-mdlpp-close');
    this.mdlpp_open = document.querySelector('#js-mdlpp-open');
    this.pointY = 0;
    this.in_yourname = document.querySelector('input[name="your-name"]');
    this.in_yourmail = document.querySelector('input[name="your-email"]');
    this.in_yourmessage = document.querySelector('textarea[name="your-message"]');
    this.in_yourcheck = document.querySelector('input[name="your-check"]');
    this.in_submit = document.querySelector("input[name='your-submit']");
    this.bn_submit = document.querySelector("button[name='your-submit']");
    this.init();
  }

  //  javaScript
  _createClass(contactForm, [{
    key: "init",
    value: function init() {
      var elements = document.getElementsByTagName('button');
      var _iterator = _createForOfIteratorHelper(elements),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var element = _step.value;
          if (element.getAttribute('data-id')) {
            element.addEventListener('click', testLoad);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    //  読み込み時の処理
  }, {
    key: "loadTask",
    value: function loadTask() {
      var _this2 = this;
      var list = document.getElementsByTagName("input");
      for (var i = 0; i < list.length; i++) {
        if (list[i].type == 'email' || list[i].type == 'password' || list[i].type == 'text' || list[i].type == 'number' || list[i].type == 'tel') {
          list[i].addEventListener("keydown", function (event) {
            return _this2.submitStop(event);
          });
        }
      }
    }
  }, {
    key: "submitStop",
    value: function submitStop(e) {
      if (!e) var e = window.event;
      if (e.keyCode == 13) {
        // 現在の要素からフォーカスを外す
        document.activeElement.blur();
        return false;
      }
    }

    //--------------------------------------------------
    //      contact - 送信ボタンの有効/無効
    //--------------------------------------------------
    //  サブミットのON/OFF
  }, {
    key: "enableYourSubmit",
    value: function enableYourSubmit(i_flag) {
      var button = this.in_submit;
      if (button == null) {
        button = this.bn_submit;
      }
      //  全てのフォーム入力が正常でない場合は有効にしない
      if (!this.check_cfi_all()) {
        i_flag = false;
      }
      if (i_flag) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
      return i_flag;
    }
  }, {
    key: "check_cfi_name",
    value:
    //--------------------------------------------------------
    //  changeで使う関数 ContactFormInput
    //  お名前
    // 有効判定を返す
    function check_cfi_name() {
      var inp = this.id_ContactName;
      // 空入力
      if (inp.value === "") {
        return this.CFI_NONE;
      } else {
        return this.CFI_OK;
      }
    }
  }, {
    key: "judge_cfi_name",
    value:
    // 有効判定を返し、状態によって警告処理
    function judge_cfi_name() {
      var inp = this.id_ContactName;
      var req1 = this.id_ReqName;
      //        inp.css('border', '1px solid red');
      inp.classList.add("c-form__border-required");
      inp.classList.remove("c-form__border-normal");
      req1.style.display = 'none';
      // 空入力
      if (inp.value === "") {
        req1.style.display = 'block'; // 警告「必須項目です」
        return this.enableYourSubmit(false);
      } else {
        // なんらかの入力あり
        //            inp.css('border', '1px solid #2F2F2F');
        inp.classList.add("c-form__border-normal");
        inp.classList.remove("c-form__border-required");
        this.enableYourSubmit(true);
      }
      return true;
    }
  }, {
    key: "check_cfi_email",
    value:
    //--------------------------------
    // メール入力
    function check_cfi_email() {
      var inp = this.id_ContactEMail;
      // 空入力
      if (inp.value === "") {
        return this.CFI_NONE;
      } else {
        if (this.regex.test(inp.value)) {
          return this.CFI_OK;
        }
        return this.CFI_WARNING;
      }
    }
  }, {
    key: "judge_cfi_email",
    value:
    // 有効判定を返し、状態によって警告処理
    function judge_cfi_email() {
      var inp = this.id_ContactEMail;
      var req1 = this.id_ReqEMail;
      var req2 = this.id_ReqEMail2;
      //        inp.css('border', '1px solid red');
      inp.classList.add("c-form__border-required");
      inp.classList.remove("c-form__border-normal");
      req1.style.display = 'none';
      req2.style.display = 'none';
      // 空入力
      if (inp.value === "") {
        req1.style.display = 'block'; // 警告「必須項目です」
        return this.enableYourSubmit(false);
        // なんらかの入力あり
      } else {
        //  有効そうなアドレスが入力されている
        if (this.regex.test(inp.value)) {
          //    console.log("[cfi_email] OK:" + inp.val());
          inp.classList.add("c-form__border-normal");
          inp.classList.remove("c-form__border-required");
          //  inp.css('border', '1px solid #2F2F2F');
          this.enableYourSubmit(true);
          //  無効な文字列
        } else {
          // console.log("[cfi_email] NG:" + inp.val());
          req2.style.display = 'block'; //  警告「有効なアドレスを入力して下さい」
          return this.enableYourSubmit(false);
        }
      }
      return true;
    }
  }, {
    key: "check_cfi_message",
    value:
    //--------------------------------------------------------
    //  お問い合わせ内容
    function check_cfi_message() {
      var inp = this.id_ContactMessage;
      // 空入力
      if (inp.value === "") {
        return this.CFI_NONE;
      } else {
        return this.CFI_OK;
      }
    }
  }, {
    key: "judge_cfi_message",
    value:
    // 有効判定を返し、状態によって警告処理
    function judge_cfi_message() {
      var inp = this.id_ContactMessage;
      var req1 = this.id_ReqMessage;
      inp.classList.add("c-form__border-required");
      inp.classList.remove("c-form__border-normal");
      //        inp.css('border', '1px solid red');
      req1.style.display = 'none';
      // 空入力
      if (inp.value === "") {
        req1.style.display = 'block'; // 警告「必須項目です」
        return this.enableYourSubmit(false);
        // なんらかの入力あり
      } else {
        inp.classList.add("c-form__border-normal");
        inp.classList.remove("c-form__border-required");
        //            inp.css('border', '1px solid #2F2F2F');
        this.enableYourSubmit(true);
      }
      return true;
    }
  }, {
    key: "check_cfi_checkbox",
    value:
    //--------------------------------------------------------
    //  チェックボックス
    function check_cfi_checkbox() {
      // チェックボックスだけ配列なので注意
      var inp = this.id_ContactCheck;
      return inp[0].checked;
    }
  }, {
    key: "judge_cfi_checkbox",
    value: function judge_cfi_checkbox() {
      var inp = this.id_ContactCheck;
      inp.style.border = '1px solid red';
      var ret = this.check_cfi_checkbox();
      // チェックあり
      if (ret) {
        this.judge_cfi_all();
        this.enableYourSubmit(true);

        //なし
      } else {
        return this.enableYourSubmit(false);
      }
      return true;
    }
  }, {
    key: "check_cfi_all",
    value:
    //--------------------------------
    //  インプット全部チェック
    function check_cfi_all() {
      var ret = true;
      if (this.check_cfi_name() !== this.CFI_OK) ret = false;
      if (this.check_cfi_email() !== this.CFI_OK) ret = false;
      if (this.check_cfi_message() !== this.CFI_OK) ret = false;
      return ret;
    }
  }, {
    key: "judge_cfi_all",
    value:
    //  インプット全部チェックと処理
    function judge_cfi_all() {
      var ret = true;
      if (!this.judge_cfi_name()) ret = false;
      if (!this.judge_cfi_email()) ret = false;
      if (!this.judge_cfi_message()) ret = false;
      return ret;
    }
  }]);
  return contactForm;
}(); //--------------------------------------------------
//      google reCAPTCHA
//--------------------------------------------------
//reCAPTCHA認証APIを実行して返ってきたトークンをフォームに設置する関数

function grc_sendFormData(e) {
  //  PHPから渡していたが、キーがHTML内に出力されてしまうのはよくないので
  //  とりあえず直接書いておく
  //  PHPからjsの受け渡しはどうしてもHTML出力になってしまうのでは？
  //  解決策求む。
  var reCAPTCHA_site_key = "6Ld-v70lAAAAAH-rR-4E3UJISYwe2Kd7ihL7FM20";
  //元のsubmitをいったんキャンセル
  if (e) e.preventDefault();
  //  recaptcha実行 actionは任意の文字指定(管理画面で反映される)
  grecaptcha.ready(function () {
    //  recaptcha実行 actionは任意の文字指定(管理画面で反映される)
    grecaptcha.execute(reCAPTCHA_site_key, {
      action: 'submit'
    }).then(function (token) {
      //  Add your logic to submit to your backend server here.
      //console.log('grecaptcha.execute token=' + token);
      //   recaptcha認証後のトークンをフォームで送信するために設定
      document.getElementById('grc_token').value = token;
      document.getElementById("id_contact").submit();
    }).catch(function (e) {
      console.error(e);
      alert('reCAPTCHAでのエラーが発生したためフォームデータを送信できません');
      return false;
    });
  });
}

//上で作成した関数をフォームデータ送信時に実行されるように設定
var form_id_contact = document.getElementById("id_contact");
if (form_id_contact) {
  form_id_contact.addEventListener('submit', function (e) {
    grc_sendFormData(e);
  });
}

/***/ }),

/***/ "./src/js/mylib/content/disp_loader.js":
/*!*********************************************!*\
  !*** ./src/js/mylib/content/disp_loader.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ displayLoader; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//========================================================
//
//  コンテンツ / 読み込み画面
//
//========================================================
var displayLoader = /*#__PURE__*/function () {
  function displayLoader() {
    _classCallCheck(this, displayLoader);
    this.init();
  }

  //  javaScript
  _createClass(displayLoader, [{
    key: "init",
    value: function init() {
      var elements = document.getElementsByTagName('button');
      var _iterator = _createForOfIteratorHelper(elements),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var element = _step.value;
          if (element.getAttribute('data-id')) {
            element.addEventListener('click', testLoad);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.stopAllLoad();
    }
  }, {
    key: "startLoad",
    value: function startLoad(id) {
      if (!id) return;
      document.getElementById(id).style.visibility = 'visible';
      setTimeout(self.stopAllLoad, 3000);
    }
  }, {
    key: "testLoad",
    value: function testLoad() {
      var dataId = "loading";
      this.startLoad(dataId);
      this.stopAllLoad();
    }
  }, {
    key: "stopAllLoad",
    value: function stopAllLoad() {
      var elements = document.getElementsByClassName('l-loader');
      var _iterator2 = _createForOfIteratorHelper(elements),
        _step2;
      try {
        var _loop = function _loop() {
          var element = _step2.value;
          element.classList.add("hide");
          //  消しておく
          setTimeout(function () {
            element.classList.add("delete");
          }, 1000);
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    //  イベント登録
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      var _this = this;
      //  アロー関数で登録するとthisが使える
      window.addEventListener('load', function () {
        _this.testLoad();
      });
    }
  }]);
  return displayLoader;
}();


/***/ }),

/***/ "./src/js/mylib/content/header.js":
/*!****************************************!*\
  !*** ./src/js/mylib/content/header.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ partsHeader; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//  ヘッダー処理
//  とりあえず現在使っているのは
//  指定位置超えたらヘッダー浮かすという処理のみ
//----------------------------------------
var partsHeader = /*#__PURE__*/function () {
  function partsHeader(i_header) {
    _classCallCheck(this, partsHeader);
    this.lheader = document.querySelector(i_header);
    this.body = document.querySelector("body");
    this.set = 200; //ウインドウ上部からどれぐら
    this.dispPosition = 0; // 120;    //  ヘッダーの位置による

    this.boxTop = new Array();
    this.current = -1;
    this.taskFloat();
  }
  _createClass(partsHeader, [{
    key: "scrollTask",
    value: function scrollTask() {
      //  ヘッダーのfloat表示
      this.taskFloat();
      /*
      //  各セクションの高さを超えたらメニューのアクティブ演出
      for (var i = boxTop.length - 1; i >= 0; i--) {
          if ($(window).scrollTop() > boxTop[i] - set) {
              changeBox(i);
              break;
          }
      };
      */
    }

    //--------------------------------------------------
    //      ヘッダー浮かし処理
    //--------------------------------------------------
  }, {
    key: "taskFloat",
    value: function taskFloat() {
      var scroll = document.documentElement.scrollTop;
      //  位置を超えていたらヘッダーを浮かす
      if (scroll > this.dispPosition) {
        this.lheader.classList.add("l-header__float");
        this.body.classList.add("l-header__float");
      } else {
        this.lheader.classList.remove("l-header__float");
        this.body.classList.remove("l-header__float");
      }
    }

    //--------------------------------------------------
    //  メニューアイテムにマークを付ける
    //  今使ってないけど、Yスクロールに合わせて現在セクションの
    //  メニューに印付けたい場合
    //--------------------------------------------------
  }, {
    key: "taskMenuItemMark",
    value: function taskMenuItemMark(secNum) {
      this.lia = document.querySelector(".header__nav li a");
      //  こんなのは配列処理にすべき
      this.nav_card = document.querySelector("#hnav_card");
      this.nav_news = document.querySelector("#hnav_news");
      this.nav_price = document.querySelector("#hnav_price");
      this.nav_access = document.querySelector("#hnav_access");
      this.nav_contact = document.querySelector("#hnav_contact");
      if (secNum != current) {
        current = secNum;
        secNum2 = secNum + 1; //以下にクラス付与したい要素名と付与したいクラス名
        this.lia.classList.add('hdis-active');

        //位置によって個別に処理をしたい場合　
        if (current == 0) {
          this.nav_card.classList.add('hdis-active');
        } else if (current == 1) {
          this.nav_news.classList.add('hdis-active');
        } else if (current == 2) {
          this.nav_price.classList.add('hdis-active');
        } else if (current == 3) {
          this.nav_access.classList.add('hdis-active');
        } else if (current == 4) {
          this.nav_contact.classList.add('hdis-active');
        }
      }
    }
  }]);
  return partsHeader;
}();


/***/ }),

/***/ "./src/js/mylib/content/oscheck.js":
/*!*****************************************!*\
  !*** ./src/js/mylib/content/oscheck.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ osCheck; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//
//  OS Check
//
//----------------------------------------
var osCheck = /*#__PURE__*/function () {
  function osCheck() {
    _classCallCheck(this, osCheck);
    this.dispUserAgent();

    //  iOSのバージョンがある
    if (this.getiOSVersion()) {
      var body = document.getElementsByTagName('body')[0];
      //body.classList.add('iOS');
    }
  }

  //  userAgent確認用領域があれば、取得情報を出力
  _createClass(osCheck, [{
    key: "dispUserAgent",
    value: function dispUserAgent(i_output) {
      var div_ua = document.querySelector(i_output);
      if (div_ua) {
        div_ua.innerText = navigator.userAgent;
      }
    }

    //  bodyタグにclass付与する
  }, {
    key: "markBody",
    value: function markBody() {
      //  識別したbodyにclass付与
      if (navigator.userAgent.indexOf('iPhone') > 0) {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('iPhone');
      }
      //  識別したbodyにclass付与
      if (navigator.userAgent.indexOf('Macintosh') > 0) {
        var _body = document.getElementsByTagName('body')[0];
        _body.classList.add('Macintosh');
      }
      if (navigator.userAgent.indexOf('iPad') > 0) {
        var _body2 = document.getElementsByTagName('body')[0];
        _body2.classList.add('iPad');
      }
      if (navigator.userAgent.indexOf('Android') > 0) {
        var _body3 = document.getElementsByTagName('body')[0];
        _body3.classList.add('Android');
      }
    }

    //  ユーザーエージェントの確認
  }, {
    key: "checkUA",
    value: function checkUA() {
      var ua = navigator.userAgent;
      //    console.log(ua);
      // スマートフォン用の記述

      if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        //    if ((ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0) && ua.indexOf('Mobile') > 0) {
        //        console.log("isSP");
        return isSP;

        // タブレット用の記述
      } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        //        console.log("isTab");
        return isTab;

        // PC用の記述
      } else {
        //        console.log("isPC");
        return isPC;
      }
    }

    //  iOSバージョン
  }, {
    key: "getiOSVersion",
    value: function getiOSVersion() {
      return parseFloat(('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1]).replace('undefined', '3_2').replace('_', '.').replace('_', '')) || false;
    }
  }]);
  return osCheck;
}();
_defineProperty(osCheck, "isPC", 0);
_defineProperty(osCheck, "isSP", 1);
_defineProperty(osCheck, "isTab", 2);


/***/ }),

/***/ "./src/js/mylib/content/pagebackground.js":
/*!************************************************!*\
  !*** ./src/js/mylib/content/pagebackground.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ pageBackGround; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//
//  コンテンツの処理
//  背景
//
//----------------------------------------
var pageBackGround = /*#__PURE__*/function () {
  function pageBackGround() {
    _classCallCheck(this, pageBackGround);
    this.herobg = document.querySelector('.l-hero__background');
    //        this.hide_herobg_position = 3000; //  スマホでPC時1000では足りない
  }
  _createClass(pageBackGround, [{
    key: "taskScroll",
    value: function taskScroll() {
      if (!this.herobg) return;
      var scroll = document.documentElement.scrollTop;
      if (scroll > this.hidePosition) {
        this.herobg.classList.add("hide");
      } else {
        this.herobg.classList.remove("hide");
      }
    }

    //  読み込み時の処理
  }, {
    key: "taskLoad",
    value: function taskLoad() {
      if (!this.herobg) return;
      var scroll = document.documentElement.scrollTop;
      if (scroll > this.hidePosition) {
        this.herobg.classList.remove("hide");
      }
    }
  }]);
  return pageBackGround;
}();
_defineProperty(pageBackGround, "hidePosition", 3000);


/***/ }),

/***/ "./src/js/mylib/eeparallax/eeparallax.js":
/*!***********************************************!*\
  !*** ./src/js/mylib/eeparallax/eeparallax.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ eeParallaxEngine; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//================================================
//
//  えちえぬパララックス
//
//--------------------------------------------------
//--------------------------------------------------
//  アイテム
//--------------------------------------------------
var eeParallax = /*#__PURE__*/function () {
  function eeParallax(i_target, i_speed) {
    _classCallCheck(this, eeParallax);
    this.target = i_target;
    this.speed = i_speed;
    this.beforerect = this.target.getBoundingClientRect(); //  初期の矩形を保存しておく
    //  差を取得
    this.beforepos = {
      x: 0,
      y: 0,
      z: 0
    };
    this.adjust = {
      x: 0,
      y: 0,
      z: 0
    };
    this.scale = 1.0;
    this.setBeforePos();
  }
  _createClass(eeParallax, [{
    key: "getTarget",
    value: function getTarget() {
      return this.target;
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(i_speed) {
      this.speed = i_speed;
    }
  }, {
    key: "setAdjust",
    value: function setAdjust(i_X, i_Y, i_Z) {
      this.adjust.x = i_X;
      this.adjust.y = i_Y;
      this.adjust.z = i_Z;
    }
  }, {
    key: "setScale",
    value: function setScale(i_scale) {
      this.scale = i_scale;
    }
  }, {
    key: "setBeforePos",
    value: function setBeforePos() {
      var rect = this.target.getBoundingClientRect();
      this.beforepos.y = rect.bottom;
    }
  }]);
  return eeParallax;
}(); //--------------------------------------------------
//  エンジン
//--------------------------------------------------
var eeParallaxEngine = /*#__PURE__*/function () {
  // パララックスアイテム
  function eeParallaxEngine() {
    _classCallCheck(this, eeParallaxEngine);
    this.items = [];
    this.scroll = 0;
  }

  //  アイテムの追加
  _createClass(eeParallaxEngine, [{
    key: "add",
    value: function add(i_item) {
      this.items.push(i_item);
    }
  }, {
    key: "setScroll",
    value: function setScroll(i_scroll) {
      this.scroll = i_scroll;
    }

    //  処理
  }, {
    key: "task",
    value: function task() {
      this.scroll = window.pageYOffset;
      for (var i = 0; i < this.items.length; i++) {
        var itm = this.items[i];
        this.taskItem(itm);
      }
    }

    //  個別アイテム処理
  }, {
    key: "taskItem",
    value: function taskItem(i_Item) {
      var itm = i_Item.getTarget();
      //  指定のclassを操作

      // 画面の高さ取得
      var windowHeight = document.documentElement.clientHeight;
      // ウインドウの中心計算 + スクロール量
      var windowCenter = windowHeight / 2 + this.scroll;
      //  保存した矩形を利用( transformの影響を受ける為 )
      var rect = i_Item.beforerect; // レンダリングサイズなのでscaleを使う場合影響受ける
      var rtop = 0;
      //  マイナスだったとしても高さは高さなので絶対値化して↓方向とする
      var rbottom = Math.abs(Math.abs(i_Item.beforerect.bottom) - Math.abs(i_Item.beforerect.top));

      // scaleで拡大された分の相殺倍率
      var sper = 1.0 / i_Item.scale;
      // 拡大率を兼ねたアイテムのセンター
      var itemCenter = rtop * sper + (rbottom * sper - rtop * sper) / 2;

      // ウインドウの中心とアイテムの芯の差
      var parallaxY = windowCenter - itemCenter;
      // 実際に移動する量 : 差に対して速度倍率をかける
      parallaxY = Number(i_Item.adjust.y) + parallaxY * i_Item.speed;

      //  Y
      var tscale = "scale(" + i_Item.scale + ") ";
      var tajx = "translate3d(" + i_Item.adjust.x + "px, ";
      var tajy = parallaxY + "px, ";
      var tajz = i_Item.adjust.z + "px)";
      var txt = tscale + tajx + tajy + tajz;
      //  transformを設定
      itm.style.transform = txt;
    }

    //  指定クラスがあれば全部登録
  }, {
    key: "eventRegistration",
    value: function eventRegistration() {
      var _this = this;
      var eeps = document.querySelectorAll('.js-eeparallax');
      eeps.forEach(function (target) {
        var yspd = target.dataset['spd'] || 0.1;
        var scale = target.dataset['scale'] || 1.2;
        var adjusty = target.dataset['adjusty'] || 0;
        var eepi = new eeParallax(target, yspd);
        eepi.setScale(scale);
        eepi.setAdjust(0, adjusty, 0);
        _this.add(eepi);
      });
    }
  }]);
  return eeParallaxEngine;
}();


/***/ }),

/***/ "./src/js/mylib/gsap/eegsap.js":
/*!*************************************!*\
  !*** ./src/js/mylib/gsap/eegsap.js ***!
  \*************************************/
/***/ (function() {

//----------------------------------------
//  c-title modan
//----------------------------------------
var textWrappers = document.querySelectorAll('[data-jstype="heading-eff"]');
textWrappers.forEach(function (textWrapper) {
  //配列
  var bgcl, bgcr, bg, text;
  var base = textWrapper.querySelector('[data-headingparts="base"]'); //  ベース
  if (base == null) return;
  bg = base.querySelector('[data-headingparts="bg"]');
  bgcl = base.querySelector('[data-headingparts="boxlu"]'); //  左上角
  bgcr = base.querySelector('[data-headingparts="boxrb"]'); //  右下角
  lead = base.querySelector('[data-headingparts="lead"]');
  var title = textWrapper.querySelector('.js__title');
  gsap.fromTo(bgcl, {
    autoAlpha: 0,
    rotate: -270,
    scale: 0.5
  }, {
    autoAlpha: 1,
    rotate: 0,
    scale: 1,
    duration: 1,
    scrollTrigger: {
      trigger: bg,
      start: 'top center+=50%',
      toggleActions: 'play pause resume reverse'
    }
  });
  gsap.fromTo(bgcr, {
    autoAlpha: 0,
    rotate: 270,
    scale: 0.5
  }, {
    autoAlpha: 1,
    rotate: 0,
    scale: 1,
    duration: 1,
    scrollTrigger: {
      trigger: bg,
      start: 'top center+=50%',
      toggleActions: 'play pause resume reverse'
    }
  });

  //  背景
  gsap.fromTo(bg, {
    autoAlpha: 0,
    x: '10%'
  }, {
    autoAlpha: 1,
    duration: 3,
    x: 0,
    ease: 'Power4.easeOut',
    scrollTrigger: {
      trigger: bg,
      start: 'top center+=50%',
      toggleActions: 'play pause resume reverse'
    }
  });
  gsap.fromTo(lead, {
    x: '-160%'
  }, {
    rotate: 0,
    x: '-50%',
    ease: 'Power4.easeOut',
    duration: 2,
    scrollTrigger: {
      trigger: lead,
      //アニメーションが始まるトリガーとなる要素
      toggleActions: 'play pause resume reverse',
      start: 'top center+=50%' //アニメーションが始まる位置を指定
    }
  });
});

//----------------------------------------
//  ヘッダー : li
//----------------------------------------
var header_li_a_span = document.querySelectorAll('.p-header__nav ul li a span');
var header_li_a = document.querySelectorAll('.p-header__nav ul li a');
//文字列（テキスト）を分割しspanで囲む
function js_li_splitspan() {
  header_li_a_span.forEach(function (target) {
    var newText = '';
    var text = target.textContent;
    var result = text.split('');
    for (var i = 0; i < result.length; i++) {
      newText += '<span>' + result[i] + '</span>';
    }
    target.innerHTML = newText;
  });
}
js_li_splitspan();
header_li_a.forEach(function (h_lia) {
  var li_a_i = h_lia.querySelector('[data-parts="boxlt"]'); //  左上角
  var li_a_u = h_lia.querySelector('[data-parts="boxrb"]'); //  右下角
  var li_a_span = h_lia.querySelector('[data-parts="text"]'); //  aの下の文字列格納span

  // 初期の状態(取ってきたドット・テキストは最初は非表示)
  // ドットとテキストを非表示
  gsap.set([li_a_i, li_a_u], {
    opacity: 0
  });
  // timelineを作成（各アニメーションを連動させる）
  var tl = gsap.timeline();
  // toで状態を変化させる
  var ani = tl.to(li_a_i, {
    rotate: 180,
    duration: 0.2,
    opacity: 1
  }).to(li_a_u, {
    rotate: 180,
    duration: 0.3,
    // 0.3秒かけてアニメーション
    opacity: 1
  });
  ani.pause();
  h_lia.addEventListener("mouseenter", function () {
    return ani.play();
  });
  h_lia.addEventListener("mouseleave", function () {
    return ani.reverse();
  });
});

//====================================================================
//----------------------------------------
//  blur_in : 「出現時ブラー」
//----------------------------------------
{
  var eff_classs = document.querySelectorAll('[data-jsanime="blur__in"]');
  eff_classs.forEach(function (target) {
    gsap.set(target, {
      filter: "blur(10px)"
    });
    var tl = gsap.timeline();
    tl.to(target, {
      filter: "blur(0px)",
      duration: 2
    });
  });
}

/***/ }),

/***/ "./src/js/mylib/gsap/eegsap_parallax.js":
/*!**********************************************!*\
  !*** ./src/js/mylib/gsap/eegsap_parallax.js ***!
  \**********************************************/
/***/ (function() {

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.js-parallax').forEach(function (wrap) {
  var y = wrap.getAttribute('data-y') || -100;
  gsap.to(wrap, {
    y: y,
    scrollTrigger: {
      trigger: wrap,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5
      //markers: true
    }
  });
});

/***/ }),

/***/ "./src/js/mylib/gsap/eegsap_scrollbutton.js":
/*!**************************************************!*\
  !*** ./src/js/mylib/gsap/eegsap_scrollbutton.js ***!
  \**************************************************/
/***/ (function() {

//----------------------------------------
//  scollbutton : 「繰り返し」
//----------------------------------------
{
  var eff_classs = document.querySelectorAll('.js-gsap__scrollbutton');
  eff_classs.forEach(function (target) {
    var divs = target.querySelectorAll('.icon span');
    for (var i = 0; i < divs.length; i++) {
      var iy = i * 0.5;
      var bar = divs[i];
      gsap.set(bar, {
        opacity: 0,
        y: 0
      });
      var tl = gsap.timeline();
      tl.to(bar, {
        delay: iy,
        duration: 0
      }).to(bar, {
        opacity: 1,
        duration: 0
      }).to(bar, {
        y: 40,
        opacity: 0,
        duration: 1,
        repeat: -1
      });
    }
  });
}

/***/ }),

/***/ "./src/js/mylib/gsap/eegsap_surface.js":
/*!*********************************************!*\
  !*** ./src/js/mylib/gsap/eegsap_surface.js ***!
  \*********************************************/
/***/ (function() {

//----------------------------------------
//  surface : 「ふわっと出る」
//----------------------------------------
// gsapは恐らくtransitionと干渉する。
{
  var eff_classs = document.querySelectorAll('[data-jsanime="surface__up"]');
  eff_classs.forEach(function (target) {
    var st_start = "top center";
    if (target.classList.contains('ts_c30')) {
      st_start += '+=30%';
    } else if (target.classList.contains('ts_c40')) {
      st_start += '+=40%';
    } else if (target.classList.contains('ts_c50')) {
      st_start += '+=50%';
    } else if (target.classList.contains('ts_c60')) {
      st_start += '+=60%';
    } else if (target.classList.contains('ts_c70')) {
      st_start += '+=70%';
    } else {
      st_start += '+=50%';
    }
    gsap.fromTo(target, {
      autoAlpha: 0,
      rotate: 0,
      scale: 1,
      y: 100
    }, {
      y: 0,
      autoAlpha: 1,
      rotate: 0,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: st_start
      }
    });
  });
}
//----------------------------------------
//  surface : 「ふわっと出る」グループ
//----------------------------------------
{
  var _eff_classs = document.querySelectorAll('[data-jsanime="surface__upgroup"]');
  _eff_classs.forEach(function (target) {
    var divs = target.querySelectorAll('div');
    gsap.fromTo(divs, {
      autoAlpha: 0,
      rotate: 0,
      scale: 0.9,
      y: 20
    }, {
      y: 0,
      autoAlpha: 1,
      rotate: 0,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: 'top center+=50%'
      },
      stagger: {
        amount: 1,
        //アニメーション間隔の合計時間
        from: "start",
        // 動作を始める要素を指定
        ease: "sine.in"
      }
    });
  });
}

//----------------------------------------
//  surface : 「中央集合」
//----------------------------------------
{
  var _eff_classs2 = document.querySelectorAll('[data-jsanime="surface__gather-center"]');
  _eff_classs2.forEach(function (target) {
    var divs = target.querySelectorAll('div');
    gsap.fromTo(divs, {
      rotate: 0,
      scale: 0.9,
      x: -1000
    }, {
      x: 0,
      //autoAlpha: 1,
      rotate: 0,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: 'top center+=50%'
      }
    });
  });
}

//----------------------------------------
//  surface : 「左から右」
//----------------------------------------
{
  var _eff_classs3 = document.querySelectorAll('[data-jsanime="surface__ltor"]');
  _eff_classs3.forEach(function (target) {
    gsap.fromTo(target, {
      autoAlpha: 0,
      rotate: -45,
      scale: 0.9,
      x: -1000
    }, {
      x: 0,
      autoAlpha: 1,
      rotate: 0,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: 'top center+=50%'
      }
    });
  });
}

//----------------------------------------
//  surface : 「左から右」
//----------------------------------------
{
  var _eff_classs4 = document.querySelectorAll('[data-jsanime="surface__rtol"]');
  _eff_classs4.forEach(function (target) {
    gsap.fromTo(target, {
      autoAlpha: 0,
      rotate: 45,
      scale: 0.9,
      x: 1000
    }, {
      x: 0,
      autoAlpha: 1,
      rotate: 0,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: 'top center+=50%'
      }
    });
  });
}

//----------------------------------------
//  surface : ゲーム的文字列
//----------------------------------------
{
  var _eff_classs5 = document.querySelectorAll('[data-jsanime="surface__gametext"]');
  //文字列（テキスト）を分割しspanで囲む
  _eff_classs5.forEach(function (target) {
    var newText = '';
    var text = target.innerHTML; //  タグあり
    var result_br = text.split('<br>');
    for (var j = 0; j < result_br.length; j++) {
      var result = result_br[j].split('');
      for (var i = 0; i < result.length; i++) {
        newText += '<b>' + result[i] + '</b>';
      }
      newText += '<br>';
    }
    target.innerHTML = newText;
  });
  _eff_classs5.forEach(function (target) {
    var spans = target.querySelectorAll('b');
    gsap.fromTo(spans, {
      autoAlpha: 0,
      rotate: 0,
      scale: 1,
      y: 100
    }, {
      y: 0,
      autoAlpha: 1,
      rotate: 0,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: 'top center+=50%'
      },
      stagger: {
        amount: 2,
        //アニメーション間隔の合計時間
        from: "start",
        // 動作を始める要素を指定
        ease: "sine.in"
      }
    });
  });
}

//----------------------------------------
//  surface : ヒーローセクション専用
//----------------------------------------
{
  var _eff_classs6 = document.querySelectorAll('[data-jsanime="surface__heroheading"]');
  _eff_classs6.forEach(function (target) {
    var divs = target.querySelectorAll('div');
    console.log(divs);
    gsap.set([divs[0], divs[1], divs[2], divs[3]], {
      opacity: 0
    });
    gsap.set(divs[0], {
      y: 160
    });
    gsap.set(divs[1], {
      y: 120
    });
    gsap.set(divs[2], {
      y: 80
    });
    gsap.set(divs[3], {
      y: 40
    });
    var tl = gsap.timeline();
    tl.to(divs[0], {
      rotate: 0,
      duration: 0.5,
      opacity: 1
    }).to(divs[0], {
      y: 0
    }).to(divs[1], {
      duration: 0.5,
      opacity: 1
    }, '+=0.5').to(divs[1], {
      y: 0
    }).to(divs[2], {
      duration: 0.5,
      opacity: 1
    }, '+=0.5').to(divs[2], {
      y: 0
    }).to(divs[3], {
      duration: 0.5,
      opacity: 1
    }, '+=0.5').to(divs[3], {
      y: 0
    }, '+=0.5');
  });
}

//----------------------------------------
//  surface : ヒーローセクション専用 : 2 演出含む
//----------------------------------------
{
  var _eff_classs7 = document.querySelectorAll('[data-jsanime="surface__heroheading2"]');
  _eff_classs7.forEach(function (target) {
    var divs = target.querySelectorAll('div');
    divs.forEach(function (item) {
      gsap.set(item, {
        opacity: 0,
        y: 40
      });
    });
    gsap.set(divs[0], {
      opacity: 0,
      y: 40,
      rotate: 30
    });
    gsap.set(divs[7], {
      opacity: 0,
      y: -40,
      rotate: 0
    }); //  想像をカタチに
    var tl = gsap.timeline();
    //  指のサイズ
    var handSize = 3;
    tl.to(divs[0], {
      y: 0,
      rotate: 0,
      x: -15,
      duration: 0.5,
      opacity: 1
    }).to(divs[0], {
      rotate: -5,
      y: -15,
      scale: 1.5,
      duration: 1
    }).to(divs[0], {
      rotate: -15,
      y: -40,
      x: -20,
      scale: 2,
      color: "#FF0000",
      opacity: 0,
      duration: 1
    }
    //  わかりやすい
    ).to(divs[1], {
      y: 0,
      duration: 1,
      opacity: 1
    }).to(divs[1], {
      y: -15,
      color: "#00FF66",
      duration: 1
    }).to(divs[1], {
      y: -40,
      duration: 1,
      opacity: 0
    }
    //  👍
    ).to(divs[2], {
      y: 0,
      scale: handSize,
      opacity: 1,
      duration: 0.5
    }).to(divs[2], {
      y: -15,
      duration: 0.5
    }).to(divs[2], {
      y: -40,
      opacity: 0,
      duration: 0.1
    }
    //  使いやすい
    ).to(divs[3], {
      y: 0,
      duration: 0.5,
      opacity: 1
    }).to(divs[3], {
      y: -15,
      duration: 1
    }).to(divs[3], {
      y: -80,
      opacity: 0,
      duration: 1
    }
    //  ■
    ).to(divs[4], {
      y: 0,
      rotate: 360,
      scale: 1.2,
      duration: 0.5,
      opacity: 1
    }).to(divs[4], {
      y: -20,
      rotate: 720,
      scale: 1.5,
      color: "#FFFF00",
      duration: 0.5
    }).to(divs[4], {
      y: -40,
      rotate: 0,
      scale: 1.8,
      opacity: 0,
      duration: 1
    }
    //  心地よい
    ).to(divs[5], {
      y: 0,
      duration: 1,
      opacity: 1
    }).to(divs[5], {
      y: -15,
      duration: 1
    }).to(divs[5], {
      y: -80,
      opacity: 0,
      duration: 1
    }
    //  サイト作ります
    ).to(divs[6], {
      y: 0,
      duration: 1,
      opacity: 1
    }).to(divs[6], {
      y: -15,
      duration: 1
    }).to(divs[6], {
      y: -80,
      opacity: 0,
      duration: 1
    }
    //  想像を触れるカタチに。
    ).to(divs[7], {
      y: -40,
      duration: 1,
      opacity: 1
    }).to(divs[7], {
      y: -50,
      backgroundColor: "rgba(144,238,144,0.8)",
      padding: "0px 40px",
      duration: 1
    });
  });
}

/***/ }),

/***/ "./src/js/mylib/myexternallinks.js":
/*!*****************************************!*\
  !*** ./src/js/mylib/myexternallinks.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ myExternalLinks; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//----------------------------------------
//
//  WP External Linksの代わり
//  全a hrefにチェックを入れ、外部なら外部ページ処理する
//
//
//----------------------------------------
var myExternalLinks = /*#__PURE__*/function () {
  function myExternalLinks() {
    _classCallCheck(this, myExternalLinks);
    //  全てのa hrefを取得
    this.hrefs = document.querySelectorAll('a');
  }

  //  外部リンクの修正
  _createClass(myExternalLinks, [{
    key: "fixingExternalLinks",
    value: function fixingExternalLinks() {
      this.hrefs.forEach(function (target) {
        var url = target.href;
        var reg = new RegExp("^(https?:)?\/\/" + location.hostname);
        if (url.match(reg) || url.charAt(0) === "/") {}
        //  外部リンクである
        else {
          var fexception = false;
          //  例外判定
          if (url.indexOf('twitter.com/etienu352') !== -1) {
            fexception = true;
          }
          if (!fexception) {
            var acls = "c-link__exicon";
            if (target.classList.contains("exi-xs")) {
              acls += " c-link__exicon--xs";
            } else if (target.classList.contains("exi-md")) {
              acls += " c-link__exicon--md";
            }

            //属性追加
            target.setAttribute("rel", "noopener noreferrer");
            target.setAttribute("target", "_blank");
            //  fontawesome軽量型
            if (true) {
              var ne = document.createElement('i');
              ne.setAttribute("class", "fa-solid fa-external-link-alt");
              target.appendChild(ne);
            }
          }
        }
      });
    }
  }]);
  return myExternalLinks;
}();


/***/ }),

/***/ "./src/js/mylib/slide.js":
/*!*******************************!*\
  !*** ./src/js/mylib/slide.js ***!
  \*******************************/
/***/ (function() {

//--------------------------------------------------------
// slideUp
//--------------------------------------------------------
var slideUp = function slideUp(el) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  el.style.height = el.offsetHeight + "px";
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  setTimeout(function () {
    el.style.display = "none";
    el.style.removeProperty("height");
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

//--------------------------------------------------------
// slideDown
//--------------------------------------------------------
var slideDown = function slideDown(el) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  el.style.removeProperty("display");
  var display = window.getComputedStyle(el).display;
  if (display === "none") {
    display = "block";
  }
  el.style.display = display;
  var height = el.offsetHeight;
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.height = height + "px";
  el.style.removeProperty("padding-top");
  el.style.removeProperty("padding-bottom");
  el.style.removeProperty("margin-top");
  el.style.removeProperty("margin-bottom");
  setTimeout(function () {
    el.style.removeProperty("height");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

//--------------------------------------------------------
// slideToggle
//--------------------------------------------------------
var slideToggle = function slideToggle(el) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  if (window.getComputedStyle(el).display === "none") {
    return slideDown(el, duration);
  } else {
    return slideUp(el, duration);
  }
};

/***/ }),

/***/ "./src/js/mylib/smoothscroll.js":
/*!**************************************!*\
  !*** ./src/js/mylib/smoothscroll.js ***!
  \**************************************/
/***/ (function() {

var pHeader = document.querySelector('header');
var headerHeight = pHeader ? pHeader.offsetHeight : 0;
var adjustHeader = 0;
var smoothScrollSpeed = 500;
//  全てのa href="#"を取得
var alinks = document.querySelectorAll('a[href^="#"]');
//  全てのaにクリックイベント設定
alinks.forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    // クリックされたときのデフォルトの挙動を防ぐ
    e.preventDefault();
    var href = anchor.getAttribute("href");
    headerHeight = pHeader ? pHeader.offsetHeight : 0;

    // href属性の#を取り除いた部分と一致するIDを取得
    var target = document.getElementById(href.replace('#', ''));
    var targetPosition = 0;
    if (target != null) {
      //取得した要素の位置を取得するために、getBoundingClientRect()を呼び出し、ページ上の位置を計算。
      //headerの高さを引いて、スクロール位置がヘッダーの下になるように調整します。
      targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    }

    // window.scrollTo()を呼び出して、スクロール位置を設定します。behaviorオプションをsmoothに設定することで、スムーズなスクロールを実現します。
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

/***/ }),

/***/ "./src/js/mylib/splide-setting.js":
/*!****************************************!*\
  !*** ./src/js/mylib/splide-setting.js ***!
  \****************************************/
/***/ (function() {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//new Splide(".splide").mount();

var splide__planner = null;
var splide__report = null;

//--------------------------------------------------------
//  プランナー
//--------------------------------------------------------
var ret = null;
ret = document.querySelector("#splide__planner");
if (ret) {
  splide__planner = new Splide('#splide__planner', {
    arrows: false,
    pagination: false,
    fixedWidth: 'auto',
    autoplay: true,
    // 自動再生
    type: "loop",
    // ループ
    pauseOnHover: false,
    // カーソルが乗ってもスクロールを停止させない
    pauseOnFocus: false,
    // 矢印をクリックしてもスクロールを停止させない
    interval: 4000,
    // 自動再生の間隔
    speed: 5000,
    // スライダーの移動時間
    /*
    autoScroll: {
        speed: 1.0,
        pauseOnHover: false,
        pauseOnFocus: false,
    },*/

    ///    padding: "0%", // スライダーの左右の余白
    padding: "20px",
    // スライダーの左右の余白(SP)
    gap: 48 // スライド間の余白
  });

  splide__planner.mount();

  //splide__planner.mount(window.splide.Extensions); //拡張機能をセットする
}

//--------------------------------------------------------
//  リポート
//--------------------------------------------------------
ret = document.querySelector("#splide__report");
if (ret) {
  var _Splide;
  splide__report = new Splide('#splide__report', (_Splide = {
    arrows: false,
    //fixedWidth: 'auto',
    pagination: false,
    autoplay: true,
    type: "loop",
    pauseOnHover: false,
    pauseOnFocus: false,
    interval: 3500,
    speed: 2000,
    //padding: "0px",
    gap: 16,
    mediaQuery: 'min',
    fixedWidth: 'auto'
  }, _defineProperty(_Splide, "arrows", false), _defineProperty(_Splide, "flickPower", 300), _defineProperty(_Splide, "autoScroll", {
    speed: 0.5,
    pauseOnHover: false,
    pauseOnFocus: false
  }), _Splide));
  splide__report.mount();
}

//--------------------------------------------------------
//  whats プランナー画像
//--------------------------------------------------------
/*
var splide__whats = new Splide('#splide__whats', {
    arrows: false,
    pagination: false,
    autoplay: true,
    type: "loop",
    pauseOnHover: false,
    pauseOnFocus: false,
    interval: 2000,
    speed: 1000,
    gap: 3,
    perPage: 1,

});

splide__whats.mount();
*/
var target_whats = '#splide__whats';
if (document.querySelector(target_whats)) {
  var options_whats = {
    mediaQuery: 'min',
    fixedWidth: 'auto',
    gap: 3,
    type: 'loop',
    arrows: false,
    //drag: 'free',
    flickPower: 300,
    pagination: false,
    autoScroll: {
      speed: 0.5,
      pauseOnHover: false,
      pauseOnFocus: false
    }
    /*
        breakpoints: {
            1025: {
                gap: 3,
                fixedWidth: '36rem',
            }
        },*/
  };

  var splide__whats = new Splide(target_whats, options_whats);
  splide__whats.mount(window.splide.Extensions); //拡張機能をセットする
  //splide__whats.mount();
}
//--------------------------------------------------------
//  reports new
//--------------------------------------------------------
var target_reports_ranking_sp = '#splide__reports__ranking__sp';
if (document.querySelector(target_reports_ranking_sp)) {
  var options_reports_ranking_sp = {
    mediaQuery: 'min',
    fixedWidth: 'auto',
    padding: {
      left: 16
    },
    gap: 16,
    //type: 'loop',
    arrows: false,
    //drag: 'free',
    flickPower: 300,
    pagination: false,
    autoScroll: {
      speed: 0.0,
      pauseOnHover: false,
      pauseOnFocus: false
    }
  };
  var splide_reports_ranking_sp = new Splide(target_reports_ranking_sp, options_reports_ranking_sp);
  splide_reports_ranking_sp.mount(window.splide.Extensions); //拡張機能をセットする
  //splide_reports_ranking_sp.mount();
}

//--------------------------------------------------------
//  reports new
//--------------------------------------------------------
var target_reports_new = '#splide__reports__new';
if (document.querySelector(target_reports_new)) {
  var options_reports_new = {
    mediaQuery: 'min',
    //    fixedWidth: '24rem',
    fixedWidth: 'auto',
    //fixedWidth: '348px',
    padding: {
      left: 15
    },
    gap: 16,
    type: 'loop',
    arrows: false,
    drag: 'free',
    flickPower: 300,
    pagination: false,
    autoScroll: {
      speed: 0.0,
      pauseOnHover: false,
      pauseOnFocus: false
    },
    breakpoints: {
      768: {
        gap: 32
        //fixedWidth: '36rem',
      }
    }
  };

  var splide_reports_new = new Splide(target_reports_new, options_reports_new);
  splide_reports_new.mount(window.splide.Extensions); //拡張機能をセットする
  //splide_reports_new.mount();
}

//--------------------------------------------------------
//  reccomend ranking
//--------------------------------------------------------
var target_reccomend_ranking = '#splide__reccomend__ranking';
if (document.querySelector(target_reccomend_ranking)) {
  var options_reccomend_ranking = {
    arrows: false,
    fixedWidth: 'auto',
    pagination: false,
    autoplay: "pause",
    // 自動再生
    //type: "loop", // ループ
    pauseOnHover: false,
    // カーソルが乗ってもスクロールを停止させない
    pauseOnFocus: false,
    // 矢印をクリックしてもスクロールを停止させない
    interval: 2000,
    // 自動再生の間隔
    speed: 1000,
    // スライダーの移動時間
    padding: "15px",
    // スライダーの左右の余白
    gap: 16,
    // スライド間の余白
    autoStart: false
    /*
        autoScroll: {
            speed: 0.5,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
    */
  };

  var splide_reccomend_ranking = new Splide(target_reccomend_ranking, options_reccomend_ranking);
  splide_reccomend_ranking.mount();
}
//--------------------------------------------------------
//  reccomend new
//--------------------------------------------------------
var target_reccomend_new = '#splide__reccomend__new';
if (document.querySelector(target_reccomend_new)) {
  var options_reccomend_new = {
    arrows: false,
    fixedWidth: 'auto',
    //fixedWidth: 397,
    pagination: false,
    autoplay: "pause",
    // 自動再生
    type: "loop",
    // ループ
    pauseOnHover: false,
    // カーソルが乗ってもスクロールを停止させない
    pauseOnFocus: false,
    // 矢印をクリックしてもスクロールを停止させない
    interval: 2000,
    // 自動再生の間隔
    speed: 1000,
    // スライダーの移動時間
    padding: "22.5%",
    // スライダーの左右の余白
    gap: 35,
    autoStart: false,
    breakpoints: {
      768: {
        padding: "14px",
        // スライダーの左右の余白
        gap: 16 // スライド間の余白
        //fixedWidth: '36rem',
      }
    },

    /*
        mediaQuery: 'min',
        fixedWidth: '24rem',
        gap: 35,
        type: 'loop',
        arrows: false,
        drag: 'free',
        flickPower: 300,
        pagination: false,
    */

    autoScroll: {
      speed: 0.5,
      pauseOnHover: false,
      pauseOnFocus: false
    }
  };
  var splide_reccomend_new = new Splide(target_reccomend_new, options_reccomend_new);
  splide_reccomend_new.mount(window.splide.Extensions); //    拡張機能をセットする
  //splide_reccomend_new.mount(); //  引数入れると絶対オートスクロールが始まってしまう
  /*
  var splide__reccomend_new2 = new Splide('#splide__reccomend__new', {
      arrows: false,
      pagination: false,
      //autoplay: true, // 自動再生
      type: "loop", // ループ
      pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
      pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
      interval: 2000, // 自動再生の間隔
      speed: 1000, // スライダーの移動時間
      padding: "0%", // スライダーの左右の余白
      gap: 48, // スライド間の余白
    });
    splide__reccomend_new2.mount();
  */
}
//--------------------------------------------------------
//  voices new
//--------------------------------------------------------
var target_voices_new = '#splide__voices__new';
if (document.querySelector(target_voices_new)) {
  var options_voices_new = {
    mediaQuery: 'min',
    fixedWidth: 'auto',
    //fixedWidth: 1175, //'24rem',
    padding: "0",
    // スライダーの左右の余白
    //padding: { left: 38 },
    gap: 16,
    type: 'loop',
    arrows: false,
    drag: 'free',
    flickPower: 100,
    pagination: false,
    autoScroll: {
      speed: 0.0,
      pauseOnHover: false,
      pauseOnFocus: false
    },
    breakpoints: {
      768: {
        //fixedWidth: 'auto',
        padding: "0px",
        // スライダーの左右の余白
        gap: 24 // スライド間の余白
        //fixedWidth: '36rem',
      }
    }
  };

  var splide_voices_new = new Splide(target_voices_new, options_voices_new);
  splide_voices_new.mount(window.splide.Extensions); //    拡張機能をセットする
  //splide_voices_new.mount();
}

//--------------------------------------------------------
//  voices planner ranking
//--------------------------------------------------------
var target_voices_ranking = '#splide__voices__ranking';
if (document.querySelector(target_voices_ranking)) {
  var options_voices_ranking = {
    mediaQuery: 'min',
    fixedWidth: 'auto',
    //fixedWidth: 1175, //'24rem',
    padding: "0",
    // スライダーの左右の余白
    //padding: { left: 38 },
    gap: 16,
    //type: 'loop',
    arrows: false,
    drag: 'free',
    flickPower: 300,
    pagination: false,
    /*
        autoScroll: {
            speed: 0.5,
            pauseOnHover: false,
            pauseOnFocus: false,
        },*/
    breakpoints: {
      768: {
        //fixedWidth: 'auto',
        padding: "0px",
        // スライダーの左右の余白
        gap: 24 // スライド間の余白
        //fixedWidth: '36rem',
      }
    }
  };

  var splide_voices_ranking = new Splide(target_voices_ranking, options_voices_ranking);
  splide_voices_ranking.mount(window.splide.Extensions);
  //splide_voices_ranking.mount();
}

/***/ }),

/***/ "./src/js/mylib/webp_detection.js":
/*!****************************************!*\
  !*** ./src/js/mylib/webp_detection.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportsWebp": function() { return /* binding */ supportsWebp; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//  https://white-space.work/css-background-using-webp/
///--------------------------------------------------------------------------------
// 
//  このファイルを読み込むと、webp対応かを判断して
//  bodyに"is-webp"または"is-no-webp"を付与します。
//
//--------------------------------------------------------------------------------

/**--------------------------------------------------------------------------------
 * ブラウザが webp をサポートしているかどうか
 *
 * @returns webp をサポートしているなら true そうでないなら false
 *--------------------------------------------------------------------------------*/
var supportsWebp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var webpData, blob;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (self.createImageBitmap) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", false);
        case 2:
          // webp の仮データ
          webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
          _context.next = 5;
          return fetch(webpData).then(function (r) {
            return r.blob();
          });
        case 5:
          blob = _context.sent;
          return _context.abrupt("return", createImageBitmap(blob).then(function () {
            return true;
          }, function () {
            return false;
          }));
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function supportsWebp() {
    return _ref.apply(this, arguments);
  };
}();

/**--------------------------------------------------------------------------------
//* webp 対応していれば target に is-webp、対応していなければ is-no-webp クラスを追加する
//*
//* @param {string} target (default: body)
//----    ----    ----    ----
//  以下をbodyに付与
//  webp に対応している … .is-webp
//  webp に対応していない … .is-no-webp
*--------------------------------------------------------------------------------*/
var addWebpDetectionClass = function addWebpDetectionClass() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
  var tar = document.querySelector(target);
  if (supportsWebp()) {
    tar.classList.add('is-webp');
  } else {
    tar.classList.add('is-no-webp');
  }
};

// 実行
addWebpDetectionClass();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************************!*\
  !*** ./src/js/mylib/_myindex.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide */ "./src/js/mylib/slide.js");
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slide__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smoothscroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smoothscroll */ "./src/js/mylib/smoothscroll.js");
/* harmony import */ var _smoothscroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smoothscroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_btn_gototop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/btn_gototop */ "./src/js/mylib/content/btn_gototop.js");
/* harmony import */ var _content_btn_humburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/btn_humburger */ "./src/js/mylib/content/btn_humburger.js");
/* harmony import */ var _content_accessibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/accessibility */ "./src/js/mylib/content/accessibility.js");
/* harmony import */ var _content_btn_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/btn_modal */ "./src/js/mylib/content/btn_modal.js");
/* harmony import */ var _content_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/header */ "./src/js/mylib/content/header.js");
/* harmony import */ var _content_disp_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/disp_loader */ "./src/js/mylib/content/disp_loader.js");
/* harmony import */ var _content_contactform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/contactform */ "./src/js/mylib/content/contactform.js");
/* harmony import */ var _content_pagebackground__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/pagebackground */ "./src/js/mylib/content/pagebackground.js");
/* harmony import */ var _content_oscheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/oscheck */ "./src/js/mylib/content/oscheck.js");
/* harmony import */ var _adjustviewport__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./adjustviewport */ "./src/js/mylib/adjustviewport.js");
/* harmony import */ var _myexternallinks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./myexternallinks */ "./src/js/mylib/myexternallinks.js");
/* harmony import */ var _eeparallax_eeparallax__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./eeparallax/eeparallax */ "./src/js/mylib/eeparallax/eeparallax.js");
/* harmony import */ var _content_btn_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./content/btn_cookie */ "./src/js/mylib/content/btn_cookie.js");
/* harmony import */ var _webp_detection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./webp_detection */ "./src/js/mylib/webp_detection.js");
/* harmony import */ var _gsap_eegsap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./gsap/eegsap */ "./src/js/mylib/gsap/eegsap.js");
/* harmony import */ var _gsap_eegsap__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_gsap_eegsap__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _gsap_eegsap_surface__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gsap/eegsap_surface */ "./src/js/mylib/gsap/eegsap_surface.js");
/* harmony import */ var _gsap_eegsap_surface__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_gsap_eegsap_surface__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _gsap_eegsap_scrollbutton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./gsap/eegsap_scrollbutton */ "./src/js/mylib/gsap/eegsap_scrollbutton.js");
/* harmony import */ var _gsap_eegsap_scrollbutton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_gsap_eegsap_scrollbutton__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _gsap_eegsap_parallax__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./gsap/eegsap_parallax */ "./src/js/mylib/gsap/eegsap_parallax.js");
/* harmony import */ var _gsap_eegsap_parallax__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_gsap_eegsap_parallax__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _splide_setting__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./splide-setting */ "./src/js/mylib/splide-setting.js");
/* harmony import */ var _splide_setting__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_splide_setting__WEBPACK_IMPORTED_MODULE_20__);
 //  jQueryのtoggle再現
 //  スムーススクロール
 //  トップに戻るボタン
 //  ハンバーガー
 //  アクセシビリティ
 //  モーダル
 //  ヘッダー
 //  ローディング画面
 //  コンタクトフォーム
 //  背景処理
 //  OSの判別
 //  ビューポート調整
 //  外部リンク
 //  パララックス
 //  クッキークラス
 //  WebP判定

//  練習兼、見出し背景、

//  wowの真似事、up,upgroupなどふわっと出る演出
//  ヒーローのアニメーション

//  ヒーローページのSCROLL

//  パララックス

//  swiperより演出数は少ないがとても軽い


// ブレイクポイント
var bp = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};
var btnHumburger = new _content_btn_humburger__WEBPACK_IMPORTED_MODULE_3__["default"]('.p-hamburger', ".p-spmenu__closebutton", ".l-header", ".p-spmenu");
var acsb = new _content_accessibility__WEBPACK_IMPORTED_MODULE_4__["default"]();
var dispLoader = new _content_disp_loader__WEBPACK_IMPORTED_MODULE_7__["default"]();
var contactform = new _content_contactform__WEBPACK_IMPORTED_MODULE_8__["default"]();
var pbg = new _content_pagebackground__WEBPACK_IMPORTED_MODULE_9__["default"]();
var oscheck = new _content_oscheck__WEBPACK_IMPORTED_MODULE_10__["default"]();
var adjustviewport = new _adjustviewport__WEBPACK_IMPORTED_MODULE_11__["default"]();
var eeparallax = new _eeparallax_eeparallax__WEBPACK_IMPORTED_MODULE_13__["default"]();
var btncookie = new _content_btn_cookie__WEBPACK_IMPORTED_MODULE_14__["default"]();

//----------------------------------------------------
//  ロード時初期化
//----------------------------------------------------
var init = function init() {
  //  ヘッダーハンバーガーの設定
  btnHumburger.eventRegistration('.p-spmenu__inner', 'ul li a', '.l-header__buttonswrapper a');
  //  汎用キー入力関係の設定
  acsb.eventRegistration();
  //  クッキー
  btncookie.eventRegistration();

  //  トップページのみローディング画面設定
  dispLoader.init();
  if (wp_template == "front-page.php" || wp_template == "home.php") {
    dispLoader.eventRegistration();
  }
  //  コンタクトフォームのページのみ設定
  if (wp_template == "page-contact.php") {
    contactform.eventRegistration();
  }

  //  OSの判別
  oscheck.markBody(); //  bodyにOS判断クラス付け(iOS Machintosh 等)

  //  ビューポートの調整
  adjustviewport.set();
};

//----------------------------------------------------
//  イベント : ロード
//----------------------------------------------------
window.addEventListener('DOMContentLoaded', function () {
  init();
});

//----------------------------------------------------
//  イベント : スクロール
//----------------------------------------------------
window.addEventListener('scroll', function () {});

//----------------------------------------------------
//  イベント : リサイズ
//----------------------------------------------------
window.addEventListener("resize", function () {
  //  ビューポートの調整
  adjustviewport.task();
});

//----------------------------------------------------
//  イベント : キー
//----------------------------------------------------
window.addEventListener("keydown", function (event) {
  //  アクセシビリティ
  acsb.task_key(event);

  //  ハンパーガー
  if (event.key === "Escape") {
    btnHumburger.taskEsc();
  }
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map