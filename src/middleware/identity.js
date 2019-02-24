export default async function(context) {
	try {
		const user = await context.app.$identity.currentUser();
		await user.jwt();
		return true;
	} catch (error) {
		context.app.store.dispatch('notifications/show', {
			message: 'Woops, looks like your session expired 😅',
		});
		return context.redirect(401, '/sign-in');
	}
}
