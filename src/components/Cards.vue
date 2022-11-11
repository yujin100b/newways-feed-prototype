<template>
  <div class="horizontal-scroll-wrap">
    <div id="card" v-for="(card, index) in cards" :key="index">
      <div class="flag" :class="card.subscribe ? 'subscribe' : ''">{{card.subscribe ? '팔로잉' : '팔로우'}}</div>
      <div class="header">
        <div class="profile">
          <img :src="require(`@/assets/프로필_${card.name}.jpeg`)" />
        </div>
        <div class="meta">
          <span class="primary">{{ card.name }}</span>
          <span class="second"
            >{{ route.name === "Home" ? card.job : customLoca(card.name)[0] }},
            {{ card.dang }}</span
          >
          <span class="second keep-all">{{
            route.name === "Home" ? card.location : customLoca(card.name)[1]
          }}</span>
          <div class="tags">
            <span>{{ card.keyword[0] }}</span>
            <span>{{ card.keyword[1] }}</span>
            <span>{{ card.keyword[2] }}</span>
          </div>
          <span class="second right">2시간전 활동</span>
        </div>
      </div>
      <div class="content">
        <p v-if="route.name === 'Home'">
          <br />
          <br />
        </p>
        <p v-else>
          내 장점이 뭔지 알아 바로 솔직한거야.내 장점이 뭔지 알아 바로
          솔직한거야. 방금 내가 말한 감정
        </p>
      </div>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { user } from "../views/consts";

export default {
  props: ["cards"],
  setup() {
    const route = useRoute();
    const store = useStore();
    const addr = store.state.addr.split(" ");

    const customLoca = (name) => {
      const info = user[addr[2]][name];

      return info ? info : ["", ""];
    };

    return {
      addr,
      route,
      user,
      customLoca,
    };
  },
};
</script>

<style scoped>
.horizontal-scroll-wrap {
  display: flex;
  padding-right: 20px;
}
.horizontal-scroll-wrap .empty {
  padding-right: 20px;
}
#card {
  background: #ffffff;
  border: 1px solid #000000;
  padding: 20px;
  margin-right: 20px;
  position: relative;
  min-width: 315px;
}
#card:last-of-type {
  margin-right: 0;
}
.flag {
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px 20px;
  background: #6ae5a6;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: #000000;
}
.flag.subscribe{
  background: rgba(193, 193, 193, 0.5);
}
.header {
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #c1c1c1;
}
.header .meta {
  padding-left: 10px;
  padding-bottom: 20px;
}
.meta span {
  display: block;
}
.meta span.primary {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.6;
  color: #212529;
  padding-bottom: 2px;
}
.meta span.second {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.6;
  color: #666666;
}
div.tags {
  display: flex;
  flex-direction: row;
  padding: 12.5px 0;
}
.tags span {
  display: inline;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 160%;
  padding: 6px 11px;
  background: rgba(193, 193, 193, 0.5);
  border-radius: 100px;
  margin-right: 8px;
}
.content {
  padding-top: 12px;
}
.content p {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: #000000;
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>
