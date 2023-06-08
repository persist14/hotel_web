<!--
 * @Description:
 * @Author:
 * @Date: 2023-06-08 16:41:31
 * @LastEditTime: 2023-06-08 17:46:08
 * @LastEditors: Please set LastEditors
 * @Reference:
-->
<template>
	<div class="search-container">
		<nav-bar :show-back="false" title="搜索">
			<template #rightSlot>
				<div style="width: 2.4rem; height: 2.4rem" @click="$router.back()">
					<img src="@/assets/imgs/closed.png" alt="" />
				</div>
			</template>
		</nav-bar>
		<div class="search">
			<cus-input :opts="searchInp" @getInputValue="searchEvent" ></cus-input>
		</div>
		<div class="search-history" v-if="showHistory" >
			<div class="title">
				<span>搜索历史</span>
				<span class="all-del">删除全部</span>
			</div>
			<div class="content">
				<div class="item" v-for="item in 4" :key="item">
					<div class="top">
						<img src="@/assets/imgs/test2.png" alt="" />
					</div>
					<div class="info">
						<p class="title">伦敦London</p>
						<p class="range">1间 - 2人</p>
						<p class="time">12-22 3月</p>
					</div>
				</div>
			</div>
		</div>
    <div v-else >
      <List :list="xData.list" :total="xData.total" :loadding-status="xData.loadding" :refreshStatus="xData.refreshStatus" @loadDatas="getList" ></List>
    </div>
	</div>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import { InputOpts } from "@/models/login";
const searchInp = reactive<InputOpts>({
	shadow: "0rem .2rem 1.9rem 0rem rgba(0, 0, 0, 0.13)",
	prompt: "你想去哪儿？",
	preffix: true,
	types: "text"
});

// 搜索结果
// 列表数据定义
const xData = reactive({
  list: [
    {
      title: "标题",
      address: "陕西省西安市",
      cap: "2",
      price: 1000,
      img: "123"
    }
  ],
  total: 20,
  loadding: ref<boolean>(false),
  refreshStatus: ref<boolean>(false)
});
const searchContext = ref<string>('')
const showHistory = ref<boolean>(true)
// 获取搜索内容
const searchEvent = (val: string) => {
  searchContext.value = val
  searchContext.value.length === 0 ? showHistory.value = true : showHistory.value = false
}
// 列表触底获取数据
const getList = (page: number, refresh: boolean) => {
  xData.loadding = true;
  // 下拉刷新设置
  if(refresh) xData.refreshStatus = refresh
  setTimeout(() => {
    xData.list.push({
      title: "测试",
      address: "科技路",
      cap: "3",
      price: 2000,
      img: "xxx"
    });
    xData.loadding = false;
    xData.refreshStatus ? xData.refreshStatus = false : ''
  }, 1000);
}
</script>

<style scoped lang="scss">
.search-container {
	width: 100%;
	// height: 100%;
	padding: 0.4rem 1.9rem;
	.search {
		margin: 2rem 0 3.6rem;
		height: 4.6rem;
	}
	.search-history {
		.title {
			display: flex;
			justify-content: space-between;
			span {
				font-size: 1.3erm;
			}
			.all-del {
				color: rgba(19, 194, 194, 1);
			}
		}
		.content {
			margin-top: 1.1rem;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			&::before {
				display: table;
			}
			.item {
				margin-top: 2.7rem;
				width: 16rem;
				height: 20rem;
				box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
				border-radius: 1rem;
				.top {
					height: 12rem;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.info {
					height: 8rem;
					padding: 1.1rem;
					display: flex;
					flex-direction: column;
					justify-content: space-evenly;
					p {
						font-size: 1.2rem;
						color: rgba(191, 191, 191, 1);
					}
					.title {
						color: rgba(64, 64, 64, 1);
						font-size: 1.6rem;
            font-weight: 700;
					}
				}
			}
		}
	}
}
</style>
