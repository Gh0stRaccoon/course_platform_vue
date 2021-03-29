import Vue from 'vue'
import Vuex from 'vuex'
import {getUser, getCourses} from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    loaded: false,
  },
  mutations: {
    // getting data and structuring object to call it in the component
    async getUserData(){
      this.state.loaded = false
      const data = await getUser();
      const coursesData = data.included.filter(element => element.type == 'course')
      const networksData = data.included.filter(element => element.type == 'social_network')
      const profile = data.included.filter(element => element.type == 'profile')
      const userSummary = {
          info: {...profile[0].attributes, email: data.data.attributes.email},
          courses: coursesData,
          social: networksData,
        }
      this.state.user = userSummary;
      this.state.loaded = true;
    },

  },
  actions: {
    async getCoursesData(state, course = ''){
      this.state.loaded = false
      const data = await getCourses(course);
      this.state.loaded = true
      return data
    }
  },
  modules: {
  }
})
