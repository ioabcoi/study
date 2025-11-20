# Vue 프로젝트 폴더 구조 및 네이밍 컨벤션

## 1. 표준 폴더 구조

```
my-vue-project/
├── node_modules/              # npm 패키지
├── public/                     # 정적 파일
│   ├── index.html
│   ├── favicon.ico
│   └── logo.png
├── src/
│   ├── assets/                 # 이미지, 폰트 등 정적 자산
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   ├── components/             # 재사용 가능한 컴포넌트
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── Navigation.vue
│   │   └── common/             # 공통 컴포넌트
│   │       ├── Button.vue
│   │       ├── Modal.vue
│   │       └── Card.vue
│   ├── views/                  # 페이지 단위 컴포넌트
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   └── Dashboard.vue
│   ├── layouts/                # 레이아웃 컴포넌트
│   │   ├── MainLayout.vue
│   │   └── AdminLayout.vue
│   ├── composables/            # Composition API 로직 재사용
│   │   ├── useForm.js
│   │   ├── useFetch.js
│   │   └── useAuth.js
│   ├── stores/                 # Pinia 상태 관리
│   │   ├── index.js
│   │   ├── authStore.js
│   │   └── userStore.js
│   ├── services/               # API 호출, 비즈니스 로직
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── userService.js
│   ├── styles/                 # 전역 스타일
│   │   ├── index.css
│   │   ├── variables.css
│   │   └── reset.css
│   ├── utils/                  # 유틸리티 함수
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   └── formatters.js
│   ├── directives/             # 커스텀 디렉티브
│   │   ├── vFocus.js
│   │   └── vClickOutside.js
│   ├── plugins/                # Vue 플러그인
│   │   ├── axios.js
│   │   └── toast.js
│   ├── router/                 # Vue Router 설정
│   │   ├── index.js
│   │   └── routes.js
│   ├── App.vue                 # 루트 컴포넌트
│   └── main.js                 # 진입점
├── .env                        # 환경변수
├── .gitignore
├── package.json
├── vite.config.js              # Vite 설정 (또는 vue.config.js)
└── README.md
```

## 2. 네이밍 컨벤션

### 파일 및 폴더명
```
✅ Good:
- components/Header.vue        # 파스칼 케이스
- composables/useForm.js       # 카멜 케이스 + use 접두사
- stores/authStore.js
- utils/helpers.js
- pages/                       # 소문자

❌ Bad:
- components/header.vue
- Composables/useForm.js
- components/MY_COMPONENT.vue
```

### 컴포넌트명
```vue
<!-- components/UserProfileCard.vue (파스칼 케이스) -->
<template>
  <div class="user-profile-card">
    <!-- 템플릿 -->
  </div>
</template>

<script setup>
// 사용할 때
import UserProfileCard from '@/components/UserProfileCard.vue'
</script>
```

### CSS 클래스명
```
✅ Good:
- .user-profile-card         # 케밥 케이스
- .btn-primary
- .header__logo              # BEM 스타일

❌ Bad:
- .UserProfileCard           # 파스칼 케이스
- .userProfileCard           # 카멜 케이스
- .user_profile_card         # 스네이크 케이스
```

## 3. CSS/SCSS 연결 방식

### 방식 1: 컴포넌트 스코프 스타일 (권장)
```vue
<!-- components/Header.vue -->
<template>
  <header class="header">
    <h1 class="header__title">My App</h1>
  </header>
</template>

<script setup>
// 로직
</script>

<style scoped>
/* scoped: 이 컴포넌트에만 적용 */
.header {
  background-color: #333;
  padding: 20px;
}

.header__title {
  color: white;
  font-size: 24px;
}
</style>
```

### 방식 2: SCSS/SASS 사용
```vue
<style lang="scss" scoped>
$primary-color: #333;
$padding: 20px;

.header {
  background-color: $primary-color;
  padding: $padding;

  &__title {
    color: white;
    font-size: 24px;
  }
}
</style>
```

### 방식 3: 전역 스타일 설정 (main.js)
```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'      // 전역 CSS
import './styles/variables.css'  // CSS 변수

const app = createApp(App)
app.mount('#app')
```

```css
/* styles/variables.css */
:root {
  --primary-color: #333;
  --padding-lg: 20px;
  --border-radius: 8px;
}
```

```vue
<!-- 컴포넌트에서 사용 -->
<style scoped>
.header {
  background-color: var(--primary-color);
  padding: var(--padding-lg);
  border-radius: var(--border-radius);
}
</style>
```

### 방식 4: CSS Module
```vue
<template>
  <div :class="$style.header">
    <h1 :class="$style.title">My App</h1>
  </div>
</template>

<style module>
.header {
  background-color: #333;
  padding: 20px;
}

.title {
  color: white;
}
</style>
```

## 4. JavaScript 모듈 연결

### 유틸리티 함수
```javascript
// utils/helpers.js
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString()
}

export const truncate = (str, length) => {
  return str.length > length ? str.substring(0, length) + '...' : str
}
```

```vue
<!-- 컴포넌트에서 사용 -->
<script setup>
import { formatDate, truncate } from '@/utils/helpers'

const date = formatDate(new Date())
</script>
```

### Composables (로직 재사용)
```javascript
// composables/useFetch.js
import { ref, onMounted } from 'vue'

export const useFetch = (url) => {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchData = async () => {
    loading.value = true
    try {
      const response = await fetch(url)
      data.value = await response.json()
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchData)

  return { data, loading, error }
}
```

```vue
<!-- 컴포넌트에서 사용 -->
<script setup>
import { useFetch } from '@/composables/useFetch'

const { data, loading, error } = useFetch('/api/users')
</script>

<template>
  <div v-if="loading">로딩 중...</div>
  <div v-else-if="error">에러 발생</div>
  <div v-else>{{ data }}</div>
</template>
```

### 서비스 레이어
```javascript
// services/userService.js
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const userService = {
  getUsers: () => axios.get(`${API_URL}/users`),
  getUser: (id) => axios.get(`${API_URL}/users/${id}`),
  createUser: (data) => axios.post(`${API_URL}/users`, data),
  updateUser: (id, data) => axios.put(`${API_URL}/users/${id}`, data),
  deleteUser: (id) => axios.delete(`${API_URL}/users/${id}`)
}
```

```vue
<!-- 컴포넌트에서 사용 -->
<script setup>
import { ref, onMounted } from 'vue'
import { userService } from '@/services/userService'

const users = ref([])

const loadUsers = async () => {
  try {
    const response = await userService.getUsers()
    users.value = response.data
  } catch (error) {
    console.error('Failed to load users:', error)
  }
}

onMounted(loadUsers)
</script>
```

## 5. 경로 별칭 설정 (vite.config.js)

```javascript
// vite.config.js
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

그러면 이렇게 임포트할 수 있습니다:
```javascript
// ✅ Good
import Header from '@/components/Header.vue'
import { useFetch } from '@/composables/useFetch'
import { userService } from '@/services/userService'

// ❌ Bad
import Header from '../../../components/Header.vue'
```

## 6. 완전한 예제 (전체 흐름)

```
src/
├── components/
│   ├── Header.vue
│   ├── UserList.vue
│   └── common/
│       └── Button.vue
├── views/
│   ├── Users.vue
│   └── Dashboard.vue
├── composables/
│   └── useUsers.js
├── services/
│   └── userService.js
├── stores/
│   └── userStore.js
├── styles/
│   ├── index.css
│   └── variables.css
├── utils/
│   └── helpers.js
├── App.vue
└── main.js
```

```vue
<!-- views/Users.vue -->
<template>
  <div class="users-page">
    <Header />
    <UserList :users="users" :loading="loading" />
  </div>
</template>

<script setup>
import { useUsers } from '@/composables/useUsers'
import Header from '@/components/Header.vue'
import UserList from '@/components/UserList.vue'

const { users, loading } = useUsers()
</script>

<style scoped>
.users-page {
  padding: var(--padding-lg);
}
</style>
```

## 7. package.json 스크립트

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src/**/*.{js,vue}",
    "format": "prettier --write src/**/*.{js,vue,css}"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.0.0",
    "vite": "^4.0.0",
    "vue": "^3.0.0"
  }
}
```

이 구조를 따르면 프로젝트가 커져도 관리하기 쉽고 팀 협업이 수월합니다!