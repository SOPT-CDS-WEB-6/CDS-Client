<div align="center">

  <h1><strong> CGV </strong></h1>

<img src="https://i.namu.wiki/i/2SBi3yMQgknjVCOx5eu-fqn64n7piih0FMM3lYccxeKnLOZaNHol0N5Z0gZRURs78a3t2pjO7lH_xEZKuaXmmw.svg"  alt="서비스대표-이미지" />
  
  <p> 🎬CGV는 한국의 영화관 체인으로, 영화 상영과 함께 음식, 음료, 상점, 이벤트 등 다양한 문화 환경을 제공하는 종합 문화 공간입니다.🎬 </p>
  <br />

</div>

<br />

<h2>🤼팀원 소개 & 역할 분담</h2>

| 팀원 | 구건모 | 류성경 | 서아름 | 이시연 |
| --- | --- | --- | --- | --- |
| 팀원소개 | TBD | TBD | TBD | TBD |
| view 및 컴포넌트 | • Home <br /> • Header <br /> • ScrollHeader | • Inquiry <br /> • Review | • MyMovie <br /> • Footer | • MovieInfo |
| 담당 API | • movieChart GET <br /> • eventList GET | • reviewList Get <br /> • Inquiry POST <br /> • userInfo GET | • userInfo GET <br /> • myMovieList GET | • movieDetail GET <br /> • stillCuts GET |

 <br />
 
 <h2> 💡CGV의 핵심 기능 </h2>

<h3> 1️⃣ HOME </h3>
<ul>
  <li>무비 차트, 이벤트 </li>
  <li>영화 포스터에 마우스 호버 시, 포스터 크기 확대 및 상세보기와 예매하기 버튼 생성</li>
  <li>상세 보기 클릭 시, movieInfo 페이지로 이동</li>
  <li>특별관에 마우스 호버 시, 사진 및 아웃라인, 글자 크기 변경</li>
</ul>
 

<h3> 2️⃣ MovieInfo </h3>
<ul>
  <li>영화 별 상세정보 렌더링</li>
  <li>트레일러와 스틸컷 보여줌</li>
  <li>데이터에 따라 오각형 차트 렌더링</li>
  <li>전체 리뷰 페이지네이션</li>
</ul>


<h3> 3️⃣ MyMovie </h3>
<ul>
  <li>사용자 프로필, 시청한 영화 목록 렌더링</li>
  <li>사용자가 시청한 모든 영화 조회 가능</li>
  <li>년도 별 시청한 영화 필터링</li>
  <li>시청한 영화 목록 무한 스크롤</li>
</ul>


<h3> 4️⃣ Inquiry </h3>
<ul>
  <li>사용자 정보 렌더링</li>
  <li>문의 첨부파일 선택 시, 파일 미리보기 기능 제공</li>
  <li>문의 등록 시, 해당 글 post</li>
</ul>

 <br />

<h2> 🛠 기술스택 / 주요 라이브러리 </h2>

```
  ✅ Base: TS + React + react-router-dom 
  ✅ Package Manager: yarn berry + zero install
  ✅ Data fetch: swr
  ✅ Style: styled-components
  ✅ Formatting: Eslint + Prettier
  ✅ Version Control: Git + GitHub
```

<br/>

<h2>  📄 컨벤션 및 브랜치 전략 </h2>
<h3> 📦 브랜치 전략 </h3>
<ul>
  <li>main: 최종 배포 브랜치</li>
  <li>feature/{구현 페이지 이름}: 이슈 개발이 끝나면 머지하는 브랜치</li>
  <li>{구현 페이지 이름}#{이슈 번호}: 이슈를 생성하고, 해당 이슈에 맞는 개발을 진행하는 브랜치</li>
</ul>

<br/>

<h3> 🪄 코드 컨벤션 </h3>

| 제목 | 내용 |
| --- | --- |
| styled 사용 방식 | const StHeader = styled.header` … ` 이런 식으로 매 컴포넌트마다 따로 St를 붙여주는 방식 |
| props 인터페이스 타입 선언 방식 | • props의 인터페이스 선언 시, 컴포넌트 이름 + props로 명명 <br /> • 컴포넌트 선언부 바로 위에 위치시키기 |
| css 작성 (네이버 코딩 컨벤션 참고) | • 레이아웃, box, 배경, 폰트, 기타의 5가지 카테고리로 구분 <br /> • 각 카테고리를 공백으로 분리 |
| svg 파일 저장/ export | • 저장명 → Ic_HomeBanner.svg  <br />  • export 이름 → IcHomeBanner |

<br/>

<h3> 🎀 커밋 컨벤션 </h3>

![image](https://github.com/SOPT-CDS-WEB-6/CDS-Client/assets/80264647/56027a7c-d1f5-4bf3-88bb-5235dcbc460b)

| TagName | Description |
| --- | --- |
| [feat] | 새로운 기능 추가, 구현 |
| [chore] | 기능 상 변경 없는 수정 |
| [fix] | 버그 수정 |
| [refactor] | 코드 리팩토링 |

<br/>

<h2> 📁 폴더 구조 </h2>

```
.
├── constants 🗂 목 데이터 저장
├── apis 🗂 api 폴더
├── package.json 📦 설치된 패키지를 관리하는 파일
├── public
├── utils 🗂 공통으로 쓰일 컴포넌트 저장
└── src
    └── assets
    |   ├── icon
    |   └── asset.d.ts
    ├── App.tsx ✡️ 앱의 라우팅과 글로벌 스타일 지정
    ├── index.js
    ├── component
    |    ├── libs
    |    |   ├── axios.ts
    |    |   └── hooks 🗂 커스텀 훅 저장
    |    └── common 🗂 공통으로 쓰일 컴포넌트 저장
    ├── pages 🗂 라우팅 시 보여질 페이지 컴포넌트 저장
    |
    ├── types 🗂 데이터 
    │   
    └── styles
        ├── theme.ts
        ├── styled.d.ts	
        └── globalStyles.ts
```

<br/>
<br/>
