<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-05-30 16:23:53
 * @LastEditTime: 2023-05-30 17:30:16
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
	<div class="input-container" >
		<input :type="props.opts.types" @input="getVal($event)" class="input" />
	</div>
</template>

<script setup lang="ts">
interface InputOpts {
	types: string;
	preffix?: boolean;
	suffix?: boolean;
}
interface EmitEvent {
	(e: "getInputValue", val: string): void;
}
const props = defineProps<{
	opts: InputOpts;
}>();

const $emit = defineEmits<EmitEvent>();

// 获取input值
const getVal = (e: any) => {
	$emit("getInputValue", e.currentTarget.value);
};
</script>

<style scoped lang="scss">
.input-container {
    height: 100%;
}
.input {
	width: 100%;
	height: 100%;
	border-radius: 6rem;
	outline: none;
	border: none;
	font-family: Arial;
	color: rgba(64, 64, 64, 1);
	padding-left: 2rem;
	font-size: 1.6rem;
    box-sizing: border-box;
}
</style>
