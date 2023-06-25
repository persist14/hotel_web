<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-06-25 10:04:33
 * @LastEditTime: 2023-06-25 11:05:32
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
	<div class="cover-container">
		<nav-bar>
			<template #rightSlot>
				<div class="like">
					<img src="@/assets/imgs/like2.png" alt="" />
				</div>
			</template>
		</nav-bar>
		<div class="card">
			<div class="title">
				<span class="text">格兰皇家公园酒店</span>
				<span class="price">￥15000</span>
			</div>
			<div class="infos">
				<div class="caps">
					<span>巴塞罗那,西班牙</span>
					<img src="@/assets/imgs/location.png" alt="" />
					<span>距离2km</span>
				</div>
				<div class="night">/每晚</div>
			</div>
			<div class="rate">
				<van-rate
					v-model="hotelRate"
					size="1.5rem"
					color="#13C2C2"
					void-icon="star-o"
					void-color="#13C2C2"
					readonly />
				<span>80 条评论</span>
			</div>
			<button class="prevSub">立即预定</button>
		</div>
		<div class="more" @click="toHotel">
			<span>更多详情</span>
			<img src="@/assets/imgs/more.png" alt="" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
interface PropOpts {
	id: string;
}
const $router = useRouter();
const $route = useRoute();
const hotelRate = ref<number>(3.5);
const toHotel = () => {
	$router.push({
		path: `/hotel/${$route.query.id}`
	});
};
</script>

<style lang="scss" scoped>
.cover-container {
	background: url("@/assets/imgs/hotel-bg.png") no-repeat center/cover;
	padding: 1rem 2rem;
	.like {
		width: 4rem;
		height: 4rem;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		img {
			width: 2rem;
			height: 2rem;
		}
	}
	.card {
		padding: 2rem;
		width: 33.6rem;
		height: 20.4rem;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		bottom: 10.2rem;
		// opacity: 0.72;
		background-color: rgba(0, 0, 0, 0.6);
		border-radius: 2rem;
		z-index: 9999;
		.title {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			color: #fff;
			font-weight: 700;
			.text {
				font-size: 2.2rem;
				max-width: 13.2rem;
			}
			.price {
				font-size: 1.6rem;
			}
		}
		.infos {
			height: 2rem;
			line-height: 2rem;
			margin-top: 0.6rem;
			color: #fff;
			display: flex;
			justify-content: space-between;
			span {
				font-size: 1.4rem;
			}
			img {
				vertical-align: middle;
				width: 1.9rem;
				height: 1.9rem;
				margin-left: 0.9rem;
			}
		}
		.rate {
			margin-top: 0.6rem;
			height: 2rem;
			line-height: 2rem;
			span {
				color: #fff;
				padding-left: 0.8rem;
				font-size: 1.4rem;
			}
		}
		.prevSub {
			@include loginStyle;
			width: 30.4rem;
			height: 4.4rem;
			margin-top: 1.8rem;
			font-size: 1.4rem;
		}
	}
	.more {
		width: 7.2rem;
		height: 2rem;
		line-height: 2rem;
		color: #fff;
		position: absolute;
		bottom: 5.5rem;
		left: 0;
		right: 0;
		margin: auto;
		display: flex;
		align-items: center;
		font-size: 1.4rem;
		span {
			white-space: nowrap;
			padding-right: 0.8rem;
		}
		img {
			width: 1.9rem;
			height: 1.9rem;
		}
	}
}
</style>
