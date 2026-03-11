React 프로젝트 폴더 구조 및 네이밍 컨벤션

# 레이어 단위 구조 (Layer-based Architecture)

## 1. 표준 폴더 구조 가이드

```
my-react-project/
├── node_modules/               # npm 패키지
├── public/                     # 정적 파일 (favicon, manifest 등)
│   ├── index.html
│   └── logo192.png
├── src/
│   ├── assets/                 # 이미지, 폰트 등 정적 자산
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   ├── components/             # 재사용 가능한 컴포넌트
│   │   ├── layout/             # Header, Footer 등 레이아웃 관련
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── common/             # 공통 UI 컴포넌트 (원자 단위)
│   │       ├── Button.jsx
│   │       ├── Modal.jsx
│   │       └── Input.jsx
│   ├── pages/                  # 페이지 단위 컴포넌트 (라우트 매칭)
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Dashboard.jsx
│   ├── hooks/                  # 커스텀 훅 (비즈니스 로직 재사용)
│   │   ├── useForm.js
│   │   ├── useFetch.js
│   │   └── useAuth.js
│   ├── context/                # Context API 설정
│   │   └── AuthContext.jsx
│   ├── store/                  # 전역 상태 관리 (Zustand, Redux 등)
│   │   ├── authStore.js
│   │   └── userStore.js
│   ├── services/               # API 호출 (Axios 인스턴스 등)
│   │   ├── api.js
│   │   └── userService.js
│   ├── styles/                 # 전역 스타일 및 테마
│   │   ├── index.css
│   │   ├── theme.css
│   │   └── reset.css
│   ├── utils/                  # 유틸리티 함수
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   └── constants.js
│   ├── App.jsx                 # 루트 컴포넌트 (라우터 설정)
│   └── main.jsx                # 진입점 (DOM 렌더링)
├── .env                        # 환경변수
├── .gitignore
├── package.json
├── vite.config.js              # Vite 설정
└── README.md
```

## 2. 네이밍 컨벤션

### 파일 및 폴더명
```
✅ Good:
- components/UserProfile.jsx    # 컴포넌트는 파스칼 케이스
- hooks/useAuth.js              # 훅은 카멜 케이스 + use 접두사
- utils/formatters.js           # 일반 JS 파일은 카멜 케이스
- pages/                        # 폴더는 소문자 추천

❌ Bad:
- components/userProfile.jsx
- Hooks/UseAuth.js
- components/MY_COMPONENT.jsx
```

### 컴포넌트 선언 (함수형)
```javaScript
// components/common/Button.jsx (파스칼 케이스)
import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button className="base-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
```

### CSS 클래스명
```
✅ Good:
- .user-profile-container       # 케밥 케이스 (React에서도 일반적)
- .header__nav--active          # BEM 스타일

❌ Bad:
- .UserProfileContainer         # 파스칼 케이스
- .userProfile                  # 카멜 케이스
```

## 3. 스타일링 방식

### 방식 1: CSS Modules (권장)
클래스명 충돌을 방지하기 위해 사용합니다. 파일명을 `Name.module.css`로 생성합니다.
```javaScript
// components/common/Button.jsx
import styles from './Button.module.css';

export const Button = () => {
  return <button className={styles.primaryBtn}>Click</button>;
}
```

### 방식 2: Styled Components (CSS-in-JS)
```javaScript
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--primary-color);
  padding: 10px;
`;

export default function MyPage() {
  return <StyledButton>전송</StyledButton>;
}
```

## 4. 커스텀 훅 (비즈니스 로직 분리)

```javascript
// hooks/useToggle.js
import { useState } from 'react';

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(!value);
  return [value, toggle];
};
```

```javascript
// 컴포넌트에서 사용
import { useToggle } from '@/hooks/useToggle';

function Modal() {
  const [isOpen, toggleOpen] = useToggle(false);
  return <button onClick={toggleOpen}>{isOpen ? '닫기' : '열기'}</button>;
}
```

## 5. 경로 별칭 설정 (Vite 기반)
`vite.config.js` 설정을 통해 상대 경로의 지옥(../../..)에서 벗어납니다.
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
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

사용 예시:
```javascript
// ✅ Good
import Button from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';

// ❌ Bad
import Button from '../../../components/common/Button';
```

## 6. 서비스 레이어 (API 통신)

```javascript
// services/userService.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchUsers = () => api.get('/users').then(res => res.data);
```

## 7. package.json 스크립트

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0"
  }
}
```

----------------------------------------------------------------------------------------------------------------------------------------------------

팁
React 프로젝트에서는 컴포넌트 폴더 안에 해당 컴포넌트의 CSS와 테스트 코드를 함께 두는 **'컴포넌트 단위 구조(Component-First)'**도 많이 사용됩니다. 
위 가이드는 입문자가 관리하기 가장 쉬운 **'레이어 단위 구조'**를 기준으로 작성되었습니다.

----------------------------------------------------------------------------------------------------------------------------------------------------

웹 개발에서 프로젝트의 '디렉토리 설계(Architecture)' 방식은 크게 두 가지로 나뉩니다. 
두 방식은 단순히 폴더를 만드는 법의 차이를 넘어, **"관심사를 어떻게 분리하느냐"**에 대한 철학 차이라고 볼 수 있습니다.

1. 레이어 단위 구조 (Layer-based Architecture)
앞서 가이드해 드린 방식입니다. 파일의 **'역할(Role)'**에 따라 폴더를 나눕니다.

특징: 모든 컴포넌트는 components 폴더에, 모든 로직은 hooks 폴더에 모아둡니다.
장점: 특정 기능을 찾기보다 "컴포넌트를 수정해야지" 할 때 어디로 갈지 명확합니다. 규모가 작은 프로젝트에서 구조가 한눈에 들어옵니다.
단점: 프로젝트가 커지면 한 폴더 안에 파일이 수십 개씩 쌓여서 관리가 힘들어집니다. 
(예: LoginButton.jsx는 components에 있고, useLogin.js는 저 멀리 hooks에 있어 연관 파일을 찾기 위해 폴더를 계속 오가야 함)

2. 컴포넌트 단위 구조 (Component-First / Feature-based)
파일의 **'기능(Feature)'**이나 **'도메인'**을 중심으로 관련된 파일을 한데 모으는 방식입니다.

특징: 하나의 컴포넌트 폴더 안에 해당 컴포넌트에서만 쓰이는 스타일, 로직(Hook), 테스트 코드를 모두 넣습니다.
구조 예시:
src/
├── components/
│   └── UserProfile/           # 관련 파일을 모두 한 폴더에!
│       ├── UserProfile.jsx
│       ├── UserProfile.module.css
│       ├── useUserAvatar.js   # 이 컴포넌트 전용 훅
│       └── UserProfile.test.js
장점: 특정 기능을 수정할 때 해당 폴더 하나만 보면 됩니다. 모듈화가 잘 되어 있어 다른 프로젝트로 옮기거나 삭제하기 매우 쉽습니다.
단점: 공통으로 쓰이는 컴포넌트와 특정 페이지에서만 쓰이는 컴포넌트를 구분하는 설계 능력이 필요합니다.

3. 한눈에 비교하기

비교 항목         레이어 단위 (Layered)                     컴포넌트 단위 (Component-First)
분류 기준         파일의 기술적 역할 (Hook인가? UI인가?)    파일의 기능적 소속 (어느 기능의 일부인가?)
추천 프로젝트     소규모, 개인 토이 프로젝트                중대형 프로젝트, 협업 프로젝트
파일 접근성       같은 성격의 파일을 찾기 쉬움              연관된 로직과 UI를 동시에 수정하기 쉬움
유지보수          프로젝트가 커질수록 복잡도 급상승         기능 단위로 독립되어 관리가 수월함

----------------------------------------------------------------------------------------------------------------------------------------------------

# 컴포넌트 단위(Feature-based) 구조 가이드

## 1. 프로젝트 폴더 구조
이 구조의 핵심은 `features/` 폴더입니다. 각 기능(맛집 지도, 검색, 유저 관리 등)이 자기만의 독립된 작은 앱처럼 존재합니다.
```
src/
├── assets/             # 전역 정적 파일 (로고 등)
├── components/         # 공통 컴포넌트 (공통 버튼, 입력창 등)
│   └── ui/             # 디자인 시스템 기반의 최소 단위 컴포넌트
├── features/           # ★ 프로젝트의 핵심 기능 단위 ★
│   ├── map/            # 지도 관련 기능
│   │   ├── components/ # 지도 전용 마커, 오버레이 등
│   │   ├── hooks/      # useKakaoMap 등의 전용 훅
│   │   ├── services/   # mapApi.js 등
│   │   ├── types/      # (TS 사용 시)
│   │   └── index.js    # 외부로 공개할 파일들 (Public API)
│   ├── places/         # 장소 리스트 및 상세 정보 기능
│   │   ├── components/ 
│   │   └── store/      # placeStore.js (Zustand 등)
│   └── search/         # 검색 기능
├── layouts/            # 전체 레이아웃 (MainLayout 등)
├── pages/              # 실제 라우트와 매칭되는 페이지
├── styles/             # 전역 스타일
└── utils/              # 전역 공통 함수
```

## 2. 네이밍 및 구성 컨벤션

### 2-1. Feature 폴더 구성 방식
각 기능 폴더 안에 필요한 모든 것을 넣습니다. 
이렇게 하면 다른 팀원이 '지도' 기능을 수정할 때 `features/map` 폴더만 보면 된다는 확신을 가질 수 있습니다.

### 2-2. index.js (Barrels) 활용
Feature 내부의 복잡한 구조를 외부(Pages 등)에 노출하지 않기 위해 `index.js`를 통해 내보낼 것만 정합니다.
```javaScript
// src/features/map/index.js
export * from './components/KakaoMap';
export * from './hooks/useMapControl';
```

## 3. 컴포넌트 작성 예시 (컴포넌트 단위)
컴포넌트와 그 컴포넌트에서만 쓰이는 스타일/테스트를 한 폴더에 묶습니다.
```javaScript
src/components/ui/Button/
├── Button.jsx
├── Button.module.css
└── Button.test.js
```

```javaScript
// src/components/ui/Button/Button.jsx
import styles from './Button.module.css';

export const Button = ({ children, onClick }) => (
  <button className={styles.primary} onClick={onClick}>
    {children}
  </button>
);
```

## 4. 스타일링 및 로직 연결

### 4-1. CSS Modules 사용
컴포넌트 단위 구조에서는 해당 컴포넌트 폴더 안에 스타일 파일을 두는 것이 정석입니다.
```javascript
// src/features/map/components/MapMarker.jsx
import styles from './MapMarker.module.css';

export const MapMarker = ({ label }) => {
  return <div className={styles.markerContainer}>{label}</div>;
};
```

### 4-2. 전용 훅(Hooks) 연결
해당 기능에서만 쓰이는 로직은 `features/[feature-name]/hooks`에 둡니다.
```javascript
// src/features/map/hooks/useKakaoMap.js
import { useState, useEffect } from 'react';

export const useKakaoMap = (containerId) => {
  const [map, setMap] = useState(null);
  // 지도 초기화 로직...
  return map;
};
```

## 5. 경로 별칭 (vite.config.js)
구조가 깊어질 수 있으므로 절대 경로 설정은 필수입니다.
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@features': path.resolve(__dirname, './src/features'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
})
```

## 6. 레이어 구조 vs 컴포넌트 구조 요약

구분    레이어 단위 (가이드 1)                  컴포넌트 단위 (현재 가이드)
장점    구조가 단순함, 파일 찾기 직관적(초기)   유지보수가 쉬움, 기능별 독립성 보장
단점    폴더 하나에 파일이 너무 많아짐          초기 설계 비용이 높고 구조가 깊어짐
추천    맛집 지도 초기 개발 단계                기능 확장(리뷰, 유저, 랭킹 등) 예정 시

----------------------------------------------------------------------------------------------------------------------------------------------------