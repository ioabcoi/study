# React + Vite 프로젝트 완전 시작 가이드

## 1단계: 개발 환경 설정

### 필수 소프트웨어 설치

#### 1-1. Node.js 설치
- [nodejs.org](https://nodejs.org) 방문
- LTS (장기 지원) 버전 다운로드 및 설치
- 설치 후 터미널에서 확인:
```bash
node --version    # v18.0.0 이상
npm --version     # 9.0.0 이상
```

#### 1-2. 코드 에디터 설치
- [Visual Studio Code](https://code.visualstudio.com) 다운로드
- VS Code에서 확장 프로그램 설치:
  - `ES7+ React/Redux/React-Native snippets` (강력 추천)
  - `Prettier` (코드 포맷팅)
  - `ESLint` (코드 검사)
  - `Tailwind CSS IntelliSense` (선택)

---

## 2단계: 프로젝트 생성

### 2-1. Vite로 새 프로젝트 생성

터미널 열기 (PowerShell, bash, cmd 모두 가능):

```bash
npm create vite@latest my-react-app -- --template react
```

JavaScript 대신 TypeScript를 사용하려면 -- --template react-ts를 입력하세요.

### 2-2. 프로젝트 폴더로 이동 및 설치

```bash
cd my-react-app
npm install
```

---

## 3단계: 폴더 구조 생성

리액트의 자유로운 구조 속에서도 실무에서 가장 선호되는 구조입니다.

```
my-react-app/
├── src/
│   ├── assets/          # 이미지, 폰트 등 정적 파일
│   ├── components/      # 재사용 가능한 공통 컴포넌트
│   │   ├── layout/      # Header, Footer 등
│   │   └── common/      # Button, Input, Modal 등
│   ├── pages/           # 라우트별 페이지 컴포넌트
│   ├── hooks/           # 커스텀 훅 (useAuth, useFetch 등)
│   ├── context/         # Context API 상태 관리
│   ├── store/           # Redux 또는 Zustand 입출력
│   ├── services/        # API 통신 관련 (axios 인스턴스 등)
│   ├── styles/          # 전역 CSS, CSS 변수 등
│   ├── utils/           # 유틸리티 함수 (날짜 포맷 등)
│   ├── App.jsx          # 메인 루트 컴포넌트
│   └── main.jsx         # 엔트리 포인트
├── public/
├── .env                 # 환경 변수
├── vite.config.js       # Vite 설정
└── package.json
```

---

## 4단계: Vite 설정 (경로 별칭)

### 4-1. vite.config.js 수정

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

---

## 5단계: 기본 파일 설정

### 5-1. src/styles/variables.css (디자인 시스템)

```css
:root {
  --primary-color: #61dafb;
  --bg-dark: #282c34;
  --text-main: #ffffff;
  --spacing-md: 16px;
  --border-radius: 8px;
}
```

### 5-2. src/App.jsx (구조 잡기)

```javascript
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import '@/styles/index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

---

## 6단계: 샘플 컴포넌트 및 훅

### 6-1. src/components/common/Button.jsx

```javascript
import React from 'react';

const Button = ({ children, onClick, type = 'primary' }) => {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
```

### 6-2. src/hooks/useCounter.js (커스텀 훅)

```javascript
import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return { count, increment, decrement };
};
```

---

## 7단계: 환경 변수 사용법

### 7-1. .env 설정

Vite에서는 변수명 앞에 반드시 **VITE_**를 붙여야 합니다.

```javascript
VITE_API_URL=https://api.mysite.com
```

### 7-2. 컴포넌트에서 호출

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 8단계: 실행 및 빌드

### 8-1. 개발 서버 실행

```bash
npm run dev
```

### 8-2. 프로덕션 빌드

```bash
npm run build
```

---

## 9단계: 자주 쓰는 추가 패키지

### 9-1 라우팅 (React Router)

```bash
npm install react-router-dom
```

### 9-2 상태 관리 (Zustand - 요즘 대세)

```bash
npm install zustand
```

### 9-3 HTTP 통신 (Axios)

```bash
npm install axios
```

### 9-4 스타일링 (Styled Components)

```bash
npm install styled-components
```

---

## 빠른 체크리스트

- [ ] Node.js 및 VS Code 설치 완료
- [ ] `npm create vite` 로 프로젝트 생성
- [ ] `@` 경로 별칭 설정 `(vite.config.js)`
- [ ] `src` 내 폴더 구조 세팅
- [ ] `npm run dev` 후 브라우저 접속 확인

이제 React 프로젝트를 시작할 준비가 됐습니다! 🚀