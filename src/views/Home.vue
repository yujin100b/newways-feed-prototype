<template>
  <div class="container">
    <h1 class="title">
      내가 뽑은 우리 동네 정치인은 <br />
      지금 무슨 일할까?
    </h1>
    <h2 class="subtitle">우리 동네 정치인 정보, 모두 여기에!</h2>
    <h3 class="subtitle">서울특별시 마포구 서교동에서 뽑힌 정치인은요</h3>
    
    <div class="horizontal-scroll">
      <Cards :cards="cards" />
    </div>

    <h2 class="title">
      나의 관심 키워드에 맞는 <br />
      활동은 따로 모아보세요 
    </h2>
    <div class="feeds">
      <Feeds :feeds="feeds" />
    </div>
    <button class="bottom-fixed-btn" @click="goToNext">내 맞춤 피드 만들기</button>
  </div>
</template>

<script>
import Cards from "../components/Cards.vue"
import Feeds from "../components/Feeds.vue"

export default {
  components:{
    Cards,
    Feeds
  },
  setup(){
    const cards = [
      {
        name: '차해영',
        job: '마포구의원',
        location: '마포구 서교동, 망원1동',
        dang: '더불어민주당',
        keyword: ['1인가구', '프리랜서', 'LGBT'],
      },
      {
        name: '안미자',
        job: '마포구의원',
        location: '마포구 서교동, 망원1동',
        dang: '국민의힘',
        keyword: ['노인복지', '주거', '교통'],
      },
      {
        name: '정진술',
        job: '서울시의원',
        location: '마포구 서교동, 합정동, 망원1동',
        dang: '더불어민주당',
        keyword: ['재난안전', '여성안전', '교통'],
      },
      {
        name: '정청래',
        job: '국회의원',
        location: '마포구 서강동, 서교동, 합정동, 상암동, 망원1동, 망원2동, 성산1동, 성산2동',
        dang: '더불어민주당',
        keyword: ['동물보호', '노인복지', '문화예술'],
      },
    ]
    const feeds = [
      {
        id: 1,
        name: "주무열",
        job: "관악구의원",
        location: "관악구 낙성대동, 인헌동, 남현동",
        keyword: "기후위기",
        format: "연구활동",
        content: `<div class="text">관악구의회 쓰레기문제 연구회가 부천시 자원순환센터를 방문했습니다.
    주민분들과 함께 부천시 자원순환센터를 방문했습니다. 소각장까지 딸려있는 거대한 시설인데 
    생각보다 냄새도 심하지 않고 내부 투어를 위한 구조도 섬세하게 설계되어있습니다. 
    관악구의 쓰레기는 어찌해야할 것인가, 화두를 품으며 의정활동을 이어나가겠습니다.</div>`,
      },
      {
        id: 2,
        name: "조민경",
        job: "연수구의원",
        location: "연수구 송도1·2·3·4동",
        keyword: "육아정책",
        format: "꿀팁정보",
        content: `<div class="text">올해부터 우리 지역에서 아빠 육아 휴직 장려금을 받으실 수 있습니다.
    아빠 육아 휴직 장려금은 양육에 드는 경제적 부담을 지자체에서 보조하는 정책을 통해서 여성만 아니라 남성의 육아 참여를 확산하기 위해 만들었습니다.
    엄마가 일을 계속 하고 싶어도, 아빠가 아이와 많은 시간을 보내고 싶어도 현실적으로 어려움을 겪는 분들이 많았을 거라고 생각합니다. 
    우리 지역에 1년 이상 살고 계신 분이라면 직장에서 육아 휴직 3개월 급여를 받은 뒤에 4개월 째가 되는 날부터 6개월 동안 지금 받을 수 있으니 꼭 신청해 보세요 🙂</div>`,
      },
      {
        id: 3,
        name: "서난이",
        job: "전북도의원",
        location: "전주시 조촌동, 동산동, 팔복동, 덕진동",
        keyword: "청년",
        format: "의견요청",
        content: `<div class="text">매년 전라북도에서는 700여명의 자립준비청년들이 시설, 그룹홈, 가정양육에서 퇴소하고 있습니다. 이에 지역사회가 함께 고민하여 서로 연대할 수 있는 든든한 사회적지지체계를 어떻게 만들어 나갈 수 있을지 토론하는 자리를 만들고 싶습니다.
이에 퇴소했거나 퇴소하기 전에 놓인 청년들의 상황, 의견, 고민에 대해 사전에 알아보고자 글을 쓰게 되었습니다. 아래의 링크는 익명으로 자유롭게 의견을 개진하실 수 있고, 연락처로 문자나 전화주시면 제가 계신 곳으로 달려가서 목소리를 듣겠습니다. 많이 연결해주세요!
<a style="text-decoration: underline;" href="https://forms.gle/Pmq4C5RVUi1xYkdu8">https://forms.gle/Pmq4C5RVUi1xYkdu8</a>
</div>`,
      },
    ];
    return {
      cards,
      feeds
    }
  },
  methods:{
    goToNext(){
      this.$router.push('/join')
    }
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
.feeds{
  padding-right: 20px;
}
</style>
