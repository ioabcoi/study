# Vue 3 프로젝트 완전 시작 가이드

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
  - `Volar` (공식 Vue 확장)
  - `ES7+ React/Redux/React-Native snippets` (선택)
  - `Prettier` (코드 포맷팅)
  - `ESLint` (코드 검사)

---

## 2단계: 프로젝트 생성

### 2-1. Vite로 새 프로젝트 생성

터미널 열기 (PowerShell, bash, cmd 모두 가능):

```bash
npm create vite@latest my-vue-app -- --template vue
```

또는 Yarn 사용:
```bash
yarn create vite my-vue-app --template vue
```

`my-vue-app` 부분을 원하는 프로젝트명으로 변경하세요.

### 2-2. 프로젝트 폴더로 이동

```bash
cd my-vue-app
```

### 2-3. 의존성 설치

```bash
npm install
```

또는 Yarn:
```bash
yarn install
```

설치 완료 후 `node_modules` 폴더가 생성됩니다.

---

## 3단계: 폴더 구조 생성

프로젝트 폴더 구조를 다음과 같이 만드세요. (VS Code에서 폴더 우클릭 → 새 폴더 생성)

```
my-vue-app/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   ├── components/
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── Navigation.vue
│   │   └── common/
│   │       ├── Button.vue
│   │       ├── Modal.vue
│   │       └── Card.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   └── Dashboard.vue
│   ├── layouts/
│   │   ├── MainLayout.vue
│   │   └── AdminLayout.vue
│   ├── composables/
│   │   ├── useForm.js
│   │   ├── useFetch.js
│   │   └── useAuth.js
│   ├── stores/
│   │   └── index.js
│   ├── services/
│   │   ├── api.js
│   │   └── userService.js
│   ├── styles/
│   │   ├── index.css
│   │   ├── variables.css
│   │   └── reset.css
│   ├── utils/
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   └── formatters.js
│   ├── directives/
│   ├── plugins/
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── public/
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 4단계: Vite 설정 (경로 별칭)

### 4-1. vite.config.js 수정

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
```

이제 `@`를 사용해서 `src` 폴더의 파일들을 임포트할 수 있습니다.

---

## 5단계: 기본 파일 설정

### 5-1. src/main.js 수정

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'

const app = createApp(App)
app.mount('#app')
```

### 5-2. src/App.vue 수정

```vue
<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>
```

### 5-3. src/styles/reset.css 생성 (CSS 초기화)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -o-text-size-adjust: none;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.5;
  color: #333;
  background-color: #fff;
}

ul, ol {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}

input, textarea, select {
  font-family: inherit;
}
```

### 5-4. src/styles/variables.css 생성 (CSS 변수)

```css
:root {
  /* Colors */
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --danger-color: #e74c3c;
  --warning-color: #f39c12;
  --info-color: #9b59b6;
  --success-color: #27ae60;
  
  --text-color: #333;
  --text-light: #666;
  --border-color: #ddd;
  --bg-light: #f5f5f5;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;

  /* Border Radius */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.15);

  /* Font Sizes */
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
}
```

### 5-5. src/styles/index.css 생성 (전역 스타일)

```css
@import './reset.css';
@import './variables.css';

body {
  font-size: var(--font-size-base);
  color: var(--text-color);
  background-color: var(--bg-light);
}

/* 유틸리티 클래스 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.btn {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  opacity: 0.9;
}
```

---

## 6단계: 샘플 컴포넌트 생성

### 6-1. src/components/Header.vue

```vue
<template>
  <header class="header">
    <div class="container">
      <h1 class="header__logo">My Vue App</h1>
      <nav class="header__nav">
        <a href="/" class="header__link">Home</a>
        <a href="/about" class="header__link">About</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
// 로직 추가 가능
</script>

<style scoped>
.header {
  background-color: var(--primary-color);
  color: white;
  padding: var(--spacing-md) 0;
  box-shadow: var(--shadow-md);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  font-size: var(--font-size-2xl);
  font-weight: bold;
}

.header__nav {
  display: flex;
  gap: var(--spacing-lg);
}

.header__link {
  color: white;
  transition: opacity 0.3s;
}

.header__link:hover {
  opacity: 0.8;
}
</style>
```

### 6-2. src/components/Footer.vue

```vue
<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 My Vue App. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: var(--spacing-lg) 0;
  text-align: center;
  margin-top: auto;
}
</style>
```

### 6-3. src/components/common/Button.vue

```vue
<template>
  <button 
    :class="['btn', `btn-${type}`]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value)
  }
})

defineEmits(['click'])
</script>

<style scoped>
.btn {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: white;
}

.btn-danger {
  background-color: var(--danger-color);
  color: white;
}
</style>
```

### 6-4. src/views/Home.vue

```vue
<template>
  <div class="home">
    <h2>Welcome to Vue 3!</h2>
    <p>프로젝트 구조가 준비되었습니다.</p>
    <Button type="primary" @click="handleClick">Click Me</Button>
  </div>
</template>

<script setup>
import Button from '@/components/common/Button.vue'

const handleClick = () => {
  console.log('Button clicked!')
  alert('Hello Vue!')
}
</script>

<style scoped>
.home {
  padding: var(--spacing-lg);
  text-align: center;
}

h2 {
  margin-bottom: var(--spacing-md);
  color: var(--primary-color);
}

p {
  margin-bottom: var(--spacing-lg);
  color: var(--text-light);
}
</style>
```

---

## 7단계: 유틸리티 함수 샘플

### 7-1. src/utils/helpers.js

```javascript
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ko-KR')
}

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const truncate = (str, length = 50) => {
  return str.length > length ? str.substring(0, length) + '...' : str
}

export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
```

### 7-2. src/composables/useCounter.js (Composable 예제)

```javascript
import { ref } from 'vue'

export const useCounter = (initialValue = 0) => {
  const count = ref(initialValue)

  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue

  return { count, increment, decrement, reset }
}
```

---

## 8단계: 환경변수 설정

### 8-1. .env 파일 생성 (프로젝트 루트)

```
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=My Vue App
```

### 8-2. 컴포넌트에서 사용

```javascript
const apiUrl = import.meta.env.VITE_API_URL
const appName = import.meta.env.VITE_APP_NAME
```

---

## 9단계: 개발 서버 실행

### 터미널에서 실행:

```bash
npm run dev
```

또는 Yarn:
```bash
yarn dev
```

출력:
```
  VITE v4.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

`http://localhost:5173/` 에 접속하여 앱 확인!

---

## 10단계: 빌드 및 배포

### 10-1. 프로덕션 빌드

```bash
npm run build
```

또는 Yarn:
```bash
yarn build
```

결과: `dist` 폴더 생성 (배포할 파일들)

### 10-2. 빌드된 파일 미리보기

```bash
npm run preview
```

---

## 11단계: 추가 패키지 설치 (선택)

### Router 설치 (페이지 라우팅)
```bash
npm install vue-router
```

### Pinia 설치 (상태 관리)
```bash
npm install pinia
```

### Axios 설치 (HTTP 요청)
```bash
npm install axios
```

### Tailwind CSS 설치 (유틸리티 스타일)
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 12단계: Git 설정 (선택)

```bash
git init
git add .
git commit -m "Initial commit: Vue 3 project setup"
```

---

## 문제 해결

### 포트 5173 이미 사용 중
```bash
npm run dev -- --port 3000
```

### 모듈 찾을 수 없음
```bash
npm install
rm -rf node_modules
npm install
```

### 캐시 문제
```bash
npm cache clean --force
npm install
```

---

## 빠른 체크리스트

- [ ] Node.js 설치 및 확인
- [ ] VS Code 설치 및 Volar 확장 설치
- [ ] `npm create vite` 명령 실행
- [ ] `npm install` 실행
- [ ] 폴더 구조 생성
- [ ] `vite.config.js` 경로 별칭 설정
- [ ] 기본 파일 작성 (App.vue, main.js 등)
- [ ] `npm run dev` 실행
- [ ] 브라우저에서 http://localhost:5173/ 확인
- [ ] 컴포넌트 생성 및 테스트

이제 Vue 프로젝트를 시작할 준비가 됐습니다! 🚀