<template>
  <section>
    <header>
      <app-text tag-name="h2" class="medium">{{ title }}</app-text>
    </header>
    <form class="form-container" @submit.prevent="$emit('submit', { username, password })">
      <div class="alert" v-if="message">
        <p class="alert text">{{ message }}</p>
      </div>
      <div class="form-control">
        <label class="form-label" for="username">Email</label>
        <input class="form-input" type="email" id="username" v-model="username">
      </div>
      <div class="form-control">
        <label class="form-label" for="password">Password</label>
        <input class="form-input" type="password" id="password" v-model="password">
      </div>
      <div class="form-actions">
        <button :disabled="buttonStatus" class="btn" type="submit">{{ buttonText }}</button>
      </div>
    </form>
  </section>
</template>

<script>
import appText from '@/components/app-text.vue';

function data() {
	return {
		password: '',
		username: '',
	};
}

export default {
	name: 'app-sign-form',
	components: {
		appText,
	},
	data,
	props: {
		buttonStatus: {
			type: Boolean,
			default: false,
		},
		buttonText: {
			type: String,
			default: '',
		},
		message: {
			type: String,
		},
		title: {
			type: String,
		},
	},
};
</script>

<style scoped>
.alert.text {
	color: #ff0000;
	text-align: center;
}

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

.form-container {
	padding: var(--smallPadding);
}

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