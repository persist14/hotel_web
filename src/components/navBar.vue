<template>
	<div class="nav-container">
		<!-- 左侧标签 -->
		<div class="img">
			<img
				src="@/assets/imgs/back-arrow.png"
				alt=""
				@click="backPage"
				v-if="props.showBack" />
		</div>
		<!-- 标题 -->
		<span class="title">{{ props.title }}</span>
		<!-- 右侧内容 -->
		<div class="operate">
			<slot name="rightSlot"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
// import { NavOpts } from "@/models/componentValid";
const $router = useRouter();
const props = defineProps({
	title: {
		type: String,
		require: false
	},
	showBack: {
		type: Boolean,
		default: true
	}
});
const backPage = () => {
	$router.back();
};
</script>

<style scoped lang="scss">
.nav-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: rgba(64, 64, 64, 1);
	.img {
		width: 2.4rem;
		height: 2.4rem;
	}
	.title {
		font-size: 1.8rem;
		font-family: PingFangSC-bold;
		font-weight: bold;
	}
	.operate {
		min-width: 1.3rem;
	}
}
</style>
