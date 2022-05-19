import ajax from '../../http.js';

export const get_label_list = data => ajax({
	name: 'get_label_list',
	data
})

export const get_article_list = data => ajax({
	name: 'get_article_list',
	data
})

export const update_save_likes = data => ajax({
	name: 'update_save_likes',
	data
})