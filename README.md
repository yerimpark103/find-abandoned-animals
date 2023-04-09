## 소개
유기동물을 확인할 수 있는 웹 어플리케이션입니다.

### 기능
1. 유기동물 리스트
2. 각 동물 별 상세페이지 
3. geolocation 베이스로 사용자 주변 유기동물 조회하기
4. 보호소에 후원금 송금

### 사용 기술
- next.js
- React
- Typescript
- Axios
- GraphQL
- Styled Components
- Emotion
- Ant design
- React Infinite Scroller

- [농림축산식품부 농림축산검역본부_동물보호관리시스템 유기동물 정보 조회 서비스](https://www.data.go.kr/data/15098931/openapi.do)

### 설치 및 실행방법

```bash
yarn install
```

```bash
yarn dev
```


## 개발노트

#### 23/03/27 
<img src="./public/images/yr.jpeg" style="width:24px; height:24px; border-radius: 50%;"> 리포를 셋업하고, 동물보호관리시스템 API를 셋업했습니다.

<img src="./public/images/sh.jpeg" style="width:24px; height:24px; border-radius: 50%;"> 기본적인 레이아웃 세팅(antd: Col, Row), 로그인과 회원가입 기능을 구현했습니다.

<img src="./public/images/yr.jpeg" style="width:24px; height:24px; border-radius: 50%;"> 레이아웃 세팅을 사용자의 윈도우 사이즈에 맞게 조정했습니다.

#### 23/03/28
<img src="./public/images/sh.jpeg" style="width:24px; height:24px; border-radius: 50%;"> 리스트형 게시글을 만들었습니다.

#### 23/03/29
<img src="./public/images/yr.jpeg" style="width:24px; height:24px; border-radius: 50%;"> [ant design card](https://ant.design/components/card)와 `useState` 훅을 이용하여 Pagination 가능한 카드 뷰를 구현하였습니다.

next router를 사용해 각 동물 카드를 클릭하면 해당 동물의 상세 페이지로 이동 가능하게 구현했습니다.

#### 23/04/02
<img src="./public/images/yr.jpeg" style="width:24px; height:24px; border-radius: 50%;"> 리스트형 게시글의 UX를 개선하였습니다. 사용자에게 필요한 정보를 노출했습니다.

#### 23/04/05
<img src="./public/images/yr.jpeg" style="width:24px; height:24px; border-radius: 50%;"> 필터 기능을 구현하였습니다. [ant design dropdown](https://ant.design/components/dropdown), [ant design select](https://ant.design/components/select)에 커스텀 UI를 접목하여 사용자가 선택한 필터로 api 쿼리를 할 수 있게 제공하였습니다.<br/>
리스트/카드 뷰를 오갈 수 있는 버튼을 추가해 UX를 개선했습니다.

#### 23/04/06
<img src="./public/images/yr.jpeg" style="width:24px; height:24px; border-radius: 50%;"> Github Pages를 통한 deploy를 적용중입니다.
#### 23/04/07
<img src="./public/images/sh.jpeg" style="width:24px; height:24px; border-radius: 50%;"> 로그인 기능, withAuth, localstorage를 통한 페이지별 접근 관리 기능(이후 refresh로 변경예정), 브라우저 새로고침할때 토큰 확인하여 로그인 유지시키는 기능, 로그인 모달 및 회원가입 모달 => 페이지로 변경.

#### 23/04/08
<img src="./public/images/sh.jpeg" style="width:24px; height:24px; border-radius: 50%;"> LoginForm, SignUpForm -> container, presenter 구조로 변경
