<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-05-29 13:55:47
 * @LastEditTime: 2023-06-21 17:14:59
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<script lang="ts" setup>
import { useAppStore } from "./stores/app";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { transPos } from "@/apis/app";

const store = useAppStore();
const { hasTabbar, activeTab, posiInfo } = storeToRefs(store);
const $router = useRouter();
const getClientHg = document.documentElement.clientHeight / 10;
//获取经纬度
navigator.geolocation.getCurrentPosition(
	async (pos) => {
		// 转换经纬度
		const lat = {
			latitude: pos.coords.latitude,
			longitude: pos.coords.longitude
		};
		const { response } = await transPos({
			posiInfo: lat,
			mapKeys: import.meta.env.HT_MAP_KEY
		});
		const coords: any = response.data.locations[0] || {};
		store.$patch({
			posiInfo: {
				latitude: coords?.lat,
				longitude: coords?.lng
			}
		});

		console.log(response.data);
	},
	(err) => {
		console.log(err);
	}
);
const handlerChange = () => {
	$router.push(`/${activeTab.value}`);
};
</script>
<template>
	<div class="root">
		<router-view
			class="pages"
			:style="{ height: getClientHg + 'rem' }"></router-view>
		<van-tabbar
			v-if="hasTabbar"
			v-model="activeTab"
			fixed
			@change="handlerChange">
			<van-tabbar-item icon="search" name="dashboard">发现</van-tabbar-item>
			<van-tabbar-item icon="like-o" name="travel">旅行</van-tabbar-item>
			<van-tabbar-item icon="user-o" name="my">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<style scoped>
.root {
	width: 37.5rem;
	--van-tabbar-item-active-color: #13c2c2;
	--van-tabbar-item-active-background: transparent;
}

.pages {
	height: 100%;
}
</style>
