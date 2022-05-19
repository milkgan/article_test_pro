'use strict';
const db = uniCloud.database();
const dbcmd = db.command;
exports.main = async (event, context) => {
	// 获取前端传来参数
	const { userId, articleId } = event;
	// 获取用户信息集合
	const userInfo = await db.collection('user').doc(userId).get();
	
	const articleIds = userInfo.data[0].article_likes_ids;
	let returnMsg = '';
	let articleArr = [];
	
	if(articleIds.includes(articleId)) {
		// 如果存在articleId取消收藏
		articleArr = dbcmd.pull(articleId);
		returnMsg = "取消收藏成功";
	}else {
		// 如果不存在articleId添加收藏
		articleArr = dbcmd.addToSet(articleId);
		returnMsg = "添加收藏成功";
	}
	
	// 更新用户信息
	await db.collection('user').doc(userId).update({
		article_likes_ids: articleArr
	});
	
	// 需要重新获取最新用户信息（userInfo无效）
	const updateUserInfo = await db.collection('user').doc(userId).get();
	
	//返回数据给客户端
	return {
		code: 0,
		data: {
			msg: returnMsg,
			newUserInfo: updateUserInfo.data[0]
		}
	}
};
