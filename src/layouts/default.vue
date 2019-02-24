<template>
  <section>
    <header>
      <h1>Public Layout</h1>
    </header>
    <section>
      <ul>
        <li>
          <nuxt-link to="/">Sign Up</nuxt-link>
          <nuxt-link to="/sign-in">Sign In</nuxt-link>
          <nuxt-link to="/recover-account">Recover Account</nuxt-link>
        </li>
      </ul>
    </section>
    <nuxt-child/>
  </section>
</template>

<script>
export default {
	name: 'layouts-default',
};
</script>

<style scoped>
</style>