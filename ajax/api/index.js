/* 批量进行文件导出 */
// . => api目录的相对路径
// true => 是否查询子目录
// /.js/ => 正则匹配需要查询的文件后缀名
const requireApi = require.context('.', true, /.js$/);
// console.log(requireApi.keys());
let module = {};
requireApi.keys().forEach((key, index) => {
	if(key === './index.js') return;
	// console.log(requireApi(key))
	Object.assign(module, requireApi(key))
})

export default module;
