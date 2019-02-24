<template>
  <dialog class="app-notification" :open="status">
    <slot>
      <p class="default" :class="type">{{ text }}</p>
    </slot>
  </dialog>
</template>

<script>
export default {
	name: 'app-notification',
	props: {
		status: {
			type: Boolean,
			default: false,
		},
		text: {
			type: String,
		},
		type: {
			default: 'normal',
			type: String,
		},
	},
};
</script>

<style scoped>
.app-notification {
	padding: var(--largePadding);
	width: 100%;
}

.default {
	font-size: 24px;
	text-align: center;
}

.default.normal {
	color: #000;
}

.default.danger {
	color: #ff0000;
}

.default.success {
	color: #1d4e25;
}

.default.warning {
	color: #ff6200;
}
</style>