<template>
<section class="course_info_container" v-if="courseData != null">
      <div class="course_header">
          <img class="course_cover" :src="courseData.data.attributes.cover">
          <div class="course_helper">
            <h1 class="course_title">{{courseData.data.attributes.name}}</h1>
            <p class="course_difficulty">{{courseData.data.attributes.difficulty}}</p>
          </div>
      </div>
      <div class="section_helper">
        <div class="course_description" v-html="courseData.data.attributes.description">
        </div>
        <div class="course_program">
            <div class="program_header"><h1>Programa de estudios</h1></div>
            <hr>
            <ul class="program_list" v-for="item in courseData.included" :key="item.attributes.id">
                <li class="program_item">{{item.attributes.name}}</li>
            </ul>
        </div>
      </div>
</section>
<loader class="loader" v-else/>
</template>

<script>
import { getCourses } from '@/api'
import Loader from '../components/loader.vue'
export default {
    name: 'courseView',
    components:{
        Loader
    },
    props:{
        course: String,
    },
    data(){
        return {
            courseData: null,
        }
    },
    async created(){
        this.$data.courseData = await getCourses(this.$route.params.id)
    }
}
</script>

<style scoped>

.loader{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.course_info_container{
    width: 100%;
}

.course_header{
    width: 100%;
    display: flex;
    position: relative;
    padding: 48px;
    color: #EEE;
    min-height: 250px;
}

.course_header img{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    position: absolute;
    z-index: -1;
}

.course_header::after{
    content: '';
    height: 100%;
    width: 100%;
    background-color: #0000009F;
    position: absolute;
    top:0;
    left: 0;
    z-index: -1;
}

.course_helper{
    flex: 1;
    justify-self: center;
    align-self: center;
}

.section_helper{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
}

.course_description{
    padding: 48px;
}

.course_program{
    padding: 48px;
    background: #111;
    color: #ddd;
}

.program_header{
    margin-bottom: 32px;
}

.program_list{
    list-style: none;
}

.program_item{
    padding: 32px 0;
    border-bottom: 1px solid #1c1c1c;
}

</style>