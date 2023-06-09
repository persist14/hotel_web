<template>
  <div class="comment-container">
    <nav-bar></nav-bar>
    <div class="title">
      评论（25）
    </div>
    <div v-for="item in 3" :key="item" class="items">
      <div class="cont-top">
        <div class="users">
          <div class="avatar">
            <img alt="" src="@/assets/imgs/test2.png">
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
                void-icon="star-o"
            />
          </div>
        </div>
      </div>
      <div class="cmt-cont">这是一个非常棒的地点，靠近商店和酒吧，非常安静的位置。</div>
    </div>
    <div class="editor">
      <img alt="" src="@/assets/imgs/editor.png">
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const rateVal = ref<number>(3)
</script>

<style lang="scss" scoped>
.comment-container {
  padding: .9rem 2rem 0;

  .title {
    margin: 2rem 0 1.5rem;
    color: rgba(64, 64, 64, 1);
    font-size: 2rem;
    font-weight: 700;
  }

  .items {
    padding: 1.9rem 0 3.1rem;
    border-top: .1rem solid rgba(245, 245, 245, 1);

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

  .editor {
    width: 6rem;
    height: 6rem;
    background-color: #13C2C2;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 4.1rem;

    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
}
</style>