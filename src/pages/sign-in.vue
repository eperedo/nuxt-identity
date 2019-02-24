<template>
  <section>
    <header>
      <h2>Login Page</h2>
    </header>
    <div class="alert">{{ message }}</div>
    <form @submit.prevent="submit">
      <div class="form-control">
        <label class="form-label" for="username">Email</label>
        <input class="form-input" type="email" id="username" v-model="username">
      </div>
      <div class="form-control">
        <label class="form-label" for="password">Password</label>
        <input class="form-input" type="password" id="password" v-model="password">
      </div>
      <div class="form-actions">
        <button class="btn" type="submit">Sign In</button>
      </div>
    </form>
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
		message: '',
		password: '',
		username: '',
	};
}

async function submit() {
	try {
		const response = await auth.login(this.username, this.password);
		window.localStorage.setItem('token', response.token.access_token);
		this.$router.push('/admin/dashboard');
	} catch (error) {
		this.message = error.message;
	}
}

export default {
	name: 'pages-login',
	data,
	methods: {
		submit,
	},
};
</script>

<style scoped>
</style>