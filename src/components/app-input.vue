<template>
  <div class="form-control">
    <label class="form-label" :for="$attrs.id">{{ label }}</label>
    <input
      class="form-input"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
	name: 'app-input',
	inheritAttrs: false,
	props: {
		label: {
			type: String,
			default: '',
		},
		value: {
			type: String,
			default: '',
		},
	},
};
</script>

<style scoped>
.form-control {
	padding: var(--smallPadding);
}

.form-label {
	font-weight: 800;
}

.form-input {
	border: none;
	box-shadow: 1px 0px 10px 1px;
	margin-top: var(--smallSpacing);
	padding: var(--smallPadding);
	width: 100%;
}
</style>