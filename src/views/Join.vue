<template>
  <div id="join" class="container no-scroll">
    <h1>지금 어느 동네에 살고 있나요?</h1>
    <input placeholder="읍/면/동 이름을 검색하세요" v-model="search" />

    <button class="second">현재 위치로 찾기</button>

    <div class="addrs">
      <div
        class="addr"
        :class="selected === addr ? 'selected' : ''"
        v-for="(addr, index) in matchingAddrs"
        :key="index"
        @click="choice(addr)"
      >
        {{ `${addr[0]} ${addr[1]} ${addr[2]}` }}
      </div>
    </div>

    <p>다른 동네도 추가할 수 있어요</p>
    <button class="dim">동네 추가하기</button>

    <button class="bottom-fixed-btn" @click="goNext">다음</button>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex"
import { addr } from "./consts";

export default {
  setup() {
    const addrList = addr.reduce((acc, cur) => {
      const locals = cur[4];
      const smallList =
        locals.length > 1
          ? locals.reduce((a, c) => {
              return [...a, [cur[0], cur[1], c]];
            }, [])
          : [cur[0], cur[1], locals[0]];
      return locals.length > 1 ? [...acc, ...smallList] : [...acc, smallList];
    }, []);

    const search = ref("");

    const matched = (searchValue) => {
      const localList = addrList.map((e) => {
        return e[2];
      });
      return localList.reduce((a, c, i) => {
        return c.indexOf(searchValue) !== -1 ? [...a, i] : a;
      }, []);
    };

    const matchingAddrs = computed(() => {
      return (
        search.value &&
        addrList.filter((_, index) => matched(search.value).includes(index))
      );
    });

    let selected = "";

    const store = useStore()

    function choice(addr) {
      search.value = `${addr[0]} ${addr[1]} ${addr[2]}`;
      store.commit("setAddr", `${addr[0]} ${addr[1]} ${addr[2]}`);
    }

    return {
      matchingAddrs,
      search,
      choice,
      selected,
    };
  },
  methods: {
    goNext() {
      this.$router.push("/join2");
    },
  },
};
</script>

<style scoped>
#join {
  padding-top: 40px;
  padding-bottom: 88px;
}
#join.container {
  padding-right: 20px;
  height: auto;
}
h1 {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  color: #000000;
  margin-bottom: 16px;
}
input {
  width: 100%;
  padding: 16px 20px;
  margin-bottom: 20px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
input::placeholder {
  color: #b3b3b3;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
button.second {
  background: rgba(193, 193, 193, 0.5);
  width: 100%;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
  color: #000000;
  padding: 16px 0;
  border: 0;
}
button.dim {
  border: 1px solid #b3b3b3;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  text-align: center;
  color: #666666;
  padding: 8px 12px;
  margin: 0 auto;
  display: block;
}
.addrs {
  width: 100%;
  height: 357px;
  background: #ffffff;
  overflow: scroll;
  margin-bottom: 20px;
}
.addr {
  padding: 16px 20px;
}
p {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  text-align: center;
  color: #666666;
  margin-bottom: 12px;
}
</style>