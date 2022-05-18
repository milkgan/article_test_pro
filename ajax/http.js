/* 定义公共的请求方法 */
export default ({name, data={}})=>{
	return new Promise((resolve, reject) => {
		// 开启加载提示
		uni.showLoading();
		uniCloud.callFunction({
			name,
			data,
			success({result}) {
				if(result.code === 0) {
					resolve(result.data);
				}else {
					uni.showToast({
						icon: "none",
						title: result.msg
					})
				}
				
			},
			fail(err) {
				reject(err);
			},
			complete() {
				// 关闭加载提示
				uni.hideLoading();
			}
		});
	})
	
	
	
}