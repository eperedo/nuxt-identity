<template>
  <section>
    <header>
      <h1>Administrator (only logged users)</h1>
    </header>
    <section>
      <ul>
        <li>
          <nuxt-link to="/admin/sign-out">Sign Out</nuxt-link>
        </li>
      </ul>
    </section>
    <nuxt-child/>
  </section>
</template>

<script>
export default {
	name: 'layouts-admin',
	middleware: 'identity',
};
</script>

<style scoped>
</style>