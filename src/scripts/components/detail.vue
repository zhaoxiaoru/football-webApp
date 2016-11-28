<template>
  <div class="m-detail">
    <header>
      <ul>
        <li class="iconfont" v-link="{path: '/index'}">&#xe679;</li>
        <li class="title">
          {{{detailInfo.title}}}
        </li>
        <li class="iconfont">&#xe684;</li>
      </ul>
    </header>
    <article id="content" v-scroll="artId">
      <div>
        {{{detailInfo.content}}}
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        detailInfo: {},
        artId: ''
      }
    },

    ready() {
      var that = this;

      this.$http.get('/rest/detail')
        .then((res) => {
          res.data.data.forEach(({id, title, content}) => {
            if(id == this.$route.params.id) {
              that.detailInfo = {title: title, content: content};
              Vue.nextTick(function(){
                that.artId = "#content";
              });
              return;
            }
          })
        });
    },

    methods: {

    }
  }
</script>
