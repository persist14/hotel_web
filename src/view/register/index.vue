<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-06-02 15:14:26
 * @LastEditTime: 2023-06-25 16:54:13
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
	<div class="register-container">
		<nav-bar></nav-bar>
		<p class="title">注册</p>
		<!-- 用户输入区域 -->
		<div class="card">
			<div class="username">
				<cus-input
					:opts="{ prompt: '昵称', types: 'text' }"
					@get-input-value="getUserVal"></cus-input>
			</div>
			<div class="email">
				<cus-input
					:opts="{ prompt: '邮箱', types: 'text' }"
					@get-input-value="geEmailtVal"></cus-input>
			</div>
			<div class="pwd">
				<cus-input
					:opts="{ prompt: '密码', types: pwdType, suffix: true }"
					@get-input-value="getPwdVal"
					@update-input-type="showPwd"></cus-input>
			</div>
		</div>
		<button class="register-btn" @click="submit">注册</button>
		<!-- 协议 -->
		<van-checkbox v-model="checkedAgree" shape="square" checked-color="#13C2C2"
			>《注册协议》</van-checkbox
		>
		<div class="footer">已有账号？<span @click="$router.back()" >登录</span></div>
		<van-notify v-model:show="registerModal" type="success">
			<van-icon name="bell" style="margin-right: 0.4rem" />
			<span>注册成功</span>
		</van-notify>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import navBar from "@/components/navBar.vue";
import cusInput from "@/components/cusInput.vue";
import { UserOpts } from "@/models/login";
import { useLoginStore } from "@/stores/login";
const loginStore = useLoginStore()
const pwdType = ref<string>("password");
const checkedAgree = ref<boolean>(false);
const registerInfo = reactive<UserOpts>({
	username: "",
	password: "",
	email: ""
});
const registerModal = ref<boolean>(false);
const showPwd = () => {
	pwdType.value = pwdType.value === "password" ? "text" : "password";
};

// 获取用户输入的信息
const getUserVal = (val: string) => {
	registerInfo.username = val;
};
const geEmailtVal = (val: string) => {
	registerInfo.email = val;
};
const getPwdVal = (val: string) => {
	registerInfo.password = val;
};
// 提交注册
const submit = async () => {
	const regist = await loginStore.regis(registerInfo);
	if (regist.success) {
		(registerModal.value = true),
			setTimeout(() => {
				registerModal.value = false;
			}, 2000);
	}
};
</script>

<style lang="scss" scoped>
.register-container {
	padding: 1rem 2rem;
	background-color: #f7f7f7;
	.title {
		font-weight: 700;
		font-size: 2.4rem;
		margin-top: 2.4rem;
	}
	.card {
		margin-top: 9.2rem;
		.username,
		.email,
		.pwd {
			height: 4.9rem;
			margin-bottom: 2rem;
		}
	}
	.register-btn {
		@include loginStyle;
		margin-top: 3.4rem;
		width: 100%;
		height: 6rem;
	}
	:deep(.van-checkbox) {
		width: 12rem;
		margin: 3.2rem auto 0;
		.van-checkbox__label {
			color: rgba(217, 217, 217, 1);
			font-size: 1.4rem;
		}
	}
	.footer {
		font-size: 1.3rem;
		margin-top: 15.4rem;
		text-align: center;
		span {
			color: #36cfc9;
		}
	}
	:deep(.van-notify--success) {
		background-color: #36cfc9;
	}
}
</style>
