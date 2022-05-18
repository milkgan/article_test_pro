<template>
	<view>
		搜索
		<!-- <NavBar :isSearch="isSearch" @sendSearchData="_sendSearchData"></NavBar> -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSearch: true
			};
		},
		methods: {
			_sendSearchData(data) {
				console.log(data)
				
			}
		}
	}
</script>

<style lang="scss">

</style>
