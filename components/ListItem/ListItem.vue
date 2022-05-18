<template>
	<view class="list-item-container">
		<scroll-view scroll-y="true" class="list-scroll" @scrolltolower="loadMore">
			<view class="list-scroll-box">
				<ListCard :item="item" v-for="(item, index) in articleList" :key="index"></ListCard>
			</view>
			<!-- 添加uni-load-more插件显示加载中 -->
			<uni-load-more v-if="articleList.length === 0 || articleList.length >= 8" :status="loadData.loading || 'loading'"></uni-load-more>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"ListItem",
		props: {
			articleList: {
				type: Array,
				default() {
					return []
				}
			},
			loadData: {
				type: Object,
				default() {
					return {
						loading: 'loading'
					}
				}
			}
		},
		data() {
			return {
			};
		},
		methods: {
			// 通知屏幕到底
			loadMore() {
				this.$emit('loadMore');
			}
		}
	}
</script>

<style lang="scss">
	.list-item-container {
		height: 100%;
		.list-scroll {
			height: 100%;
			overflow: hidden;
			box-sizing: border-box;
		}
	}

</style>