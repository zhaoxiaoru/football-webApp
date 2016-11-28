/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	var _commonUtil = __webpack_require__(2);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _guide = __webpack_require__(3);
	
	var _guide2 = _interopRequireDefault(_guide);
	
	var _index = __webpack_require__(7);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _home = __webpack_require__(11);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _search = __webpack_require__(17);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _photo = __webpack_require__(20);
	
	var _photo2 = _interopRequireDefault(_photo);
	
	var _my = __webpack_require__(23);
	
	var _my2 = _interopRequireDefault(_my);
	
	var _detail = __webpack_require__(30);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	var _store = __webpack_require__(33);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 自定义 scroll 指令
	_commonUtil2.default.dirScroll();
	
	// views
	
	
	// 在根组件加入 store，让它的子组件和 store 连接
	
	var App = Vue.extend({
	  store: _store2.default
	});
	
	var router = new VueRouter();
	
	router.map({
	  '/': {
	    component: _guide2.default
	  },
	  '/index': {
	    component: _index2.default,
	    subRoutes: {
	      '/': {
	        component: _home2.default
	      },
	      '/search': {
	        component: _search2.default
	      },
	      '/photo': {
	        component: _photo2.default
	      },
	      '/my': {
	        component: _my2.default
	      }
	    }
	  },
	
	  '/detail/:id': {
	    name: 'detail',
	    component: _detail2.default
	  }
	});
	
	router.start(App, '#app');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var commonUtil = {
	    isAllLoaded: function isAllLoaded(scope, cb) {
	        var t_img; // 定时器
	        var isLoad = true; // 控制变量
	
	        // 判断图片加载状况，加载完成后回调
	        return isImgLoad(cb);
	
	        // 判断图片加载的函数
	        function isImgLoad(callback) {
	            // 查找所有图片，迭代处理
	            $(scope).find('img').each(function () {
	                // 找到为0就将isLoad设为false，并退出each
	                if (this.height === 0) {
	                    isLoad = false;
	                    return false;
	                }
	            });
	            // 为true，没有发现为0的。加载完毕
	            if (isLoad) {
	                clearTimeout(t_img); // 清除定时器
	                // 回调函数
	                callback();
	                // 为false，因为找到了没有加载完成的图，将调用定时器递归
	            } else {
	                isLoad = true;
	                t_img = setTimeout(function () {
	                    isImgLoad(callback); // 递归扫描
	                }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	            }
	        }
	    },
	    dirScroll: function dirScroll() {
	        var that = this;
	        // 自定义指令
	        Vue.directive('scroll', function (value) {
	            if (value) {
	                that.isAllLoaded('#index-scroll', function () {
	                    new IScroll(value);
	                });
	            }
	        });
	    }
	};
	
	exports.default = commonUtil;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(4)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/scripts/components/guide.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./guide.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(5);
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  data: function data() {
	    return {
	      imgs: ['./images/slide1.png', './images/slide2.png', './images/slide3.png', './images/slide4.png']
	    };
	  },
	  ready: function ready() {
	    var mySwiper = new Swiper("#guide-swiper");
	    this.change(0);
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="m-guide">
	//     <div class="swiper-container" id="guide-swiper">
	//       <div class="swiper-wrapper">
	//         <div class="swiper-slide" v-for="img in imgs">
	//           <img v-if="$index==3" v-bind:src="img" v-link="{path:'/index'}">
	//           <img v-else v-bind:src="img">
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var tabChanger = exports.tabChanger = function tabChanger(_ref, tabIndex) {
	  var dispatch = _ref.dispatch;
	  var state = _ref.state;
	
	  dispatch('CHANGETAB', tabIndex);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"m-guide\">\n  <div class=\"swiper-container\" id=\"guide-swiper\">\n    <div class=\"swiper-wrapper\">\n      <div class=\"swiper-slide\" v-for=\"img in imgs\">\n        <img v-if=\"$index==3\" v-bind:src=\"img\" v-link=\"{path:'/index'}\">\n        <img v-else v-bind:src=\"img\">\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/scripts/components/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(10)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(5);
	
	var _getters = __webpack_require__(9);
	
	// <template>
	//   <div>
	//     <div id="index-container">
	//       <router-view :transition="transitionName" transition-mode="out-in"></router-view>
	//     </div>
	//     <footer id="footer">
	//       <ul>
	//         <li v-for="n in nav" v-on:click="navigatorTo($index)" v-link="{path: n.path}" v-bind:class="tabIndex == $index ? 'active' : ''">
	//           <i class="iconfont" v-html="n.icon"></i>
	//           <b v-html="n.title"></b>
	//         </li>
	//       </ul>
	//     </footer>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	    vuex: {
	        actions: {
	            change: _actions.tabChanger
	        },
	        getters: {
	            tabIndex: _getters.getTabindex
	        }
	    },
	    data: function data() {
	        return {
	            cur: 0,
	            nav: [{
	                title: '首页',
	                icon: '&#xe6bb;',
	                path: '/index'
	            }, {
	                title: '发现',
	                icon: '&#xe65c;',
	                path: '/index/search'
	            }, {
	                title: '',
	                icon: '&#xe664;',
	                path: '/index/photo'
	            }, {
	                title: '我的',
	                icon: '&#xe735;',
	                path: '/index/my'
	            }, {
	                title: '退出',
	                icon: '&#xe603;',
	                path: '/'
	            }],
	            transitionName: 'fade'
	        };
	    },
	
	
	    methods: {
	        navigatorTo: function navigatorTo(index) {
	            this.change(index);
	        }
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getTabindex = exports.getTabindex = function getTabindex(state) {
	  return state.tabIndex;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div id=\"index-container\">\n    <router-view :transition=\"transitionName\" transition-mode=\"out-in\"></router-view>\n  </div>\n  <footer id=\"footer\">\n    <ul>\n      <li v-for=\"n in nav\" v-on:click=\"navigatorTo($index)\" v-link=\"{path: n.path}\" v-bind:class=\"tabIndex == $index ? 'active' : ''\">\n        <i class=\"iconfont\" v-html=\"n.icon\"></i>\n        <b v-html=\"n.title\"></b>\n      </li>\n    </ul>\n  </footer>\n</div>\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/scripts/components/home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _commonUtil = __webpack_require__(2);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _waterfallUtil = __webpack_require__(13);
	
	var _waterfallUtil2 = _interopRequireDefault(_waterfallUtil);
	
	var _vueLoading = __webpack_require__(14);
	
	var _vueLoading2 = _interopRequireDefault(_vueLoading);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mySwiper = null; // <template>
	//   <div class="container">
	//     <header>
	//       <ul>
	//         <li class="iconfont">&#xe745;</li>
	//         <li>
	//           <span class="active">热点</span>
	//           <span>关注</span>
	//         </li>
	//         <li class="iconfont">&#xe684;</li>
	//       </ul>
	//     </header>
	//     <nav>
	//       <ul id="swiper-nav">
	//         <li v-for="nav in indexNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
	//       </ul>
	//     </nav>
	//     <section>
	//       <div class="swiper-container" id="index-swiper">
	//         <div class="swiper-wrapper">
	//           <div class="swiper-slide">
	//             <div v-loading="isLoading"></div>
	//             <section id="index-scroll" v-if="!isLoading">
	//               <div>
	//                 <div class="head">
	//                     <img v-bind:src="imgArrow"/>
	//                     <span>下拉刷新...</span>
	//                 </div>
	//                 <ul>
	//                   <li v-for="l in list" v-link="{name: 'detail', params: {id: l.id}}"><span><i><img v-bind:src="l.img" alt=""></i><b>{{l.title}}</b></span></li>
	//                 </ul>
	//                 <div class="foot">
	//                   <img v-bind:src="imgArrow"/>
	//                   <span>上拉加载更多...</span>
	//                 </div>
	//               </div>
	//             </section>
	//           </div>
	//           <div class="swiper-slide" id="lifescroll">
	//             <section id="waterfall"></section>
	//           </div>
	//           <div class="swiper-slide">
	//             <section id="css3waterfall">
	//               <div class="cont">
	//                 <div class="pic">
	//                   <div v-for="item in beautylist">
	//                     <span>
	//                       <img v-bind:src="item.img" />
	//                       <i v-html="item.title"></i>
	//                     </span>
	//                   </div>
	//                 </div>
	//               </div>
	//             </section>
	//           </div>
	//         </div>
	//       </div>
	//     </section>
	//   </div>
	// </template>
	//
	// <script>
	
	
	module.exports = {
	    data: function data() {
	        return {
	            list: [],
	            beautylist: [],
	            imgArrow: './images/arrow.png',
	            curIndex: 0,
	            indexNav: ['足球现场', '足球生活', '足球小姐'],
	            isShowLoading: false,
	            isLoading: true
	        };
	    },
	
	    directives: {
	        loading: _vueLoading2.default
	    },
	
	    ready: function ready() {
	        var _this = this;
	
	        var that = this;
	
	        // 足球现场：
	        this.$http.get('/rest/list').then(function (res) {
	            _this.list = res.data.data;
	            _this.isLoading = false;
	            // DOM 更新后，图片加载完 实例化 IScroll
	            Vue.nextTick(function () {
	                _commonUtil2.default.isAllLoaded('#index-scroll', function () {
	                    var myScroll = new IScroll('#index-scroll', {
	                        probeType: 3,
	                        mouseWheel: true,
	                        click: true
	                    });
	
	                    myScroll.scrollTo(0, -35);
	
	                    var head = $('.head img'),
	                        topImgHasClass = head.hasClass('up');
	                    var foot = $('.foot img'),
	                        bottomImgHasClass = head.hasClass('down');
	
	                    myScroll.on('scroll', function () {
	                        var y = this.y,
	                            maxY = this.maxScrollY - y;
	                        if (y >= 0) {
	                            !topImgHasClass && head.addClass('up');
	                            return '';
	                        }
	                        if (maxY >= 0) {
	                            !bottomImgHasClass && foot.addClass('down');
	                            return '';
	                        }
	                    });
	
	                    myScroll.on('scrollEnd', function () {
	                        if (this.y >= -35 && this.y < 0) {
	                            myScroll.scrollTo(0, -35);
	                            head.removeClass('up');
	                        } else if (this.y >= 0) {
	                            head.attr('src', './images/ajax-loader.gif');
	
	                            // ajax下拉刷新数据
	                            that.$http.get('/rest/listrefresh').then(function (res) {
	                                that.list = res.data.data.concat(that.list);
	                                myScroll.scrollTo(0, -35);
	                                head.removeClass('up');
	                                head.attr('src', './images/arrow.png');
	                                Vue.nextTick(function () {
	                                    myScroll.refresh();
	                                });
	                            });
	                        }
	
	                        var self = this;
	                        var maxY = this.maxScrollY - this.y;
	                        if (maxY > -35 && maxY < 0) {
	                            myScroll.scrollTo(0, self.maxScrollY + 35);
	                            foot.removeClass('down');
	                        } else if (maxY >= 0) {
	                            foot.attr('src', './images/ajax-loader.gif');
	                            //ajax上拉加载数据
	                            that.$http.get('/rest/listmore').then(function (res) {
	                                that.list = that.list.concat(res.data.data);
	                                foot.removeClass('down');
	                                foot.attr('src', './images/arrow.png');
	                                Vue.nextTick(function () {
	                                    myScroll.refresh();
	                                    myScroll.scrollTo(0, self.maxScrollY + 35);
	                                });
	                            });
	                        }
	                    });
	                });
	            });
	        });
	
	        // 足球生活：waterfall 瀑布流
	        var lifeScroll = new IScroll('#lifescroll', {
	            probeType: 3,
	            mouseWheel: true
	        });
	        (0, _waterfallUtil2.default)(lifeScroll);
	
	        // css3waterfall 数据拉取
	        this.$http.get('/rest/listcss3waterfall').then(function (res) {
	            _this.beautylist = res.data.data;
	            Vue.nextTick(function () {
	                _commonUtil2.default.isAllLoaded('#css3waterfall', function () {
	                    var myScroll = new IScroll('#css3waterfall');
	                });
	            });
	        });
	
	        mySwiper = new Swiper("#index-swiper", {
	            onSlideChangeStart: function onSlideChangeStart() {
	                that.curIndex = mySwiper.activeIndex;
	            }
	        });
	    },
	
	    methods: {
	        switchSwiper: function switchSwiper(index) {
	            this.curIndex = index;
	            mySwiper.slideTo(index);
	        }
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	var _waterfall = function _waterfall(liveScroll) {
	    var dataArr = [];
	
	    function getData() {
	        $.ajax({
	            url: '/rest/listwaterfall',
	            async: false,
	            success: function success(rs) {
	                dataArr = rs.data;
	            }
	        });
	    }
	
	    var boxArr, num, columnHeightArr;
	
	    function render() {
	        getData();
	        $.each(dataArr, function (index, item) {
	            $('#waterfall').append('<div class="box box-item"><div class="gap">' + '<div class="img" style="height:0;padding-bottom:' + cRate(item) * 100 + "%" + '" data-src="' + item.img + '"></div>' + '<div class="desc">' + item.title + '</div>' + '</div></div>');
	        });
	
	        boxArr = $('.box');
	        num = Math.floor(document.body.clientWidth / boxArr.eq(0).width());
	        columnHeightArr = [];
	        columnHeightArr.length = num;
	        arrangement();
	        $('#waterfall').css('minHeight', Math.max.apply(null, columnHeightArr));
	        liveScroll.refresh();
	        lazyLoad();
	    }
	
	    function arrangement() {
	        boxArr.each(function (index, item) {
	            if (index < num) {
	                columnHeightArr[index] = $(item).height();
	            } else {
	                var minHeight = Math.min.apply(null, columnHeightArr),
	                    minHeightIndex = $.inArray(minHeight, columnHeightArr);
	                $(item).css({
	                    position: 'absolute',
	                    top: minHeight,
	                    left: boxArr.eq(minHeightIndex).position().left
	                });
	                columnHeightArr[minHeightIndex] += $(item).height();
	            }
	        });
	    }
	
	    function lazyLoad() {
	        var boxArr = $('.box-item');
	        boxArr.each(function (index, item) {
	            var viewTop = $(item).offset().top - $('#waterfall').scrollTop(),
	                imgObj = $(item).find('.img');
	            if (viewTop < $('#waterfall').height() && $(item).offset().top + $(item).height() > $('#waterfall').scrollTop()) {
	                imgObj.css('backgroundImage', 'url(' + imgObj.attr("data-src") + ')').removeClass('data-src');
	                $(item).removeClass('box-item');
	            }
	        });
	    }
	
	    function cRate(obj) {
	        return obj.height / obj.width;
	    }
	
	    render();
	
	    liveScroll.on('scrollEnd', function () {
	        if (this.maxScrollY == this.y) {
	            getData();
	            render();
	        }
	    });
	};
	
	module.exports = _waterfall;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	!function (t, e) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports["vue-loading"] = e() : t["vue-loading"] = e();
	}(undefined, function () {
	  return function (t) {
	    function e(o) {
	      if (n[o]) return n[o].exports;var r = n[o] = { exports: {}, id: o, loaded: !1 };return t[o].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports;
	    }var n = {};return e.m = t, e.c = n, e.p = "", e(0);
	  }([function (t, e, n) {
	    "use strict";
	    function o(t) {
	      return t && t.__esModule ? t : { "default": t };
	    }Object.defineProperty(e, "__esModule", { value: !0 });var r = n(2),
	        i = o(r);n(19), e["default"] = { params: ["loadingOptions"], handleShow: function handleShow() {
	        var t = window.getComputedStyle(this.el).position;"static" !== t && "" !== t || (this["static"] = !0, this.el.style.position = "relative");var e = document.createElement("div");e.className = "vue-loading", e.style.backgroundColor = this.options.bg, this.el.appendChild(e);var n = document.createElement("div");n.className = "vue-loading-msg", n.textContent = this.options.text, e.appendChild(n), window.requestAnimationFrame(function () {
	          e.style.opacity = 1;
	        }), this.loadingBox = e;
	      }, handleHide: function handleHide() {
	        var t = this;this.loadingBox.addEventListener("transitionend", function () {
	          t.loadingBox.remove(), t["static"] && t.el.style.removeProperty("position");
	        }), this.loadingBox.style.opacity = 0;
	      }, bind: function bind() {
	        this["static"] = !1, this.loadingBox = null, this.first = !0, this.options = { text: "Loading ...", bg: "rgba(230, 233, 236, 0.8)" }, this.params.loadingOptions && (0, i["default"])(this.options, this.params.loadingOptions);
	      }, update: function update(t) {
	        if (t) this.first = !1, this.handleShow();else {
	          if (this.first) return void (this.first = !1);this.handleHide();
	        }
	      } };
	  }, function (t, e) {
	    var n = t.exports = { version: "1.2.6" };"number" == typeof __e && (__e = n);
	  }, function (t, e, n) {
	    t.exports = { "default": n(3), __esModule: !0 };
	  }, function (t, e, n) {
	    n(15), t.exports = n(1).Object.assign;
	  }, function (t, e) {
	    t.exports = function (t) {
	      if ("function" != typeof t) throw TypeError(t + " is not a function!");return t;
	    };
	  }, function (t, e) {
	    var n = {}.toString;t.exports = function (t) {
	      return n.call(t).slice(8, -1);
	    };
	  }, function (t, e, n) {
	    var o = n(4);t.exports = function (t, e, n) {
	      if (o(t), void 0 === e) return t;switch (n) {case 1:
	          return function (n) {
	            return t.call(e, n);
	          };case 2:
	          return function (n, o) {
	            return t.call(e, n, o);
	          };case 3:
	          return function (n, o, r) {
	            return t.call(e, n, o, r);
	          };}return function () {
	        return t.apply(e, arguments);
	      };
	    };
	  }, function (t, e) {
	    t.exports = function (t) {
	      if (void 0 == t) throw TypeError("Can't call method on  " + t);return t;
	    };
	  }, function (t, e, n) {
	    var o = n(10),
	        r = n(1),
	        i = n(6),
	        s = "prototype",
	        a = function a(t, e, n) {
	      var u,
	          c,
	          f,
	          l = t & a.F,
	          p = t & a.G,
	          d = t & a.S,
	          h = t & a.P,
	          g = t & a.B,
	          v = t & a.W,
	          b = p ? r : r[e] || (r[e] = {}),
	          y = p ? o : d ? o[e] : (o[e] || {})[s];p && (n = e);for (u in n) {
	        c = !l && y && u in y, c && u in b || (f = c ? y[u] : n[u], b[u] = p && "function" != typeof y[u] ? n[u] : g && c ? i(f, o) : v && y[u] == f ? function (t) {
	          var e = function e(_e) {
	            return this instanceof t ? new t(_e) : t(_e);
	          };return e[s] = t[s], e;
	        }(f) : h && "function" == typeof f ? i(Function.call, f) : f, h && ((b[s] || (b[s] = {}))[u] = f));
	      }
	    };a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, t.exports = a;
	  }, function (t, e) {
	    t.exports = function (t) {
	      try {
	        return !!t();
	      } catch (e) {
	        return !0;
	      }
	    };
	  }, function (t, e) {
	    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
	  }, function (t, e, n) {
	    var o = n(5);t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
	      return "String" == o(t) ? t.split("") : Object(t);
	    };
	  }, function (t, e) {
	    var n = Object;t.exports = { create: n.create, getProto: n.getPrototypeOf, isEnum: {}.propertyIsEnumerable, getDesc: n.getOwnPropertyDescriptor, setDesc: n.defineProperty, setDescs: n.defineProperties, getKeys: n.keys, getNames: n.getOwnPropertyNames, getSymbols: n.getOwnPropertySymbols, each: [].forEach };
	  }, function (t, e, n) {
	    var o = n(12),
	        r = n(14),
	        i = n(11);t.exports = n(9)(function () {
	      var t = Object.assign,
	          e = {},
	          n = {},
	          o = Symbol(),
	          r = "abcdefghijklmnopqrst";return e[o] = 7, r.split("").forEach(function (t) {
	        n[t] = t;
	      }), 7 != t({}, e)[o] || Object.keys(t({}, n)).join("") != r;
	    }) ? function (t, e) {
	      for (var n = r(t), s = arguments, a = s.length, u = 1, c = o.getKeys, f = o.getSymbols, l = o.isEnum; a > u;) {
	        for (var p, d = i(s[u++]), h = f ? c(d).concat(f(d)) : c(d), g = h.length, v = 0; g > v;) {
	          l.call(d, p = h[v++]) && (n[p] = d[p]);
	        }
	      }return n;
	    } : Object.assign;
	  }, function (t, e, n) {
	    var o = n(7);t.exports = function (t) {
	      return Object(o(t));
	    };
	  }, function (t, e, n) {
	    var o = n(8);o(o.S + o.F, "Object", { assign: n(13) });
	  }, function (t, e, n) {
	    e = t.exports = n(17)(), e.push([t.id, ".vue-loading{top:0;left:0;z-index:1000;padding:0;width:100%;height:100%;border:none;background-color:rgba(230,233,236,.8);opacity:0;-webkit-transition:opacity .4s;transition:opacity .4s}.vue-loading,.vue-loading-msg{position:absolute;margin:0;cursor:wait}.vue-loading-msg{box-sizing:content-box!important;z-index:1001;padding:0 35px;height:40px;top:20%;left:50%;text-align:center;font-size:14px;line-height:40px;background-color:#f4f4f4;border-radius:4px;box-shadow:0 1px 8px rgba(0,0,0,.15);border:1px solid #bbb;-webkit-transform:translateX(-50%);transform:translateX(-50%)}", ""]);
	  }, function (t, e) {
	    t.exports = function () {
	      var t = [];return t.toString = function () {
	        for (var t = [], e = 0; e < this.length; e++) {
	          var n = this[e];n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1]);
	        }return t.join("");
	      }, t.i = function (e, n) {
	        "string" == typeof e && (e = [[null, e, ""]]);for (var o = {}, r = 0; r < this.length; r++) {
	          var i = this[r][0];"number" == typeof i && (o[i] = !0);
	        }for (r = 0; r < e.length; r++) {
	          var s = e[r];"number" == typeof s[0] && o[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s));
	        }
	      }, t;
	    };
	  }, function (t, e, n) {
	    function o(t, e) {
	      for (var n = 0; n < t.length; n++) {
	        var o = t[n],
	            r = d[o.id];if (r) {
	          r.refs++;for (var i = 0; i < r.parts.length; i++) {
	            r.parts[i](o.parts[i]);
	          }for (; i < o.parts.length; i++) {
	            r.parts.push(c(o.parts[i], e));
	          }
	        } else {
	          for (var s = [], i = 0; i < o.parts.length; i++) {
	            s.push(c(o.parts[i], e));
	          }d[o.id] = { id: o.id, refs: 1, parts: s };
	        }
	      }
	    }function r(t) {
	      for (var e = [], n = {}, o = 0; o < t.length; o++) {
	        var r = t[o],
	            i = r[0],
	            s = r[1],
	            a = r[2],
	            u = r[3],
	            c = { css: s, media: a, sourceMap: u };n[i] ? n[i].parts.push(c) : e.push(n[i] = { id: i, parts: [c] });
	      }return e;
	    }function i(t, e) {
	      var n = v(),
	          o = m[m.length - 1];if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), m.push(e);else {
	        if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e);
	      }
	    }function s(t) {
	      t.parentNode.removeChild(t);var e = m.indexOf(t);e >= 0 && m.splice(e, 1);
	    }function a(t) {
	      var e = document.createElement("style");return e.type = "text/css", i(t, e), e;
	    }function u(t) {
	      var e = document.createElement("link");return e.rel = "stylesheet", i(t, e), e;
	    }function c(t, e) {
	      var n, o, r;if (e.singleton) {
	        var i = y++;n = b || (b = a(e)), o = f.bind(null, n, i, !1), r = f.bind(null, n, i, !0);
	      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = u(e), o = p.bind(null, n), r = function r() {
	        s(n), n.href && URL.revokeObjectURL(n.href);
	      }) : (n = a(e), o = l.bind(null, n), r = function r() {
	        s(n);
	      });return o(t), function (e) {
	        if (e) {
	          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;o(t = e);
	        } else r();
	      };
	    }function f(t, e, n, o) {
	      var r = n ? "" : o.css;if (t.styleSheet) t.styleSheet.cssText = x(e, r);else {
	        var i = document.createTextNode(r),
	            s = t.childNodes;s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(i, s[e]) : t.appendChild(i);
	      }
	    }function l(t, e) {
	      var n = e.css,
	          o = e.media;if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;else {
	        for (; t.firstChild;) {
	          t.removeChild(t.firstChild);
	        }t.appendChild(document.createTextNode(n));
	      }
	    }function p(t, e) {
	      var n = e.css,
	          o = e.sourceMap;o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");var r = new Blob([n], { type: "text/css" }),
	          i = t.href;t.href = URL.createObjectURL(r), i && URL.revokeObjectURL(i);
	    }var d = {},
	        h = function h(t) {
	      var e;return function () {
	        return "undefined" == typeof e && (e = t.apply(this, arguments)), e;
	      };
	    },
	        g = h(function () {
	      return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
	      );
	    }),
	        v = h(function () {
	      return document.head || document.getElementsByTagName("head")[0];
	    }),
	        b = null,
	        y = 0,
	        m = [];t.exports = function (t, e) {
	      e = e || {}, "undefined" == typeof e.singleton && (e.singleton = g()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");var n = r(t);return o(n, e), function (t) {
	        for (var i = [], s = 0; s < n.length; s++) {
	          var a = n[s],
	              u = d[a.id];u.refs--, i.push(u);
	        }if (t) {
	          var c = r(t);o(c, e);
	        }for (var s = 0; s < i.length; s++) {
	          var u = i[s];if (0 === u.refs) {
	            for (var f = 0; f < u.parts.length; f++) {
	              u.parts[f]();
	            }delete d[u.id];
	          }
	        }
	      };
	    };var x = function () {
	      var t = [];return function (e, n) {
	        return t[e] = n, t.filter(Boolean).join("\n");
	      };
	    }();
	  }, function (t, e, n) {
	    var o = n(16);"string" == typeof o && (o = [[t.id, o, ""]]);n(18)(o, {});o.locals && (t.exports = o.locals);
	  }]);
	});
	//# sourceMappingURL=vue-loading.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container\">\n  <header>\n    <ul>\n      <li class=\"iconfont\">&#xe745;</li>\n      <li>\n        <span class=\"active\">热点</span>\n        <span>关注</span>\n      </li>\n      <li class=\"iconfont\">&#xe684;</li>\n    </ul>\n  </header>\n  <nav>\n    <ul id=\"swiper-nav\">\n      <li v-for=\"nav in indexNav\" v-on:click=\"switchSwiper($index)\" v-bind:class=\"curIndex == $index ? 'active': ''\">{{nav}}</li>\n    </ul>\n  </nav>\n  <section>\n    <div class=\"swiper-container\" id=\"index-swiper\">\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\">\n          <div v-loading=\"isLoading\"></div>\n          <section id=\"index-scroll\" v-if=\"!isLoading\">\n            <div>\n              <div class=\"head\">\n                  <img v-bind:src=\"imgArrow\"/>\n                  <span>下拉刷新...</span>\n              </div>\n              <ul>\n                <li v-for=\"l in list\" v-link=\"{name: 'detail', params: {id: l.id}}\"><span><i><img v-bind:src=\"l.img\" alt=\"\"></i><b>{{l.title}}</b></span></li>\n              </ul>\n              <div class=\"foot\">\n                <img v-bind:src=\"imgArrow\"/>\n                <span>上拉加载更多...</span>\n              </div>\n            </div>\n          </section>\n        </div>\n        <div class=\"swiper-slide\" id=\"lifescroll\">\n          <section id=\"waterfall\"></section>\n        </div>\n        <div class=\"swiper-slide\">\n          <section id=\"css3waterfall\">\n            <div class=\"cont\">\n              <div class=\"pic\">\n                <div v-for=\"item in beautylist\">\n                  <span>\n                    <img v-bind:src=\"item.img\" />\n                    <i v-html=\"item.title\"></i>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </section>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(18)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/scripts/components/search.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(19)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./search.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(5);
	
	var _vueLoading = __webpack_require__(14);
	
	var _vueLoading2 = _interopRequireDefault(_vueLoading);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div>
	//     search...
	//   </div>
	// </template>
	// <script>
	exports.default = {
	    vuex: {
	        actions: {
	            change: _actions.tabChanger
	        }
	    },
	    data: function data() {
	        return {};
	    },
	    ready: function ready() {
	        var _this = this;
	
	        this.change(1);
	        setTimeout(function () {
	            _this.isLoading = false;
	        }, 1000);
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  search...\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/scripts/components/photo.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(22)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./photo.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(5);
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  ready: function ready() {
	    this.change(2);
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div>
	//     photo...
	//   </div>
	// </template>
	// <script>

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  photo...\n</div>\n";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/scripts/components/my.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(29)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./my.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vueDialog = __webpack_require__(25);
	
	var _vueDialog2 = _interopRequireDefault(_vueDialog);
	
	var _actions = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Vue.use(_vueDialog2.default); // <template>
	//   <div>
	//     <vue-dialog></vue-dialog>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  ready: function ready() {
	    this.change(3);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dialog = __webpack_require__(26);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueDialog = function VueDialog() {};
	
	VueDialog.install = function (Vue, options) {
	  Vue.component('vue-dialog', Vue.extend(_dialog2.default));
	};
	
	exports.default = VueDialog;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/scripts/plugins/dialog.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./dialog.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div>
	//     <div v-if="isShow">
	//       <div class="yo-dialog yo-dialog-a">
	//         <header class="hd">
	//           <h2 class="title">标题</h2>
	//         </header>
	//         <div class="bd">
	//           <p>有title的dialog</p>
	//         </div>
	//         <footer class="ft">
	//           <button class="yo-btn yo-btn-dialog yo-btn-l" @click="hide">取消</button>
	//           <button class="yo-btn yo-btn-dialog yo-btn-l" @click="hide">确定</button>
	//         </footer>
	//       </div>
	//       <div class="yo-mask"></div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      isShow: true
	    };
	  },
	
	  methods: {
	    hide: function hide() {
	      this.isShow = false;
	    }
	  },
	  ready: function ready() {}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div v-if=\"isShow\">\n    <div class=\"yo-dialog yo-dialog-a\">\n      <header class=\"hd\">\n        <h2 class=\"title\">标题</h2>\n      </header>\n      <div class=\"bd\">\n        <p>有title的dialog</p>\n      </div>\n      <footer class=\"ft\">\n        <button class=\"yo-btn yo-btn-dialog yo-btn-l\" @click=\"hide\">取消</button>\n        <button class=\"yo-btn yo-btn-dialog yo-btn-l\" @click=\"hide\">确定</button>\n      </footer>\n    </div>\n    <div class=\"yo-mask\"></div>\n  </div>\n</div>\n";

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <vue-dialog></vue-dialog>\n</div>\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(31)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/scripts/components/detail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(32)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./detail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="m-detail">
	//     <header>
	//       <ul>
	//         <li class="iconfont" v-link="{path: '/index'}">&#xe679;</li>
	//         <li class="title">
	//           {{{detailInfo.title}}}
	//         </li>
	//         <li class="iconfont">&#xe684;</li>
	//       </ul>
	//     </header>
	//     <article id="content" v-scroll="artId">
	//       <div>
	//         {{{detailInfo.content}}}
	//       </div>
	//     </article>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      title: '',
	      detailInfo: {},
	      artId: ''
	    };
	  },
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	
	    this.$http.get('/rest/detail').then(function (res) {
	      res.data.data.forEach(function (_ref) {
	        var id = _ref.id;
	        var title = _ref.title;
	        var content = _ref.content;
	
	        if (id == _this.$route.params.id) {
	          that.detailInfo = { title: title, content: content };
	          Vue.nextTick(function () {
	            that.artId = "#content";
	          });
	          return;
	        }
	      });
	    });
	  },
	
	
	  methods: {}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"m-detail\">\n  <header>\n    <ul>\n      <li class=\"iconfont\" v-link=\"{path: '/index'}\">&#xe679;</li>\n      <li class=\"title\">\n        {{{detailInfo.title}}}\n      </li>\n      <li class=\"iconfont\">&#xe684;</li>\n    </ul>\n  </header>\n  <article id=\"content\" v-scroll=\"artId\">\n    <div>\n      {{{detailInfo.content}}}\n    </div>\n  </article>\n</div>\n";

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var state = {
	  tabIndex: 0
	};
	
	var mutations = {
	  CHANGETAB: function CHANGETAB(state, currentTabindex) {
	    state.tabIndex = currentTabindex;
	  }
	};
	
	exports.default = new Vuex.Store({
	  state: state,
	  mutations: mutations
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map