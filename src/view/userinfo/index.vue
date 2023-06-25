<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-06-25 11:07:30
 * @LastEditTime: 2023-06-25 14:12:47
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
	<div class="my-container">
		<nav-bar>
			<template #rightSlot>
				<div>编辑</div>
			</template>
		</nav-bar>
		<div class="title">编辑个人信息</div>
		<div class="avatar-box">
			<img src="@/assets/imgs/test.png" alt="" class="avatar" />
			<div class="camera">
				<img src="@/assets/imgs/camera.png" alt="" />
			</div>
		</div>
		<div class="cell-box">
			<div class="items">
				<span>用户名</span>
				<input type="text" />
			</div>
            <div class="items">
				<span>邮箱</span>
				<input type="text" />
			</div>
            <div class="items">
				<span>手机号</span>
				<input type="text" />
			</div>
            <div class="items">
				<span>生日</span>
				<input type="text" />
			</div>
            <div class="items">
				<span>所在城市</span>
				<input type="text" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.my-container {
	font-size: 1.4rem;
	padding: 1rem 2rem;
	.title {
		font-size: 2rem;
		color: rgba(64, 64, 64, 1);
		font-weight: 700;
		margin-top: 2.5rem;
	}
	.avatar-box {
		position: relative;
		width: 12rem;
		height: 12rem;
		margin: 2.4rem auto 0;
		// padding: 1rem;

		.avatar {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
		.camera {
			width: 3rem;
			height: 3rem;
			position: absolute;
			z-index: 999;
			right: 0;
			bottom: 0;
			background-color: #44cece;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			img {
				width: 1.6rem;
				height: 1.6rem;
			}
		}
	}
	.cell-box {
		.items {
			height: 5.6rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			span {
				color: #bfbfbf;
			}
			input {
				border: none;
				outline: none;
				text-align: right;
			}
			border-bottom: 0.1rem solid rgba(245, 245, 245, 1);
		}
	}
}
</style>
