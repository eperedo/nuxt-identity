<template>
  <app-sign-form
    @submit="submit"
    title="Sign In"
    button-text="Sign In"
    :button-status="disabledButton"
    :message="message"
  ></app-sign-form>
</template>

<script>
import appSignForm from '@/components/app-sign-form.vue';

function data() {
	return {
		status: 'idle',
		message: '',
	};
}

function disabledButton() {
	return this.status === 'loading';
}

async function submit({ username, password }) {
	this.status = 'loading';
	try {
		const response = await this.$identity.login(username, password, true);
		this.$router.push('/admin/dashboard');
	} catch (error) {
		this.message = `${error.json.error_description} 🚫`;
		this.status = 'error';
	}
}

export default {
	name: 'pages-sign-in',
	components: {
		appSignForm,
	},
	computed: {
		disabledButton,
	},
	data,
	methods: {
		submit,
	},
};
</script>
