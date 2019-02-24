<template>
  <section>
    <header>
      <app-text tag-name="h2" class="medium">Good Bye! Hope you come back soon! 🖖🏼</app-text>
    </header>
  </section>
</template>

<script>
import appText from '@/components/app-text.vue';

async function created() {
	try {
		const user = await this.$identity.currentUser();
		await user.logout();
		setTimeout(() => {
			this.$router.push('/sign-in');
		}, 1000);
	} catch (error) {
		alert('Wow wow, we cannot complete the logout process');
	}
}

export default {
	name: 'pages-admin-sign-out',
	components: {
		appText,
	},
	created,
	layout: 'admin',
};
</script>
