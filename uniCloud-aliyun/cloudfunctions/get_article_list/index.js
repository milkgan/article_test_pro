'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const {
		classify,
		page = 1,
		pageSize = 10
	} = event;
	
	let matchObj = {};
	
	if(classify !== '全部') {
		matchObj = {classify}
	}
	
	const collection = db.collection('article');
	// 舍弃文章详情
	const list = await collection
		.aggregate()
		.match(matchObj)
		.project({content: 0})
		.skip(pageSize * (page - 1)) //跳过指定文档数
		.limit(pageSize) //限制条数
		.end();
		
	// 获取文章总数
	const amount = await collection.where(matchObj).count()
	console.log(amount)
	
	//返回数据给客户端
	return  {
		code: 0,
		msg: '数据请求成功',
		data: {
			articleList: list.data,
			total: amount.total
		}
	}
};
