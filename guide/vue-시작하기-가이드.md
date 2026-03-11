# Vue.js 시작하기 완벽 가이드 (초보자용)

Vue.js를 처음 시작하는 분들을 위한 단계별 가이드입니다.

## Vue.js란?

Vue.js(뷰)는 사용자 인터페이스를 만들기 위한 JavaScript 프레임워크입니다. 

**쉽게 말하면**: 웹 페이지를 더 쉽고 효율적으로 만들 수 있게 도와주는 도구예요.

### Vue의 장점
- **배우기 쉬움**: React나 Angular보다 진입장벽이 낮습니다
- **유연함**: 간단한 기능부터 복잡한 애플리케이션까지 모두 가능
- **빠름**: 성능이 우수하고 최적화가 잘 되어 있습니다
- **한국어 문서**: 공식 한국어 문서가 잘 되어 있어요

### 주요 용어 정리
- **프레임워크**: 애플리케이션 개발을 위한 뼈대/구조
- **컴포넌트**: 재사용 가능한 UI 조각 (레고 블록처럼 조립해서 사용)
- **반응형(Reactive)**: 데이터가 변하면 화면이 자동으로 업데이트되는 것

## 1. 개발 환경 준비

### Node.js 설치

**Node.js가 뭔가요?**
Node.js는 JavaScript를 컴퓨터에서 실행할 수 있게 해주는 프로그램입니다. Vue.js 개발에 필요한 도구들을 사용하려면 반드시 설치해야 합니다.

**설치 방법:**
1. [Node.js 공식 사이트](https://nodejs.org/)에서 LTS 버전 다운로드
   - LTS(Long Term Support): 안정적이고 오래 지원되는 버전
   - 왼쪽에 있는 녹색 버튼 클릭!
2. 설치 후 터미널(명령 프롬프트)에서 확인:

```bash
node --version
npm --version
```

위 명령어를 입력했을 때 버전 번호가 나오면 성공입니다!

**npm이 뭔가요?**
npm(Node Package Manager)은 JavaScript 라이브러리들을 쉽게 설치하고 관리할 수 있게 해주는 도구입니다. Node.js를 설치하면 자동으로 함께 설치됩니다.

### 코드 에디터 설치

**에디터가 왜 필요한가요?**
메모장으로도 코드를 작성할 수 있지만, 전문 코드 에디터는 자동완성, 오류 체크, 색상 구분 등 개발을 훨씬 편하게 만들어줍니다.

- **VS Code** 추천 (https://code.visualstudio.com/)
  - 무료이고 가장 많이 사용되는 에디터입니다
  
**VS Code 확장 프로그램 설치 (필수!):**
1. VS Code를 실행하고 왼쪽 사이드바에서 확장(Extensions) 아이콘 클릭
2. 다음 확장들을 검색해서 설치:
   - **Volar** (Vue 공식 확장) - Vue 파일 작업에 필수
   - **ESLint** - 코드 오류 검사
   - **Prettier** - 코드 자동 정리

💡 **실무 팁**: Volar를 설치하면 Vue 파일에서 자동완성과 오류 체크가 가능해집니다. 반드시 설치하세요!

## 2. Vue 프로젝트 생성

### Vite란?

**Vite(비트)**는 Vue 프로젝트를 빠르게 시작하고 개발할 수 있게 해주는 빌드 도구입니다.
- 예전에는 Vue CLI를 사용했지만, 지금은 Vite가 공식 권장 도구입니다
- 매우 빠르고 설정이 간단합니다

### 프로젝트 만들기

**터미널을 열고** (VS Code에서 Ctrl+` 또는 상단 메뉴 → Terminal → New Terminal)

```bash
npm create vue@latest
```

이 명령어를 실행하면 대화형으로 프로젝트를 설정할 수 있습니다:

```
✔ Project name: my-vue-app               # 프로젝트 이름 (영문, 소문자 권장)
✔ Add TypeScript? No                      # TypeScript 사용 여부
✔ Add JSX Support? No                     # JSX 사용 여부
✔ Add Vue Router? Yes                     # 페이지 라우팅 (여러 페이지 만들 거면 Yes)
✔ Add Pinia? Yes                          # 상태 관리 (나중에 필요하면 Yes)
✔ Add Vitest? No                          # 테스트 도구
✔ Add ESLint? Yes                         # 코드 검사 (Yes 추천)
✔ Add Prettier? Yes                       # 코드 포맷팅 (Yes 추천)
```

**초보자 추천 설정:**
- TypeScript: **No** (나중에 익숙해지면 사용)
- JSX: **No** 
- Vue Router: **Yes** (페이지가 2개 이상이면 필요)
- Pinia: **No** (처음엔 불필요, 나중에 필요하면 추가)
- ESLint: **Yes** (코드 오류를 잡아줌)
- Prettier: **Yes** (코드를 예쁘게 정리)

### 프로젝트 실행하기

```bash
cd my-vue-app          # 프로젝트 폴더로 이동
npm install            # 필요한 패키지들 설치 (1-2분 소요)
npm run dev            # 개발 서버 실행
```

`npm install`은 프로젝트에 필요한 모든 라이브러리를 다운로드합니다. 처음 한 번만 실행하면 됩니다.

**성공하면 이런 메시지가 나타납니다:**
```
  VITE v5.x.x  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

브라우저에서 `http://localhost:5173`로 접속하면 Vue 앱이 실행됩니다! 🎉

💡 **실무 팁**: 
- `npm run dev`로 서버를 실행한 후, 코드를 수정하면 **자동으로 화면이 새로고침**됩니다 (Hot Reload)
- 서버를 종료하려면 터미널에서 `Ctrl+C`를 누르세요

## 3. 폴더 구조 이해하기

프로젝트를 만들면 많은 폴더와 파일이 생성됩니다. 처음엔 복잡해 보이지만, 실제로 자주 사용하는 것은 몇 개뿐입니다!

```
my-vue-app/
├── node_modules/          # 📦 설치된 라이브러리들 (건드리지 마세요!)
├── public/                # 🌍 정적 파일 (이미지 등, 그대로 사용됨)
│   └── favicon.ico        #    웹사이트 아이콘
├── src/                   # 💻 여러분이 작업할 메인 폴더!
│   ├── assets/           #    이미지, CSS, 폰트 등
│   ├── components/       #    재사용 가능한 컴포넌트들
│   │   └── HelloWorld.vue
│   ├── views/            #    페이지 컴포넌트들 (Router 사용시)
│   │   └── HomeView.vue
│   ├── router/           #    페이지 이동 설정 (Router 사용시)
│   │   └── index.js
│   ├── stores/           #    전역 상태 관리 (Pinia 사용시)
│   ├── App.vue           #    ⭐ 최상위 컴포넌트
│   └── main.js           #    ⭐ 앱 시작점 (진입 파일)
├── index.html            # HTML 기본 파일
├── package.json          # 프로젝트 정보 및 의존성 목록
├── vite.config.js        # Vite 설정 파일
└── .gitignore            # Git에서 제외할 파일 목록
```

### 주요 폴더/파일 설명

**🔥 자주 사용하는 것들:**

1. **src/components/** 
   - 재사용 가능한 컴포넌트를 만드는 곳
   - 예: 버튼, 카드, 헤더 등
   - 파일명은 대문자로 시작 (예: `MyButton.vue`)

2. **src/views/**
   - 페이지 단위 컴포넌트
   - 예: 홈페이지, 로그인페이지, 마이페이지 등
   - Vue Router를 설치했을 때만 생성됩니다

3. **src/App.vue**
   - 모든 컴포넌트의 부모
   - 여기에 공통 레이아웃(헤더, 푸터)을 넣습니다

4. **src/main.js**
   - Vue 앱을 초기화하고 시작하는 파일
   - 전역 설정을 여기서 합니다

5. **src/assets/**
   - 이미지, CSS, 폰트 파일 등
   - Vite가 최적화해서 빌드에 포함시킵니다

**❓ 잘 안 건드리는 것들:**

- **node_modules/**: npm으로 설치된 패키지들. 절대 수정하지 마세요!
- **package.json**: 프로젝트 정보와 사용 중인 라이브러리 목록
- **vite.config.js**: Vite 설정 (고급 설정이 필요할 때만 수정)

💡 **실무 팁**:
- `components` 폴더 안에 하위 폴더를 만들어서 정리하세요
  ```
  components/
    ├── common/      # 공통 컴포넌트
    ├── layout/      # 레이아웃 컴포넌트
    └── features/    # 기능별 컴포넌트
  ```
- 처음에는 `src/components`와 `src/App.vue`만 신경 쓰면 됩니다!

## 4. Vue 컴포넌트 기본 구조

Vue 컴포넌트는 `.vue` 확장자를 가진 파일입니다. 하나의 파일에 HTML, JavaScript, CSS가 모두 들어있어요!

### 컴포넌트의 3가지 구성 요소

```vue
<template>
  <!-- 1️⃣ HTML 템플릿 (화면에 보이는 부분) -->
  <div class="hello">
    <h1>{{ message }}</h1>
    <button @click="changeMessage">클릭!</button>
  </div>
</template>

<script>
// 2️⃣ JavaScript (로직, 데이터, 기능)
export default {
  name: 'HelloWorld',
  
  // 이 컴포넌트에서 사용할 데이터
  data() {
    return {
      message: '안녕하세요, Vue!'
    }
  },
  
  // 이 컴포넌트의 기능들
  methods: {
    changeMessage() {
      this.message = '메시지가 변경되었습니다!'
    }
  }
}
</script>

<style scoped>
/* 3️⃣ CSS (스타일링) */
/* scoped: 이 컴포넌트에만 적용되는 스타일 */
.hello {
  color: #42b983;
}
</style>
```

### 각 부분 자세히 알아보기

**📄 Template (템플릿)**
- HTML처럼 보이지만 Vue의 특별한 기능이 추가됩니다
- `{{ }}`: 데이터를 화면에 표시 (머스태시/보간법)
- `@click`: 클릭 이벤트 (@는 v-on:의 축약형)
- 반드시 **하나의 최상위 요소**로 감싸야 합니다

**⚙️ Script (스크립트)**
- `name`: 컴포넌트 이름 (디버깅할 때 유용)
- `data()`: 이 컴포넌트가 사용할 데이터 정의
  - **반드시 함수여야 하고**, 객체를 return 해야 합니다
  - 여기 정의된 데이터는 화면에서 `{{ message }}`처럼 사용 가능
- `methods`: 이 컴포넌트의 함수들
  - `this.message`로 데이터에 접근 가능

**🎨 Style (스타일)**
- `scoped`: 이 컴포넌트에만 적용되는 스타일
  - scoped를 쓰지 않으면 전역 스타일이 됩니다
  - 다른 컴포넌트에 영향을 주지 않아 안전합니다

### 주요 옵션들

```vue
<script>
export default {
  name: 'MyComponent',        // 컴포넌트 이름
  
  props: {                    // 부모로부터 받는 데이터
    title: String,
    count: Number
  },
  
  data() {                    // 컴포넌트 내부 데이터
    return {
      message: 'Hello'
    }
  },
  
  computed: {                 // 계산된 값 (자동 업데이트)
    fullMessage() {
      return this.title + ': ' + this.message
    }
  },
  
  methods: {                  // 함수들
    handleClick() {
      console.log('클릭!')
    }
  },
  
  created() {                 // 라이프사이클 훅 (컴포넌트 생성 시)
    console.log('컴포넌트 생성됨!')
  },
  
  mounted() {                 // 라이프사이클 훅 (화면에 표시된 후)
    console.log('화면에 표시됨!')
  }
}
</script>
```

💡 **실무 팁**:
- `data`는 반드시 함수로 작성하세요. 객체로 쓰면 오류 발생!
- `scoped` 스타일을 사용하면 CSS 충돌을 방지할 수 있습니다
- 컴포넌트 이름은 2단어 이상 조합을 권장 (예: `UserProfile`, `PostCard`)

## 5. 첫 번째 컴포넌트 만들기

이제 직접 컴포넌트를 만들어봅시다! 간단한 카운터 컴포넌트를 만들어볼게요.

### Step 1: 파일 생성

VS Code에서 `src/components` 폴더에 `MyFirstComponent.vue` 파일을 새로 만드세요.
- 폴더에서 우클릭 → New File
- 파일명: `MyFirstComponent.vue` (확장자 꼭 `.vue`!)

### Step 2: 코드 작성

```vue
<template>
  <div class="counter">
    <h2>카운터: {{ count }}</h2>
    <button @click="increment">증가</button>
    <button @click="decrement">감소</button>
    <button @click="reset">초기화</button>
  </div>
</template>

<script>
export default {
  name: 'MyFirstComponent',
  
  data() {
    return {
      count: 0  // 초기값 0
    }
  },
  
  methods: {
    increment() {
      this.count++  // count를 1 증가
    },
    decrement() {
      this.count--  // count를 1 감소
    },
    reset() {
      this.count = 0  // count를 0으로 초기화
    }
  }
}
</script>

<style scoped>
.counter {
  padding: 20px;
  border: 2px solid #42b983;
  border-radius: 8px;
  margin: 20px;
  text-align: center;
}

button {
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
}

button:hover {
  background-color: #35a372;
}
</style>
```

### 코드 설명

**Template 부분:**
- `{{ count }}`: data에서 정의한 count 값을 화면에 표시
- `@click="increment"`: 버튼을 클릭하면 increment 함수 실행
- `@click`은 `v-on:click`의 축약형입니다

**Script 부분:**
- `data()`: count라는 데이터를 0으로 초기화
- `methods`: 버튼 클릭 시 실행될 함수들
  - `this.count++`: count 값을 1 증가시킴
  - Vue가 자동으로 화면을 업데이트해줍니다! (반응성)

**Style 부분:**
- `scoped`: 이 스타일은 이 컴포넌트에만 적용
- `:hover`: 마우스를 올렸을 때 색상 변경

💡 **실무 팁**:
- 데이터가 변경되면 Vue가 자동으로 화면을 다시 그려줍니다 (이게 Vue의 핵심!)
- `this.count` 대신 `count`라고 쓰면 오류가 납니다. `this`를 꼭 붙이세요!
- 함수 안에서는 화살표 함수(`=>`)보다 일반 함수를 사용하세요 (this 바인딩 문제)

## 6. 컴포넌트 사용하기

만든 컴포넌트를 다른 곳에서 사용해봅시다!

### Step 1: 컴포넌트 import하기

`src/App.vue` 파일을 열고 다음과 같이 수정하세요:

```vue
<template>
  <div id="app">
    <h1>나의 첫 Vue 앱</h1>
    <MyFirstComponent />
    <MyFirstComponent />
    <!-- 같은 컴포넌트를 여러 번 사용 가능! -->
  </div>
</template>

<script>
// 1. 컴포넌트를 가져옵니다 (import)
import MyFirstComponent from './components/MyFirstComponent.vue'

export default {
  name: 'App',
  
  // 2. 이 컴포넌트에서 사용할 컴포넌트들을 등록
  components: {
    MyFirstComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

### 작동 순서 이해하기

1. **Import**: 다른 파일에서 컴포넌트를 가져옵니다
   ```javascript
   import MyFirstComponent from './components/MyFirstComponent.vue'
   ```

2. **Register**: components 객체에 등록합니다
   ```javascript
   components: {
     MyFirstComponent
   }
   ```

3. **Use**: template에서 태그처럼 사용합니다
   ```vue
   <MyFirstComponent />
   ```

### 컴포넌트 이름 규칙

**파일명**:
- PascalCase 사용: `MyComponent.vue` ✅
- kebab-case 사용: `my-component.vue` ✅
- 일관성 있게 하나만 선택하세요!

**Template에서 사용**:
```vue
<!-- 둘 다 가능합니다 -->
<MyFirstComponent />
<my-first-component />

<!-- 단, self-closing은 PascalCase에서만 권장 -->
<MyFirstComponent />  <!-- ✅ 권장 -->
```

### 여러 컴포넌트 사용하기

```vue
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>

<template>
  <div>
    <Header />
    <Sidebar />
    <main>
      <!-- 메인 컨텐츠 -->
    </main>
    <Footer />
  </div>
</template>
```

💡 **실무 팁**:
- 컴포넌트를 재사용하면 코드 중복을 줄일 수 있습니다
- 각 컴포넌트는 독립적인 데이터를 가집니다 (카운터 2개를 만들면 각각 다른 count 값)
- import 경로에서 `@`는 `src` 폴더를 의미합니다 (예: `@/components/MyComponent.vue`)
- 컴포넌트를 등록하지 않고 사용하면 오류가 발생합니다!

## 7. 주요 Vue 개념 & 문법

Vue를 사용하는데 꼭 알아야 할 핵심 개념들입니다.

### 1. 데이터 바인딩 (Data Binding)

**데이터 바인딩**이란 JavaScript 데이터와 HTML을 연결하는 것입니다.

#### 텍스트 보간 (Mustache 문법)
```vue
<template>
  <p>{{ message }}</p>
  <p>{{ number + 1 }}</p>
  <p>{{ isActive ? '활성' : '비활성' }}</p>
</template>

<script>
export default {
  data() {
    return {
      message: '안녕하세요',
      number: 5,
      isActive: true
    }
  }
}
</script>
```
- `{{ }}` 안에 JavaScript 표현식 사용 가능
- 데이터가 변경되면 자동으로 화면 업데이트!

#### 속성 바인딩 (v-bind 또는 :)
```vue
<template>
  <!-- v-bind: 를 사용 -->
  <img v-bind:src="imageUrl">
  <a v-bind:href="link">클릭</a>
  
  <!-- : 로 축약 가능 (더 많이 사용) -->
  <img :src="imageUrl" :alt="imageAlt">
  <div :class="activeClass"></div>
  <div :style="{ color: textColor, fontSize: size + 'px' }"></div>
  
  <!-- 동적으로 클래스 추가/제거 -->
  <div :class="{ active: isActive, error: hasError }"></div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'https://example.com/image.jpg',
      imageAlt: '설명',
      link: 'https://vuejs.org',
      activeClass: 'highlight',
      textColor: 'red',
      size: 16,
      isActive: true,
      hasError: false
    }
  }
}
</script>
```

#### 양방향 바인딩 (v-model)
```vue
<template>
  <div>
    <input v-model="text" placeholder="입력하세요">
    <p>입력한 값: {{ text }}</p>
    
    <!-- 체크박스 -->
    <input type="checkbox" v-model="checked">
    <p>체크됨: {{ checked }}</p>
    
    <!-- 라디오 버튼 -->
    <input type="radio" value="A" v-model="picked">
    <input type="radio" value="B" v-model="picked">
    <p>선택: {{ picked }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      checked: false,
      picked: ''
    }
  }
}
</script>
```
- `v-model`: 입력 폼과 데이터를 **양방향**으로 연결
- 사용자가 입력하면 데이터가 자동으로 업데이트
- 데이터가 변경되면 화면도 자동으로 업데이트

### 2. 이벤트 처리 (Event Handling)

#### 기본 이벤트
```vue
<template>
  <div>
    <!-- v-on: 을 사용 -->
    <button v-on:click="handleClick">클릭</button>
    
    <!-- @ 로 축약 가능 (더 많이 사용) -->
    <button @click="handleClick">클릭</button>
    <button @click="count++">카운트 증가</button>
    
    <!-- 인자 전달 -->
    <button @click="greet('안녕')">인사하기</button>
    
    <!-- 여러 이벤트 -->
    <input @input="handleInput" @focus="handleFocus" @blur="handleBlur">
    
    <!-- 이벤트 객체 사용 -->
    <button @click="handleClickWithEvent">이벤트 정보</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClick() {
      alert('버튼 클릭!')
    },
    greet(message) {
      alert(message)
    },
    handleInput(event) {
      console.log('입력값:', event.target.value)
    },
    handleFocus() {
      console.log('포커스됨')
    },
    handleBlur() {
      console.log('포커스 해제')
    },
    handleClickWithEvent(event) {
      console.log('클릭된 요소:', event.target)
    }
  }
}
</script>
```

#### 이벤트 수식어 (Modifiers)
```vue
<template>
  <!-- 폼 제출 시 새로고침 방지 -->
  <form @submit.prevent="handleSubmit">
    <button type="submit">제출</button>
  </form>
  
  <!-- 이벤트 전파 중단 -->
  <div @click="handleDivClick">
    <button @click.stop="handleButtonClick">클릭</button>
  </div>
  
  <!-- 한 번만 실행 -->
  <button @click.once="handleOnce">한 번만</button>
  
  <!-- Enter 키를 눌렀을 때만 -->
  <input @keyup.enter="handleEnter">
  
  <!-- Esc 키를 눌렀을 때 -->
  <input @keyup.esc="handleEsc">
</template>
```

**주요 수식어:**
- `.prevent`: `event.preventDefault()` (기본 동작 막기)
- `.stop`: `event.stopPropagation()` (이벤트 전파 중단)
- `.once`: 한 번만 실행
- `.enter`, `.tab`, `.delete`, `.esc`, `.space`: 특정 키 이벤트

### 3. 조건부 렌더링

#### v-if, v-else-if, v-else
```vue
<template>
  <div>
    <p v-if="score >= 90">A 등급</p>
    <p v-else-if="score >= 80">B 등급</p>
    <p v-else-if="score >= 70">C 등급</p>
    <p v-else>불합격</p>
    
    <!-- 여러 요소를 묶어서 조건부 렌더링 -->
    <template v-if="isLoggedIn">
      <h1>환영합니다!</h1>
      <p>로그인 상태입니다.</p>
    </template>
    <template v-else>
      <h1>로그인이 필요합니다</h1>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 85,
      isLoggedIn: false
    }
  }
}
</script>
```

#### v-show
```vue
<template>
  <!-- v-if: 조건이 false면 DOM에서 제거 -->
  <p v-if="isVisible">v-if로 보이기</p>
  
  <!-- v-show: 조건이 false면 display:none -->
  <p v-show="isVisible">v-show로 보이기</p>
</template>
```

**v-if vs v-show:**
- `v-if`: 조건이 false면 렌더링 안 함 (완전히 제거)
- `v-show`: 항상 렌더링하고 CSS로 숨김 (display: none)
- 자주 토글된다면 `v-show`, 조건이 거의 안 바뀌면 `v-if`

### 4. 리스트 렌더링 (v-for)

```vue
<template>
  <div>
    <!-- 배열 순회 -->
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    
    <!-- 인덱스 함께 사용 -->
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        {{ index }}. {{ item.name }}
      </li>
    </ul>
    
    <!-- 객체 순회 -->
    <ul>
      <li v-for="(value, key) in user" :key="key">
        {{ key }}: {{ value }}
      </li>
    </ul>
    
    <!-- 숫자 범위 -->
    <span v-for="n in 10" :key="n">{{ n }} </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: '사과' },
        { id: 2, name: '바나나' },
        { id: 3, name: '오렌지' }
      ],
      user: {
        name: '홍길동',
        age: 30,
        email: 'hong@example.com'
      }
    }
  }
}
</script>
```

**⚠️ 중요: key 속성**
- `v-for`를 사용할 때 반드시 `:key`를 지정하세요
- 고유한 값을 사용해야 합니다 (보통 id)
- Vue가 효율적으로 DOM을 업데이트하는데 필요합니다

### 5. computed (계산된 속성)

```vue
<template>
  <div>
    <p>원본: {{ message }}</p>
    <p>역순: {{ reversedMessage }}</p>
    <p>총합: {{ total }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue',
      numbers: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    // message가 변경되면 자동으로 다시 계산
    reversedMessage() {
      return this.message.split('').reverse().join('')
    },
    // numbers가 변경되면 자동으로 다시 계산
    total() {
      return this.numbers.reduce((sum, num) => sum + num, 0)
    }
  }
}
</script>
```

**computed vs methods:**
- `computed`: 결과를 캐싱함, 의존하는 데이터가 변경될 때만 다시 계산
- `methods`: 호출할 때마다 항상 실행
- 성능이 중요하면 `computed` 사용!

💡 **실무 팁**:
- 이벤트는 대부분 `@click`, `@input`, `@submit`만 알면 됩니다
- `v-if`와 `v-for`를 같은 요소에 쓰지 마세요 (성능 문제)
- `v-for`에서 `:key`는 필수입니다. 빼먹지 마세요!
- 복잡한 계산은 `computed`를 사용하세요

## 8. 유용한 명령어 & 개발 팁

### 기본 명령어

```bash
npm run dev        # 개발 서버 실행 (코드 수정하면 자동 새로고침)
npm run build      # 프로덕션 빌드 (배포용 파일 생성)
npm run preview    # 빌드 결과 미리보기
```

**각 명령어 설명:**

**`npm run dev`**
- 개발 중에 가장 많이 사용
- 파일을 수정하면 자동으로 브라우저가 새로고침됩니다
- 종료: `Ctrl + C`

**`npm run build`**
- 실제 서비스에 배포할 때 사용
- `dist` 폴더에 최적화된 파일들이 생성됩니다
- 파일 크기를 줄이고 성능을 최적화합니다

**`npm run preview`**
- 빌드한 결과물을 로컬에서 테스트
- 실제 배포 전 확인용

### 자주 사용하는 npm 명령어

```bash
npm install              # package.json의 모든 패키지 설치
npm install 패키지명      # 특정 패키지 설치
npm install -D 패키지명   # 개발용 패키지 설치
npm uninstall 패키지명    # 패키지 삭제
npm update               # 패키지 업데이트
```

### 실용적인 패키지 설치하기

#### Axios (HTTP 통신)
```bash
npm install axios
```

```vue
<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    // API에서 데이터 가져오기
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.posts = response.data
      })
  }
}
</script>
```

#### Vue Router (페이지 라우팅)
프로젝트 생성 시 선택하지 않았다면:
```bash
npm install vue-router@4
```

### 디버깅 팁

**1. Vue DevTools 설치**
- Chrome/Firefox 확장 프로그램
- 컴포넌트 구조, 데이터 상태 실시간 확인
- [다운로드 링크](https://devtools.vuejs.org/)

**2. 콘솔 로그 활용**
```vue
<script>
export default {
  methods: {
    handleClick() {
      console.log('현재 데이터:', this.message)
      console.log('전체 data:', this.$data)
    }
  },
  mounted() {
    console.log('컴포넌트 마운트됨')
  }
}
</script>
```

**3. 자주 발생하는 오류**

**오류 1**: "Cannot read property of undefined"
```javascript
// ❌ 잘못된 코드
methods: {
  handleClick() {
    console.log(message)  // this가 없음!
  }
}

// ✅ 올바른 코드
methods: {
  handleClick() {
    console.log(this.message)
  }
}
```

**오류 2**: "Component is not registered"
```vue
<!-- ❌ import는 했지만 등록 안 함 -->
<script>
import MyComponent from './MyComponent.vue'
export default {
  // components에 등록 안 함!
}
</script>

<!-- ✅ 제대로 등록 -->
<script>
import MyComponent from './MyComponent.vue'
export default {
  components: {
    MyComponent
  }
}
</script>
```

**오류 3**: "v-for key is required"
```vue
<!-- ❌ key가 없음 -->
<li v-for="item in items">{{ item }}</li>

<!-- ✅ key 추가 -->
<li v-for="item in items" :key="item.id">{{ item }}</li>
```

### 핫 리로드가 안 될 때

1. 서버 재시작: `Ctrl+C` → `npm run dev`
2. `node_modules` 삭제 후 재설치:
   ```bash
   rm -rf node_modules
   npm install
   ```
3. 브라우저 캐시 삭제: `Ctrl+Shift+Delete`

💡 **실무 팁**:
- 개발 중에는 항상 Vue DevTools를 켜두세요
- `console.log`를 적극 활용하세요 (초보자의 가장 좋은 친구!)
- 오류 메시지를 잘 읽어보세요. 대부분 해결 방법이 들어있습니다
- 막히면 공식 문서나 Stack Overflow 검색!

## 9. 다음 단계 학습 로드맵

기본기를 익혔다면 다음 개념들을 하나씩 학습해보세요.

### 1단계: 컴포넌트 간 통신 (필수!)

**Props (부모 → 자식)**
```vue
<!-- 부모 컴포넌트 -->
<template>
  <ChildComponent :message="parentMessage" :count="5" />
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: { ChildComponent },
  data() {
    return {
      parentMessage: '부모에서 전달한 메시지'
    }
  }
}
</script>
```

```vue
<!-- 자식 컴포넌트 (ChildComponent.vue) -->
<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String,  // 타입 지정
    count: Number
  }
}
</script>
```

**Emit (자식 → 부모)**
```vue
<!-- 자식 컴포넌트 -->
<template>
  <button @click="sendMessage">부모에게 전달</button>
</template>

<script>
export default {
  methods: {
    sendMessage() {
      // 'custom-event'라는 이름으로 데이터 전달
      this.$emit('custom-event', '자식이 보낸 메시지')
    }
  }
}
</script>
```

```vue
<!-- 부모 컴포넌트 -->
<template>
  <ChildComponent @custom-event="handleEvent" />
</template>

<script>
export default {
  methods: {
    handleEvent(message) {
      console.log('받은 메시지:', message)
    }
  }
}
</script>
```

💡 **언제 배워야 하나요?** 여러 컴포넌트를 만들기 시작하면 바로 필요합니다!

### 2단계: Vue Router (페이지 라우팅)

**언제 필요한가요?**
- 여러 페이지가 있는 웹사이트를 만들 때
- 예: 홈, 소개, 연락처 등

**기본 사용법:**
```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

```vue
<!-- App.vue -->
<template>
  <nav>
    <router-link to="/">홈</router-link>
    <router-link to="/about">소개</router-link>
  </nav>
  <router-view />  <!-- 페이지가 여기에 표시됨 -->
</template>
```

💡 **추천 학습 시기**: 기본 문법에 익숙해진 후 (1-2주 후)

### 3단계: Pinia (상태 관리)

**언제 필요한가요?**
- 여러 컴포넌트에서 같은 데이터를 공유할 때
- 예: 로그인 정보, 장바구니, 테마 설정 등

**기본 예제:**
```javascript
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})
```

```vue
<!-- 컴포넌트에서 사용 -->
<template>
  <p>{{ counter.count }}</p>
  <button @click="counter.increment">증가</button>
</template>

<script>
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()
    return { counter }
  }
}
</script>
```

💡 **추천 학습 시기**: Props/Emit으로 관리하기 복잡해질 때 (1개월 후)

### 4단계: Composition API (최신 문법)

**Options API (지금 배운 것):**
```vue
<script>
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
```

**Composition API (최신):**
```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => {
  count.value++
}
</script>
```

💡 **추천 학습 시기**: Options API에 완전히 익숙해진 후 (2-3개월 후)
- 처음엔 Options API로 시작하는 게 더 쉽습니다!
- Composition API는 나중에 배워도 늦지 않습니다

### 5단계: 고급 기능들

**실무에서 자주 쓰는 것들:**

1. **Axios (API 통신)**
   - 서버에서 데이터 가져오기
   - 난이도: ⭐⭐☆☆☆

2. **Form Validation**
   - 입력 폼 검증
   - 라이브러리: VeeValidate, Vuelidate
   - 난이도: ⭐⭐⭐☆☆

3. **UI 라이브러리**
   - Vuetify, Element Plus, Quasar
   - 예쁜 컴포넌트 쉽게 사용
   - 난이도: ⭐⭐☆☆☆

4. **테스팅**
   - Vitest로 테스트 작성
   - 난이도: ⭐⭐⭐⭐☆

### 학습 순서 추천 (3개월 플랜)

**1주차**: 기본 문법 마스터
- Template, Script, Style
- 데이터 바인딩, 이벤트 처리
- v-if, v-for

**2-3주차**: 컴포넌트 깊이 파기
- 컴포넌트 만들기/사용하기
- Props, Emit
- 여러 컴포넌트로 나눠서 프로젝트 만들기

**4-6주차**: Vue Router
- 페이지 라우팅
- 동적 라우트
- Navigation Guard

**7-9주차**: 상태 관리
- Pinia 기본
- Store 만들기
- Actions, Getters

**10-12주차**: 실전 프로젝트
- API 연동 (Axios)
- 인증/권한
- 배포

💡 **실무 팁**:
- 한 번에 너무 많이 배우려고 하지 마세요
- 각 단계마다 간단한 프로젝트를 만들어보세요
- YouTube에 "Vue.js 프로젝트" 검색하면 따라하기 좋은 튜토리얼이 많습니다
- 공식 문서가 가장 정확하고 좋은 자료입니다

## 10. 참고 자료 & 커뮤니티

### 공식 문서

- **[Vue.js 공식 문서 (영문)](https://vuejs.org/)** ⭐⭐⭐⭐⭐
  - 가장 정확하고 최신 정보
  - 예제 코드가 풍부함
  
- **[Vue.js 한국어 문서](https://ko.vuejs.org/)** ⭐⭐⭐⭐⭐
  - 한글로 읽을 수 있어 편함
  - 공식 번역이라 신뢰도 높음

### 무료 학습 자료

**영상 강의:**
- **[Vue Mastery](https://www.vuemastery.com/)** - 무료 강의 (영문)
- **[Vue School](https://vueschool.io/)** - 일부 무료 (영문)
- **[코딩애플 Vue 강의](https://codingapple.com/)** - 한글 강의 (유료지만 세일 많음)
- **YouTube "Vue.js 강의"** - 한글 무료 강의 많음

**블로그/튜토리얼:**
- [Vue.js 공식 예제](https://vuejs.org/examples/)
- [Vue.js Cookbook](https://vuejs.org/guide/introduction.html)
- [MDN Web Docs - Vue.js](https://developer.mozilla.org/)

### 실습 프로젝트 아이디어

**입문용 (1주차):**
- ✅ Todo List (할일 목록)
- ✅ 카운터 앱
- ✅ 간단한 계산기

**초급 (2-4주차):**
- 📝 메모장 앱
- 🎬 영화 검색 앱 (API 사용)
- 🌤️ 날씨 앱
- 📰 뉴스 리더

**중급 (1-3개월차):**
- 🛒 쇼핑몰 (장바구니 기능)
- 💬 채팅 앱
- 📊 대시보드
- 🎮 간단한 게임

### 유용한 도구

**개발 도구:**
- [Vue DevTools](https://devtools.vuejs.org/) - 필수!
- [Vite](https://vitejs.dev/) - 빌드 도구
- [ESLint](https://eslint.org/) - 코드 품질
- [Prettier](https://prettier.io/) - 코드 포맷팅

**UI 라이브러리:**
- [Vuetify](https://vuetifyjs.com/) - Material Design
- [Element Plus](https://element-plus.org/) - 깔끔한 디자인
- [Quasar](https://quasar.dev/) - 모바일 앱도 가능
- [PrimeVue](https://primevue.org/) - 다양한 컴포넌트
- [Ant Design Vue](https://antdv.com/) - 앤트 디자인

**유틸리티:**
- [VueUse](https://vueuse.org/) - 유용한 Composition 함수들
- [Pinia](https://pinia.vuejs.org/) - 상태 관리
- [Vue Router](https://router.vuejs.org/) - 라우팅

### 커뮤니티

**한국 커뮤니티:**
- [Vue.js 한국 사용자 모임 (Facebook)](https://www.facebook.com/groups/vuejs.korea/)
- [인프런 Vue.js 질문/답변](https://www.inflearn.com/)
- [OKKY Vue.js](https://okky.kr/)

**글로벌 커뮤니티:**
- [Vue.js Discord](https://discord.com/invite/vue)
- [Stack Overflow - Vue.js](https://stackoverflow.com/questions/tagged/vue.js)
- [Reddit - r/vuejs](https://www.reddit.com/r/vuejs/)

### 자주 묻는 질문 (FAQ)

**Q1. React vs Vue, 뭐가 더 좋나요?**
- 정답은 없습니다! 
- Vue: 배우기 쉽고 문서가 친절
- React: 생태계가 더 크고 자료가 많음
- 초보자에게는 Vue가 더 쉽습니다

**Q2. Options API vs Composition API?**
- 초보자: Options API로 시작 (더 직관적)
- 익숙해지면 Composition API 배우기
- 둘 다 알면 베스트!

**Q3. TypeScript를 써야 하나요?**
- 처음엔 JavaScript만으로 충분
- 프로젝트가 커지면 TypeScript 고려
- 문법에 익숙해진 후 도전!

**Q4. 어떤 에디터가 좋나요?**
- VS Code 강력 추천!
- Volar 확장 필수
- WebStorm도 좋지만 유료

**Q5. 취업에 도움이 되나요?**
- Vue.js 개발자 수요 많음
- 특히 한국에서 인기 (네이버, 카카오 등 사용)
- 포트폴리오 프로젝트 2-3개는 만들어보세요

### 마지막 조언

🎯 **학습 팁:**
1. 공식 문서를 자주 읽으세요 (가장 정확한 정보)
2. 작은 프로젝트부터 시작하세요
3. 코드를 직접 타이핑하세요 (복붙 금지!)
4. 막히면 에러 메시지를 구글에 검색
5. 완벽을 추구하지 말고 일단 만들어보세요

🚀 **실전 팁:**
- GitHub에 코드를 올리세요 (포트폴리오)
- 다른 사람 코드를 많이 읽어보세요
- 커뮤니티에서 질문하고 답변도 해보세요
- 매일 조금씩이라도 코딩하세요

💪 **동기부여:**
- Vue.js는 정말 배우기 쉬운 프레임워크입니다
- 3개월이면 기본기를 완전히 익힐 수 있습니다
- 포기하지 마세요. 막히는 건 당연합니다!
- 하나씩 차근차근 따라하다 보면 어느새 고수!

---

## 마무리

이 가이드를 따라하셨다면 Vue.js의 기본기는 충분히 익히셨을 것입니다! 

다음 단계는:
1. 간단한 Todo 앱 만들어보기
2. API 연동해서 데이터 가져오기
3. Vue Router로 여러 페이지 만들기
4. 나만의 프로젝트 시작하기

**궁금한 점이 있으시면:**
- 공식 문서 검색 → 구글 검색 → 커뮤니티 질문 순서로!
- 에러 메시지를 그대로 복사해서 검색하면 대부분 해결됩니다

**화이팅! 🎉**

Vue.js와 함께 멋진 웹 애플리케이션을 만들어보세요!