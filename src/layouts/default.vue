<template>
  <section class="wrapper">
    <header>
      <app-text tag-name="h1" class="medium">Public Page</app-text>
    </header>
    <nav>
      <ul class="list-container">
        <li class="list-item">
          <nuxt-link to="/">Sign Up</nuxt-link>
        </li>
        <li class="list-item">
          <nuxt-link to="/sign-in">Sign In</nuxt-link>
        </li>
        <li class="list-item">
          <nuxt-link to="/recover-account">Recover Account</nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt-child/>
  </section>
</template>

<script>
import appText from '@/components/app-text.vue';

export default {
	name: 'layouts-default',
	components: {
		appText,
	},
};
</script>

<style scoped>
.list-container {
	align-items: center;
	display: flex;
	flex-direction: column;
	list-style-type: none;
	padding: var(--largePadding) 0;
}

.list-item {
	padding: var(--smallPadding) 0;
}

.wrapper {
	padding: var(--largePadding);
}
</style>