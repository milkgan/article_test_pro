<template>
	<view class="save-likes-container" @click="_changeSaveStatus">
		<uni-icons :type="isLike ? 'heart-filled' : 'heart'" color="#ff6600" size="20"></uni-icons>
	</view>
</template>

<script>
	
	export default {
		name:"SaveLikes",
		props: {
			item: Object
		},
		data() {
			return {
				
			};
		},
		methods: {
			async _changeSaveStatus() {
				const res = await this.checkIsLogin();
				// 获取(收藏、取消收藏)处理后的用户信息集合，并更新到全局
				const { newUserInfo, msg } = await this.$http.update_save_likes({
					userId: this.userInfo._id,
					articleId: this.item._id
				})
				this.updateUserInfo({...this.userInfo, ...newUserInfo})
				// 操作成功提示
				uni.showToast({
					title: msg,
					icon: 'none'
				})
			}
		},
		computed: {
			isLike() {
				return this.userInfo && this.userInfo.article_likes_ids.includes(this.item._id);
			}
		}
	}
</script>

<style lang="scss">

</style>