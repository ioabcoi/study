# level0

Link : [level0](https://school.programmers.co.kr/learn/challenges?order=acceptance_desc&levels=0&languages=javascript "level0")

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
Math.trunc()    소수점버림. 주어진 숫자의 정수부분 (양수, 음수 상관없이 소수점 이하 우측부분을 제거)
Math.floor()    내림. 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
Math.ceil()     올림. 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환
Math.round()    반올림. 반올림한 수와 가장 가까운 정수 값을 반환
Math.abs()      절대값. 주어진 숫자의 절대값을 반환합니다.
Math.sign()     부호. 주어진 수의 부호를 나타내는 +/-1을 반환합니다. 단, Math.sign()에 제공한 수가 0일 경우 부호에 따라 +/-0을 반환합니다.
*/
```

### 피자 나눠 먹기 (1)
#### 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
```javascript
/*
function solution(n) {
    return Math.trunc(n / 7) + (n % 7 !== 0 ? 1 : 0);
}
*/

const solution = n => Math.trunc(n / 7) + (n % 7 !== 0 ? 1 : 0);

/* good 
function solution(n) {
    return Math.ceil(n / 7);
}

const solution = n => Math.ceil(n / 7);
*/
```

### 피자 나눠 먹기 (2) - 못풀었어!!!! ㅠㅠ
#### 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
```javascript
/* 
function solution(n) {
    var num1 = n;
    var num2 = 6;
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    // console.log([gcd(num1, num2), lcm(num1, num2)]);    
    return lcm(num1, num2) / 6;
}
*/ 

function solution (n) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return lcm(n, 6) / 6;
}

/* good
const solution = (n) => {
    let piece = 6
    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }
    return piece / 6
}

function solution(n) {
    for(let i = 1 ; i<=n; i++){
        if(6*i%n==0) return i
    }
}

function solution(n) {
    let count = 1;
    while (!Number.isInteger(count*6/n)) count++;
    return count;
}

function solution(n) {
    let pizza = 1;
    while (pizza * 6 % n) {
        pizza++;
    }
    return pizza;
}

function solution(n) {
    return Array(6).fill(n).map((v,idx) => v = v * (idx + 1)).find((v) => v % 6 === 0 ) / 6;
}

function solution(n) {
    let count = 1;
    while (!Number.isInteger(count*6/n)) count++;
    return count;
}
*/

/* memo 
최대공약수 gcd  
최소공배수 lcm 

function solution(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)];
}

function gcdlcm(a, b) {
    var gcd = calc_gcd(a, b);
    var lcm = (a * b) / gcd;
    return [gcd, lcm];
}
function calc_gcd(a, b) {
    if (b == 0) return a;
    return a > b ? calc_gcd(b, a % b) : calc_gcd(a, b % a);
}

let getGCD = (num1, num2) => {
    let gcd = 1;
    for(let i=2; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }
    return gcd;
}
let getLCM = (num1, num2) =>{
	let lcm = 1;
    while(true){
        if((lcm % num1 == 0) && (lcm % num2 == 0)){
            break;
        }
        lcm++;
    }
  	return lcm
}

*/
```

### 피자 나눠 먹기 (3)
#### 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
```javascript
/*
function solution(slice, n) {
    return Math.trunc(n / slice) + (n % slice !== 0 ? 1 : 0);
}
*/

const solution = (slice, n) => Math.trunc(n / slice) + (n % slice !== 0 ? 1 : 0);

/* good 
function solution(slice, n) {
    return Math.ceil(n / slice);
}

const solution = (slice, n) => Math.ceil(n / slice); 
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

### 배열 두배 만들기
#### 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
```javascript
/*
function solution(numbers) {
    var answer = [];
    answer = numbers.map(x => x * 2);
    return answer;
}

function solution(numbers) {
    return numbers.map(x => x * 2);
}
*/

const solution = numbers => numbers.map(x => x * 2);

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

### 중앙값 구하기
#### 
```javascript
/*
function solution(array) {
    var answer = 0;
    answer = array.sort((a, b) => a - b);
    return answer[Math.trunc(array.length / 2)];
}

function solution(array) {
    return array.sort((a, b) => a - b)[Math.trunc(array.length / 2)];
}
*/

const solution = array => array.sort((a, b) => a - b)[Math.trunc(array.length / 2)];

/* memo
// 간략화한 숫자 오름차순 
nums.sort((a, b) => a - b);

// 간략화한 숫자 내림차순
nums.sort((a, b) => b - a);
*/
```

### 최빈값 구하기
#### 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
```javascript
```

### 분수의 덧셈
#### 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
```javascript

/* memo - 최대공약수
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


