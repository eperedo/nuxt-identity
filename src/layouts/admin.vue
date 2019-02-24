<template>
  <section class="wrapper">
    <app-notification
      :status="status"
      :type="$store.state.notifications.type"
      :text="$store.state.notifications.message"
    />
    <header>
      <app-text tag-name="h1" class="medium">Administrator</app-text>
    </header>
    <section>
      <ul class="list-container">
        <li class="list-item">
          <nuxt-link to="/admin/dashboard">Dashboard</nuxt-link>
        </li>
        <li class="list-item">
          <nuxt-link to="/admin/change-password">Change Password</nuxt-link>
        </li>
        <li class="list-item">
          <nuxt-link to="/admin/sign-out">Sign Out</nuxt-link>
        </li>
      </ul>
    </section>
    <nuxt-child/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import appNotification from '@/components/app-notification.vue';
import appText from '@/components/app-text.vue';

export default {
	name: 'layouts-admin',
	components: {
		appNotification,
		appText,
	},
	computed: {
		...mapGetters({
			status: 'notifications/status',
		}),
	},
	middleware: 'identity',
};
</script>

<style scoped>
.list-container {
	align-items: center;
	display: flex;
	flex-direction: column;
	list-style-type: none;
	padding: var(--largePadding) 0;
}

.list-item {
	padding: var(--smallPadding) 0;
}

.wrapper {
	padding: var(--largePadding);
}
</style>