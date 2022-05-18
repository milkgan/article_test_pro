<template>
	<view class="login-container">
		<!-- 头部图片 -->
		<view class="banner-bg">
			<image src="../../static/img/login_bg.png" mode="aspectFill"></image>
		</view>
		<!-- 导航 -->
		<view class="login-nav">
			<view class="nav-item" :class="{active:type === 'account'}" @click="changeFormType('account')">账号登录</view>
			<view class="nav-item" :class="{active:type !=='account'}" @click="changeFormType('phone')">手机登录</view>
		</view>
		<!-- 表单 -->
		<uni-forms class="form" :modelValue="formData" ref="form">
			<view v-if="type === 'account'">
				<!-- label相当于账号<input/> -->
				<uni-forms-item label="账号" name="account">
					<input class="form-input" placeholder-class="placeholder" type="text" placeholder="请输入账号" v-model="formData.account">
				</uni-forms-item>
				<uni-forms-item label="密码" name="password">
					<input class="form-input" placeholder-class="placeholder" type="password" placeholder="请输入密码" v-model="formData.password">
				</uni-forms-item>
			</view>
			<view v-else>
				<uni-forms-item label="手机" name="phone">
					<input class="form-input" placeholder-class="placeholder" type="text" placeholder="请输入手机号码" v-model="formData.phone">
				</uni-forms-item>
				<uni-forms-item label="验证码" name="code">
					<input class="form-input" placeholder-class="placeholder" type="text" placeholder="请输入验证码" v-model="formData.code">
				</uni-forms-item>
			</view>
			<button class="login-btn" @click="_userLoginSubmit">立即登录</button>
			
		</uni-forms>
		<!-- 底部信息 -->
		<view class="footer-select-container">
			<text>注册</text>
			<text>忘记密码</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'account',
				formData: {
					account: '',
					password: '',
					phone: '',
					code: ''
				}
			}
		},
		onReady() {
			// 需要在onReady中设置规则
			this.$refs.form.setRules(this.userRules);
		},
		methods: {
			/* 提交表单数据 */
			_userLoginSubmit() {
				// 获取校验信息
				uni.showLoading()
				this.$refs.form.validate().then(res => {
					uni.hideLoading()
					console.log('表单数据信息：', res);
				}).catch(err => {
					uni.hideLoading()
					console.log('表单错误信息：', err);
				})
			},
			/* 切换表单类型 */
			changeFormType(type) {
				this.type=type;
				// 清空校验规则
				this.$refs.form.clearValidate([]);
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	@import "./css/login.scss";
	page {
		background-color: #f5f5f5;
	}

</style>
