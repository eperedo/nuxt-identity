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
import appInput from '@/components/app-input.vue';
import appText from '@/components/app-text.vue';
import appBtn from '@/components/app-btn.vue';

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
		this.message = 'User profile updated';
		this.status = 'finished';
	} catch (error) {
		this.status = 'error';
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
	},
};
</script>

<style scoped>
</style>