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
import { mapActions } from 'vuex';
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
		this.status = 'error';
		this.show({ message: `${error.json.error_description} 🚫` });
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
		...mapActions({
			show: 'notifications/show',
		}),
	},
};
</script>
