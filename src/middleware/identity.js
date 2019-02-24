export default function(mid) {
	const token = window.localStorage.getItem('token');
	if (token) {
		return true;
	}
	mid.redirect('/sign-in');
}
