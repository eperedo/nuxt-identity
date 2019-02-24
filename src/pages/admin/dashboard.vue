<template>
  <section>
    <header>
      <h2>Dashboard</h2>
    </header>
    <section>Hello {{ user.email }}</section>
  </section>
</template>

<script>
import GoTrue from 'gotrue-js';

const auth = new GoTrue({
	APIUrl: 'https://nuxt-identity.netlify.com/.netlify/identity',
	audience: '',
	setCookie: true,
});

function data() {
	return {
		user: {
			email: '',
		},
	};
}

async function created() {
	// const verify = await this.$identity.verify(
	// 	'recovery',
	// 	window.localStorage.getItem('token'),
	// 	true,
	// );
	// console.log('verify', verify);
	const user = await this.$identity.currentUser();
	// debugger;
	this.user.email = user.email;
}

export default {
	name: 'pages-admin-dashboard',
	created,
	data,
	layout: 'admin',
};
</script>

<style scoped>
</style>