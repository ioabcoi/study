# level0

Link : [level0](https://school.programmers.co.kr/learn/challenges?order=acceptance_desc&levels=0&languages=javascript "level0")

### 분수의 덧셈
#### 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
```javascript
```

### 
#### 
```javascript
```

### 
#### 
```javascript
```

### 두 수의 합
#### 정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.
```javascript
/*
function solution(num1, num2) {
    var answer = num1 + num2;
    return answer;
}

function solution(num1, num2) {
    return num1 + num2;
}
*/

const solution = (num1, num2) => num1 + num2;
```

### 두 수의 차
#### 정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.
```javascript
/*
function solution(num1, num2) {
    var answer = num1 - num2;
    return answer;
}

function solution(num1, num2) {
    return num1 - num2;
}
*/

const solution = (num1, num2) => num1 - num2;
```

### 두 수의 곱
#### 정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.
```javascript
/*
function solution(num1, num2) {
    var answer = num1 * num2;
    return answer;
}

function solution(num1, num2) {
    return num1 * num2;
}
*/

const solution = (num1, num2) => num1 * num2;
```

### 두 수의 나눗셈
#### 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.
```javascript
/*
function solution(num1, num2) {
    var answer = Math.floor(num1 / num2 * 1000);
    return answer;
}

function solution(num1, num2) {
    return Math.floor(num1 / num2 * 1000);
}
*/

const solution = (num1, num2) => Math.floor(num1 / num2 * 1000);
```

### 몫 구하기
#### 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
```javascript
/*
function solution(num1, num2) {
    var answer = Math.floor(num1 / num2);
    return answer;
}

function solution(num1, num2) {
    return Math.floor(num1 / num2);
}

const solution = (num1, num2) => Math.floor(num1 / num2);
*/

const solution = (num1, num2) => Math.trunc(num1 / num2);

/* memo
Math.trunc()    주어진 숫자의 정수부분 (양수, 음수 상관없이 소수점 이하 우측부분을 제거)
Math.floor()    주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
Math.ceil()     주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환
Math.round()    반올림한 수와 가장 가까운 정수 값을 반환
*/
```

### 나머지 구하기
#### 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
```javascript
/*
function solution(num1, num2) {
    var answer = num1 % num2;
    return answer;
}

function solution(num1, num2) {
    return num1 % num2;
}
*/

const solution = (num1, num2) => num1 % num2;
```

### 숫자 비교하기
#### 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
```javascript
/*
function solution(num1, num2) {
    let answer = -1;
    if (num1 === num2) {
        answer = 1;
    }
    return answer;
}

function solution(num1, num2) {
    num1 === num2 ? answer = 1 : answer = -1;
    return answer;
}

function solution(num1, num2) {
    return num1 === num2 ? answer = 1 : answer = -1;
}
*/

const solution = (num1, num2) => num1 === num2 ? answer = 1 : answer = -1;

/* memo
조건문 ? true인 경우 실행할 표현식 : false인 경우 실행할 표현식
num === 10 ? true : false;
*/
```

### 나이 출력
#### 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.
```javascript
/*
function solution(age) {
    var answer = 2022 - age;
    return answer + 1;
}

function solution(age) {
    var answer = 2022 - age;
    return answer + 1;
}

function solution(age) {
    return 2022 - age + 1;
}
*/

const solution = age => 2022 - age + 1;

/* memo
const today = new Date();
const date = today.getDate();
const day = today.getDay();
const year = today.getFullYear();
const hours = today.getHours();
const milliseconds = today.getMilliseconds();
const minutes = today.getMinutes();
const month = today.getMonth();
const seconds = today.getSeconds();
const time = today.getTime();

Date.prototype.getDate()
Date에서 현지 시간 기준 일(1–31)을 반환합니다.

Date.prototype.getDay()
Date에서 현지 시간 기준 요일(0–6)을 반환합니다.

Date.prototype.getFullYear()
Date에서 현지 시간 기준 연도(네 자리 연도면 네 자리로)를 반환합니다.

Date.prototype.getHours()
Date에서 현지 시간 기준 시(0–23)를 반환합니다.

Date.prototype.getMilliseconds()
Date에서 현지 시간 기준 밀리초(0–999)를 반환합니다.

Date.prototype.getMinutes()
Date에서 현지 시간 기준 분(0–59)을 반환합니다.

Date.prototype.getMonth()
Date에서 현지 시간 기준 월(0–11)을 반환합니다.

Date.prototype.getSeconds()
Date에서 현지 시간 기준 초(0–59)를 반환합니다.

Date.prototype.getTime()
1970년 1월 1일 00:00:00 UTC로부터의 경과시간을 밀리초 단위로 반환합니다. 
Date가 기준 시간 이전을 나타낼 경우 음수 값을 반환합니다.
*/
```

### 중복된 숫자 개수
#### 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
```javascript
/*
function solution(array, n) {
    var answer = 0;
    var newArray = array.filter(x => x === n);
    answer = newArray.length
    return answer;
}

function solution(array, n) {
    return array.filter(x => x === n).length;
}
*/

const solution = (array, n) => array.filter(x => x === n).length;

/* memo
Array.prototype.filter()
filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
arr.filter(callback(element[, index[, array]])[, thisArg])

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
*/
```

### 머쓱이보다 키 큰 사람
#### 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.
```javascript
/*
function solution(array, height) {
    return array.filter(x => x > height).length;
}
*/

const solution = (array, height) => array.filter(x => x > height).length;
```

### 각도기
#### 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

- 예각 : 0 < angle < 90
- 직각 : angle = 90
- 둔각 : 90 < angle < 180
- 평각 : angle = 180
```javascript
/*
function solution(angle) {    
    if (angle > 0 && angle < 90) {
        answer = 1;
    } else if (angle == 90) {
        answer = 2;
    } else if (angle > 90 && angle < 180) {
        answer = 3;
    } else if (angle == 180) {
        answer = 4;
    }
    return answer;
}
*/

function solution(angle) {
    return angle > 0 && angle < 90 ? answer = 1 : angle == 90 ? answer = 2 : angle > 90 && angle < 180 ? answer = 3 : 4;
}

/* good
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle >= x).length;
}

const solution = angle => [0, 90, 91, 180].filter(x => angle >= x).length;
*/
```

### 배열의 평균값
#### 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
```javascript
/*
function solution(numbers) {
    return numbers.reduce((p, c) => p + c) / numbers.length;
}
*/

const solution = numbers => numbers.reduce((p, c) => p + c) / numbers.length;

/* memo
Array.prototype.reduce()
reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
arr.reduce(callback[, initialValue])

const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
console.log(sumWithInitial);
// Expected output: 10
*/
```

### 짝수의 합
#### 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
```javascript
/*
function solution(n) {
    var answer = 0;
    for (var i = 0; i <= n; i++) {
        i % 2 === 0 ? answer = answer + i : answer;
    }
    return answer;
}

function solution(n) {
    var answer = 0;
    var range = [...Array(n+1).keys()].map(i => i); // [0, 1, ...., n]
    var range2 = range.filter((v) => (v % 2 === 0)); // [2, 4, ...., n]
    var range3 = range2.reduce((p, c) => p + c);
    answer = range3;
    return answer;
}

function solution(n) {
    return [...Array(n+1).keys()].map(i => i).filter((v) => (v % 2 === 0)).reduce((p, c) => p + c);
}
*/

const solution = n => [...Array(n+1).keys()].map(i => i).filter((v) => (v % 2 === 0)).reduce((p, c) => p + c);

/* memo
Array.prototype.map()
map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
arr.map(callback(currentValue[, index[, array]])[, thisArg])

const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]
*/
```

### 양꼬치
#### 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
```javascript
/*
function solution(n, k) {
    return (12000 * n) + (2000 * k) - Math.trunc(n / 10) * 2000;
}
*/

const solution = (n, k) => (12000 * n) + (2000 * k) - Math.trunc(n / 10) * 2000;

/* good
function solution(n, k) {
    k -= ~~(n / 10);
    if (k < 0) k = 0;
    return n * 12000 + k * 2000;
}
*/
```

### 
#### 
```javascript
```

### 
#### 
```javascript
```

### 
#### 
```javascript
```

### 
#### 
```javascript
```

### 
#### 
```javascript
```

### 
#### 
```javascript
```

### 
#### 
```javascript
```

### 
#### 
```javascript
```

### 
#### 
```javascript
```


