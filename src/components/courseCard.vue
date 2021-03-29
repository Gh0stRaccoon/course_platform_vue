<template>
  <div class="card-container" @click="pushHistory(course.attributes.slug)">
    <img :src="course.attributes.cover" alt="" class="background">
    <div class="card-header">
      <h1>{{course.attributes.name}}</h1>
      <p>{{course.attributes.difficulty}}</p>
    </div>
    <div class="card-body">
      <div class="description" v-html="course.attributes.description"></div>
    </div>
    <div class="card-footer">
      <button>Detalles</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'courseCard',
  props: {
    course: Object,
  },
  methods:{
    pushHistory(link){
      this.$router.history.push({name: 'course', params: {id: link}})
    }
  }
};
</script>

<style scoped>
.card-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 32px;
  cursor: pointer;
}

.card-header{
  flex:1.5;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card-body{
  flex:2;
  display: flex;
  align-items: center;
}

.card-footer{
  flex:1;
}

.card-container .card-header h1{
  font-size: 32px;
  margin-bottom: 24px;
}

.card-container img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(.5) contrast(1.1);
  position: absolute;
  -webkit-user-drag: none;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 1s ease;
}

.card-container:hover img{
  transform: scale(1.1);
  filter: brightness(.3) contrast(1.1);
}

.card-container .card-header p{
  background-color: #eee;
  color: #333;
  padding: 12px;
  border-radius: 8px;
}

.description{
  text-align: justify;
}

.card-container button{
  padding: 16px 48px;
  border: none;
  margin-top: 32px;
  border-radius: 8px;
  background-color: #ff7a00;
  color: #eee;
  transition: all .3s ease;
  cursor: pointer;
}

.card-container button:hover{
  background-color: hsl(29, 100%, 40%);
}
</style>