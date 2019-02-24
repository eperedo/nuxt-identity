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
			const action = token[0];
			if (action === '#recovery_token') {
				const response = await this.$identity.recover(token[1]);
				window.localStorage.setItem('token', response.token.access_token);
				this.message = 'Account was recovered!';
				this.$router.push('/admin/change-password');
			} else if (action === '#confirmation_token') {
				const confirm = await this.$identity.confirm(token[1]);
				this.message = 'Account was confirmed!';
			}
		}
	}
}

async function submit() {
	try {
		const response = await this.$identity.signup(this.username, this.password);
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