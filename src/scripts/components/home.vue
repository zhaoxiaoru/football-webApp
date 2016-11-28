<template>
  <div class="container">
    <header>
      <ul>
        <li class="iconfont">&#xe745;</li>
        <li>
          <span class="active">热点</span>
          <span>关注</span>
        </li>
        <li class="iconfont">&#xe684;</li>
      </ul>
    </header>
    <nav>
      <ul id="swiper-nav">
        <li v-for="nav in indexNav" v-on:click="switchSwiper($index)" v-bind:class="curIndex == $index ? 'active': ''">{{nav}}</li>
      </ul>
    </nav>
    <section>
      <div class="swiper-container" id="index-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div v-loading="isLoading"></div>
            <section id="index-scroll" v-if="!isLoading">
              <div>
                <div class="head">
                    <img v-bind:src="imgArrow"/>
                    <span>下拉刷新...</span>
                </div>
                <ul>
                  <li v-for="l in list" v-link="{name: 'detail', params: {id: l.id}}"><span><i><img v-bind:src="l.img" alt=""></i><b>{{l.title}}</b></span></li>
                </ul>
                <div class="foot">
                  <img v-bind:src="imgArrow"/>
                  <span>上拉加载更多...</span>
                </div>
              </div>
            </section>
          </div>
          <div class="swiper-slide" id="lifescroll">
            <section id="waterfall"></section>
          </div>
          <div class="swiper-slide">
            <section id="css3waterfall">
              <div class="cont">
                <div class="pic">
                  <div v-for="item in beautylist">
                    <span>
                      <img v-bind:src="item.img" />
                      <i v-html="item.title"></i>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    import commonUtil from '../utils/common.util.js';
    import waterfallUtil from '../utils/waterfall.util.js';

    import loading from '../libs/vue-loading';

    let mySwiper = null;

    module.exports = {
        data: function() {
            return {
                list: [],
                beautylist: [],
                imgArrow: './images/arrow.png',
                curIndex: 0,
                indexNav: ['足球现场', '足球生活', '足球小姐'],
                isShowLoading: false,
                isLoading: true
            }
        },

        directives: {
            loading
        },

        ready: function() {
            let that = this;

            // 足球现场：
            this.$http.get('/rest/list')
                .then((res) => {
                    this.list = res.data.data;
                    this.isLoading = false;
                    // DOM 更新后，图片加载完 实例化 IScroll
                    Vue.nextTick(function() {
                        commonUtil.isAllLoaded('#index-scroll', function() {
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

                            myScroll.on('scroll', function() {
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

                            myScroll.on('scrollEnd', function() {
                                if (this.y >= -35 && this.y < 0) {
                                    myScroll.scrollTo(0, -35);
                                    head.removeClass('up');
                                } else if (this.y >= 0) {
                                    head.attr('src', './images/ajax-loader.gif');

                                    // ajax下拉刷新数据
                                    that.$http.get('/rest/listrefresh')
                                        .then((res) => {
                                          that.list = res.data.data.concat(that.list);
                                          myScroll.scrollTo(0, -35);
                                          head.removeClass('up');
                                          head.attr('src', './images/arrow.png');
                                          Vue.nextTick(function() {
                                            myScroll.refresh();
                                          });
                                        })
                                }

                                var self = this;
                                var maxY = this.maxScrollY - this.y;
                                if (maxY > -35 && maxY < 0) {
                                    myScroll.scrollTo(0, self.maxScrollY + 35);
                                    foot.removeClass('down')
                                } else if (maxY >= 0) {
                                    foot.attr('src', './images/ajax-loader.gif');
                                    //ajax上拉加载数据
                                    that.$http.get('/rest/listmore')
                                        .then((res) => {
                                          that.list = that.list.concat(res.data.data);
                                          foot.removeClass('down');
                                          foot.attr('src', './images/arrow.png');
                                          Vue.nextTick(function() {
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
            waterfallUtil(lifeScroll);

            // css3waterfall 数据拉取
            this.$http.get('/rest/listcss3waterfall')
                .then((res) => {
                    this.beautylist = res.data.data;
                    Vue.nextTick(function() {
                        commonUtil.isAllLoaded('#css3waterfall', function() {
                          var myScroll = new IScroll('#css3waterfall');
                        });
                    });
                });

            mySwiper = new Swiper("#index-swiper", {
                onSlideChangeStart: function() {
                    that.curIndex = mySwiper.activeIndex;
                }
            });
        },

        methods: {
            switchSwiper(index) {
                this.curIndex = index;
                mySwiper.slideTo(index);
            }
        }
    }
</script>
