<template>
  <div id="app">
    <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/courses">Cursos disponibles</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button:focus{
  outline: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  overflow-y: scroll;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 30px;
  /* max-height: 100px; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #e48900;
}
/* global styles for description in v-html directive */
.course_description p, .course_description ul, .course_description pre{
    margin-bottom: 12px;
    white-space: pre-wrap;
    text-align: justify;
}

.course_description code{
    font-weight: bolder;
    font-size: 16px;
    color: #ff7236;
}

.course_description h1{
    margin-bottom: 32px;
}


/* dotted background */
.area{
    /* background: #ffffff; */
    background: linear-gradient(to bottom, #ffffff, #f0f0f0);
    width: 100%;
    height:100vh;
    z-index: -1;
    position: absolute;
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 197, 131, 0.9);
    animation: animate 15s linear infinite;
    bottom: -150px;
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0);
        opacity: 1;
        border-radius: 50%;
    }

    100%{
        transform: translateY(-1000px);
        opacity: 0;
        border-radius: 50%;
    }

}
</style>
