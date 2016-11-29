<template>
  <div>
    <vue-dialog></vue-dialog>
  </div>
</template>
<script>
  import VueDialog from '../plugins/vue-dialog';
  Vue.use(VueDialog);

  import { tabChanger } from '../vuex/actions';
  export default {
    vuex: {
      actions: {
        change: tabChanger
      }
    },
    ready() {
      this.change(3);
    }
  }
</script>
