<template>
  <div id="join" class="container">
    <h1>
      내 정보를 입력하면 <br />
      나에게 맞는 정보를 놓치지 않을 수 있어요
    </h1>
    <div class="inputs">
      <label>닉네임</label>
      <input placeholder="닉네임" />

      <label>성별</label>
      <input placeholder="성별" />

      <label>생년월일</label>
      <input placeholder="생년월일" />
    </div>

    <h2>관심 주제(최대 3개)</h2>
    <div class="tags">
      <span class="tag" :class="isChecked(tag)" v-for="tag in tags" :key="tag">
        <label>
          <input type="checkbox" :value="tag" v-model="checkedTags" :disabled="isDisabled(tag)" />
          {{ tag }}
        </label>
      </span>
    </div>

    <p @click="goNext">나중에 설정하기</p>
    <button class="bottom-fixed-btn" @click="goNext">내 정보 설정하기</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from 'vue-router';
export default {
  setup() {
    const tags = [
      "기후위기", //- `선택 가능`
      "장애인",
      "주거",
      "마음돌봄",
      "1인가구", //- `선택 가능`
      "교통", //- `선택 가능`
      "여성안전",
      "성평등",
      "문화예술",
      "재난안전",
      "일자리",
      "청년",
    ];

    const isDisabled = (tag) => {
      return !["기후위기", "1인가구", "교통"].includes(tag)
    }

    const checkedTags = ref([]);
    const isChecked = (tag) => {
      return checkedTags.value.includes(tag) ? 'checked' : ""
    }

    const router = useRouter();

    function goNext(){
      router.push(`/feed?checked=${checkedTags.value.join(',')}`)
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
  margin-bottom: 32px;
}
h2 {
  margin-bottom: 24px;
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
</style>