<template>
	<div class="container">
		<div class="back">
			<img src="@/assets/imgs/back-arrow.png" alt="" />
		</div>
		<p class="login-text">登录</p>
		<div class="valid-alert">账号或密码错误</div>
		<div class="input-card">
			<cus-input
				:opts="{ types: 'text', suffix: false, preffix: false }"
				@get-input-value="getUserCode"></cus-input>
		</div>
	</div>
</template>

<script setup lang="ts">
import cusInput from "@/components/cusInput.vue";
import { ref, Ref } from "vue";

const userCode: Ref = ref("");

const getUserCode = (val: string) => {
	userCode.value = val;
};
</script>

<style scoped lang="scss">
.container {
	width: 100%;
	height: 100%;
	background-color: #f7f7f7;
	padding: 0 2rem;
	// box-sizing: border-box;
	.back {
		margin: 0.7rem 0 0 0;
	}
	.login-text {
		font-size: 2.4rem;
		font-weight: 700;
		margin-top: 2.4rem;
	}
	.valid-alert {
		color: red;
		font-size: 1.3rem;
		margin: 5.3rem 0rem 1.2rem;
		text-align: center;
	}
	.input-card {
		width: 30.5rem;
		height: 4.9rem;
	}
}
</style>
