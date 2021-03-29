<template>
<section v-if="loaded" class="course-container">
    <div v-for="course in courses" :key="course.data">
      <course-card :course="course"/>
    </div>
</section>
<loader class="loader" v-else/>
</template>

<script>
// @ is an alias to /src
import {mapActions,  mapState} from "vuex";
import courseCard from '../components/courseCard.vue';
import Loader from '../components/loader.vue';

export default {
  name: "coursesData",
  data(){
    return{
      courses: [],
    }
  },
  components: {
    Loader,
    courseCard,
  },
  methods: {
    ...mapActions(['getCoursesData'])
  },
  computed: {
    ...mapState(['loaded'])
  },
  async created() {
    this.$data.courses = await this.getCoursesData()
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

.course-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: 550px;
  gap: 48px;
  padding: 0 48px;
}
</style>