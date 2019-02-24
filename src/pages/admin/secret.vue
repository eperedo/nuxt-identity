<template>
  <div>
    <img src="https://placecage.com/gif/400/400" height="400" width="400" alt="pepito">
  </div>
</template>

<script>
export default {
	name: 'pages-admin-secret',
	layout: 'admin',
	middleware: 'only-admin',
};
</script>

<style scoped>
</style>