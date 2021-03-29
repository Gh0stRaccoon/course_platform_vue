<template>
  <div class="userinfo-container">
    <section class="section_user">
      <div class="user container">
        <img class="user_avatar" :src="usrinfo.info.avatar"
        :alt="`user ${usrinfo.info.firstname}`"/>
        <div class="user_personal">
          <h1 class="user_name">{{`${usrinfo.info.firstname} ${usrinfo.info.lastname}`}}</h1>
          <p class="user_email">{{ usrinfo.info.email }}</p>
          <a class="social_network" :class="social.attributes.name"
            v-for="social in usrinfo.social" :key="social.attributes.name" 
            :href="social.attributes.url" target="_blank"/>
            <!-- <div :class="social.attributes.name"></div> -->

        </div>
      </div>
      <div class="course_container container">
        <div @click="getSelected(course)" class="course" :class="selected && selected.attributes.name == course.attributes.name && 'selected'" v-for="course in usrinfo.courses" :key="course.attributes.name">
          <img :src="course.attributes.cover" :alt="`course ${course.attributes.name}`">
          <h3>{{ course.attributes.name }}</h3>
          <button>Detalles</button>
        </div>
      </div>
    </section>
    <courseDetail :course="selected"/>
  </div>
</template>

<script>
import courseDetail from './courseDetail.vue'

export default {
  name: "UserInfo",
  components:{
    courseDetail,
  },
  data(){
    return {
      selected: null,
    }
  },
  props: {
    usrinfo: Object,
  },
  methods:{
    getSelected(course){
      this.$data.selected = course;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.userinfo-container{
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: 32px;
}

.section_user{
  width: 600px;
}

.container{
  padding: 0 40px;
}

.user{
  display: flex;
}

.user_personal{
  margin: auto;
  margin-left: 24px;
}

.user_avatar{
  width: 150px;
  border-radius: 150px;
}

.social_network{
  display: inline-block;
  height: 40px;
  width: 40px;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  margin: 16px 16px 0 0;
  box-shadow: 0 0 4px #bbb;
  transition: all .2s linear;
}

.social_network:hover{
  transform: scale(1.1);
}

.social_network::after{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}

.Twitter{
    background: url("https://upload.wikimedia.org/wikipedia/commons/1/19/Twitter_icon.svg") no-repeat center;
    background-size: 50%;
}

.Github{
    background: url("https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg") no-repeat center;
    background-size: 100%;
}

.course_container{
  margin-top: 32px;
}

.course{
  display: flex;
  flex-basis: 1;
  text-align: left;
  padding: 16px 0;
  border-bottom: 1px solid #ddd;
  align-items: center;
  cursor: pointer;
}

.course:hover{
  background-color: #ffffff9f;
}

.selected{
  background-color: #ffffffBF;
}

.course img{
  max-height: 70px;
  padding-right: 16px;
}

.course h3{
  flex: 1;
}

.course button{
  border: none;
  /* flex: 1; */
  padding: 12px 24px;
  margin-right: 8px;
  background: rgb(224, 125, 58);
  color: white;
  cursor: pointer;
  transition: all 0.2s linear;
}

.course button:hover{
  background: rgb(236, 137, 71);
}

button:focus{
  outline: none;
}

</style>
