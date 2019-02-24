<template>
  <section>
    <header>
      <h2>Good Bye! Hope you come back soon! 🖖🏼</h2>
    </header>
  </section>
</template>

<script>
import GoTrue from 'gotrue-js';

const auth = new GoTrue({
	APIUrl: 'https://nuxt-identity.netlify.com/.netlify/identity',
	audience: '',
	setCookie: true,
});

async function created() {
	const user = await this.$identity.currentUser();
	await user.logout();
	this.$router.push('/sign-in');
}

export default {
	name: 'pages-admin-sign-out',
	created,
	layout: 'admin',
};
</script>

<style scoped>
</style>