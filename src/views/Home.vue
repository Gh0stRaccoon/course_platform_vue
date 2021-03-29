<template>
    <user-info :usrinfo="user" v-if="loaded"/>
    <loader class="loader" v-else/>
</template>

<script>
// @ is an alias to /src
import {mapMutations, mapState} from "vuex";
import Loader from '../components/loader.vue';
import UserInfo from '../components/UserInfo.vue';

export default {
  name: "Home",
  components: {
    UserInfo,
    Loader,
  },
  methods: {
    ...mapMutations(['getUserData'])
  },
  computed: {
    ...mapState(['user', 'loaded'])
  },
  async created() {
    await this.getUserData()
  },
};
</script>
<style scoped>
.loader{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
</style>