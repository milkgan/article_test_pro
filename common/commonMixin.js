import { mapState, mapMutations } from 'vuex';

export default {
	install(Vue) {
		Vue.mixin({
			methods: {
				// 全局检测存放是否登录函数
				checkIsLogin() {
					return new Promise(resolve => {
						// 如果存在用户信息则继续往下执行，否则跳转到登录页面
						if(this.userInfo) {
							resolve()
						}else {
							uni.navigateTo({
								url: '/pages/userInfo/login/login'
							})
						}
					})
				},
				// 全局存放updateUserInfo函数
				...mapMutations(['updateUserInfo'])
			},
			computed: {
				// 全局存放userInfo
				...mapState(['userInfo'])
			}
		})
	}
}