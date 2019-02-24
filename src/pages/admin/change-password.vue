<template>
  <section>
    <header>
      <h2>Change Password</h2>
    </header>
    <section>
      <form @submit.prevent="submit">
        <div class="form-control">
          <label class="form-label" for="password">New Password</label>
          <input class="form-input" type="password" id="password" v-model="password">
        </div>
        <div class="form-actions">
          <button class="btn" type="submit">Change Password</button>
        </div>
      </form>
    </section>
  </section>
</template>

<script>
function data() {
	return {
		message: '',
		password: '',
	};
}

async function submit() {
	const user = await this.$identity.currentUser();
	await user.update({ password: this.password });
	this.message = 'Password Updated!';
}

export default {
	name: 'pages-admin-change-password',
	data,
	layout: 'admin',
	methods: {
		submit,
	},
};
</script>

<style scoped>
</style>