<template>
	<div class="travel-container">
		<header>我的旅行</header>
		<van-tabs
			v-model:active="activeIndex"
			background="rgba(245, 245, 245, 1)"
			title-active-color="#13c2c2"
			title-inactive-color="#919191"
			line-height="0">
			<van-tab title="最近预定" name="prev">
				<div class="items" v-for="item in 10" :key="item">
					<span class="times">12 3月 - 22 3月, 1间 - 2人</span>
					<div class="roomInfo">
						<div class="image">
							<img src="@/assets/imgs/test.png" alt="" />
							<div class="like">
								<img src="@/assets/imgs/like2.png" alt="" />
							</div>
						</div>
						<div class="infos">
							<div class="title">
								<span>吉野家民宿</span>
								<span>￥1080</span>
							</div>
							<div class="content">
								<div class="location">
									<span>巴塞罗那,西班牙</span>
									<span>
										<img src="@/assets/imgs/location.png" alt="" />
										距离2km
									</span>
								</div>
								<div>/每晚</div>
							</div>
							<div class="rate">
								<van-rate
									v-model="listRate"
									size="1.5rem"
									color="#13C2C2"
									void-icon="star-o"
									void-color="#13C2C2"
									readonly />
								<span>80 条评论</span>
							</div>
						</div>
					</div>
				</div>
			</van-tab>
			<van-tab title="已完成" name="complete">内容 2</van-tab>
			<van-tab title="喜欢" name="like">
				<List
					:list="xData.list"
					:total="xData.total"
					detail-url="/hotelcover"
					:loadding-status="xData.loadding"
					@load-datas="getList"></List>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import listImg from "@/assets/imgs/test2.png";
const activeIndex = ref<string>("prev");
const listRate = ref<number>(3.5);
// 列表数据定义
const xData = reactive({
	list: [
		{
			title: "标题",
			address: "陕西省西安市",
			cap: "2",
			price: 1000,
			img: listImg
		}
	],
	total: 20,
	loadding: ref<boolean>(false)
});
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
.travel-container {
	width: 100%;
	// height: 100%;
	padding: 1.4rem 2rem 5rem;
	overflow: scroll;
	header {
		font-size: 2rem;
		font-weight: 700;
	}
	.nav {
		background-color: rgba(245, 245, 245, 1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 4rem;
		font-size: 1.4rem;
	}
	.active-color {
		color: #13c2c2;
	}
	.van-tabs {
		width: 100%;
		// height: 100%;
		margin-top: 2.1rem;

		// overflow: hidden;
		:deep(.van-tabs__wrap) {
			padding: 0;
			border-radius: 2rem;
			height: 4.4rem;
			.van-tabs__nav {
				padding: 0;
			}
		}
		.van-tabs__content {
			height: 100%;
		}
	}
	.items {
		margin-top: 1.8rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		.times {
			padding-bottom: 1.4rem;
		}
		.roomInfo {
			width: 33.6rem;
			height: 27.5rem;
			box-shadow: 0px 7px 10px 0px rgba(0, 0, 0, 0.1);
			border-radius: 1rem;
			.image {
				width: 100%;
				height: 18rem;
				position: relative;
				img {
					width: 100%;
					height: 100%;
				}
				.like {
					width: 4.3rem;
					height: 4.3rem;
					position: absolute;
					top: 1rem;
					right: 1rem;
					background-color: #fff;
					padding: 1rem;
					border-radius: 50%;
				}
			}
			.infos {
				height: 9.5rem;
				padding: 1.5rem 1.7rem 1.5rem;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.title,
				.content {
					font-size: 1.8rem;
					display: flex;
					justify-content: space-between;
					font-weight: 700;
				}
				.content {
					font-size: 1.4rem;
					height: 2rem;
					.location {
						span {
							color: #bfbfbf;
						}
						img {
							width: 1.9rem;
							height: 1.9rem;
							vertical-align: middle;
						}
					}
				}
				.rate {
					span {
						color: #bfbfbf;
						padding-left: 0.8rem;
					}
				}
			}
		}
	}
	:deep(:root:root) {
		--van-tab-font-size: 1.6rem !important;
	}
}
</style>
