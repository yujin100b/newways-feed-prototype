<template>
  <div id="main" class="container">
    <div class="profiles">
      <div
        class="profile-set"
        v-for="([name, img], index) in profiles"
        :key="index"
      >
        <div class="profile">
          <img :src="require(`../assets/${img}.jpeg`)" />
        </div>
        <p>{{ name }}</p>
      </div>
    </div>

    <div class="tags-wrap">
      <div class="tags">
        <span
          class="tag"
          :class="selected === tag ? 'selected' : ''"
          v-for="tag in ['내 피드', '내 동네', ...checked]"
          :key="tag"
        >
          <label>
            <input type="radio" :value="tag" v-model="selected" />
            {{ tag }}
          </label>
        </span>
      </div>
    </div>
    <div class="feed-wrap">
      <Feeds :feeds="filtered" />
    </div>

    <h2 class="card-title">관심 주제와 맞는 정치인을 만나 보세요</h2>
     <div class="horizontal-scroll">
      <Cards :cards="cards" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { cards, feeds } from './consts'
import Cards from "../components/Cards.vue";
import Feeds from "../components/Feeds.vue";

export default {
  components: {
    Cards,
    Feeds,
  },
  setup() {
    const profiles = [
      ["차해영", "프로필_차해영"],
      ["안미자", "프로필_안미자"],
      ["정진술", "프로필_정진술"],
      ["정청래", "프로필_정청래"],
      ["박민협", "프로필_박민협"],
      ["손혜영", "프로필_손혜영"],
    ];
    const route = useRoute();
    const checked = route.query?.checked ? route.query.checked.split(",") : [];

    const selected = ref("내 피드");

    const filtered = computed(() => {
      return feeds.filter((feed) => feed.tag === selected.value);
    });

    return {
      cards,
      checked,
      profiles,
      selected,
      filtered,
    };
  },
};
</script>

<style scoped>
#main {
  padding-top: 24px;
  padding-left: 0;
}
.profiles {
  width: 100%;
  overflow: scroll;
  display: flex;
  padding-bottom: 24px;
  margin-block: 10px;
}
.profiles::-webkit-scrollbar {
  display: none;
}
.profiles .profile-set {
  margin-right: 12px;
}
.profiles .profile-set:first-child {
  margin-left: 20px;
}
.profile-set .profile {
  width: 50px;
  height: 50px;
  margin-bottom: 6px;
}
.profile-set p {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #666666;
}
.tags-wrap {
  overflow: scroll;
  margin-bottom: 24px;
}
.tags {
  width: 400px;
}
.tags-wrap::-webkit-scrollbar,
.tags::-webkit-scrollbar {
  display: none;
}
.tags .tag {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 100px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  text-align: center;
  color: #000000;
  background: rgba(193, 193, 193, 0.5);
  margin-right: 12px;
}
.tags .tag.selected {
  background: #6ae5a6;
}
.tags .tag:first-child {
  margin-left: 12px;
}
.tags .tag input {
  display: none;
}
.feed-wrap{
  padding: 0 20px;
  margin-bottom: 60px;
}
h2.card-title{
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  /* identical to box height, or 26px */

  text-align: left;
  padding-left: 20px;

  color: #212529;
  margin-bottom: 20px;
}

#main .horizontal-scroll{
  padding-left:20px;
}
</style>