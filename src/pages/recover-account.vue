<template>
  <section>
    <header>
      <h2>Recover Account</h2>
    </header>
    <section>
      <form method="post" @submit.prevent="submit">
        <div class="form-control">
          <label class="form-label" for="email">Email</label>
          <input class="form-input" type="email" id="email" v-model="email">
        </div>
        <div class="form-actions">
          <button class="btn" type="submit">Recover Account</button>
        </div>
      </form>
    </section>
  </section>
</template>

<script>
function data() {
	return {
		email: '',
	};
}

async function submit() {
	const response = await this.$identity.requestPasswordRecovery(this.email);
}

export default {
	name: 'pages-recover-account',
	data,
	methods: {
		submit,
	},
};
</script>

<style scoped>
</style>