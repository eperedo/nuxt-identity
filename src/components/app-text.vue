<template>
  <component :is="tagName" :class="[size, 'center']">
    <slot></slot>
  </component>
</template>

<script>
export default {
	name: 'app-text',
	props: {
		size: {
			default: 'small',
			type: String,
		},
		tagName: {
			required: true,
			type: String,
		},
	},
};
</script>

<style scoped>
.center {
	text-align: center;
}

.small {
	font-size: 16px;
}

.medium {
	font-size: 24px;
}

.large {
	font-size: 32px;
}
</style>