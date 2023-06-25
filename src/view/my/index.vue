<template>
	<div class="my-container">
		<div class="top" @click="editUser">
			<div class="text">
				<span class="username">Daniel Hua</span>
				<span class="editor">查看和编辑</span>
			</div>
			<div class="avatar">
				<img src="@/assets/imgs/test.png" alt="" />
			</div>
		</div>
		<div class="cell">
			<van-cell-group :border="false">
				<van-cell title="修改密码">
					<template #right-icon>
						<div class="right-icon">
							<img src="@/assets/imgs/pwd.png" alt="" />
						</div>
					</template>
				</van-cell>
				<van-cell title="邀请朋友">
					<template #right-icon>
						<div class="right-icon">
							<img src="@/assets/imgs/friend.png" alt="" />
						</div>
					</template>
				</van-cell>
				<van-cell title="积分&优惠券">
					<template #right-icon>
						<div class="right-icon">
							<img src="@/assets/imgs/points.png" alt="" />
						</div>
					</template>
				</van-cell>
				<van-cell title="帮助中心">
					<template #right-icon>
						<div class="right-icon">
							<img src="@/assets/imgs/help.png" alt="" />
						</div>
					</template>
				</van-cell>
				<van-cell title="支付">
					<template #right-icon>
						<div class="right-icon">
							<img src="@/assets/imgs/pay.png" alt="" />
						</div>
					</template>
				</van-cell>
				<van-cell title="设置">
					<template #right-icon>
						<div class="right-icon">
							<img src="@/assets/imgs/setting.png" alt="" />
						</div>
					</template>
				</van-cell>
			</van-cell-group>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const $router = useRouter();
const editUser = () => {
	$router.push("/userinfo");
};
</script>

<style scoped lang="scss">
.my-container {
	font-size: 1.4rem;
	padding: 1rem 2rem;
	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.text {
			display: flex;
			flex-direction: column;
			.username {
				font-size: 2.4rem;
				font-weight: 700;
			}
			.editor {
				color: #bfbfbf;
			}
		}
		.avatar {
			img {
				width: 7rem;
				height: 7rem;
				border-radius: 50%;
			}
		}
	}
}
.cell {
	margin-top: 4.6rem;
	.right-icon {
		display: flex;
		align-items: center;
		height: 100%;
		img {
			width: 2.4rem;
			height: 2.4rem;
		}
	}
	.van-cell-group {
		border-bottom: 0.1rem solid rgba(245, 245, 245, 1);
		:deep(.van-cell) {
			height: 6rem;
			line-height: 6rem;
			font-size: 1.4rem;
			padding: 0;
			.van-cell__title {
				// color: #bfbfbf !important;
			}
			&::after {
				margin-top: 1.4rem;
				right: 0;
				left: 0;
			}
		}
	}
}
</style>
