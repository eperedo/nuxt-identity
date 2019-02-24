<template>
  <section>
    <header>
      <app-text tag-name="h2" class="medium">Recover Account</app-text>
    </header>
    <section>
      <form method="post" @submit.prevent="submit">
        <app-input type="email" id="email" v-model="email" label="Email"/>
        <app-btn :disabled="disabledButton" type="submit" text="Recover Please!"></app-btn>
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
		email: '',
		status: 'idle',
	};
}

function disabledButton() {
	return this.status === 'loading';
}

async function submit() {
	this.status = 'loading';
	try {
		await this.$identity.requestPasswordRecovery(this.email);
		alert('Check your email please');
		this.status = 'finished';
	} catch (error) {
		this.status = 'error';
		alert(error.json.msg);
	}
}

export default {
	name: 'pages-recover-account',
	components: {
		appBtn,
		appInput,
		appText,
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
