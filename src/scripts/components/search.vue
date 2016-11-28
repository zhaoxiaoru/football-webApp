<template>
  <div>
    search...
  </div>
</template>
<script>
    import { tabChanger } from '../vuex/actions';
    import loading from '../libs/vue-loading';
    export default {
        vuex: {
            actions: {
                change: tabChanger
            }
        },
        data() {
            return {
              
            }
        },
        ready() {
            this.change(1);
            setTimeout(()=>{
              this.isLoading = false;
            }, 1000)
        }
    }
</script>
