<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-05-29 17:28:24
 * @LastEditTime: 2023-05-30 16:12:16
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-05-29 17:28:24
 * @LastEditTime: 2023-05-30 15:46:29
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
	<div class="login-container">
		<div class="banner">
			<img src="../../assets/imgs/login-banner.png" alt="" />
		</div>
		<div class="dot"></div>
		<div class="title">你的旅行计划</div>
		<span class="desc">预订一间我们独一无二的酒店来逃离平凡</span>
		<button class="login" @click="toLogin">登录</button>
		<button class="register" @click="toRegister">注册</button>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const $router = useRouter();
// 登录页面
const toLogin = () => {
	$router.push("/login");
};
// 注册页面
const toRegister = () => {
	$router.push("register");
};
</script>

<style lang="scss" scoped>
.login-container {
	color: rgba(64, 64, 64, 1);
	&::before {
		display: table;
		content: "";
	}
	display: flex;
	flex-direction: column;
	align-items: center;
	.banner {
		width: 33.5rem;
		height: 26rem;
		margin-top: 1rem;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.dot {
		width: 1.2rem;
		height: 1.2rem;
		background-color: #36cfc9;
		margin: 2rem 6rem 0 0;
		border-radius: 50%;
	}
	.title {
		margin: 4rem 0 1.4rem 0;
		font-family: PingFangSC-regular;
		font-size: 2.4rem;
	}
	.desc {
		font-size: 1.3rem;
		color: rgba(217, 217, 217, 1);
	}

	.login {
		@include loginStyle;
		margin-top: 14.3rem;
	}
	.register {
		@include loginStyle;
		margin-top: 1.7rem;
		background-color: rgba(245, 245, 245, 1);
		color: unset;
	}
}
</style>
