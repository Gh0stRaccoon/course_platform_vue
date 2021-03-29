<template>
  <section class="course-detail_container">
      <div class="no_course" v-if="course === null">
          <h2>No has seleccionado ningún curso</h2>
          <p>Selecciona uno para ver los detalles en esta sección</p>
      </div>
      <div class="course_container" v-else>
          <div class="course_data">
            <img class="course_img" :src="course.attributes.cover" :alt="course.name">
            <h1 class="course_name">{{course.attributes.name}}</h1>
          </div>
          <ul class="learn_list" style="list-style: none" v-for="learn in course.attributes.learning" :key="learn.name">
              <li>
                <h3 class="learn_name">
                    {{learn.name}}
                </h3>
                <progress :value="learn.videos.progress/learn.videos.total"></progress>
                <p class="learn_status">
                    {{learn.status == 'completed'
                        ? 'Completado'
                        : learn.status == 'doing'
                        ? 'En curso': 'No iniciado'
                    }}
                </p>
              </li>
          </ul>
      </div>
  </section>
</template>

<script>
export default {
    name:'courseDetail',
    props:{
        course: Object
    },
}
</script>

<style scoped>
.course-detail_container{
    /* background-color: #eee; */
    display: flex;
    width: 600px;
}

.no_course{
    align-self: center;
    text-align: center;
    width: 100%;
}

.course_img{
    height: 100px;
    margin-right: 32px;
}

.course_container{
    width: 100%;
}

.course_data{
    display: flex;
    text-align: start;
    align-items: center;
    padding: 24px 48px 24px;
    background-image: linear-gradient( rgba(255,255,255, 0.5), rgba(255,255,255, 0.1) ), url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
    background-size: cover;
    /* color: #ddd; */
}

.learn_list{
    padding: 24px 48px;
    display: flex;
    border-bottom: 1px solid #ddd;
}
.learn_list li{
    width: 100%;
}

.learn_name{
    margin-bottom: 8px;
}

.learn_status{
    margin-top: 8px;
    text-align: end;
}

progress{
    height: 24px;
    width: 100%;
}
</style>
