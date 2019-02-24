<template>
  <section>
    <header>
      <app-text tag-name="h2" class="medium">{{ title }}</app-text>
    </header>
    <form class="form-container" @submit.prevent="$emit('submit', { username, password })">
      <div class="alert" v-if="message">
        <p class="alert text">{{ message }}</p>
      </div>
      <app-input type="email" id="username" v-model="username" label="Email"/>
      <app-input type="password" id="password" v-model="password" label="Password"/>
      <app-btn :disabled="buttonStatus" type="submit" :text="buttonText"/>
    </form>
  </section>
</template>

<script>
import appBtn from '@/components/app-btn.vue';
import appInput from '@/components/app-input';
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
		appBtn,
		appInput,
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