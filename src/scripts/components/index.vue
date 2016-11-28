<template>
  <div>
    <div id="index-container">
      <router-view :transition="transitionName" transition-mode="out-in"></router-view>
    </div>
    <footer id="footer">
      <ul>
        <li v-for="n in nav" v-on:click="navigatorTo($index)" v-link="{path: n.path}" v-bind:class="tabIndex == $index ? 'active' : ''">
          <i class="iconfont" v-html="n.icon"></i>
          <b v-html="n.title"></b>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
    import { tabChanger } from '../vuex/actions';
    import { getTabindex } from '../vuex/getters';
    export default {
        vuex: {
          actions: {
            change: tabChanger
          },
          getters: {
            tabIndex: getTabindex
          }
        },
        data() {
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
            }
        },

        methods: {
          navigatorTo(index){
            this.change(index);
          }
        }
    }
</script>
