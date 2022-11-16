<template>
  <div class="horizontal-scroll-wrap">
    <div class="card" v-for="(card, index) in cards" :key="index">
        <div class="header">
          <div class="info">
            <div class="media-left">
              <div class="profile">
                <img :src="require(`@/assets/프로필_${card.name}.jpeg`)" />
              </div>
              <div class="meta">
                <div>
                  <span class="primary">{{ card.name }}</span>
                  <span class="second">{{ card.job }}, {{ card.dang }}</span>
                  <span class="second keep-all">{{ card.location }}</span>
                </div>
              </div>
            </div>
            <div class="button" :class="isSubscribed(card.name) ? 'subscribe' : ''" @click="follow(card.name)">
                {{ isSubscribed(card.name) ? '팔로잉' : '팔로우'}}
            </div>
          </div>
          <div class="tags">
            <span>{{ card.keyword[0] }}</span>
            <span>{{ card.keyword[1] }}</span>
            <span>{{ card.keyword[2] }}</span>
          </div>
        </div>
        <div class="content">
          <p>
            내 장점이 뭔지 알아 바로 솔직한거야.내 장점이 뭔지 알아 바로
            솔직한거야. 방금 내가 말한 감정
          </p>
        </div>
        <span class="second right">2시간전 활동</span>
      </div>
    <div class="empty"></div>
  </div>
</template>

<script>
import {computed} from "vue"
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { user } from "../views/consts";

export default {
  props: ["cards"],
  setup() {
    const route = useRoute();
    const store = useStore();
     const following = computed(() => store.state.followed);

    function isSubscribed(name){
      return following.value.includes(name)
    }

    function follow(name){
      if(route.name === "Home") return;
      if (isSubscribed(name)){
        store.commit("reduceFollowed", name)
        return
      }
      store.commit("setFollowed", [name])
    }

    return {
      isSubscribed,
      follow,
      route,
      user,
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
 .card {
  background: #ffffff;
  border: 1px solid #000000;
  padding: 20px;
  margin-right: 20px;
  position: relative;
  min-width: 315px;
  margin-bottom: 16px;
}
 .card:last-of-type {
  margin-right: 0;
  margin-bottom: 60px;
}
 .button {
  padding: 10px 16px;
  background: #6ae5a6;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: #000000;
  cursor: pointer;
}
 .button.subscribe{
  background: rgba(193, 193, 193, 0.5);
}
 .button input {
  display: none;
}
 .flag.subscribe {
  background: rgba(193, 193, 193, 0.5);
}
 .header {
  border-bottom: 1px solid #c1c1c1;
}
 .header div.info {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
 .header .media-left {
  display: flex;
  align-items: flex-start;
  max-width: 204px;
}
 .header .meta {
  padding-left: 10px;
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
 span.second {
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
  padding-left: 53px;
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
