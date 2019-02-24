<template>
  <section>
    <header>
      <app-text tag-name="h2" class="medium">Change Your Password</app-text>
    </header>
    <section>
      <form @submit.prevent="submit">
        <!-- <div class="form-control">
          <label class="form-label" for="password">New Password</label>
          <input class="form-input" type="password" id="password" v-model="password">
        </div>-->
        <app-input type="password" id="password" v-model="password" label="New Password"/>
        <app-btn :disabled="disabledButton" type="submit" text="Change Password"/>
        <!-- <div class="form-actions">
          <button class="btn" type="submit">Change Password</button>
        </div>-->
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
		password: '',
		status: 'idle',
	};
}

function disabledButton() {
	return this.status === 'loading';
}

async function submit() {
	this.status = 'loading';
	try {
		const user = await this.$identity.currentUser();
		await user.update({ password: this.password });
		this.message = 'Password Updated!';
		this.status = 'finished';
	} catch (error) {
		this.message = error.json.msg;
		this.status = 'error';
	}
}

export default {
	name: 'pages-admin-change-password',
	components: {
		appBtn,
		appInput,
		appText,
	},
	computed: {
		disabledButton,
	},
	data,
	layout: 'admin',
	methods: {
		submit,
	},
};
</script>

<style scoped>
</style>