<template>
	<view class="home-container">
		<!-- 导航栏 -->
		<NavBar></NavBar>
		<!-- 导航下侧边栏 -->
		<TabBar :labelList="labelList" :activeIndex="activeIndex" @chngeTabIndex="changeIndex"></TabBar>
		<!-- 文章列表 -->
		<ArticleList class="list-container" :labelList="labelList" :activeIndex="activeIndex" @changeListIndex="changeIndex"></ArticleList>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelList: [],
				activeIndex: 0
			}
		},
		onLoad() {
			this._initLabelList()
		},
		methods: {
			async _initLabelList() {
				const labelList = await this.$http.get_label_list();
				this.labelList = [{name: "全部"}, ...labelList]
			},
			changeIndex(index) {
				this.activeIndex = index;
			}
		}
	}
</script>

<style lang="scss">
	/* 撑开articlelist */
	page {
		height: 100%;
		display: flex;
	}
	.home-container {
		overflow: hidden;
		flex: 1;
		box-sizing: border-box;
		@include flex(flex-start, column);
		align-items: inherit;
	}
	/* 兼容？？？ */
	.list-container {
		height: 100%;
		flex: 1;
		box-sizing: border-box;
	}

</style>
