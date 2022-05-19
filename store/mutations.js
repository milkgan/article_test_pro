export default {
	updateUserInfo(state, userInfo) {
		uni.setStorageSync('userInfo', userInfo);
		// (单单uni.setStorageSync是不行的)赋值才更新
		state.userInfo = userInfo;
	}
}