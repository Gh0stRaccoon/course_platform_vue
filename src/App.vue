<template>
  <div id="app">
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
  color: #42b983;
}

.course_description p, .course_description ul, .course_description pre{
    margin-bottom: 12px;
}

.course_description code{
    font-weight: bolder;
    font-size: 16px;
    color: #ff7236;
}

.course_description h1{
    margin-bottom: 32px;
}

</style>
