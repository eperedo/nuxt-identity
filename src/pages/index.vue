<template>
  <div>Public Home Page
    <section>
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
          <button class="btn" type="submit">Sign Up</button>
        </div>
      </form>
    </section>
  </div>
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

async function created() {
	const { hash } = window.location;
	if (hash) {
		const token = hash.split('=');
		if (token.length === 2) {
			const confirm = await auth.confirm(token[1]);
			this.message = 'Account was confirmed!';
			console.log('Confirm', confirm);
		}
	}
}

async function submit() {
	try {
		const response = await auth.signup(this.username, this.password);
		console.log(response);
		this.$router.push('/sign-in');
	} catch (error) {
		this.message = error.message;
	}
}

export default {
	name: 'pages-home',
	created,
	data,
	methods: {
		submit,
	},
};
</script>

<style scoped>
</style>