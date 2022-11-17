<template>
  <div id="profile" class="container">
    <h1>관심있는 정치인을 팔로우 하세요</h1>
    <p class="subtitle">팔로우한 정치인의 소식을 피드에서 볼 수 있어요.</p>
    <div class="profiles">
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
            <div class="button" :class="isSubscribed(card.name)">
              <label>
                <input type="checkbox" :value="card.name" v-model="followd" />
                {{ isSubscribed(card.name) ? '팔로잉' : '팔로우'}}
              </label>
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
            <br />
          </p>
        </div>
        <span class="second right">2시간전 활동</span>
      </div>
    </div>

    <button class="bottom-fixed-btn" @click="goNext">내 맞춤 피드 보기</button>
  </div>
</template>

<script>
import { cards } from "./consts";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const addr = store.state.addr.split(" ");
    const favor = store.state.checked.split(",");

    const user = addr[addr.length - 1];

    const isin = (keyword) => {
      if (favor.length > 0) {
        let result = false;
        favor.forEach((element) => {
          if (keyword.includes(element)) result = true;
        });
        return result;
      }
      return false;
    };

    const filteredCard = cards
      .filter((card) => card.user === user)
    const filteredCardByKeyword = cards.filter((card) => card.user !== user && isin(card.keyword))
    const followd = ref([]);

    function isSubscribed(name){
        return followd.value.includes(name) ? 'subscribe' : ""
    }

    function goNext() {
      const follow = followd.value.join(',')
      store.commit('initalizeFollowed')
      router.push(`/feed?follow=${follow}`);
    }

    return {
      cards: [...filteredCard, ...filteredCardByKeyword],
      goNext,
      followd,
      isSubscribed
    };
  },
};
</script>

<style>
#profile {
  padding-right: 20px;
}
#profile h1 {
  padding-top: 32px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  color: #000000;
  margin-bottom: 8px;
}
#profile p.subtitle {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #000000;
  margin-bottom: 42px;
}
#profile .card {
  background: #ffffff;
  border: 1px solid #000000;
  padding: 20px;
  margin-right: 20px;
  position: relative;
  width: 100%;
  margin-bottom: 16px;
}
#profile .card:last-of-type {
  margin-right: 0;
  margin-bottom: 60px;
}
#profile .button {
  padding: 10px 16px;
  background: #6ae5a6;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: #000000;
}
#profile .button.subscribe{
  background: rgba(193, 193, 193, 0.5);
}
#profile .button input {
  display: none;
}
#profile .flag.subscribe {
  background: rgba(193, 193, 193, 0.5);
}
#profile .header {
  border-bottom: 1px solid #c1c1c1;
}
#profile .header div.info {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
#profile .header .media-left {
  display: flex;
  align-items: flex-start;
  max-width: 204px;
}
#profile .header .meta {
  padding-left: 10px;
}
#profile .meta span {
  display: block;
}
#profile .meta span.primary {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.6;
  color: #212529;
  padding-bottom: 2px;
}
#profile span.second {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.6;
  color: #666666;
}
#profile div.tags {
  display: flex;
  flex-direction: row;
  padding: 12.5px 0;
  padding-left: 53px;
}
#profile .tags span {
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
#profile .content {
  padding-top: 12px;
}
#profile .content p {
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