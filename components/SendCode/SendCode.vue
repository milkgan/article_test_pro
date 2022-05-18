<template>
	<view class="send-code-container">
		<view class="code-btn">
			获取验证码
		</view>
	</view>
</template>

<script>
	export default {
		name:"SendCode",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.send-code-container {
		flex-shrink: 0;
		margin-right: 20rpx;
		.code-btn {
			background-color: $base-color;
			color: #ffffff;
			padding: 20rpx;
			border-radius: 10rpx;
			opacity: .8;
		}
	}
</style>