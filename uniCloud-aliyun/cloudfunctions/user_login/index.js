'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	// 收集从前端传来的数据
	const { account, password, phone, type } = event;
	
	// 获取匹配数据
	const { affectedDocs, data } = await db.collection('user')
		.aggregate()
		.match(type === 'account' ? { account, password } : { phone })
		.end()
		
	//返回数据给客户端
	if(affectedDocs) {
		return {
			code: 0,
			msg: "获取用户信息成功",
			data: data[0]
		}
	}else {
		return {
			code: 1,
			msg: "获取用户信息失败，" + (type === "account" ? "请检查账号和密码" : "请检查手机号和验证码"),
		}
	}
};
