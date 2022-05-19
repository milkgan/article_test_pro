<template>
	<view class="list-card-container">
		<!-- 基础卡片 -->
		<view class="list-card" v-if="item.mode === 'base'">
			<view class="list-crad-img">
				<!-- 容错 -->
				<image :src="item.cover[0]? item.cover[0] : '/static/img/logo.jpeg'" mode="aspectFill"></image>
			</view>
			<view class="list-card-content">
				<view class="list-crad-content-title">
					<text>{{ item.title }}</text>
					<SaveLikes :item="item"></SaveLikes>
				</view>
				<view class="list-crad-content-desc">
					<view class="article-type">{{ item.classify }}</view>
					<view class="brower-number">{{ item.browse_count }}浏览</view>
				</view>
			</view>
		</view>
		<!-- 多图模式 --> 
		<view class="list-card mode-column" v-if="item.mode === 'column'">
			<view class="list-crad-top">
				<text>{{ item.title }}</text>
				<SaveLikes :item="item"></SaveLikes>
			</view>
			<view class="list-card-middle">
				<!-- 最多显示3张图 -->
				<view class="image-container" v-for="(img_item, index) in item.cover.slice(0,3)" :key="index">
					<image :src="img_item" mode="aspectFill"></image>
				</view>
			</view>
			<view class="list-crad-content-desc list-crad-bottom">
				<view class="article-type">{{ item.classify }}</view>
				<view class="brower-number">{{ item.browse_count }}浏览</view>
			</view>
		</view>
		<!-- 大图模式 -->
		<view class="list-card mode-image" v-if="item.mode === 'image'">
			<view class="list-crad-top">
				
				<image :src="item.cover[0]? item.cover[0] : '/static/img/logo.jpeg'" mode="aspectFill"></image>
				
			</view>
			<view class="list-card-middle">
				<text>{{ item.title }}</text>
				<SaveLikes :item="item"></SaveLikes>
			</view>
			<view class="list-crad-content-desc list-crad-bottom">
				<view class="article-type">{{ item.classify }}</view>
				<view class="brower-number">{{ item.browse_count }}浏览</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"ListCard",
		props: {
			item: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import "./css/ListCar.scss";

</style>