<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-06-21 09:29:03
 * @LastEditTime: 2023-06-21 15:56:59
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
	<div class="maps-container">
		<div class="nav">
			<nav-bar title="地图">
				<template #rightSlot>
					<img src="@/assets/imgs/like.png" alt="" />
				</template>
			</nav-bar>
		</div>
		<div class="maps" ref="mapContainers"></div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import makerIcon from "@/assets/imgs/marker.png";
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";
const store = useAppStore();
const { posiInfo } = storeToRefs(store);
const mapContainers = ref<HTMLElement | null>(null);
const TMap = window.TMap;
const initMap = () => {
	const center = new TMap.LatLng(
		posiInfo?.value?.latitude,
		posiInfo?.value?.longitude
	);
	//定义map变量，调用 TMap.Map() 构造函数创建地图
	const map = new TMap.Map(mapContainers.value, {
		center: center, //设置地图中心点坐标
		zoom: 17.2, //设置地图缩放级别
		pitch: 43.5, //设置俯仰角
		rotation: 45 //设置地图旋转角度
	});
	// 定义标记物
	const marker = new TMap.MultiMarker({
		id: "marker-laye",
		map: map,
		styles: {
			// 点标记样式
			marker: new TMap.MarkerStyle({
				position: "absolute",
				width: 30, // 样式宽
				height: 30, // 样式高
				// anchor: { x: 16, y: 32 },
				// anchor: { x: 55, y: -130 }, // 描点位置
				src: makerIcon
			}),
			makerScale: new TMap.MarkerStyle({
				position: "absolute",
				width: 50, // 样式宽
				height: 50, // 样式高
				// anchor: { x: 16, y: 32 },
				// anchor: { x: 55, y: -130 }, // 描点位置
				src: makerIcon
			})
		},
		//点标记数据数组
		geometries: [
			{
				styleId: "marker",
				// 标记位置(纬度，经度，高度)
				position: center,
				id: "marker"
			}
		]
	});
	// 初始化几何图形及编辑器
	//  const editor = new TMap.GeometryEditor({
	//     map, // 编辑器绑定的地图对象
	//     overlayList: [{
	//       overlay: marker, // 可编辑图层
	//       id: "marker",
	//       selectedStyleId: "makerScale"  // 被选中的marker会变为高亮样式
	//     }],
	//     actionMode: TMap.tools.constants.EDITOR_ACTION.INTERACT, // 编辑器的工作模式
	//     activeOverlayId: "marker", // 激活图层
	//     selectable: true
	//   });
	marker.on("click", (evt) => {
		console.log(evt);
		map.easeTo({ zoom: 20, rotation: 180, pitch: 60 }, { duration: 2000 });
		// map.setMapStyleId("makerScale");
	});
};
!onMounted(() => {
	initMap();
});
// 页面卸载
// onBeforeUnmount(() => {
//     map
// })
</script>

<style scoped lang="scss">
.maps-container {
	.nav {
		position: absolute;
		left: 0;
		right: 0;
		margin: 1rem 2rem;
	}
	.maps {
		width: 100%;
		height: 100%;
	}
}
</style>
