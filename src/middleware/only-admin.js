export default async function(context) {
	try {
		const user = await context.app.$identity.currentUser();
		if (
			user &&
			user.app_metadata.roles &&
			user.app_metadata.roles.includes('admin2')
		) {
			return true;
		} else {
			context.app.store.dispatch('notifications/show', {
				message: 'Woops, Sorry only administrators here! 😅',
				type: 'warning',
			});
			return context.redirect(403, '/admin/dashboard');
		}
	} catch (error) {
		context.app.store.dispatch('notifications/show', {
			message: 'It is not you, I am having technical issues 😐',
		});
		return context.redirect(500, '/admin/dashboard');
	}
}
