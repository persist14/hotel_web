<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-05-30 16:23:53
 * @LastEditTime: 2023-05-31 16:49:48
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
	<div class="input-container">
		<input
			:type="props.opts.types"
			@input="getVal($event)"
			class="input"
			:placeholder="props.opts.prompt"
			:style="{
				paddingLeft: props.opts.preffix ? '5rem' : '2rem',
				boxShadow: (props.opts.shadow && props.opts.shadow) || 'unset'
			}" />
		<img
			src="@/assets/imgs/eyes.png"
			alt=""
			class="suffix"
			v-if="props.opts.suffix"
			@click="reviewPwd" />
		<img
			src="@/assets/imgs/search.png"
			alt=""
			class="preffix"
			v-if="props.opts.preffix" />
	</div>
</template>

<script setup lang="ts">
import { EmitEvent } from "@/models/componentValid";
import { PropOpts } from "@/models/login";

const props = defineProps<PropOpts>();

const $emit = defineEmits<EmitEvent>();

// 获取input值
const getVal = (e: any) => {
	$emit("getInputValue", e.currentTarget.value);
};

// 修改input类型
const reviewPwd = () => {
	$emit("updateInputType");
};
</script>

<style scoped lang="scss">
.input-container {
	height: 100%;
	position: relative;
}
.input {
	width: 100%;
	height: 100%;
	border-radius: 6rem;
	outline: none;
	border: none;
	font-family: Arial;
	color: rgba(64, 64, 64, 1);
	font-size: 1.6rem;
	box-sizing: border-box;
	&::placeholder {
		font-size: 1.3rem;
		color: #ccc;
	}
}
.preffix {
	width: 2.4rem;
	height: 2.4rem;
	position: absolute;
	left: 1.8rem;
	top: 1.6rem;
}
.suffix {
	position: absolute;
	right: 1rem;
	top: 2rem;
}
</style>
