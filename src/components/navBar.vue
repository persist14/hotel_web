<template>
	<div class="nav-container">
		<!-- 左侧标签 -->
		<img src="@/assets/imgs/back-arrow.png" alt="" @click="backPage" />
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
import { NavOpts } from "@/models/componentValid";
const $router = useRouter();
const props = defineProps<NavOpts>();

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
	.back {
		img {
			vertical-align: middle;
		}
	}
	.title {
		font-size: 1.8rem;
		font-family: PingFangSC-bold;
	}
	.operate {
		min-width: 1.3rem;
	}
}
</style>
