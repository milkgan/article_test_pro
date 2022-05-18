<template>
	<view class="tab-container">
		<scroll-view class="tab-scroll" scroll-x="true" :scroll-into-view="currentIndex" :scroll-with-animation="true">
			<view class="tab-scroll-box">
				<view :id="`item${index}`" @click="changeTab(index)" :class="{active: activeIndex === index}" v-for="(item, index) in labelList" :key="item._id"  class="tab-scroll-item">{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons @click="goLabelAdmin" type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name:"TabBar",
		props: {
			labelList: {
				type: Array,
				default: ()=>[]
			},
			activeIndex: {
				type: Number
			}
		},
		data() {
			return {
				currentIndex: 'item0',
			};
		},
		watch: {
			activeIndex(val) {
				this.currentIndex = `item${val}`;
			}
		},
		methods: {
			goLabelAdmin() {
				uni.navigateTo({
					url: '/pages/labelAdmin/labelAdmin'
				})
			},
			changeTab(index) {
				this.$emit('chngeTabIndex', index)
			}
			
		}
			
		
	}
</script>

<style lang="scss" scoped>
	@import "./css/TabBar.scss";

</style>