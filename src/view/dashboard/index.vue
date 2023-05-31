<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-05-31 10:10:12
 * @LastEditTime: 2023-05-31 17:32:04
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
	<div class="index-container">
		<div class="avatar">
			<img src="@/assets/imgs/logo.png" alt="" />
		</div>
		<p class="desc">你下一次想去哪？</p>
		<div class="card">
			<!-- 搜索 -->
			<div class="search">
				<cus-input :opts="searchInput"></cus-input>
			</div>
			<!-- 条件筛选 -->
			<div class="filter">
				<div class="date">
					<p class="title">选择日期</p>
					<p class="showInfo">12 3月 - 22 3月</p>
				</div>
				<div class="split"></div>
				<div class="rooms">
					<p class="title">房间数</p>
					<p class="showInfo">1间 - 2人</p>
				</div>
			</div>
			<!-- 搜搜 -->
			<button class="searchBtn">搜索酒店</button>
		</div>
		<!-- 最近搜索 -->
		<div class="recently-history">
			<p>最近搜索</p>
			<div class="history">
				<div class="items" v-for="item in 10" :key="item">
					<div class="info-top">
						<img src="@/assets/imgs/test.png" alt="" />
					</div>
					<div class="info-footer">
						<span class="title">伦敦London</span>
						<span class="his-desc">1间 - 2人</span>
						<span class="his-desc">12-22 3月</span>
					</div>
				</div>
			</div>
		</div>
		<!-- 旅游圣地 -->
		<div class="travel">
			<p>最受欢迎的旅游圣地</p>
			<div class="welcome-tr">
				<div v-for="item in 10" :key="item" class="welcome-items">
					<img src="@/assets/imgs/test2.png" alt="" />
					<span class="welcome-title">夏威夷Hawaii</span>
				</div>
			</div>
		</div>
		<!-- 最实惠的价格 -->
		<div class="benefit-price">
			<p>最实惠的价格</p>
			<div class="benefit-items" v-for="item in 10" :key="item"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import cusInput from "@/components/cusInput.vue";
import { InputOpts } from "@/models/login";

const searchInput = reactive<InputOpts>({
	types: "text",
	preffix: true,
	prompt: "",
	shadow: "0px 2px 19px 0px rgba(0, 0, 0, 0.13)"
});
</script>

<style scoped lang="scss">
.index-container {
	width: 37.5rem;
	background: url(@/assets/imgs/index-bg.png) no-repeat top/contain;
	background-color: #f7f7f7;
	padding: 1.1rem 1.9rem;
	padding-bottom: 5rem;
	color: rgba(64, 64, 64, 1);
	overflow: auto;
	.avatar {
		height: 4rem;
		display: flex;
		justify-content: right;
		img {
			width: 4rem;
			border-radius: 50%;
			overflow: hidden;
			border: 1px solid #ccc;
		}
	}
	.desc {
		color: #fff;
		font-size: 2.2rem;
		font-family: PingFangSC-regular;
		margin-top: 18.1rem;
	}
	.card {
		width: 33.6rem;
		padding: 1.9rem 1.4rem;
		background-color: #fff;
		border-radius: 3rem;
		margin-top: 2rem;
		.search {
			height: 4.6rem;
		}
		.filter {
			display: flex;
			font-size: 1.3rem;
			margin-top: 2.3rem;
			// justify-content: center;
			margin-left: 2rem;
			.split {
				border-left: 1px solid rgba(233, 233, 233, 1);
				margin: 0 3.9rem;
			}
			.date .title {
				text-align: right;
			}
			.title {
				margin-bottom: 0.5rem;
				color: rgba(191, 191, 191, 1);
			}
			.showInfo {
				font-family: PingFangSC-bold;
			}
		}
		.searchBtn {
			@include loginStyle;
			width: 100%;
			height: 4.6rem;
			margin-top: 2.5rem;
			font-size: 1.3rem;
		}
	}
	.recently-history {
		margin: 2.9rem 0;
		p {
			font: {
				family: recently-history;
				size: 1.6rem;
			}
		}
		.history {
			height: 18.3rem;
			margin-top: 2.1rem;
			overflow: auto hidden;
			// overflow-y: hidden;
			white-space: nowrap;
			overflow: scroll;
			&::-webkit-scrollbar {
				display: none;
			}
			.items {
				width: 13.4rem;
				height: 95%;
				display: inline-block;
				margin-right: 2rem;
				border-radius: 1rem;
				overflow: hidden;
				.info-top {
					width: 100%;
					height: 10.9rem;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.info-footer {
					background-color: #fff;
					height: 7.4rem;
					display: flex;
					flex-direction: column;
					padding: 0.9rem 0 0 0.9rem;
					.title,
					.his-desc {
						font-size: 1.3rem;
						font-family: PingFangSC-regular;
						padding-bottom: 0.3rem;
					}
					.his-desc {
						font-size: 1rem;
						color: rgba(191, 191, 191, 1);
					}
				}
				&:last-child {
					margin-right: 0;
				}
			}
		}
	}
	.travel {
		p {
			margin-top: 3.3rem;
			font-size: 1.6rem;
			font-family: PingFangSC-bold;
		}
		.welcome-tr {
			margin-top: 1.7rem;
			overflow-x: auto;
			white-space: nowrap;
			&::-webkit-scrollbar {
				display: none;
			}
			.welcome-items {
				position: relative;
				width: 20rem;
				height: 12rem;
				display: inline-block;
				margin-right: 1.6rem;
				border-top-right-radius: 1rem;
				border-top-left-radius: 1rem;
				img {
					width: 100%;
					height: 100%;
				}
				.welcome-title {
					position: absolute;
					left: 1.2rem;
					bottom: 1.5rem;
					font-size: 1.3rem;
					color: rgba(255, 255, 255, 1);
				}
			}
		}
	}
	.benefit-price {
		margin-top: 3.3rem;
		p {
			color: rgba(64, 64, 64, 1);
			font-size: 1.6rem;
			font-family: PingFangSC-bold;
		}
		.benefit-items {
			margin-top: 1.7rem;
			width: 100%;
			height: 14rem;
			border-radius: 1rem;
			background-color: red;
		}
	}
}
</style>
