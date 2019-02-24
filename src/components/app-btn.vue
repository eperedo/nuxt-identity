<template>
  <div class="form-actions">
    <button class="btn" v-bind="$attrs" v-on="$listeners">{{ text }}</button>
  </div>
</template>

<script>
export default {
	name: 'app-btn',
	inheritAttrs: false,
	props: {
		text: {
			required: true,
			type: String,
		},
	},
};
</script>

<style scoped>
.btn {
	background-color: #1d4e25;
	border: none;
	color: #fff;
	font-weight: 900;
	padding: var(--smallPadding);
	width: 100%;
}

.btn[disabled] {
	cursor: not-allowed;
	opacity: 0.6;
}

.form-actions {
	padding: var(--smallPadding);
}
</style>