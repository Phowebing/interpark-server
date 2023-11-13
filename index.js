// const express = require("express") ;  옛날 즉 commonjs 방식
import express from "express"; // 현대 방식 module 방식
import cors from "cors";
// 도움말 및 기능 테스트 Swagger
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
const port = 4000; // 서버에 접속시 포트번호
// cors 처리(웹브라우저로 접속시 보안관련 처리)
app.use(
  cors({
    origin: "*",
  })
);

// json 데이터를 사용하겠다고 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// REST API 요청 처리
// 첫페이지
app.get("/", function (req, res) {
  res.send("인터파크 API");
});
// 게시판 API (백엔드 호출 함수)
// get 은 프론트에서 자료 요청
// localhost:4000/board : 게시판 자료를 요청.
app.get("/board", (req, res) => {
  console.log("GET", req);
  // DB 에서 조건을 보고 결과를 {} 만들어서 [] 담아서준다.
  // MongoDB, MaraiDB(MySql)
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다.",
      contents: "내용입니다.",
    },
    {
      number: 2,
      writer: "영희",
      title: "영희입니다.",
      contents: "내용입니다.",
    },
    {
      number: 3,
      writer: "훈희",
      title: "훈희입니다.",
      contents: "내용입니다.",
    },
  ];
  res.send(result);
});

// post 는 프론트에서 백엔드로 자료 전송
// localhost:4000/board : 게시판 자료를 추가한다.
// axios.post("/board", {자료})
app.post("/board", (req, res) => {
  // console.log("POST", req);
  console.log("BODY 프론트가 보낸 데이터 ", req.body);
  // req.body 를 바탕으로 DB 에 내용 추가
  res.send("게시물 추가에 성공하였습니다.");
});

// 인터파크 API (백엔드 호출 함수)
// visual 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/visual", (req, res) => {
  const result = {
    total: 6,
    visual_1: {
      file: "images/v1.png",
      url: "a.html",
    },
    visual_2: {
      file: "images/v2.jpg",
      url: "b.html",
    },
    visual_3: {
      file: "images/v3.jpg",
      url: "c.html",
    },
    visual_4: {
      file: "images/v4.jpg",
      url: "d.html",
    },
    visual_5: {
      file: "images/v5.jpg",
      url: "e.html",
    },
    visual_6: {
      file: "images/v6.png",
      url: "f.html",
    },
  };
  res.send(result);
});
// recommend 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/recommend", (req, res) => {
  const result = {
    total: 12,
    good_1: {
      image: "images/r1.jpg",
      discount: 27,
      price: 49900,
      desc: "[스포츠파크] 노스페이스 겨울 구스다운 패딩 슬립온 NS93M50",
      url: "a.html",
    },
    good_2: {
      image: "images/r2.jpg",
      discount: 38,
      price: 12500,
      desc: "서울우유 멸균 초코/딸기/흰우유 24팩/48팩 외",
      url: "a.html",
    },
    good_3: {
      image: "images/r3.jpg",
      discount: 0,
      price: 15500,
      desc: "17~18브릭스 미니 꿀사과 엔비사과 2kg (5-9과/가정용/펜시등급)",
      url: "a.html",
    },
    good_4: {
      image: "images/r4.png",
      discount: 22,
      price: 6900,
      desc: "[I*POP] 아이팝 스파클링 워터 플레인 / 아이팝 탄산수 / 강탄산 / 진짜 먹는 샘물로 만든 탄산수",
      url: "a.html",
    },
    good_5: {
      image: "images/r5.jpg",
      discount: 22,
      price: 39000,
      desc: "베어파우 키즈 방한 패딩 양털 부츠 베이비 남아 여아 아기 어린이 유아",
      url: "a.html",
    },
    good_6: {
      image: "images/r6.jpg",
      discount: 29,
      price: 34900,
      desc: "[쎈딜][스포츠파크] 뉴발란스 남성 UNI 에센셜 스몰로고 맨투맨 4종택1",
      url: "a.html",
    },
    good_7: {
      image: "images/r7.jpg",
      discount: 2,
      price: 22000,
      desc: "[쎈딜][더쎈위크] 롯데빼빼로 3종 x 20갑 (오리지널/아몬드/초코필드) 골라담기",
      url: "a.html",
    },
    good_8: {
      image: "images/r8.jpg",
      discount: 11,
      price: 7580,
      desc: "제주도 노지귤 혼합과 새콤달콤 4.5kg 9kg",
      url: "a.html",
    },
    good_9: {
      image: "images/r9.jpg",
      discount: 35,
      price: 26900,
      desc: "[쎈딜][한정수량특가] 한양식품 국내산 꽃보다오징어 오리지날 260g+260g",
      url: "a.html",
    },
    good_10: {
      image: "images/r10.jpg",
      discount: 13,
      price: 14900,
      desc: "[쎈딜] 고급 망고포도 샤인머스캣 씨없는 청포도 1KG 2KG 4KG 3-5수",
      url: "a.html",
    },
    good_11: {
      image: "images/r11.jpg",
      discount: 17,
      price: 108000,
      desc: "[스포츠파크] 노스페이스 컴피 알파 플리스 집업 NJ4FP57 JKL ALL",
      url: "a.html",
    },
    good_12: {
      image: "",
      discount: 0,
      price: 0,
      desc: "",
      url: "",
    },
  };
  res.send(result);
});

//tour 영역에 출력할 자료 요청
app.get("/tour", (req, res) => {
  const result = {
    total: 9,
    tour_1: {
      image: "images/t1.jpg",
      badge: "국적기직항",
      tour_title: "대한항공, 베스트셀러",
      desc: "동유럽 3국9일, 체코/오스트리아/헝가리,4성호텔, 대한항공, 프라하/부다페스트 2대야경투어, 프리미엄 판도르프아울렛, 7대고성투어, 5대특식포함, 프라하/부다페스트/빈 자유시간, 3개국 여유롭고 깊이있는 여행",
      price: 2599000,
      url: "b.html",
    },
    tour_2: {
      image: "images/t2.jpg",
      badge: "히트상품",
      tour_title: "사이판 최대 워터파크 웨이브정글 이용가능",
      desc: "[사이판5일]사이판 월드리조트_골드카드",
      price: 1049000,
      url: "b.html",
    },
    tour_3: {
      image: "images/t3.jpg",
      badge: "강력특가",
      tour_title: "클래식 킹",
      desc: "레스케이프 호텔",
      price: 220000,
      url: "b.html",
    },
    tour_4: {
      image: "images/t4.webp",
      badge: "홍콩",
      tour_title: "홍콩 하버뷰 갓성비 호텔",
      desc: "이비스 홍콩 센트럴 & 셩완",
      price: 151817,
      url: "b.html",
    },
    tour_5: {
      image: "images/t5.webp",
      badge: "괌",
      tour_title: "공항 10분거리, 오션뷰 인피니티 풀",
      desc: "괌 리프 호텔(구.괌 리프앤 올리브 스파 리조트)",
      price: 219120,
      url: "b.html",
    },
    tour_6: {
      image: "images/t6.jpg",
      badge: "국적기직항",
      tour_title: "아시아나항공, 특급호텔",
      desc: "북경/만리장성/서커스/이화원/전일정쉐라톤 4일",
      price: 299000,
      url: "b.html",
    },
    tour_7: {
      image: "images/t7.webp",
      badge: "나트랑",
      tour_title: "공항 15분거리, 논느억 해변에 위치",
      desc: "빈펄 나트랑 베이 리조트 & 빌라",
      price: 124592,
      url: "b.html",
    },
    tour_8: {
      image: "images/t8.webp",
      badge: "오사카",
      tour_title: "닛폰바시역 도보 5분",
      desc: "소테츠 그랜드 프레사 오사카 남바",
      price: 90115,
      url: "b.html",
    },
    tour_9: {
      image: "images/t9.webp",
      badge: "방콕",
      tour_title: "수라삭 BTS 스카이트레인역 접근성 GOOD!",
      desc: "이스틴 그랜드 호텔 사톤",
      price: 160452,
      url: "b.html",
    },
  };
  res.send(result);
});

// 서버에서 Request 요청대기
app.listen(port, () => {
  console.log(`현재 웹서버가 ${port} 로 접속하였습니다.`);
});
