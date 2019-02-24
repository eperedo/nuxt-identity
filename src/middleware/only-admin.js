export default async function(context) {
	try {
		const user = await context.app.$identity.currentUser();
		if (
			user &&
			user.app_metadata.roles &&
			user.app_metadata.roles.includes('admin')
		) {
			return true;
		} else {
			return context.redirect(403, '/admin/dashboard');
		}
	} catch (error) {
		return context.redirect(500, '/admin/dashboard');
	}
}
