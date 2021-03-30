import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import router from "../../src/router";
import App from "../../src/App.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("Router Test", () => {
	it("viendo las rutas", () => {
		const wrapper = shallowMount(App, {
			localVue,
			router,
		});

		expect(wrapper.vm.$router.path).toBe(router.path);
	});
});

