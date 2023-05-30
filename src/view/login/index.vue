<template>
	<div class="container">
		<div class="back">
			<img src="@/assets/imgs/back-arrow.png" alt="" />
		</div>
		<p class="login-text">登录</p>
		<div class="valid-alert">账号或密码错误</div>
		<div class="card" >
			<!-- 用户输入区域 -->
		<div class="input-card">
			<cus-input
				:opts="userInputOpts"
				@get-input-value="getUserCode"></cus-input>
		</div>
		<div class="input-card" >
			<cus-input
				:opts="userPasswordOpts"
				@get-input-value="getPassword" @update-input-type="updateInputType" ></cus-input>
		</div>
		<!-- 忘记密码 -->
		<div class="forget">忘记密码？</div>
		</div>
		<button class="loginBtn" >登录</button>
		<div class="footer" >
			<span>还没有账号？ </span><span class="register" >注册</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import cusInput from "@/components/cusInput.vue";
import { ref, Ref, reactive } from "vue";
import { InputOpts } from '@/models/login'
// 用户名
const userInputOpts = reactive<InputOpts>({
	types: 'text',
	suffix: false, 
	preffix: false
})
// 密码
const userPasswordOpts = reactive<InputOpts>({
	types: 'password', 
	suffix: true, 
	preffix: false
})
// 修改input类型
const updateInputType = () => {
	userPasswordOpts.types = userPasswordOpts.types === 'password' ? 'text' : 'password'
}
const userCode: Ref = ref("");

const getUserCode = (val: string) => {
	userCode.value = val;
};
const getPassword = (val: string) => {
	console.log(val);
	
}
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
	.card {
		width: 30.5rem;
		margin: 0 auto;
	}
	.input-card {
		width: 100%;
		height: 4.9rem;
		margin-bottom: 2rem;
	}
	.forget {
		font-size: 1.3rem;
		text-align: right;
		color: rgba(217, 217, 217, 1);
	}
	.loginBtn {
		@include loginStyle;
		margin-top: 4.1rem;
	}
	.footer {
		text-align: center;
		margin-top: 25.3rem;
		span {
			font-size: 1.3rem;
			color: rgba(64, 64, 64, 1);
			font-family: PingFangSC-regular;
		}
		span.register {
			color: #36CFC9;
		}
	}
}
</style>
