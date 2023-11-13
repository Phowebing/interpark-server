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

// 서버에서 Request 요청대기
app.listen(port, () => {
  console.log(`현재 웹서버가 ${port} 로 접속하였습니다.`);
});
