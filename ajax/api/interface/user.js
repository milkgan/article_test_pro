import ajax from '../../http.js';

export const user_login = data => ajax({
	name: 'user_login',
	data
})