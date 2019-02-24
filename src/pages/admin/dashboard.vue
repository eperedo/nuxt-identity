<template>
  <section>
    <header>
      <h2>Dashboard</h2>
    </header>
    <section>Hello {{ user.email }}</section>
    <section>
      <form @submit.prevent="submit">
        <div class="form-control">
          <label class="form-label" for="firstname">First Name</label>
          <input class="form-input" type="text" id="firstname" v-model="firstname">
        </div>
        <div class="form-control">
          <label class="form-label" for="lastname">Last Name</label>
          <input class="form-input" type="text" id="lastname" v-model="lastname">
        </div>
        <div class="form-actions">
          <button class="btn" type="submit">Save Profile</button>
        </div>
      </form>
    </section>
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
		user: {
			email: '',
		},
		firstname: '',
		lastname: '',
	};
}

async function created() {
	const user = await this.$identity.currentUser();
	this.user.email = user.email;
	this.firstname = user.user_metadata.firstname;
	this.lastname = user.user_metadata.lastname;
}

async function submit() {
	const user = await auth.currentUser();
	await user.update({
		data: { firstname: this.firstname, lastname: this.lastname },
	});
	this.message = 'User profile updated';
}

export default {
	name: 'pages-admin-dashboard',
	created,
	data,
	layout: 'admin',
	methods: {
		submit,
	},
};
</script>

<style scoped>
</style>