<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-05-29 13:55:47
 * @LastEditTime: 2023-05-31 15:41:18
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<script setup lang="ts">
import { useAppStore } from "./stores/app";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const store = useAppStore();
const { hasTabbar, activeTab } = storeToRefs(store);
const $router = useRouter();

const handlerChange = () => {
	$router.push(`/${activeTab.value}`);
};
</script>
<template>
	<div class="root">
		<router-view class="pages"></router-view>
		<van-tabbar
			v-model="activeTab"
			fixed
			v-if="hasTabbar"
			@change="handlerChange">
			<van-tabbar-item name="dashboard" icon="search">发现</van-tabbar-item>
			<van-tabbar-item name="travel" icon="like-o">旅行</van-tabbar-item>
			<van-tabbar-item name="my" icon="user-o">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<style scoped>
.root {
	width: 37.5rem;
	height: 81.2rem;
	--van-tabbar-item-active-color: #13c2c2;
	--van-tabbar-item-active-background: transparent;
}
.pages {
	height: 100%;
}
</style>
