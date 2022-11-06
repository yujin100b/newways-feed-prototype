<template>
  <div id="feed" v-for="feed in feeds" :key="feed.id" :ref="feeds">
    <div class="header">
      <div class="media-left">
        <img src="../assets/user-img1.svg" />
        <div class="meta">
          <span class="primary">곽민해 마포구의원</span>
          <span class="second">마포구 서강동, 합정동</span>
        </div>
      </div>
      <button>팔로우</button>
    </div>
    <div class="line"></div>
    <div class="content">
      <div class="category">
        <span class="white">기후위기</span>
        <span class="black">변화성과</span>
      </div>
    
    <h1>제 1회 쓰레기 환경 대상 조례 부문 대상 수상자 선정</h1>
    <p>
      저는 지금 환경경제위원회에 속해 있습니다. 실생활과 밀접한 정책과 사업을 다루는 부서입니다. 기초의원이 가진 권한으로도 우리 삶과 주변 환경이 나아지게 할 방법을 찾아 조례로 제정해 보려 했습니다.
    </p>
    <span class="second">14시간 전</span>
    </div>
    <div class="line"></div>
    <div class="buttons">
      <button>반응하기</button>
      <button>댓글달기</button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const feeds = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];
    return {
      feeds,
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
.line{
  border-bottom: 1px solid #dee2e6;
  margin: 0 20px;
}
.content{
  padding: 20px;
}
.content .category{
  display: flex;
  margin-bottom: 12px;
}
.category span{
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.6;
  padding: 4px 12px;
  margin-right: 8px;
}
.category span.white{
  background: #FFFFFF;
  border: 1px solid #000000;
  color: #000000;
}
.category span.black{
  background: #000000;
  color:#FFFFFF
}
.content h1{
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.6;
  color: #000000;
  margin-bottom: 12px;
}
.content p{
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: #212529;
  margin-bottom: 12px;
}
.buttons{
  display: flex;
  justify-content: center;
  padding: 8px 0;
}
.buttons button{
  border:0;
  background: none;
  padding: 6px 58px;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #000000;
}
.buttons button:first-child{
  border-right: .5px solid #DEE2E6;
}
.buttons button:last-child{
  border-left: .5px solid #DEE2E6;
}
</style>
