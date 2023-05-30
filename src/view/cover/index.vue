<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-05-30 11:00:43
 * @LastEditTime: 2023-05-30 16:06:45
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
	<div class="container">
		<div class="logo">
			<img src="../../assets/imgs/logo.png" />
		</div>
		<div class="h-name">Roome</div>
		<div class="desc">在您旅行中找到最好的优惠酒店</div>
		<button class="start-btn" @click="login" >开始</button>
		<div class="to-login">
			<span class="login-desc">已经有账号了？</span
			><span class="login-text">登录</span>
		</div>
	</div>
</template>

<script setup lang="ts">
    import { Router, useRouter } from 'vue-router'
    const $router: Router = useRouter()
    // 去登录页面
    const login = (): void => {
        $router.push('/intro')
    }
</script>

<style scoped lang="scss">
.container {
	width: 100%;
	height: 100%;
	background: url("../../assets/imgs/cover-bg.png") no-repeat center/cover;
	&::before {
		display: table;
		content: "";
	}
	display: flex;
	flex-direction: column;
	align-items: center;
	.logo {
		width: 10.9rem;
		height: 9.7rem;
		margin: 12.5rem auto 0;
	}
	.h-name {
		font-family: PingFangSC-bol;
		font-size: 3.6rem;
		color: rgba(64, 64, 64, 1);
		font-weight: 700;
	}
	.desc {
		font-size: 1.3rem;
		font-family: PingFangSC-regular;
		color: rgba(64, 64, 64, 1);
	}
	.start-btn {
		width: 33.5rem;
		height: 6rem;
		background-color: #36cfc9;
		border-radius: 6rem;
		outline: none;
		border: none;
		color: #fff;
		font-size: 2rem;
		margin-top: 31.8rem;
	}
	.to-login {
		margin-top: 2rem;
	}
	.login-text,
	.login-desc {
		font-size: 1.3rem;
		color: #fff;
	}
	.login-text {
		color: #36cfc9;
	}
}
</style>
