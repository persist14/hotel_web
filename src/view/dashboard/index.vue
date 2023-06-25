<!--
 * @Description: 
 * @Author: 
 * @Date: 2023-05-31 10:10:12
 * @LastEditTime: 2023-06-25 17:15:40
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
	<div class="index-container">
		<div class="avatar">
			<img src="@/assets/imgs/logo.png" alt="" />
		</div>
		<p class="desc">你下一次想去哪？</p>
		<div class="card">
			<!-- 搜索 -->
			<div class="search" @click="$router.push('/search')">
				<cus-input :opts="searchInput"></cus-input>
			</div>
			<!-- 条件筛选 -->
			<div class="filter">
				<div class="date">
					<p class="title" @click="showDateRange = true">选择日期</p>
					<div class="showInfo">
						{{ startTime + "-" + endTime }}
					</div>
				</div>
				<div class="split"></div>
				<div class="rooms">
					<p class="title" @click="showRoomModal = true">房间数</p>
					<p class="showInfo">
						{{ rooms.counts }}间 - {{ rooms.adult + rooms.minor }}人
					</p>
				</div>
			</div>
			<!-- 搜搜 -->
			<button class="searchBtn">搜索酒店</button>
		</div>
		<!-- 最近搜索 -->
		<div class="recently-history">
			<p>最近搜索</p>
			<div class="history">
				<div class="items" v-for="item in 10" :key="item">
					<div class="info-top">
						<img src="@/assets/imgs/test.png" alt="" />
					</div>
					<div class="info-footer">
						<span class="title">伦敦London</span>
						<span class="his-desc">1间 - 2人</span>
						<span class="his-desc">12-22 3月</span>
					</div>
				</div>
			</div>
		</div>
		<!-- 旅游圣地 -->
		<div class="travel">
			<p>最受欢迎的旅游圣地</p>
			<div class="welcome-tr">
				<div v-for="item in 10" :key="item" class="welcome-items">
					<img src="@/assets/imgs/test2.png" alt="" />
					<span class="welcome-title">夏威夷Hawaii</span>
				</div>
			</div>
		</div>
		<!-- 最实惠的价格 -->
		<div class="benefit-price">
			<p>最实惠的价格</p>
			<div>
				<cus-list
					:list="xData.list"
					:total="xData.total"
					:loadding-status="xData.loadding"
					@load-datas="getList"></cus-list>
			</div>
		</div>

		<!-- 日期选择器 -->
		<van-calendar
			v-model:show="showDateRange"
			type="range"
			:poppable="true"
			color="#13c2c2"
			lazy-render
			@confirm="onConfirmRange($event)"
			:formatter="coustomCon" />
		<!-- 房间人数弹层 -->
		<van-popup
			v-model:show="showRoomModal"
			round
			:style="{
				padding: '0 2.6rem',
				width: '100%',
				height: '37.6rem'
			}">
			<!-- 房间数 -->
			<div class="popup-card">
				<div class="title">房间数</div>
				<div class="counter">
					<img
						src="@/assets/imgs/dec.png"
						alt=""
						@click="changeRooms('desc', 'counts')" />
					<div>{{ rooms.counts }}</div>
					<img
						src="@/assets/imgs/add.png"
						alt=""
						@click="changeRooms('incr', 'counts')" />
				</div>
			</div>
			<!-- 成年人 -->
			<div class="popup-card">
				<div class="title">成年人</div>
				<div class="counter">
					<img
						src="@/assets/imgs/dec.png"
						alt=""
						@click="changeRooms('desc', 'adult')" />
					<div>{{ rooms.adult }}</div>
					<img
						src="@/assets/imgs/add.png"
						alt=""
						@click="changeRooms('incr', 'adult')" />
				</div>
			</div>
			<!-- 未成年 -->
			<div class="popup-card">
				<div class="title">未成年人</div>
				<div class="counter">
					<img
						src="@/assets/imgs/dec.png"
						alt=""
						@click="changeRooms('desc', 'minor')" />
					<div>{{ rooms.minor }}</div>
					<img
						src="@/assets/imgs/add.png"
						alt=""
						@click="changeRooms('incr', 'minor')" />
				</div>
			</div>
			<!-- 弹框 -->
			<button class="card-footer" @click="confirmRooms">确定</button>
		</van-popup>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import cusInput from "@/components/cusInput.vue";
import M from "moment";
import { InputOpts } from "@/models/login";
import type { CalendarDayItem } from "vant";
import cusList from "@/components/List.vue";

const searchInput = reactive<InputOpts>({
	types: "text",
	preffix: true,
	prompt: "你想去哪儿？",
	shadow: "0rem .2rem 1.9rem 0rem rgba(0, 0, 0, 0.13)",
	isRead: true
});
const rooms = reactive({
	counts: 0,
	adult: 0,
	minor: 0
});
// 显示日期选择器
let showDateRange = ref<boolean>(false);
// 显示房间人数弹框
let showRoomModal = ref<boolean>(false);
// 定义开始结束日期
let startTime = ref<string>(M().format("MM DD[日]"));
let endTime = ref<string>(M().add(7, "days").format("MM DD[日]"));
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
	loadding: ref<boolean>(false)
});
// 获取日期范围
const onConfirmRange = (e: Date[]) => {
	startTime.value = M(e[0]).format("MM DD[日]");
	endTime.value = M(e[1]).format("MM DD[日]");
	showDateRange.value = false;
};
const changeRooms = (
	type: "desc" | "incr",
	key: "counts" | "adult" | "minor"
) => {
	// 最少问0间
	if (type === "desc" && rooms[key] === 0) return;
	type === "incr" ? (rooms[key] += 1) : rooms[key]--;
};
// 自定义范围选择器文案
const coustomCon = (day: CalendarDayItem): CalendarDayItem => {
	if (day.type === "start") {
		day.bottomInfo = "入住";
	} else if (day.type === "end") {
		day.bottomInfo = "离店";
	}
	return day;
};

// 弹框确定按钮
const confirmRooms = () => {
	showRoomModal.value = false;
};
// 获取数据
const getList = (page: number) => {
	console.log(page, "分页");
	xData.loadding = true;
	setTimeout(() => {
		xData.list.push({
			title: "测试",
			address: "科技路",
			cap: "3",
			price: 2000,
			img: "xxx"
		});
		xData.loadding = false;
	}, 3000);
};
</script>

<style scoped lang="scss">
.index-container {
	width: 37.5rem;
	background: url(@/assets/imgs/index-bg.png) no-repeat top/contain;
	background-color: #f7f7f7;
	padding: 1.1rem 1.9rem;
	padding-bottom: 5rem;
	color: rgba(64, 64, 64, 1);
	overflow: auto;
	.avatar {
		height: 4rem;
		display: flex;
		justify-content: right;
		img {
			width: 4rem;
			border-radius: 50%;
			overflow: hidden;
			border: 0.1rem solid #ccc;
		}
	}
	.desc {
		color: #fff;
		font-size: 2.2rem;
		font-family: PingFangSC-regular;
		margin-top: 18.1rem;
	}
	.card {
		width: 33.6rem;
		padding: 1.9rem 1.4rem;
		background-color: #fff;
		border-radius: 3rem;
		margin-top: 2rem;
		.search {
			height: 4.6rem;
		}
		.filter {
			display: flex;
			font-size: 1.3rem;
			margin-top: 2.3rem;
			// justify-content: center;
			margin-left: 2rem;
			.split {
				border-left: 0.1rem solid rgba(233, 233, 233, 1);
				margin: 0 3.9rem;
			}
			.date .title {
				text-align: right;
			}
			.title {
				margin-bottom: 0.5rem;
				color: rgba(191, 191, 191, 1);
			}
			.showInfo {
				font-family: PingFangSC-bold;
			}
		}
		.searchBtn {
			@include loginStyle;
			width: 100%;
			height: 4.6rem;
			margin-top: 2.5rem;
			font-size: 1.3rem;
		}
	}
	.recently-history {
		margin: 2.9rem 0;
		p {
			font: {
				family: recently-history;
				size: 1.6rem;
			}
		}
		.history {
			height: 18.3rem;
			margin-top: 2.1rem;
			overflow: auto hidden;
			// overflow-y: hidden;
			white-space: nowrap;
			overflow: scroll;
			&::-webkit-scrollbar {
				display: none;
			}
			.items {
				width: 13.4rem;
				height: 95%;
				display: inline-block;
				margin-right: 2rem;
				border-radius: 1rem;
				overflow: hidden;
				.info-top {
					width: 100%;
					height: 10.9rem;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.info-footer {
					background-color: #fff;
					height: 7.4rem;
					display: flex;
					flex-direction: column;
					padding: 0.9rem 0 0 0.9rem;
					.title,
					.his-desc {
						font-size: 1.3rem;
						font-family: PingFangSC-regular;
						padding-bottom: 0.3rem;
					}
					.his-desc {
						font-size: 1rem;
						color: rgba(191, 191, 191, 1);
					}
				}
				&:last-child {
					margin-right: 0;
				}
			}
		}
	}
	.travel {
		p {
			margin-top: 3.3rem;
			font-size: 1.6rem;
			font-family: PingFangSC-bold;
		}
		.welcome-tr {
			margin-top: 1.7rem;
			overflow-x: auto;
			white-space: nowrap;
			&::-webkit-scrollbar {
				display: none;
			}
			.welcome-items {
				position: relative;
				width: 20rem;
				height: 12rem;
				display: inline-block;
				margin-right: 1.6rem;
				border-top-right-radius: 1rem;
				border-top-left-radius: 1rem;
				img {
					width: 100%;
					height: 100%;
				}
				.welcome-title {
					position: absolute;
					left: 1.2rem;
					bottom: 1.5rem;
					font-size: 1.3rem;
					color: rgba(255, 255, 255, 1);
				}
			}
		}
	}
	.benefit-price {
		margin-top: 3.3rem;
		p {
			color: rgba(64, 64, 64, 1);
			font-size: 1.6rem;
			font-family: PingFangSC-bold;
		}
		.benefit-items {
			margin-top: 1.7rem;
			width: 100%;
			height: 1.4rem;
			border-radius: 1rem;
			background-color: #fff;
			display: flex;
			.benefit-left {
				width: 1.4rem;

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
					margin-top: 2.5rem;
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
	}

	:deep(.van-calendar__days) {
		.van-calendar__day--middle {
			width: 5.3rem;
			height: 5.3rem;
			background-color: #13c2c2;
			color: #fff !important;
			border: none !important;
		}
		.van-calendar__day--start,
		.van-calendar__day--end {
			width: 5.3rem;
			height: 5.3rem;
			border-radius: 50%;
		}
		.van-calendar__day--start {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
		.van-calendar__day--end {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}
	.popup-card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 1.3rem;
		height: 8.4rem;
		border-bottom: 0.1rem solid rgba(245, 245, 245, 1);
		.title {
		}
		.counter {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 8.2rem;
			height: 2.2rem;
			line-height: 2.2rem;
			img {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 2.3rem;
				height: 2.3rem;
				border-radius: 50%;
				box-sizing: border-box;
				vertical-align: middle;
				// img {
				// 	width: 100%;
				// 	height: 100%;
				// }
			}
			div {
				font-weight: 700;
				font-size: 1.7rem;
			}
		}
	}
	:deep(.card-footer) {
		@include loginStyle;
		margin-top: 3.3rem;
		width: 100%;
		height: 5rem;
	}
}
</style>
