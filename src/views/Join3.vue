<template>
  <div id="join" class="container">
    <h1>
      내 정보와 관심사를 입력하면 <br />
      맞춤 피드를 보여드려요
    </h1>

    <p class="subtitle">내 관심 주제와 관련해 조례나 해결 사례를 알려 드려요. <br />
 (최대 3개 선택)</p>
    

    <h2>관심 주제(최대 3개)</h2>
    <div class="tags">
      <span class="tag" :class="isChecked(tag)" v-for="tag in tags" :key="tag">
        <label>
          <input type="checkbox" :value="tag" v-model="checkedTags" :disabled="isDisabled(tag)" />
          {{ tag }}
        </label>
      </span>
    </div>

    <div class="inputs">
      <label>닉네임</label>
      <input placeholder="닉네임" />

      <label>성별</label>
      <input placeholder="예) 남, 여, 제3의성" />

      <label>생년월일</label>
      <input placeholder="예) 생년월일 8자리 20221111" />
    </div>

    <p @click="goNext">나중에 설정하기</p>
    <button class="bottom-fixed-btn" @click="goNext">내 정보 보러가기</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { useStore } from "vuex"

export default {
  setup() {
    const tags = [
      "1인가구",
      "기후위기", //- `선택 가능`
      "청년",
      "마음돌봄",
      "일자리", //- `선택 가능`
      "문화예술", //- `선택 가능`
      "노인복지",
      "성평등",
      "재난안전",
    ];

    const checkedTags = ref([]);

    const isDisabled = (tag) => {
      return !["기후위기", "1인가구", "청년", "마음돌봄", "일자리", "문화예술"].includes(tag)
    }

    const isChecked = (tag) => {
      return checkedTags.value.includes(tag) ? 'checked' : ""
    }

    const router = useRouter();
    const store = useStore();

    function goNext(){
      const tags = checkedTags.value.join(',')
      store.commit("setChecked", tags)
      
      router.push(`/profile`)
    }

    return {
      tags,
      checkedTags,
      isChecked,
      isDisabled,
      goNext
    };
  },
  methods:{
    
  }
};
</script>

<style scoped>
#join {
  padding-top: 40px;
  padding-bottom: 88px;
}
#join.container {
  padding-right: 20px;
}
h1,
h2 {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  color: #000000;
}
h1{
  margin-bottom: 20px;
}
h2 {
  margin-bottom: 24px;
}
p.subtitle{
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  text-align: center;
  color: #000000;
}
.inputs label {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  display: inline-block;
  color: #000000;
  margin-bottom: 12px;
}
.inputs {
  margin-bottom: 36px;
}
input {
  width: 100%;
  padding: 16px 20px;
  margin-bottom: 24px;
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
.tags{
  margin-bottom: 48px;
}
.tags input {
  width: 0;
  opacity: 0;
  display: contents;
  margin-bottom: 48px;
}
.tags .tag {
  display: inline-block;
  padding: 8px 12px;
  background: rgba(193, 193, 193, 0.5);
  border-radius: 100px;
  margin-left: 12px;
  margin-bottom: 12px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  text-align: center;
  color: #000000;
}
.tags .tag.checked {
  background: #6ae5a6;
}
p{
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  text-align: center;
  text-decoration-line: underline;
  color: #666666;
  margin-bottom: 32px;
}
p.subtitle{
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  text-align: center;
  margin-bottom: 32px;
  color: #000000;
  text-decoration-line: none;
}
</style>