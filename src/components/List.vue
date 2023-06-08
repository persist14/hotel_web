<!--
 * @Description:
 * @Author:
 * @Date: 2023-06-08 10:40:02
 * @LastEditTime: 2023-06-08 16:56:17
 * @LastEditors: Please set LastEditors
 * @Reference:
-->
<template>
	<div>
		<van-pull-refresh v-model="props.refreshStatus" @refresh="onRefresh">
			<van-list
				v-model:loading="props.loaddingStatus"
				:finished="listOpts.finished"
				finished-text="没有更多了"
				@load="onLoad">
				<van-cell v-for="item in props.list" :key="item.title">
					<div class="benefit-items">
						<div class="benefit-left">
							<img src="@/assets/imgs/test3.png" alt="" />
						</div>
						<div class="benefit-right">
							<div class="right-top">
								<p class="title">香格里拉酒店</p>
								<span class="area">朝阳区, 北京</span>
							</div>
							<div class="right-footer">
								<div class="footer-top">
									<div class="distance">
										<img src="@/assets/imgs/location.png" alt="" />
										距离2km
									</div>
									<div class="price">￥1080</div>
								</div>
								<div class="footer-bot">
									<div class="estimate">
										<van-rate
											v-model="rateVal"
											size="1.6rem"
											color="#13C2C2"
											readonly />
									</div>
									<div class="night">/每晚</div>
								</div>
							</div>
						</div>
					</div>
				</van-cell>
			</van-list>
		</van-pull-refresh>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
interface ListOpts {
	list: ListItemOpts[];
	total: number;
	loaddingStatus: boolean;
  refreshStatus: boolean
}
interface ListItemOpts {
	title: string;
	address: string;
	cap: string;
	price: number;
	img: string;
}
interface ListEmitEVents {
	(e: "loadDatas", page: number, refresh: boolean | undefined): void;
}
const props = defineProps<ListOpts>();
const emits = defineEmits<ListEmitEVents>();
const listOpts = reactive({
	finished: false,
	refreshing: ref<boolean>(false)
});
let page = ref<number>(0);
const rateVal = ref(5);
const onLoad = async (re?:boolean) => {
	page.value = page.value + 1;
	// 让父组件请求数据
	emits("loadDatas", page.value, re);
  // listOpts.refreshing = false
	props.list.length > 30 ? (listOpts.finished = true) : "";
};
const onRefresh = () => {
	// 清空列表数据
	listOpts.finished = false;
	// 重新加载数据
    onLoad(true)
};
</script>

<style scoped lang="scss">
.van-cell {
	background-color: transparent;
	padding: 0;
	&::after {
		border-bottom: none;
	}
}
:deep(.van-cell__value) {
	text-align: left;
	line-height: unset;
}
p {
	color: rgba(64, 64, 64, 1);
	font-size: 16rem;
	font-family: PingFangSC-bold;
}
.benefit-items {
	margin: .8rem auto;
	width: 97%;
	height: 14rem;
	border-radius: 1rem;
	background-color: #fff;
	display: flex;
  box-shadow:0 0rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
	.benefit-left {
		width: 14rem;

		img {
			width: 100%;
			height: 100%;
		}
	}
	.benefit-right {
		padding: 1rem;
		flex: 1;
		.right-top {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			.title {
				font-size: 1.8rem;
				font-family: PingFangSC-bold;
				margin-top: 0.3rem;
			}
			.area {
				margin-top: 0.6rem;
				font-size: 1.4rem;
				color: rgba(191, 191, 191, 1);
			}
		}
		.right-footer {
			margin-top: 1rem;
			font-size: 1.3rem;
			.footer-top,
			.footer-bot {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.price,
			.night {
				font-family: PingFangSC-bold;
				font-size: 1.4rem;
			}
			.footer-top {
				.distance {
					display: flex;
					align-items: center;
					color: rgba(191, 191, 191, 1);
				}

				img {
					width: 2rem;
					height: 2rem;
					vertical-align: middle;
				}
			}
			.footer-bot {
				margin-top: 0.6rem;
			}
		}
	}
}
</style>
