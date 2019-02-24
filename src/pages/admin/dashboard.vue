<template>
  <section>
    <header>
      <app-text tag-name="h2" class="medium">Hello {{ user.email }}</app-text>
    </header>
    <section>
      <form @submit.prevent="submit">
        <app-input type="text" id="firstname" v-model="firstname" label="First Name"/>
        <app-input type="text" id="lastname" v-model="lastname" label="Last Name"/>
        <app-btn :disabled="disabledButton" type="submit" text="Update Profile"/>
      </form>
    </section>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import appBtn from '@/components/app-btn.vue';
import appInput from '@/components/app-input.vue';
import appText from '@/components/app-text.vue';

function data() {
	return {
		message: '',
		firstname: '',
		lastname: '',
		status: 'idle',
		user: {
			email: '',
		},
	};
}

async function created() {
	const user = await this.$identity.currentUser();
	this.user.email = user.email;
	this.firstname = user.user_metadata.firstname;
	this.lastname = user.user_metadata.lastname;
}

function disabledButton() {
	return this.status === 'loading';
}

async function submit() {
	this.status = 'loading';
	try {
		const user = await this.$identity.currentUser();
		await user.update({
			data: { firstname: this.firstname, lastname: this.lastname },
		});
		this.show({
			message: 'User profile updated 👍🏼',
			type: 'success',
		});
		this.status = 'finished';
	} catch (error) {
		this.status = 'error';
		this.show({
			message:
				'We really tried, but could not finished your process, try again later please. 🚫',
		});
	}
}

export default {
	name: 'pages-admin-dashboard',
	components: {
		appBtn,
		appInput,
		appText,
	},
	computed: {
		disabledButton,
	},
	created,
	data,
	layout: 'admin',
	methods: {
		submit,
		...mapActions({
			show: 'notifications/show',
		}),
	},
};
</script>

<style scoped>
</style>