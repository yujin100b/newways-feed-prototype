<template>
  <div id="join" class="container no-scroll">
    <h1>휴대폰 번호로 가입해주세요</h1>
    <input placeholder="하이픈(-) 없이 입력" />

    <button class="second" @click="authenticate">인증 문자 받기</button>

    <button class="bottom-fixed-btn" @click="goNext">다음</button>
  </div>
</template>

<script>
export default {
  setup(){

  },
  methods:{
    goNext(){
      this.$router.push('/join3')
    },
    authenticate(){
      alert("인증 되었습니다")
    }
  }
};
</script>

<style scoped>
#join {
  padding-top: 40px;
  padding-bottom: 88px;;
}
#join.container {
  padding-right: 20px;
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
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
input::placeholder {
  color: #b3b3b3;
  font-family: 'SUIT';
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
button.dim{
  border: 1px solid #B3B3B3;
  font-family: 'SUIT';
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
.addr{
  padding: 16px 20px;
}
p{
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  text-align: center;
  color: #666666;
  margin-bottom: 12px;
}
</style>