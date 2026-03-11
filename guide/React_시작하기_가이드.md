# React 시작하기 완벽 가이드 (초보자용)

> 🎯 **이 가이드는**: 프로그래밍을 처음 배우는 분도 따라할 수 있도록 모든 개념을 쉽게 설명합니다!

## 목차
1. [환경 세팅](#1-환경-세팅)
2. [프로젝트 생성](#2-프로젝트-생성)
3. [폴더 구조](#3-폴더-구조)
4. [필수 패키지 설치](#4-필수-패키지-설치)
5. [기본 설정](#5-기본-설정)
6. [첫 컴포넌트 만들기](#6-첫-컴포넌트-만들기)
7. [라우팅 설정](#7-라우팅-설정)
8. [상태 관리](#8-상태-관리)
9. [API 연동](#9-api-연동)
10. [유용한 팁](#10-유용한-팁)

---

## 1. 환경 세팅

### 1.1 Node.js 설치

> 💡 **Node.js가 뭔가요?**  
> JavaScript를 브라우저가 아닌 컴퓨터에서 실행할 수 있게 해주는 프로그램입니다.  
> React 개발 도구들이 Node.js 위에서 동작하기 때문에 필수입니다!

```bash
# Node.js 버전 확인 (18.0.0 이상 권장)
node --version
npm --version
```

> 📦 **npm은 뭔가요?**  
> Node Package Manager의 약자로, 다른 개발자들이 만든 코드(패키지)를 쉽게 설치하고 관리할 수 있게 해주는 도구입니다.  
> Node.js를 설치하면 npm도 자동으로 설치됩니다!

**설치가 필요한 경우:**
- 공식 사이트: https://nodejs.org
- LTS 버전 다운로드 및 설치 (LTS = 안정적인 버전)

### 1.2 에디터 설치
**VS Code 권장** (https://code.visualstudio.com/)

**추천 VS Code 확장 프로그램:**
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Path Intellisense

---

## 2. 프로젝트 생성

### 2.1 Vite로 프로젝트 생성 (추천)

> 💡 **Vite가 뭔가요?**  
> React 프로젝트를 빠르게 만들고 실행할 수 있게 도와주는 도구입니다.  
> 코드 수정하면 즉시 화면에 반영되는 "핫 리로딩" 기능이 매우 빠릅니다!

```bash
# 프로젝트 생성
npm create vite@latest my-react-app -- --template react

# 프로젝트 폴더로 이동
cd my-react-app

# 패키지 설치 (package.json에 명시된 필요한 것들 다운로드)
npm install

# 개발 서버 실행 (브라우저에서 http://localhost:5173 열림)
npm run dev
```

> ⚡ **개발 서버란?**  
> 코드를 수정할 때마다 자동으로 새로고침되어 결과를 바로 확인할 수 있는 임시 서버입니다.  
> 실제 배포용이 아니라 개발할 때만 사용합니다!

### 2.2 Create React App으로 생성 (전통적 방법)
```bash
npx create-react-app my-react-app
cd my-react-app
npm start
```

> **참고:** Vite가 더 빠르고 현대적이므로 권장합니다.

---

## 3. 폴더 구조

### 3.1 기본 구조 (Vite 기준)

> 💡 **각 폴더가 하는 일:**

```
my-react-app/
├── node_modules/          # npm으로 설치한 패키지들 (건드리지 않음!)
├── public/                # 이미지, 파비콘 등 정적 파일 (그대로 복사됨)
│   └── vite.svg
├── src/                   # 우리가 작업할 소스 코드 폴더 ⭐
│   ├── assets/           # 이미지, 폰트, 아이콘 등
│   ├── components/       # 재사용 가능한 UI 조각들 (버튼, 카드 등)
│   ├── pages/           # 각 페이지 컴포넌트 (홈, 소개, 로그인 등)
│   ├── hooks/           # 커스텀 훅 (반복되는 로직을 함수로 만든 것)
│   ├── utils/           # 유틸리티 함수 (날짜 포맷, 계산 등)
│   ├── services/        # API 통신 관련 코드
│   ├── styles/          # CSS 파일들
│   ├── App.jsx          # 메인 앱 컴포넌트
│   ├── main.jsx         # 프로그램 시작점 (진입점)
│   └── index.css        # 전역 스타일
├── .gitignore            # Git에서 무시할 파일 목록
├── index.html            # HTML 뼈대
├── package.json          # 프로젝트 정보 & 설치한 패키지 목록
└── vite.config.js        # Vite 설정 파일
```

> 📂 **실무 팁:**  
> - `src/components`: 여러 곳에서 쓰이는 것들 (Button, Card, Input 등)
> - `src/pages`: 한 페이지 = 한 파일 (HomePage.jsx, AboutPage.jsx 등)
> - `src/styles`: 컴포넌트 이름과 동일한 CSS 파일 (Button.module.css 등)

### 3.2 권장 폴더 구조 만들기
```bash
# src 폴더 안에 필요한 폴더들 생성
cd src
mkdir components pages hooks utils services styles
```

---

## 4. 필수 패키지 설치

> 💡 **패키지가 뭔가요?**  
> 다른 개발자들이 만들어놓은 유용한 코드 모음입니다.  
> 우리가 직접 만들면 시간이 오래 걸리는 기능들을 쉽게 가져다 쓸 수 있습니다!

### 4.1 React Router (페이지 이동)

> 🧭 **React Router가 뭔가요?**  
> 페이지를 전환할 때 사용합니다. (홈 → 소개 페이지 이동 등)  
> 일반 웹사이트처럼 URL을 바꾸고 뒤로가기 버튼도 작동하게 만들어줍니다!

```bash
npm install react-router-dom
```

**언제 필요한가요?**  
여러 페이지가 있는 웹사이트를 만들 때 (대부분의 프로젝트)

---

### 4.2 상태 관리 (데이터 공유)

> 🗄️ **상태 관리가 뭔가요?**  
> 여러 컴포넌트가 같은 데이터를 공유해야 할 때 사용합니다.  
> 예: 로그인 정보를 모든 페이지에서 사용하기

**Option 1: Zustand (초보자 추천! 🌟)**

```bash
npm install zustand
```

> ✨ **Zustand 특징:**  
> - 설정이 매우 간단함 (코드 5줄이면 시작 가능)
> - 배우기 쉬움
> - 가벼움 (용량 작음)
> - 토이 프로젝트에 딱!

**사용 예시:**
```javascript
// 로그인한 사용자 정보를 모든 컴포넌트에서 사용 가능
const user = useUserStore(state => state.user);
```

**Option 2: Redux Toolkit (복잡한 프로젝트용)**

```bash
npm install @reduxjs/toolkit react-redux
```

> ⚙️ **Redux Toolkit이란?**  
> - 대규모 프로젝트에서 사용 (많은 기업에서 사용)
> - 설정이 복잡함
> - 배우는데 시간이 걸림
> - **처음에는 Zustand 추천!**

---

### 4.3 HTTP 클라이언트 (서버와 통신)

> 🌐 **Axios가 뭔가요?**  
> 서버에서 데이터를 가져오거나 보낼 때 사용합니다.  
> 예: 사용자 목록 가져오기, 로그인 요청 보내기, 게시글 작성하기

```bash
npm install axios
```

**기본 사용법:**
```javascript
// 서버에서 사용자 목록 가져오기
const response = await axios.get('/api/users');
console.log(response.data); // 사용자 목록 출력

// 서버에 데이터 보내기 (회원가입)
await axios.post('/api/signup', { name: '홍길동', email: 'hong@example.com' });
```

> 💡 **실무 팁:**  
> - GET: 데이터 가져올 때 (조회)
> - POST: 새로운 데이터 보낼 때 (생성)
> - PUT: 기존 데이터 수정할 때
> - DELETE: 데이터 삭제할 때

**왜 필요한가요?**  
- 브라우저 기본 `fetch`보다 사용하기 편함
- 에러 처리가 쉬움
- 요청/응답 가로채기 가능 (로그인 토큰 자동 추가 등)

---

### 4.4 폼 관리 (입력 폼 쉽게 다루기)

> 📝 **React Hook Form이란?**  
> 로그인 폼, 회원가입 폼 등을 쉽게 만들고 검증할 수 있게 해줍니다.  
> 이메일 형식 체크, 필수 입력 체크 등을 간단하게!

```bash
npm install react-hook-form
```

**사용 예시:**
```javascript
// 이메일이 올바른지, 비밀번호가 6자 이상인지 자동 체크
const { register, handleSubmit, formState: { errors } } = useForm();
```

**언제 필요한가요?**  
로그인, 회원가입, 설문조사 등 입력 폼이 있을 때

---

### 4.5 유틸리티 라이브러리 (편의 기능)

**날짜 처리:**
```bash
npm install date-fns
```

> 📅 **date-fns란?**  
> 날짜를 쉽게 다룰 수 있게 해줍니다.  
> 예: "2024-02-11" → "2024년 2월 11일", "3일 전" 등으로 변환

**아이콘:**
```bash
npm install react-icons
```

> 🎨 **react-icons란?**  
> 수천 개의 아이콘을 무료로 사용할 수 있습니다.  
> Font Awesome, Material Icons 등 유명한 아이콘 세트 포함!

```javascript
import { FaHeart, FaUser } from 'react-icons/fa';
// ❤️ 하트 아이콘, 👤 사용자 아이콘 등
```

---

### 📦 토이 프로젝트 최소 패키지 (추천)

**처음 시작한다면 이것만 설치하세요:**

```bash
# 페이지 이동
npm install react-router-dom

# 서버 통신 (API 사용할 경우)
npm install axios

# 아이콘 (필요하면)
npm install react-icons
```

**나머지는 필요할 때 추가하면 됩니다!**

---

### 🎯 실무 팁: 언제 뭘 설치해야 할까?

| 기능 | 필요한 패키지 | 필수 여부 |
|------|-------------|----------|
| 여러 페이지 이동 | react-router-dom | ⭐ 거의 필수 |
| 로그인 상태 공유 | zustand | 중간 이상 프로젝트 |
| 서버 데이터 가져오기 | axios | API 사용 시 필수 |
| 입력 폼 만들기 | react-hook-form | 폼 많으면 추천 |
| 날짜 표시 | date-fns | 날짜 다룰 때 |
| 아이콘 사용 | react-icons | 보기 좋게 꾸밀 때 |

> 💡 **초보자 조언:**  
> 처음엔 패키지 없이 시작하고, "이거 있으면 편하겠다" 싶을 때 하나씩 추가하세요!  
> 너무 많이 설치하면 오히려 복잡해집니다.

---

## 5. 기본 설정

> 💡 **이 섹션은 선택사항입니다!**  
> 처음에는 건너뛰고 나중에 필요할 때 설정해도 됩니다.

### 5.1 절대 경로 설정 (편의 기능)

> 🎯 **왜 필요한가요?**  
> 컴포넌트 임포트할 때 경로가 깔끔해집니다.

**Before (상대 경로):**
```javascript
import Button from '../../../components/Button';
```

**After (절대 경로):**
```javascript
import Button from '@/components/Button';
```

**vite.config.js 수정:**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
```

> ⚠️ **주의:** 이 설정은 나중에 해도 됩니다. 급하지 않아요!

---

### 5.2 환경 변수 설정

> 🔐 **환경 변수가 뭔가요?**  
> API 주소, 비밀키 등 코드에 직접 쓰면 안 되는 값들을 따로 저장하는 곳입니다.  
> 개발 환경과 배포 환경에서 다른 값을 사용할 수 있습니다!

**프로젝트 루트에 .env 파일 생성:**
```
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=My React App
```

> 📝 **규칙:**  
> - 파일명은 반드시 `.env`
> - Vite에서는 `VITE_`로 시작해야 함
> - Git에 올리면 안 되는 비밀 정보 저장 (API 키 등)

**사용 방법:**
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl); // http://localhost:3000/api
```

**실무 예시:**
```javascript
// 개발할 때: 로컬 서버 사용
// VITE_API_URL=http://localhost:3000/api

// 배포할 때: 실제 서버 사용
// VITE_API_URL=https://api.myapp.com
```

---

## 6. 첫 컴포넌트 만들기

> 💡 **컴포넌트가 뭔가요?**  
> 재사용 가능한 UI 조각입니다. 레고 블록처럼 여러 컴포넌트를 조합해서 페이지를 만듭니다!  
> 예: Button 컴포넌트를 만들면 앱 전체에서 같은 스타일의 버튼 사용 가능

### 6.1 CSS Modules란?

> 🎨 **CSS Modules 특징:**  
> - 일반 CSS 문법 그대로 사용 (배우기 쉬움!)
> - 클래스명이 자동으로 고유하게 변경됨 (충돌 방지)
> - 추가 패키지 설치 불필요 (Vite에 기본 내장)
> - 파일명: `컴포넌트명.module.css`

---

### 6.2 Button 컴포넌트 만들기

**1단계: CSS 파일 만들기**

**src/components/Button.module.css**
```css
/* 기본 버튼 스타일 */
.button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* 파란색 버튼 */
.primary {
  background-color: #3b82f6;
  color: white;
}

.primary:hover {
  background-color: #2563eb;
}

/* 회색 버튼 */
.secondary {
  background-color: #6b7280;
  color: white;
}

.secondary:hover {
  background-color: #4b5563;
}

/* 빨간색 버튼 */
.danger {
  background-color: #ef4444;
  color: white;
}

.danger:hover {
  background-color: #dc2626;
}
```

**2단계: 컴포넌트 파일 만들기**

**src/components/Button.jsx**
```jsx
import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'primary' }) => {
  // variant에 따라 다른 스타일 적용
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
```

> 📖 **코드 설명:**  
> - `import styles from './Button.module.css'`: CSS 파일 가져오기
> - `styles.button`: CSS의 `.button` 클래스를 의미
> - `children`: 버튼 안에 들어갈 텍스트나 요소
> - `onClick`: 버튼 클릭 시 실행할 함수
> - `variant`: 버튼 종류 선택 (primary, secondary, danger)

---

### 6.3 컴포넌트 사용하기

**src/App.jsx**
```jsx
import React from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  const handleClick = () => {
    alert('버튼 클릭!');
  };

  return (
    <div className="app">
      <h1>React 시작하기</h1>
      
      <div className="button-group">
        <Button onClick={handleClick} variant="primary">
          기본 버튼
        </Button>
        
        <Button onClick={handleClick} variant="secondary">
          보조 버튼
        </Button>
        
        <Button onClick={handleClick} variant="danger">
          위험 버튼
        </Button>
      </div>
    </div>
  );
}

export default App;
```

**src/App.css**
```css
.app {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1f2937;
}

.button-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
```

---

### 6.4 결과 확인

개발 서버 실행:
```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 열기

> ✅ **확인사항:**  
> - 3개의 버튼이 보이나요?
> - 각 버튼 색깔이 다른가요?
> - 버튼 클릭하면 알림창이 뜨나요?
> - 마우스 올리면 버튼이 살짝 올라가나요?

---

### 🎯 실무 팁

**1. 컴포넌트 네이밍:**
```javascript
// ✅ Good: 명확하고 설명적
<Button variant="primary">확인</Button>
<UserCard user={userData} />
<LoginForm onSubmit={handleLogin} />

// ❌ Bad: 너무 짧거나 불명확
<Btn>확인</Btn>
<Card />
<Form />
```

**2. 파일 구조:**
```
components/
├── Button/
│   ├── Button.jsx
│   ├── Button.module.css
│   └── index.js          # export { default } from './Button';
```

이렇게 하면 import가 깔끔해집니다:
```javascript
import Button from './components/Button';  // index.js가 자동으로 로드됨
```

**3. CSS Modules 장점:**
```css
/* Button.module.css */
.container { }  /* 실제로는 Button_container_x7k3f 같은 고유 이름으로 변환 */

/* Card.module.css */
.container { }  /* Button과 충돌하지 않음! Card_container_j9m2n 으로 변환 */
```

---

## 7. 라우팅 설정

> 💡 **라우팅이 뭔가요?**  
> URL에 따라 다른 페이지를 보여주는 것입니다.  
> 예: `/` → 홈페이지, `/about` → 소개 페이지

### 7.1 페이지 컴포넌트 만들기

**1단계: 홈 페이지**

**src/pages/Home.module.css**
```css
.container {
  padding: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
}

.description {
  color: #6b7280;
  line-height: 1.6;
}
```

**src/pages/Home.jsx**
```jsx
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>홈 페이지</h1>
      <p className={styles.description}>
        React 라우팅 예제입니다. 
        상단 메뉴에서 다른 페이지로 이동해보세요!
      </p>
    </div>
  );
};

export default Home;
```

---

**2단계: 소개 페이지**

**src/pages/About.module.css**
```css
.container {
  padding: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
}

.content {
  background-color: #f3f4f6;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

.content p {
  color: #374151;
  line-height: 1.8;
  margin-bottom: 0.5rem;
}
```

**src/pages/About.jsx**
```jsx
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>소개 페이지</h1>
      <div className={styles.content}>
        <p>React는 Facebook에서 만든 JavaScript 라이브러리입니다.</p>
        <p>컴포넌트 기반으로 UI를 만들 수 있습니다.</p>
        <p>배우기 쉽고, 생태계가 풍부합니다!</p>
      </div>
    </div>
  );
};

export default About;
```

---

**3단계: 404 페이지**

**src/pages/NotFound.module.css**
```css
.container {
  padding: 2rem;
  text-align: center;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.errorCode {
  font-size: 6rem;
  font-weight: bold;
  color: #ef4444;
  margin: 0;
}

.message {
  font-size: 1.25rem;
  color: #6b7280;
  margin: 1rem 0 2rem;
}

.homeLink {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.2s;
}

.homeLink:hover {
  background-color: #2563eb;
}
```

**src/pages/NotFound.jsx**
```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.message}>페이지를 찾을 수 없습니다</p>
      <Link to="/" className={styles.homeLink}>
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFound;
```

---

### 7.2 라우터 설정

**src/App.jsx**
```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* 네비게이션 메뉴 */}
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">홈</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">소개</Link>
          </li>
        </ul>
      </nav>

      {/* 라우트 설정 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**src/App.css**
```css
/* 네비게이션 바 스타일 */
.nav {
  background-color: #1f2937;
  padding: 1rem 2rem;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #60a5fa;
}
```

---

### 7.3 결과 확인

```bash
npm run dev
```

> ✅ **테스트 방법:**  
> 1. 브라우저에서 `http://localhost:5173` 열기
> 2. "홈" 클릭 → 홈 페이지 표시
> 3. "소개" 클릭 → 소개 페이지 표시
> 4. 주소창에 `/asdfasdf` 입력 → 404 페이지 표시
> 5. 브라우저 뒤로가기 버튼 → 정상 작동!

---

### 🎯 라우팅 개념 이해하기

**Route 컴포넌트:**
```jsx
<Route path="/about" element={<About />} />
```
- `path`: URL 경로 (`/about`을 입력하면)
- `element`: 보여줄 컴포넌트 (`About` 컴포넌트를 표시)

**와일드카드 경로:**
```jsx
<Route path="*" element={<NotFound />} />
```
- `*`: 모든 경로를 의미
- 위에 정의된 경로가 아니면 404 페이지 표시

**Link 컴포넌트:**
```jsx
<Link to="/about">소개</Link>
```
- 페이지 새로고침 없이 이동 (SPA의 핵심!)
- `<a href="/about">`와 비슷하지만 더 빠름

---

### 💡 실무 팁

**1. 페이지 추가하는 법:**
```jsx
// 1단계: 페이지 컴포넌트 만들기
// src/pages/Contact.jsx 생성

// 2단계: App.jsx에 Route 추가
<Route path="/contact" element={<Contact />} />

// 3단계: 네비게이션에 링크 추가
<Link to="/contact">연락처</Link>
```

**2. URL 파라미터 사용:**
```jsx
// 상세 페이지 등에 유용
<Route path="/users/:id" element={<UserDetail />} />

// UserDetail.jsx에서 id 가져오기
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  console.log(id); // URL의 :id 값
}
```

**3. 프로그래밍 방식 이동:**
```jsx
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // 로그인 성공 후
    navigate('/dashboard'); // 페이지 이동
  };
}
```

---

## 8. 상태 관리

> 💡 **상태(State)가 뭔가요?**  
> 컴포넌트가 기억해야 하는 값입니다.  
> 예: 카운터 숫자, 로그인 여부, 입력 폼의 내용 등  
> 상태가 바뀌면 화면이 자동으로 업데이트됩니다!

### 8.1 useState (기본 상태 관리)

> 🔢 **useState란?**  
> 컴포넌트 안에서 값을 기억하고 바꿀 수 있게 해주는 React 훅입니다.

**예제: 카운터 만들기**

**src/components/Counter.module.css**
```css
.container {
  padding: 2rem;
  max-width: 400px;
  margin: 0 auto;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1.5rem;
  text-align: center;
}

.display {
  font-size: 3rem;
  font-weight: bold;
  color: #3b82f6;
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background-color: #eff6ff;
  border-radius: 8px;
}

.buttonGroup {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  color: white;
}

.increase {
  background-color: #3b82f6;
}

.increase:hover {
  background-color: #2563eb;
}

.decrease {
  background-color: #ef4444;
}

.decrease:hover {
  background-color: #dc2626;
}

.reset {
  background-color: #6b7280;
}

.reset:hover {
  background-color: #4b5563;
}
```

**src/components/Counter.jsx**
```jsx
import React, { useState } from 'react';
import styles from './Counter.module.css';

const Counter = () => {
  // useState 사용법: [현재값, 값을바꾸는함수] = useState(초기값)
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>카운터</h2>
      
      <div className={styles.display}>
        {count}
      </div>
      
      <div className={styles.buttonGroup}>
        <button 
          onClick={() => setCount(count + 1)}
          className={`${styles.button} ${styles.increase}`}
        >
          +1 증가
        </button>
        
        <button 
          onClick={() => setCount(count - 1)}
          className={`${styles.button} ${styles.decrease}`}
        >
          -1 감소
        </button>
        
        <button 
          onClick={() => setCount(0)}
          className={`${styles.button} ${styles.reset}`}
        >
          초기화
        </button>
      </div>
    </div>
  );
};

export default Counter;
```

> 📖 **코드 설명:**  
> - `const [count, setCount] = useState(0)`: 초기값 0인 상태 만들기
> - `count`: 현재 카운터 값
> - `setCount`: 카운터 값을 바꾸는 함수
> - `setCount(count + 1)`: 값을 1 증가
> - 상태가 바뀌면 컴포넌트가 다시 렌더링됨!

---

### 8.2 useState 더 알아보기

**여러 상태 사용하기:**
```jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <form>
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
    </form>
  );
}
```

**객체 상태 관리:**
```jsx
function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    age: 0,
    email: ''
  });
  
  const updateName = (newName) => {
    setUser({ ...user, name: newName }); // 기존 값 유지하며 name만 변경
  };
}
```

---

### 8.3 Zustand (전역 상태 관리)

> 🌍 **전역 상태가 뭔가요?**  
> 여러 컴포넌트가 공유하는 상태입니다.  
> 예: 로그인한 사용자 정보를 모든 페이지에서 사용

**먼저 Zustand 설치:**
```bash
npm install zustand
```

**상태 저장소 만들기:**

**src/stores/userStore.js**
```javascript
import { create } from 'zustand';

// 사용자 정보를 관리하는 저장소
const useUserStore = create((set) => ({
  // 초기 상태
  user: null,
  isLoggedIn: false,
  
  // 로그인 함수
  login: (userData) => set({ 
    user: userData, 
    isLoggedIn: true 
  }),
  
  // 로그아웃 함수
  logout: () => set({ 
    user: null, 
    isLoggedIn: false 
  }),
}));

export default useUserStore;
```

> 📖 **코드 설명:**  
> - `create()`: Zustand 저장소 만들기
> - `set()`: 상태를 업데이트하는 함수
> - 모든 컴포넌트에서 `useUserStore()`로 접근 가능!

---

**저장소 사용하기:**

**src/components/UserProfile.module.css**
```css
.container {
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
}

.card {
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
}

.info {
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.email {
  color: #3b82f6;
  font-weight: 500;
}

.button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  color: white;
  width: 100%;
}

.loginButton {
  background-color: #3b82f6;
}

.loginButton:hover {
  background-color: #2563eb;
}

.logoutButton {
  background-color: #ef4444;
}

.logoutButton:hover {
  background-color: #dc2626;
}
```

**src/components/UserProfile.jsx**
```jsx
import React from 'react';
import useUserStore from '../stores/userStore';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  // Zustand 저장소에서 상태와 함수 가져오기
  const { user, isLoggedIn, login, logout } = useUserStore();

  const handleLogin = () => {
    // 로그인 (실제로는 서버 API 호출)
    login({ 
      name: '홍길동', 
      email: 'hong@example.com' 
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {isLoggedIn ? (
          // 로그인 상태
          <div>
            <h2 className={styles.title}>
              환영합니다, {user.name}님!
            </h2>
            <div className={styles.info}>
              <p>이메일: <span className={styles.email}>{user.email}</span></p>
            </div>
            <button 
              onClick={logout}
              className={`${styles.button} ${styles.logoutButton}`}
            >
              로그아웃
            </button>
          </div>
        ) : (
          // 로그아웃 상태
          <div>
            <h2 className={styles.title}>로그인이 필요합니다</h2>
            <button 
              onClick={handleLogin}
              className={`${styles.button} ${styles.loginButton}`}
            >
              로그인
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
```

---

### 8.4 다른 컴포넌트에서도 같은 상태 사용

**src/components/Header.jsx**
```jsx
import React from 'react';
import useUserStore from '../stores/userStore';

const Header = () => {
  const { user, isLoggedIn } = useUserStore();
  
  return (
    <header>
      {isLoggedIn ? (
        <span>안녕하세요, {user.name}님</span>
      ) : (
        <span>로그인해주세요</span>
      )}
    </header>
  );
};
```

> 💡 **Zustand의 장점:**  
> - `UserProfile`과 `Header`가 같은 로그인 정보 공유!
> - 한 곳에서 로그인하면 모든 컴포넌트가 업데이트됨
> - Props 전달 불필요 (편리함!)

---

### 🎯 상태 관리 선택 가이드

| 상황 | 추천 방법 | 이유 |
|------|----------|------|
| 버튼 클릭 카운터 | useState | 컴포넌트 내부에서만 사용 |
| 입력 폼 값 | useState | 한 컴포넌트에서만 필요 |
| 로그인 정보 | Zustand | 여러 페이지에서 사용 |
| 장바구니 | Zustand | 전체 앱에서 공유 |
| 테마 설정 (다크모드) | Zustand | 모든 컴포넌트에 영향 |

---

### 💡 실무 팁

**1. useState 사용 시 주의사항:**
```jsx
// ❌ Bad: 상태를 직접 수정하면 안 됨!
count = count + 1;

// ✅ Good: 반드시 set 함수 사용
setCount(count + 1);
```

**2. 배열 상태 업데이트:**
```jsx
const [items, setItems] = useState(['사과', '바나나']);

// 추가
setItems([...items, '오렌지']);

// 삭제 (인덱스 1 제거)
setItems(items.filter((_, index) => index !== 1));
```

**3. 비동기 업데이트:**
```jsx
// 이전 값 기반으로 업데이트할 때
setCount(prevCount => prevCount + 1);
```

**4. Zustand 여러 저장소:**
```javascript
// userStore.js - 사용자 관련
export const useUserStore = create(...);

// cartStore.js - 장바구니 관련
export const useCartStore = create(...);

// themeStore.js - 테마 관련
export const useThemeStore = create(...);
```

---

## 9. API 연동

> 💡 **API가 뭔가요?**  
> Application Programming Interface의 약자로, 서버와 데이터를 주고받는 통로입니다.  
> 예: 사용자 목록 가져오기, 게시글 작성하기, 로그인하기 등

> 🌐 **실제 예시:**  
> - 인스타그램에서 게시글 목록 보기 → GET 요청
> - 트위터에 새 트윗 작성 → POST 요청
> - 프로필 정보 수정 → PUT 요청
> - 게시글 삭제 → DELETE 요청

### 9.1 Axios 설정

> ⚙️ **왜 Axios를 사용하나요?**  
> - 브라우저 기본 `fetch`보다 사용하기 편함
> - 에러 처리가 간단함
> - 요청/응답을 자동으로 가공 가능
> - 타임아웃, 인터셉터 등 유용한 기능 많음

**src/services/api.js**
```javascript
import axios from 'axios';

// Axios 인스턴스 생성 (기본 설정 적용)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000, // 10초 내에 응답 없으면 에러
  headers: {
    'Content-Type': 'application/json', // JSON 형식으로 전송
  }
});

// 요청 인터셉터 (요청 보내기 전에 실행)
api.interceptors.request.use(
  (config) => {
    // 로컬 스토리지에서 토큰 가져오기
    const token = localStorage.getItem('token');
    
    // 토큰이 있으면 헤더에 자동 추가
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    console.log('요청 보냄:', config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 (응답 받은 후에 실행)
api.interceptors.response.use(
  (response) => {
    console.log('응답 받음:', response.data);
    return response;
  },
  (error) => {
    // 401 에러 = 인증 실패 (로그인 필요)
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    
    // 500 에러 = 서버 오류
    if (error.response?.status === 500) {
      alert('서버 오류가 발생했습니다.');
    }
    
    return Promise.reject(error);
  }
);

export default api;
```

> 📖 **코드 설명:**  
> - `baseURL`: 모든 요청의 기본 주소
> - `timeout`: 요청 제한 시간
> - `interceptors.request`: 요청 보내기 전 전처리
> - `interceptors.response`: 응답 받은 후 후처리
> - `Bearer ${token}`: 로그인 토큰을 자동으로 추가

---

### 9.2 API 서비스 함수

> 🗂️ **왜 서비스 함수를 만드나요?**  
> - API 호출 코드를 한 곳에 모아서 관리
> - 같은 API를 여러 곳에서 재사용
> - 수정이 필요할 때 한 곳만 바꾸면 됨

**src/services/userService.js**
```javascript
import api from './api';

export const userService = {
  // 사용자 목록 가져오기 (GET)
  getUsers: async () => {
    const response = await api.get('/users');
    return response.data;
  },

  // 특정 사용자 정보 (GET)
  getUserById: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  // 새 사용자 생성 (POST)
  createUser: async (userData) => {
    const response = await api.post('/users', userData);
    return response.data;
  },

  // 사용자 정보 수정 (PUT)
  updateUser: async (id, userData) => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },

  // 사용자 삭제 (DELETE)
  deleteUser: async (id) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  },
};
```

> 💡 **HTTP 메서드 정리:**  
> - **GET**: 데이터 조회 (읽기)
> - **POST**: 새 데이터 생성
> - **PUT**: 기존 데이터 전체 수정
> - **PATCH**: 기존 데이터 일부 수정
> - **DELETE**: 데이터 삭제

---

### 9.3 API 사용 예시

**src/pages/Users.module.css**
```css
.container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.loading {
  text-align: center;
  padding: 3rem;
  color: #6b7280;
  font-size: 1.125rem;
}

.error {
  padding: 1rem;
  background-color: #fee2e2;
  border: 1px solid #ef4444;
  border-radius: 6px;
  color: #dc2626;
  margin-bottom: 1rem;
}

.grid {
  display: grid;
  gap: 1rem;
}

.userCard {
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;
}

.userCard:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.userName {
  font-weight: bold;
  font-size: 1.125rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.userEmail {
  color: #6b7280;
}
```

**src/pages/Users.jsx**
```jsx
import React, { useState, useEffect } from 'react';
import { userService } from '../services/userService';
import styles from './Users.module.css';

const Users = () => {
  // 상태 관리
  const [users, setUsers] = useState([]); // 사용자 목록
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 메시지

  // 컴포넌트가 처음 렌더링될 때 실행
  useEffect(() => {
    fetchUsers();
  }, []); // 빈 배열 = 한 번만 실행

  // 사용자 목록 가져오기
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await userService.getUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || '데이터를 불러오는데 실패했습니다.');
      console.error('에러:', err);
    } finally {
      setLoading(false);
    }
  };

  // 로딩 중
  if (loading) {
    return <div className={styles.loading}>로딩 중...</div>;
  }

  // 에러 발생
  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          에러: {error}
        </div>
        <button onClick={fetchUsers}>다시 시도</button>
      </div>
    );
  }

  // 정상 렌더링
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>사용자 목록</h1>
      
      <div className={styles.grid}>
        {users.map((user) => (
          <div key={user.id} className={styles.userCard}>
            <h3 className={styles.userName}>{user.name}</h3>
            <p className={styles.userEmail}>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
```

> 📖 **코드 설명:**  
> - `useEffect()`: 컴포넌트가 화면에 나타날 때 API 호출
> - `try-catch-finally`: 에러 처리 구조
> - `setLoading`: 로딩 상태 관리
> - `map()`: 배열의 각 항목을 UI로 변환

---

### 9.4 커스텀 훅으로 API 로직 분리

> 🎣 **커스텀 훅이 뭔가요?**  
> 반복되는 로직을 재사용 가능한 함수로 만드는 것입니다.  
> 여러 컴포넌트에서 같은 API 로직을 쉽게 사용할 수 있습니다!

**src/hooks/useUsers.js**
```javascript
import { useState, useEffect } from 'react';
import { userService } from '../services/userService';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 사용자 목록 가져오기
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await userService.getUsers();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 사용자 추가
  const addUser = async (userData) => {
    try {
      const newUser = await userService.createUser(userData);
      setUsers([...users, newUser]);
      return newUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // 사용자 삭제
  const removeUser = async (id) => {
    try {
      await userService.deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    users,
    loading,
    error,
    addUser,
    removeUser,
    refreshUsers: fetchUsers,
  };
};
```

**사용 방법:**
```jsx
import React from 'react';
import { useUsers } from '../hooks/useUsers';
import styles from './UserList.module.css';

const UserList = () => {
  // 커스텀 훅 사용 - 한 줄이면 끝!
  const { users, loading, error, removeUser } = useUsers();

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <div className={styles.container}>
      {users.map((user) => (
        <div key={user.id} className={styles.userCard}>
          <span>{user.name}</span>
          <button onClick={() => removeUser(user.id)}>
            삭제
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
```

> 💡 **커스텀 훅의 장점:**  
> - API 로직을 한 곳에서 관리
> - 여러 컴포넌트에서 재사용
> - 테스트하기 쉬움
> - 컴포넌트 코드가 깔끔해짐

---

### 🎯 실무 팁

**1. 환경별 API 주소:**
```javascript
// .env.development (개발 환경)
VITE_API_URL=http://localhost:3000/api

// .env.production (배포 환경)
VITE_API_URL=https://api.myapp.com
```

**2. 에러 처리 패턴:**
```javascript
try {
  const data = await api.get('/users');
  // 성공 처리
} catch (error) {
  if (error.response) {
    // 서버가 응답했지만 에러
    console.log('에러 코드:', error.response.status);
    console.log('에러 메시지:', error.response.data);
  } else if (error.request) {
    // 요청은 보냈지만 응답이 없음 (네트워크 오류)
    console.log('네트워크 오류');
  } else {
    // 요청 설정 중 에러
    console.log('에러:', error.message);
  }
}
```

**3. 로딩 UX 개선:**
```jsx
// 스켈레톤 UI (로딩 중에도 레이아웃 보여주기)
{loading ? (
  <div className={styles.skeleton}>
    <div className={styles.skeletonItem}></div>
    <div className={styles.skeletonItem}></div>
  </div>
) : (
  <UserList users={users} />
)}
```

**4. API 호출 최적화:**
```javascript
// 불필요한 재호출 방지
useEffect(() => {
  let isMounted = true;
  
  const fetchData = async () => {
    const data = await api.get('/users');
    if (isMounted) {
      setUsers(data);
    }
  };
  
  fetchData();
  
  return () => {
    isMounted = false; // 컴포넌트 언마운트 시
  };
}, []);
```

---

## 10. 유용한 팁

### 10.1 컴포넌트 작성 규칙

> 📝 **좋은 컴포넌트란?**  
> - 하나의 역할만 수행 (단일 책임 원칙)
> - 재사용 가능하게 설계
> - 이름만 봐도 무슨 역할인지 알 수 있음

**Good Examples:**
```jsx
// ✅ 명확한 이름
<Button variant="primary" onClick={handleSubmit}>확인</Button>
<UserProfileCard user={userData} />
<ProductList products={items} />

// ✅ Props는 최소한으로
<Button text="확인" onClick={handleClick} />

// ✅ 재사용 가능
<Card>
  <CardHeader>제목</CardHeader>
  <CardBody>내용</CardBody>
</Card>
```

**Bad Examples:**
```jsx
// ❌ 너무 짧고 불명확
<Btn>확인</Btn>
<C1 />

// ❌ Props가 너무 많음
<Component 
  a={1} b={2} c={3} d={4} e={5} 
  f={6} g={7} h={8} i={9} j={10} 
/>

// ❌ 역할이 불명확
<Thing data={stuff} />
```

---

### 10.2 CSS Modules 활용

**기본 사용법:**
```css
/* Button.module.css */
.button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
}

.primary {
  background-color: blue;
}

.secondary {
  background-color: gray;
}
```

```jsx
// Button.jsx
import styles from './Button.module.css';

function Button({ variant }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      클릭
    </button>
  );
}
```

**조건부 스타일:**
```jsx
// 클래스명 조합
<div className={`${styles.card} ${isActive ? styles.active : ''}`}>

// 여러 조건
<div className={`
  ${styles.button}
  ${variant === 'primary' ? styles.primary : styles.secondary}
  ${disabled ? styles.disabled : ''}
`}>
```

---

### 10.3 성능 최적화

> ⚡ **왜 최적화가 필요한가요?**  
> 불필요한 렌더링을 줄여서 앱을 빠르게 만들 수 있습니다!

**1. React.memo (컴포넌트 메모이제이션)**
```jsx
import React, { memo } from 'react';

// Props가 변경되지 않으면 리렌더링 안 함
const ExpensiveComponent = memo(({ data }) => {
  console.log('렌더링됨!');
  return <div>{data}</div>;
});

export default ExpensiveComponent;
```

**2. useMemo (계산 결과 캐싱)**
```jsx
import { useMemo } from 'react';

function ProductList({ products }) {
  // products가 변경될 때만 다시 계산
  const totalPrice = useMemo(() => {
    console.log('가격 계산 중...');
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  return <div>총 가격: {totalPrice}원</div>;
}
```

**3. useCallback (함수 캐싱)**
```jsx
import { useCallback } from 'react';

function SearchForm() {
  // 함수를 캐싱해서 재사용
  const handleSearch = useCallback((query) => {
    console.log('검색:', query);
  }, []); // 의존성 배열이 비어있으면 한 번만 생성

  return <input onChange={(e) => handleSearch(e.target.value)} />;
}
```

> ⚠️ **주의:** 작은 프로젝트에서는 최적화가 오히려 복잡도만 높일 수 있습니다!  
> 성능 문제가 실제로 발생했을 때 적용하세요.

---

### 10.4 조건부 렌더링

**방법 1: 삼항 연산자**
```jsx
{isLoggedIn ? <UserProfile /> : <LoginButton />}
```

**방법 2: && 연산자**
```jsx
{isLoggedIn && <UserProfile />}
{error && <ErrorMessage text={error} />}
```

**방법 3: 변수에 담기 (복잡한 조건)**
```jsx
function Dashboard() {
  let content;
  
  if (loading) {
    content = <Loading />;
  } else if (error) {
    content = <Error message={error} />;
  } else {
    content = <UserData data={data} />;
  }
  
  return <div>{content}</div>;
}
```

**방법 4: null 처리**
```jsx
{user?.name || '게스트'}  // user가 없으면 '게스트'
{items?.length > 0 ? <List items={items} /> : <Empty />}
```

---

### 10.5 리스트 렌더링

> 🔑 **key가 왜 필요한가요?**  
> React가 어떤 항목이 변경되었는지 효율적으로 파악하기 위해서입니다!

**기본 사용:**
```jsx
const fruits = ['사과', '바나나', '오렌지'];

return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);
```

**객체 배열:**
```jsx
const users = [
  { id: 1, name: '홍길동' },
  { id: 2, name: '김철수' },
];

return (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);
```

> ⚠️ **key 사용 주의사항:**  
> - `key={index}`: 항목 순서가 바뀌지 않을 때만 사용
> - `key={item.id}`: 고유한 ID가 있으면 이것 사용 (권장!)
> - `key={Math.random()}`: 절대 사용하지 마세요!

---

### 10.6 폼 처리 (React Hook Form)

> 📝 **왜 React Hook Form을 쓰나요?**  
> - 코드가 간결해짐
> - 검증(Validation)이 쉬움
> - 성능이 좋음

**설치:**
```bash
npm install react-hook-form
```

**기본 사용:**
```jsx
import { useForm } from 'react-hook-form';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const { 
    register,           // 입력 필드 연결
    handleSubmit,       // 폼 제출 처리
    formState: { errors } // 에러 정보
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // { email: '...', password: '...' }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.field}>
        <input
          {...register('email', { 
            required: '이메일을 입력하세요',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '올바른 이메일 형식이 아닙니다'
            }
          })}
          placeholder="이메일"
          className={styles.input}
        />
        {errors.email && (
          <p className={styles.error}>{errors.email.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <input
          {...register('password', { 
            required: '비밀번호를 입력하세요',
            minLength: {
              value: 6,
              message: '최소 6자 이상 입력하세요'
            }
          })}
          type="password"
          placeholder="비밀번호"
          className={styles.input}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </div>

      <button type="submit" className={styles.button}>
        로그인
      </button>
    </form>
  );
};
```

**LoginForm.module.css:**
```css
.form {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
}

.field {
  margin-bottom: 1rem;
}

.input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
}

.input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.error {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.button {
  width: 100%;
  padding: 0.75rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
}

.button:hover {
  background-color: #2563eb;
}
```

---

### 10.7 환경별 빌드

**개발 서버 실행:**
```bash
npm run dev
# - 핫 리로딩 지원
# - 소스맵 포함 (디버깅 쉬움)
# - 빠른 빌드
```

**프로덕션 빌드:**
```bash
npm run build
# - 코드 압축 및 최적화
# - 번들 크기 최소화
# - dist 폴더에 생성
```

**빌드 결과 미리보기:**
```bash
npm run preview
# - 빌드된 파일을 로컬에서 실행
# - 배포 전 최종 확인용
```

---

### 10.8 유용한 개발 도구

**1. React Developer Tools (필수!)**
- 크롬/파이어폭스 확장 프로그램
- 컴포넌트 구조 확인
- Props, State 실시간 확인
- 성능 프로파일링

**2. VS Code 확장 프로그램**
```
- ES7+ React/Redux snippets → 코드 자동완성
- Auto Rename Tag → 태그 자동 이름 변경
- Prettier → 코드 자동 포맷팅
- ESLint → 코드 품질 검사
```

**3. 코드 스니펫 (단축키)**
```
rafce → React Arrow Function Component
useState → import { useState } from 'react'
useEffect → useEffect 템플릿
```

---

### 10.9 디버깅 팁

**1. console.log 활용:**
```jsx
function MyComponent({ data }) {
  console.log('렌더링됨, data:', data);
  
  useEffect(() => {
    console.log('마운트됨');
    return () => console.log('언마운트됨');
  }, []);
  
  return <div>{data}</div>;
}
```

**2. React DevTools 사용:**
- Components 탭: 컴포넌트 트리 확인
- Profiler 탭: 성능 분석
- Props/State 실시간 수정 가능

**3. 에러 경계 (Error Boundary):**
```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.log('에러 발생:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>문제가 발생했습니다.</h1>;
    }
    return this.props.children;
  }
}

// 사용
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

---

### 10.10 프로젝트 구조 예시 (실무)

```
src/
├── components/           # 재사용 컴포넌트
│   ├── common/          # 공통 컴포넌트
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.module.css
│   │   │   └── index.js
│   │   ├── Input/
│   │   └── Card/
│   └── layout/          # 레이아웃 컴포넌트
│       ├── Header.jsx
│       ├── Footer.jsx
│       └── Sidebar.jsx
│
├── pages/               # 페이지 컴포넌트
│   ├── Home/
│   ├── About/
│   └── Dashboard/
│
├── hooks/               # 커스텀 훅
│   ├── useUsers.js
│   ├── useAuth.js
│   └── useLocalStorage.js
│
├── services/            # API 서비스
│   ├── api.js
│   ├── userService.js
│   └── productService.js
│
├── stores/              # 상태 관리
│   ├── userStore.js
│   └── cartStore.js
│
├── utils/               # 유틸리티 함수
│   ├── formatDate.js
│   ├── validateEmail.js
│   └── constants.js
│
├── styles/              # 전역 스타일
│   ├── global.css
│   └── variables.css
│
├── App.jsx
├── main.jsx
└── index.css
```

---

### 🎯 초보자를 위한 학습 로드맵

**1주차: 기초**
- ✅ 컴포넌트 만들기
- ✅ Props 사용하기
- ✅ useState로 상태 관리

**2주차: 중급**
- ✅ React Router로 페이지 이동
- ✅ useEffect로 생명주기 다루기
- ✅ 폼 다루기

**3주차: 실전**
- ✅ Axios로 API 연동
- ✅ 커스텀 훅 만들기
- ✅ CSS Modules로 스타일링

**4주차: 고급**
- ✅ Zustand로 전역 상태 관리
- ✅ 성능 최적화
- ✅ 에러 처리

---

### 💡 자주 하는 실수와 해결법

**1. 무한 루프:**
```jsx
// ❌ Bad: 무한 렌더링!
useEffect(() => {
  setCount(count + 1);
}); // 의존성 배열 없음

// ✅ Good
useEffect(() => {
  setCount(count + 1);
}, []); // 빈 배열 = 한 번만 실행
```

**2. 상태 직접 수정:**
```jsx
// ❌ Bad
items.push(newItem);

// ✅ Good
setItems([...items, newItem]);
```

**3. 키(key) 누락:**
```jsx
// ❌ Bad
{items.map(item => <div>{item}</div>)}

// ✅ Good
{items.map(item => <div key={item.id}>{item}</div>)}
```

**4. Props 구조분해 실수:**
```jsx
// ❌ Bad
function Button(props) {
  return <button>{props.children.text}</button>
}

// ✅ Good
function Button({ children }) {
  return <button>{children}</button>
}
```

---

## 다음 단계

### 🚀 더 배우고 싶다면?

**기본 마스터했다면:**
1. **TypeScript 도입**: 타입 안정성으로 버그 줄이기
2. **테스팅**: Jest, React Testing Library로 코드 품질 향상
3. **Next.js**: 서버 사이드 렌더링, SEO 최적화

**고급 주제:**
4. **상태 관리 고도화**: Redux, Recoil, Jotai
5. **성능 최적화**: Code Splitting, Lazy Loading
6. **React Native**: 같은 코드로 모바일 앱 만들기

---

## 참고 자료

### 📚 공식 문서
- **React 공식 문서**: https://react.dev/ (한국어 지원)
- **React Router**: https://reactrouter.com/
- **Vite**: https://vitejs.dev/

### 📦 패키지 문서
- **Zustand**: https://github.com/pmndrs/zustand
- **Axios**: https://axios-http.com/
- **React Hook Form**: https://react-hook-form.com/
- **React Icons**: https://react-icons.github.io/react-icons/

### 🎓 학습 자료
- **React 공식 튜토리얼**: Tic-Tac-Toe 게임 만들기
- **FreeCodeCamp**: React 무료 강의
- **YouTube**: 노마드 코더, 드림코딩

### 💬 커뮤니티
- **한국 React 사용자 그룹**: Facebook 그룹
- **Stack Overflow**: 질문/답변
- **GitHub**: 오픈소스 프로젝트

---

## 마치며

> 🎉 **축하합니다!**  
> 이제 React로 웹 애플리케이션을 만들 준비가 되었습니다!

**기억하세요:**
- 처음엔 천천히, 한 번에 하나씩
- 에러는 배움의 기회
- 공식 문서가 최고의 친구
- 직접 만들어보는 게 가장 빠른 학습법

**첫 프로젝트 아이디어:**
- ✅ To-Do 리스트
- ✅ 날씨 앱 (OpenWeatherMap API)
- ✅ 영화 검색 (TMDB API)
- ✅ 간단한 블로그
- ✅ 포트폴리오 사이트

행운을 빕니다! 🚀

---

**작성일**: 2026년 2월 11일  
**버전**: React 18+ 기준  
**스타일**: CSS Modules 사용  

_문의사항이나 오류는 GitHub Issues에 남겨주세요!_