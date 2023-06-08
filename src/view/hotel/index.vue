<template>
  <div class="hotel-container" >
    <div class="top" >
      <nav-bar :title="xData.title" >
        <template #rightSlot >
          <div class="icon" >
            <img src="@/assets/imgs/like.png" alt="">
          </div>
        </template>
      </nav-bar>
    </div>
    <van-pull-refresh v-model="listOpts.refreshing" @refresh="onRefresh">
      <van-list
          v-model:loading="listOpts.loading"
          :finished="listOpts.finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <template #finished >
          没有更多了
        </template>
        <van-cell v-for="item in listOpts.list" :key="item" >
          <div class="preview" >
            <div class="items" >
              <div class="pre-img" >
                <img src="@/assets/imgs/test-hotel.png" alt="">
              </div>
              <div class="hotel-info" >
                <div class="left" >
                  <div class="title" >
                    <span class="name" >豪华套件</span>
                    <span class="person" > /3人</span>
                  </div>
                  <p class="foot" >
                    <span class="price" >￥2400</span>
                    <span class="night" > /每晚</span>
                  </p>
                </div>
                <div class="right" >
                  <button> 立即预定 </button>
                </div>
              </div>
            </div>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts" setup >
  import {reactive} from "vue";
  interface ListOpts {
    refreshing: boolean
    finished: boolean
    loading: boolean,
    list: number
  }
  const xData = reactive({
    title: '香格里拉大酒店'
  })
  const listOpts = reactive<ListOpts>({
      refreshing: false,
      finished: false,
      loading: false,
      list: 1
  })
  const onLoad = () => {
    setTimeout(() => {
      if (listOpts.refreshing) {
        listOpts.list = 1;
        listOpts.refreshing = false;
      }
      listOpts.list = listOpts.list + 1
      listOpts.loading = false;
      if (listOpts.list >= 10) {
        listOpts.finished = true;
      }
    }, 1000);
  };

  const onRefresh = () => {
    // 清空列表数据
    listOpts.finished = false;
    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    listOpts.loading = true;
    onLoad();
  };
</script>

<style scoped lang="scss" >
.hotel-container {
  .top {
    padding: .8rem 2rem 0;
  }
  .icon {
    width: 2rem;
    height: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .van-cell {
    padding: 0;
    &::after {
      border: none;
    }
    &:first-child {
      .items {
        margin-top: 1.8rem;
      }
    }
  }
  .preview {

    .items {

      .pre-img {
        height: 20rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .hotel-info {
        height: 8.6rem;
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        .left {
          font-family: PingFangSC-bold;
          .title {
            .name {
              font-size: 1.8rem;
              font-weight: 700;
              color: #000;
            }
            .person {
              color: rgba(145, 145, 145, 1);
              font-size: 1.4rem;
            }
          }
          .foot {
            .price {
              font-size: 1.8rem;
              color: #000;
              font-weight: 700;
            }
            .night {
              font-size: 1.4rem;
              color: rgba(145, 145, 145, 1);
            }
          }
        }
        .right button {
          @include loginStyle;
          font-size: 1.4rem;
          margin-top: 0;
          width: 10rem;
          height: 4rem;
        }
      }
    }
  }
}
</style>
