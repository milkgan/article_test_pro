<template>
	<!-- <view class="article-list-container">
		45 -->
		<swiper class="swiper-container" @change="changeList" :current="activeIndex">
			<swiper-item v-for="(item, index) in labelList" :key="item._id">
				<view class="swiper-item">
					<ListItem :articleList="articleData[index]" @loadMore="watchLoadMore" :loadData="loadData[index]"></ListItem>
				</view>
			</swiper-item>
		</swiper>
		<!-- 13
	</view> -->
</template>

<script>
	export default {
		name:"ArticleList",
		props: {
			labelList: {
				type: Array,
				default() {
					return []
				}
			},
			activeIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				articleData: {},//对应标签文章列表集合
				loadData: {},//对应标签文章页数、总条数和loading状态收集
				page: 1,
				pageSize: 8
				
			};
		},
		watch: {
			// 确保this.labelList[activeIndex].name
			labelList() {
				this._getArticleList(this.activeIndex);
			}
		},
		methods: {
			/* 不管上动下动，因为已经联动，所以都会触发 */ 
			changeList(e) {
				const {current} = e.detail;
				this.$emit('changeListIndex', current);
				// 对数据进行缓存处理2 
				if(!this.articleData[current] || this.articleData[current].length == 0) {
					this._getArticleList(current);
				}
				
			},
			/* 获取文章数据 */
			async _getArticleList(activeIndex) {
				// 初始化loadData,初始化请求判断当前分类是否含有数据，并记录当前页数
				if(!this.loadData[activeIndex]) {
					this.loadData[activeIndex] = {
						page: 1,
						loading: 'loading',
						total: 0
					}
				}
				
				// 获取文章数据
				const {articleList, total} = await this.$http.get_article_list({
					classify:this.labelList[activeIndex].name,
					page: this.loadData[activeIndex].page,
					pageSize: this.pageSize
				});
				

				// 更新loadData数据
				this.loadData[activeIndex].total = total;
				// 填充数据时变为追加数据
				let oldList = this.articleData[activeIndex] || [];
				oldList.push(...articleList);
				// 对数据进行缓存处理1,以activeIndex作为键名的妙处:articleData="articleData[index]
				this.$set(this.articleData, activeIndex, oldList);
			},
			/* 监听屏幕到底事件 */
			watchLoadMore() {
				// 当没有数据的时候，不再进行数据请求
				if(this.loadData[this.activeIndex].total === this.articleData[this.activeIndex].length) {
					this.loadData[this.activeIndex] = {
						...this.loadData[this.activeIndex],
						loading: 'noMore'
					}
					// 强制更新通知ListItem组件
					this.$forceUpdate();
					return
				}
				// 重新进行数据请求
				this.loadData[this.activeIndex].page++;
				this._getArticleList(this.activeIndex);
			}
		}
		
	}
</script>

<style lang="scss">
	// .article-list-container {
	// 	height: 100%;
	// 	flex: 1;
	// 	box-sizing: border-box;
		// ???
		// padding-bottom: 200rpx;
		.swiper-container {
			height: 100%;
			.swiper-item {
				height: 100%;
				overflow: hidden;
			}
		}
	// }

</style>