<template>
  <div id="feed" v-for="(feed, index) in feeds" :key="feed.id">
    <div class="header">
      <div class="media-left">
        <div class="profile">
          <img :src="require(`../assets/프로필_${feed.name}.jpeg`)" />
        </div>
        <div class="meta">
          <span class="primary"
            >{{ feed.name }}
            {{ feed.tag === "내 동네" ? `${addr[1]}의원` : feed.job }}</span
          >
          <span class="second keep-all">{{
            feed.tag === "내 동네" ? `${addr[1]} ${addr[2]}` : feed.location
          }}</span>
        </div>
      </div>
      <button :class="feed.subscribe ? '팔로잉' : '팔로우'">
        {{ feed.subscribe ? "팔로잉" : "팔로우" }}
      </button>
    </div>
    <div class="line"></div>
    <div class="content">
      <div class="category">
        <span v-if="feed.keyword" class="white">{{ feed.keyword }}</span>
        <span class="black">{{ feed.format }}</span>
      </div>

      <div class="feed-content" v-html="feed.content"></div>
      <span v-if="feed.content.split(' ').length > 53" class="btn-more" @click="toggleFold(index)">...더보기</span>
      <span class="second">14시간 전</span>
    </div>
    <div class="line"></div>
    <div class="buttons">
      <button>좋아요 ❤️</button>
      <button>댓글 💬</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: {
    feeds: Array,
  },
  setup() {
    const store = useStore();
    const addr = store.state.addr.split(" ");

    function toggleFold(index){
      const textContent = document.querySelectorAll(".feed-content .text")
      textContent[index].classList.toggle("more")
    }

    return {
      addr,
      toggleFold,
    };
  },
};
</script>

<style scoped>
#feed {
  background: #ffffff;
  border: 1px solid #000000;
  padding: 21px 0 0;
  margin-bottom: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-top: 0;
}
.media-left {
  display: flex;
  align-items: flex-start;
  max-width: 203px;
}
.header button {
  border: 0;
  padding: 12px 16px;
  background: #6ae5a6;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
  color: #212529;
}
.header button.팔로잉 {
  background: rgba(193, 193, 193, 0.5);
}
.meta {
  padding-left: 10px;
}
.meta span {
  display: block;
}
.meta .primary {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: #212529;
}
.second {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.6;
  /* #495057 */
  color: #666666;
}
.line {
  border-bottom: 1px solid #dee2e6;
  margin: 0 20px;
}
.content {
  padding: 20px;
}
.content .category {
  display: flex;
  margin-bottom: 12px;
}
.category span {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.6;
  padding: 4px 12px;
  margin-right: 8px;
}
.category span.white {
  background: #ffffff;
  border: 1px solid #000000;
  color: #000000;
}
.category span.black {
  background: #000000;
  color: #ffffff;
}
.buttons {
  display: flex;
  justify-content: center;
  padding: 8px 0;
}
.buttons button {
  border: 0;
  background: none;
  padding: 6px 58px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #000000;
}
.buttons button:first-child {
  border-right: 0.5px solid #dee2e6;
}
.buttons button:last-child {
  border-left: 0.5px solid #dee2e6;
}
</style>
