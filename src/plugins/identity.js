import Vue from 'vue';
import GoTrue from 'gotrue-js';

const auth = new GoTrue({
	APIUrl: 'https://nuxt-identity.netlify.com/.netlify/identity',
	audience: '',
	setCookie: true,
});

Vue.prototype.$identity = auth;
