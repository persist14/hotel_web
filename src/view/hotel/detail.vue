<template>
	<div class="detail-container">
		<div class="top">
			<nav-bar>
				<template #rightSlot>
					<div class="nav-icon">
						<img alt="" src="@/assets/imgs/like2.png" />
					</div>
				</template>
			</nav-bar>
		</div>
		<!--  酒店信息  -->
		<main class="main">
			<div class="hotel-info">
				<div class="left">
					<p class="title">Grand Royal Park Hotel</p>
					<p class="footer">
						<span class="address">巴塞罗那,西班牙</span>
						<img alt="" class="location" src="@/assets/imgs/location.png" />
						<span class="cap">距离2km</span>
					</p>
				</div>
				<div class="right">
					<p class="price">￥1080</p>
					<p class="night">/每晚</p>
				</div>
			</div>
			<!--   酒店介绍   -->
			<div class="hotel-intro">
				<div class="title">介绍</div>
				<div class="intro-cont">
					<span v-if="!showMore">
						{{ intro.length > 20 ? intro.slice(0, 20) + "..." : intro }}
						<span style="color: #44cece" @click="changeMore">查看更多</span>
					</span>
					<span v-else>
						{{ intro }}
						<span style="color: #44cece" @click="changeMore">收起</span>
					</span>
				</div>
			</div>
			<!-- 酒店评分 -->
			<div class="hotel-rate">
				<div class="card-title">
					<div class="rate">9.2</div>
					<div class="rate-star">
						<p class="rate-title">综合评分</p>
						<van-rate
							v-model="rateVal"
							color="#13C2C2"
							readonly
							size="1rem"
							void-color="#13C2C2"
							void-icon="star-o" />
					</div>
				</div>
				<div class="card-cont">
					<div class="room-rate">
						<p class="room">
							<span class="text"> 房间 </span>
							<van-slider
								v-model="slider.room"
								active-color="#13C2C2"
								bar-height="0.8rem"
								button-size="0"
								inactive-color="transparent" />
						</p>
						<p class="room">
							<span class="text"> 服务 </span>
							<van-slider
								v-model="slider.service"
								active-color="#13C2C2"
								bar-height="0.8rem"
								button-size="0"
								inactive-color="transparent" />
						</p>
						<p class="room">
							<span class="text"> 位置 </span>
							<van-slider
								v-model="slider.pos"
								active-color="#13C2C2"
								bar-height="0.8rem"
								button-size="0"
								inactive-color="transparent" />
						</p>
						<p class="room">
							<span class="text"> 价格 </span>
							<van-slider
								v-model="slider.price"
								active-color="#13C2C2"
								bar-height="0.8rem"
								button-size="0"
								inactive-color="transparent" />
						</p>
					</div>
				</div>
			</div>
			<!-- 酒店图片 -->
			<div class="hotel-pic">
				<div class="title">照片</div>
				<div class="pics">
					<img
						v-for="item in 10"
						:key="item"
						alt=""
						src="@/assets/imgs/test-hotel.png" />
				</div>
			</div>
			<!--  评论  -->
			<div class="cmt">
				<div class="title">
					<div class="text">评论（25）</div>
					<div class="view-cmts" @click="$router.push('/comment')">
						查看全部
					</div>
				</div>
				<div v-for="item in 3" :key="item" class="items">
					<div class="cont-top">
						<div class="users">
							<div class="avatar">
								<img alt="" src="@/assets/imgs/test2.png" />
							</div>
							<div class="infos">
								<span class="title">Daniel Hua</span>
								<span class="time">刚才</span>
							</div>
						</div>
						<div class="rates">
							<span>8.0</span>
							<div>
								<van-rate
									v-model="rateVal"
									color="#13C2C2"
									readonly
									size="1rem"
									void-color="#13C2C2"
									void-icon="star-o" />
							</div>
						</div>
					</div>
					<div class="cmt-cont">
						这是一个非常棒的地点，靠近商店和酒吧，非常安静的位置。
					</div>
				</div>
			</div>
			<!--  地图  -->
			<div class="map-box" @click="mapPage">
				<div ref="mapContainer" class="map"></div>
			</div>
			<!--  预定  -->
			<button class="reserve">预定</button>
		</main>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";
import makerIcon from "@/assets/imgs/marker.png";
import { useRouter } from "vue-router";
interface SliderOpts {
	room: number;
	service: number;
	pos: number;
	price: number;
}
const store = useAppStore();
const { posiInfo } = storeToRefs(store);
const showMore = ref<boolean>(false);
const intro = ref<string>(
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolorum ipsam maiores nam qui sed, tenetur ut! Accusantium ducimus, eum expedita explicabo nostrum perferendis provident quas qui recusandae sint vitae."
);
const rateVal = ref<number>(2);
const $router = useRouter();
const TMap = window.TMap;
const slider = reactive<SliderOpts>({
	room: 50,
	service: 30,
	pos: 60,
	price: 20
});
const mapContainer = ref<HTMLInputElement | null>(null);

const changeMore = () => {
	showMore.value = !showMore.value;
};

const initMap = async () => {
	//定义地图中心点坐标
	let coord = new TMap.LatLng(
		posiInfo?.value?.latitude,
		posiInfo?.value?.longitude
	);
	//定义map变量，调用 TMap.Map() 构造函数创建地图
	const map = new TMap.Map(mapContainer.value, {
		center: coord, //设置地图中心点坐标
		zoom: 16, //设置地图缩放级别
		viewMode: "3D",
		draggable: false, // 拖拽
		scrollable: false, // 缩放
		offset: { x: 55, y: -130 }
	});
	// 添加点击事件
	map._events.click = () => {
		$router.push("/maps");
	};

	// 定义标记物
	new TMap.MultiMarker({
		id: "marker-laye",
		map: map,
		styles: {
			// 点标记样式
			marker: new TMap.MarkerStyle({
				position: "absolute",
				width: 30, // 样式宽
				height: 30, // 样式高
				// anchor: { x: 16, y: 32 },
				anchor: { x: 55, y: -130 }, // 描点位置
				src: makerIcon
			})
		},
		//点标记数据数组
		geometries: [
			{
				styleId: "marker",
				// 标记位置(纬度，经度，高度)
				position: coord,
				id: "marker"
			}
		]
	});
};
!onMounted(async () => {
	//   加载地图JavaScriptApi
	initMap();
});
</script>

<style lang="scss" scoped>
.detail-container {
	.top {
		padding: 1rem 2rem 0;
		width: 100%;
		height: 13.2rem;
		background: url("@/assets/imgs/detail-bg.png") no-repeat;
		background-size: 60rem 57rem;

		.nav-icon {
			width: 4rem;
			height: 4rem;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #fff;
			border-radius: 50%;

			img {
				width: 2rem;
				height: 2rem;
			}
		}
	}

	.main {
		padding: 2.3rem 2rem 0;
	}

	.hotel-info {
		display: flex;
		justify-content: space-between;

		.left {
			.title {
				width: 14rem;
				font-size: 2.2rem;
				font-family: PingFangSC-bold;
				font-weight: 700;
			}

			.footer {
				margin-top: 1rem;
				color: rgba(191, 191, 191, 1);

				.location {
					width: 1.9rem;
					height: 1.9rem;
					vertical-align: middle;
					margin-left: 0.9rem;
				}
			}
		}

		.right {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;

			.price {
				font-size: 1.6rem;
				color: rgba(64, 64, 64, 1);
				font-weight: 700;
			}

			.night {
				color: rgba(191, 191, 191, 1);
				text-align: right;
			}
		}

		padding-bottom: 1.5rem;
		border-bottom: 1px solid rgba(245, 245, 245, 1);
	}

	.hotel-intro {
		margin-top: 1.2rem;

		.title {
			font-size: 1.4rem;
			color: rgba(191, 191, 191, 1);
		}

		.intro-cont {
			font-size: 1.4rem;
			margin-top: 1.2rem;
		}
	}

	.hotel-rate {
		margin-top: 2.3rem;
		height: 19.2rem;
		box-shadow: 0rem 0.4rem 1rem 0rem rgba(0, 0, 0, 0.06);
		border-radius: 2rem;
		padding: 1rem 1.9rem 0;

		.card-title {
			display: flex;
			align-items: flex-end;
		}

		.rate {
			height: 3.6rem;
			font-size: 3.6rem;
			color: rgba(19, 194, 194, 1);
			font-weight: 700;
			margin-right: 0.9rem;
		}

		.rate-star {
			height: 100%;
		}

		.room-rate {
			.room {
				display: flex;
				align-items: center;
				margin-top: 0.8rem;

				.text {
					font-size: 1.4rem;
					width: 5rem;
					padding-right: 0.9rem;
					text-align: center;
				}

				.van-slider {
					flex: 1;
				}
			}
		}
	}

	.hotel-pic {
		margin-top: 3rem;

		.title {
			color: rgba(145, 145, 145, 1);
			font-size: 1.4rem;
			margin-bottom: 1.4rem;
		}

		.pics {
			overflow-x: scroll;
			display: flex;

			&::-webkit-scrollbar {
				display: none;
			}

			img {
				margin-left: 1.7rem;

				&:first-child {
					margin-left: 0;
				}

				display: inline-block;
				width: 9rem;
				height: 9rem;
				border-radius: 2rem;
			}
		}
	}

	.cmt {
		margin: 3rem 0 1.3rem;

		.title {
			display: flex;
			justify-content: space-between;
			font-size: 1.4rem;
			margin-bottom: 1.3rem;

			.text {
				color: rgba(145, 145, 145, 1);
			}

			.view-cmts {
				color: rgba(19, 194, 194, 1);
			}
		}

		.items {
			padding: 1.9rem 0 3.1rem;
			border-top: 0.1rem solid rgba(245, 245, 245, 1);

			//&:first-child {
			//  border: 1px solid red;
			//}

			.cont-top {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;

				.rates {
					text-align: right;

					span {
						font-size: 1.4rem;
					}
				}
			}

			.users {
				display: flex;

				.avatar {
					width: 5rem;
					height: 5rem;
					border-radius: 50%;
					margin-right: 1rem;
					overflow: hidden;

					img {
						width: 100%;
						height: 100%;
					}
				}

				.infos {
					display: flex;
					flex-direction: column;
					justify-content: space-evenly;

					.title {
						font-size: 1.6rem;
						margin: 0;
					}

					.time {
						color: rgba(191, 191, 191, 1);
						font-size: 1.2rem;
					}
				}
			}

			.cmt-cont {
				margin-top: 1.3rem;
				color: rgba(145, 145, 145, 1);
				font-size: 1.4rem;
			}
		}
	}

	.map {
		height: 23rem;
		background-color: pink;
		margin: 0 -2rem;
	}

	.reserve {
		@include loginStyle;
		height: 4.4rem;
		margin-top: 3.8rem;
		font-size: 1.4rem;
		margin-bottom: 4.1rem;
	}
}
</style>
