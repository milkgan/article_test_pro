<template>
	<view class="nav-bar">
		<view class="nav-bar-top">
			<!-- 设置距离状态栏高度 -->
			<view :style="{height: statusHeight + 'rpx'}"></view>
			<!-- 搜索框内容 -->
			<view v-if="isSearch" @click="returnArticleList" class="return-icon" :style="{top: statusHeight + 'rpx'}">
				<uni-icons type="back" size="22" color="#fff"></uni-icons>
			</view>
			<view v-if="!isSearch" @click="goSearchPage" class="nav-bar-content" :style="{marginRight: marginRight + 'rpx'}">
				<uni-icons class="nav-bar-search-icon" type="search" color="#999"></uni-icons>
				<view class="nav-bar-search-text">请输入文章标题进行搜索</view>
			</view>
			<view v-else class="nav-bar-content" :style="{marginRight: marginRight + 'rpx'}">
				<uni-icons class="nav-bar-search-icon" type="search" color="#999" @click="sendSearchData"></uni-icons>
				<input class="nav-bar-search-text" v-model="searchData" placeholder="请输入文章标题进行搜索"></input>
			</view>
		</view>
		<!-- 底部垫片(nav-bar-top是fixed) -->
		<view :style="{height: 80 + statusHeight + 'rpx'}"></view>
		
	</view>
</template>

<script>
	export default {
		name:"NavBar",
		props: {
			isSearch: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				statusHeight: 20,
				marginRight: 0,
				searchData: ''
			};
		},
		created() {
			// 获取初始化状态栏的高度
			this.initStatusBarHeight();
		},
		methods: {
			initStatusBarHeight() {
				const systemInfo = uni.getSystemInfoSync();
				this.statusHeight = systemInfo.statusBarHeight ? systemInfo.statusBarHeight * 2 : 20;
				// 微信端需要对胶囊进行处理
				//#ifdef MP-WEIXIN
				const menuBtnInfo = uni.getMenuButtonBoundingClientRect()
				this.marginRight = menuBtnInfo.width * 2;
				this.statusHeight = menuBtnInfo.top *2;
				//#endif
			},
			goSearchPage() {
				if(this.isSearch) return;
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			returnArticleList() {
				uni.navigateBack();
			},
			// 获取搜索关键字
			sendSearchData() {
				this.$emit('sendSearchData', this.searchData)
			}
		}
	}
</script>

<style lang="scss">
@import "./css/NavBar.scss";
</style>
