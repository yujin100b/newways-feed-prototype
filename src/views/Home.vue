<template>
  <div class="container">
    <h1 class="title">
      내가 뽑은 서강동 정치인 <br />
      지금 무슨 일을 하고 있지?
    </h1>
    <h2 class="subtitle">우리 동네 정치인이 누군지 몽땅 알려 드려요</h2>
    <h3 class="subtitle">서울 특별시 마포구 서강동에서 뽑힌 정치인은요</h3>
    
    <div class="horizontal-scroll">
      <Cards />
    </div>

    <h2 class="title">
      나에게 중요한 키워드로 <br />
      활동 소식을 받아보세요 
    </h2>
    <div class="feeds">
      <Feeds />
    </div>
    <button class="bottom-fixed-btn">내 맞춤 피드 보기</button>
  </div>
</template>

<script>
import Cards from "../components/Cards.vue"
import Feeds from "../components/Feeds.vue"
export default {
  components:{
    Cards,
    Feeds
  }
};
</script>

<style>
h1.title {
  padding: 40px 0;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.6;
  color: #000000;
  margin: 0;
}
h2.title{
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
  color: #000000;
  padding-bottom: 20px;
}
h2.subtitle {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.6;
  color: #000000;
  margin-bottom: 6px;
}
h3.subtitle {
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(73, 80, 87, 0.8);
  margin-bottom: 20px;
}
.horizontal-scroll{
  overflow-x: scroll;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.feeds{
  padding-right: 20px;
}
</style>
