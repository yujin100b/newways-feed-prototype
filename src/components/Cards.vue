<template>
<div class="horizontal-scroll-wrap">
  <div id="card" v-for="i in 5" :key="i" >
    <div class="flag">
      마포구 의원
    </div>
    <div class="header">
      <img src="../assets/user-img1.svg" />
      <div class="meta">
        <span class="primary">정유진</span>
        <span class="second">마포구 서강동, 합정동</span>
        <div class="tags">
          <span>환경</span>
          <span>1인가구</span>
          <span>주거</span>
        </div>
        <span class="second">2시간전 활동</span>

      </div>
    </div>
    <div class="content">
      <p>
      내 장점이 뭔지 알아 바로 솔직한거야.내 장점이 뭔지 알아 바로 솔직한거야. 방금 내가 말한 감정
      </p>
    </div>
  </div>
  <div class="empty"></div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.horizontal-scroll-wrap{
  display: flex;
  padding-right: 20px;
}
.horizontal-scroll-wrap .empty{
  padding-right: 20px;
}
#card{
  background: #FFFFFF;
  border: 1px solid #000000;
  padding: 20px;
  margin-right: 20px;
  position: relative;
  min-width: 315px;
}
#card:last-of-type{
  margin-right: 0;
}
.flag{
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px 20px;
  background: #6AE5A6;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: #000000;
  }
.header{
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #C1C1C1;
}
.header .meta{
  padding-left: 10px;
  padding-bottom: 20px;
}
.meta span{
  display: block;
}
.meta span.primary{
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.6;
  color: #212529;
  padding-bottom: 2px;
}
.meta span.second{
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.6;
  color: #666666;
}
div.tags{
  display: flex;
  flex-direction: row;
  padding: 12.5px 0;
}
.tags span{
  display: inline;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 160%;
  padding: 6px 12px;
  background: rgba(193, 193, 193, 0.5);
  border-radius: 100px;
  margin-right: 8px;
}
.content{
  padding-top: 12px;
}
.content p{
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: #000000;
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>
