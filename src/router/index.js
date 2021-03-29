import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import error from "../views/error.vue"

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/courses",
		name: "courses",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/coursesData.vue"),
	},
	{
		path: "/courses/:id",
		name: "course",
		component: () =>
			import(/* webpackChunkName: "course" */ "../views/courseView.vue"),
	},
	{
		path: "*",
		name: 'error',
		component: error,
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
