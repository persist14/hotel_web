<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-05-31 08:41:08
 * @LastEditTime: 2023-06-25 15:02:48
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
	<div class="container">
		<div class="back">
			<nav-bar> </nav-bar>
		</div>
		<p class="login-text">登录</p>
		<div class="valid-alert" v-if="errMsg">账号或密码错误</div>
		<div class="valid-alert" v-else></div>
		<div class="card">
			<!-- 用户输入区域 -->
			<div class="input-card">
				<cus-input
					:opts="userInputOpts"
					@get-input-value="getUserCode"></cus-input>
			</div>
			<div class="input-card">
				<cus-input
					:opts="userPasswordOpts"
					@get-input-value="getPassword"
					@update-input-type="updateInputType"></cus-input>
			</div>
			<!-- 忘记密码 -->
			<div class="forget">忘记密码？</div>
		</div>
		<button class="loginBtn" @click="submit">登录</button>
		<div class="footer">
			<span>还没有账号？ </span
			><span class="register" @click="toRegister">注册</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import cusInput from "@/components/cusInput.vue";
import navBar from "@/components/navBar.vue";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { InputOpts, UserOpts } from "@/models/login";
import { useLoginStore }  from '@/stores/login'
const $router = useRouter();
const loginStore = useLoginStore()
// 用户名
const userInputOpts = reactive<InputOpts>({
	types: "text",
	suffix: false,
	preffix: false,
	prompt: "请输入账号"
});
// 密码
const userPasswordOpts = reactive<InputOpts>({
	types: "password",
	suffix: true,
	preffix: false,
	prompt: "请输入密码"
});
const errMsg = ref<boolean>(false);
// 修改input类型
const updateInputType = () => {
	userPasswordOpts.types =
		userPasswordOpts.types === "password" ? "text" : "password";
};
// 注册页面
const toRegister = () => {
	$router.push("/register");
};
const loginInfo = reactive<UserOpts>({
	username: "",
	password: ""
});

const getUserCode = (val: string) => {
	loginInfo.username = val;
};
const getPassword = (val: string) => {
	loginInfo.password = val;
};

// 登录按钮
const submit = async () => {
	const res = await loginStore.login(loginInfo);
    console.log(res);
    if(res.code === 200 && res.success) {
        $router.push('/dashboard')
    }
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
			color: #36cfc9;
		}
	}
}
</style>
