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
```

```javascript
/* memo
Math.trunc()    소수점버림. 주어진 숫자의 정수부분 (양수, 음수 상관없이 소수점 이하 우측부분을 제거)
Math.floor()    내림. 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
Math.ceil()     올림. 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환
Math.round()    반올림. 반올림한 수와 가장 가까운 정수 값을 반환
Math.abs()      절대값. 주어진 숫자의 절대값을 반환합니다.
Math.sign()     부호. 주어진 수의 부호를 나타내는 +/-1을 반환합니다. 단, Math.sign()에 제공한 수가 0일 경우 부호에 따라 +/-0을 반환합니다.
*/
```

### 아이스 아메리카노
#### 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
```javascript
/*
function solution(money) {
    var answer = [Math.trunc(money / 5500), money % 5500];
    return answer;
}
*/

const solution = money => [Math.trunc(money / 5500), money % 5500];
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
```

```javascript
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
```

```javascript
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
```

```javascript
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
```

```javascript
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
```

```javascript
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
```

```javascript
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
```

```javascript
/* good
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle >= x).length;
}

const solution = angle => [0, 90, 91, 180].filter(x => angle >= x).length;
*/
```

### 배열 뒤집기
#### 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
```javascript
/*
function solution(num_list) {
    return num_list.reverse();
}
*/

const solution = num_list => num_list.reverse();
```

```javascript
/* memo
Array.prototype.reverse()
reverse()       메서드는 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.
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
```

```javascript
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
```

```javascript
/* memo
Array.prototype.reduce()
reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
arr.reduce(callback[, initialValue])

const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue,
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
```

```javascript
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

### 모음 제거
#### 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
```javascript
/*
function solution(my_string) {
    return [...my_string].filter(x => x !== 'a' && x !== 'e' && x !== 'i' && x !== 'o' && x !== 'u').join('');
}
*/

const solution = my_string => [...my_string].filter(x => x !== 'a' && x !== 'e' && x !== 'i' && x !== 'o' && x !== 'u').join('');
```

```javascript
/* good
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

function solution(my_string) {
    return my_string.replace(/[a,e,i,o,u]/g, '');
}

function solution(my_string) {
    return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
}
*/
```

```javascript
/* memo
replace()의 정규표현식 

var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

정규 표현식
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions

정규 표현식, 또는 정규식은 문자열에서 특정 문자 조합을 찾기 위한 패턴입니다. 
JavaScript에서는 정규 표현식도 객체로서, RegExp의 exec()와 test() 메서드를 사용할 수 있습니다. 
String의 match(), matchAll() (en-US), replace(), replaceAll(), search(), split() 메서드와도 함께 사용할 수 있습니다. 
*/
```

### 특정 문자 제거하기
#### 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
```javascript
/*
function solution(my_string, letter) {
    return [...my_string].filter(x => x !== letter).join('');
}
*/

const solution = (my_string, letter) => [...my_string].filter(x => x !== letter).join('');
```

```javascript
/* good
function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}

function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}
*/
```

### 편지
#### 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.
```javascript
/*
function solution(message) {
    return message.split('').length * 2;
}
*/

const solution = message => message.split('').length * 2;
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

### 짝수는 싫어요
#### 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
```javascript
/*
function solution(n) {
    var answer = [];
    var range = [...Array(n+1).keys()].map(i => i); // [0, 1, ...., n]
    var range2 = range.filter((v) => (v % 2 === 1)); // [1, 3, ...., n]
    return range2;
}

function solution(n) {
    return [...Array(n+1).keys()].map(i => i).filter((v) => (v % 2 === 1));
}
*/

const solution = n => [...Array(n+1).keys()].map(i => i).filter((v) => (v % 2 === 1));
```

```javascript
/* good
function solution(n) {
    var answer = [];
    for (let i = 1; i<=n; i+=2) answer.push(i)
    return answer;
}
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
```

```javascript
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
```

```javascript
/* memo
// 간략화한 숫자 오름차순 
nums.sort((a, b) => a - b);

// 간략화한 숫자 내림차순
nums.sort((a, b) => b - a);
*/
```

### 삼각형의 완성조건 (1)
#### 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
> 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
> 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 
> 세 변으로 삼각형을 만들 수 있다면 1,
> 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
```javascript
function solution(sides) {
    var answer = sides.sort((a, b) => b - a);
    return answer[0] < answer[1] + answer[2] ? 1 : 2;
}
```

### 최댓값 만들기 (1)
#### 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
> 0 ≤ numbers의 원소 ≤ 10,000
> 2 ≤ numbers의 길이 ≤ 100
```javascript
function solution(numbers) {
    var answer = 0;
    answer = numbers.sort((a, b) => b - a);
    return answer[0] * answer[1];
}
```

### 최댓값 만들기 (2)
#### 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
> -10,000 ≤ numbers의 원소 ≤ 10,000
> 2 ≤ numbers 의 길이 ≤ 100
```javascript
/*
function solution(numbers) {
    var answer = [];
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers.length; j++) {
            if ( i !== j ) {
                answer.push(numbers[i] * numbers[j])
            }
        }
        
    }
    return answer.sort((a, b) => b - a)[0];
}
*/

function solution(numbers) {
    var answer = [];
    for (var i = 0; i < numbers.length; i++) for (var j = 0; j < numbers.length; j++) if ( i !== j ) answer.push(numbers[i] * numbers[j])        
    return answer.sort((a, b) => b - a)[0];
}
```

```javascript
/* good
function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            answer.push(numbers[i] * numbers[j]);
        }
    }
    return Math.max(...answer);
}

function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}
*/
```

```javascript
/* memo
Math.max()      함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환합니다.
Math.min()      함수는 주어진 숫자들 중 가장 작은 값을 반환합니다.

console.log(Math.max(1, 3, 2));     // Expected output: 3
console.log(Math.max(-1, -3, -2));  // Expected output: -1
const array1 = [1, 3, 2];
console.log(Math.max(...array1));   // Expected output: 3
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

### 문자열 뒤집기
#### 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
```javascript

/*
function solution(my_string) {
    var answer = '';
    var answer2 = [];
    answer = my_string.split('');
    for (var i = 0; i < answer.length; i++) {
        answer2.unshift(answer[i]);
    }
    return answer2.join('').toString();
}

function solution(my_string) {
    var answer = '';
    answer = my_string.split('').reverse().join('').toString();
    return answer;
}

function solution(my_string) {
    return my_string.split('').reverse().join('').toString();
}
*/

const solution = my_string => my_string.split('').reverse().join('').toString();
```

```javascript
/* good
function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}

function solution(my_string) {
    return my_string.split('').reverse().join('');
}

function solution(my_string) {
    return Array.from(my_string).reverse().join('');
}
*/
```

```javascript
/* memo
배열 -> 문자열
1. arr.join(separator)
const arr = ['Apple', 'Banana', 'Orange'];
const str1 = arr.join();    // Apple,Banana,Orange
const str2 = arr.join('-'); // Apple-Banana-Orange
const str3 = arr.join('');  // AppleBananaOrange
2. arr.toString()
const arr = ['Apple', 'Banana', 'Orange'];
console.log(arr.toString());    // Apple,Banana,Orange
console.log(arr);               // Apple,Banana,Orange

String.prototype.
split()     메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.
join()      메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.

Array.prototype.
push()      메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
pop()       메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
shift()     메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.
unshift()   메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
concat()    메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
splice()    메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
reverse()   메서드는 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.
sort()      메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬은 stable sort가 아닐 수 있습니다. 
            기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.
join()      메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.

var sports = ['축구', '야구'];
var total = sports.push('미식축구', '수영');
console.log(sports); // ['축구', '야구', '미식축구', '수영']
console.log(total);  // 4
*/
```

### 배열 자르기
#### 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
```javascript
/*
function solution(numbers, num1, num2) {
    return numbers.splice(num1, num2 - num1 + 1);
}
*/

const solution = (numbers, num1, num2) => numbers.splice(num1, num2 - num1 + 1);
```

```javascript
/* good
function solution(numbers, num1, num2) {
    return numbers.splice(num1, num2-num1+1);
}

function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
}

function solution(numbers, num1, num2) {
    return numbers.filter((n, i) => num1 <= i && i <= num2);
}
*/
```

### 옷가게 할인 받기
#### 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다. 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
```javascript
/*
function solution(price) {
    var answer = 0;
    var percentage = price >= 500000 ? 0.2 : price >= 300000 ? 0.1 : price >= 100000 ? 0.05 : 0;
    answer = Math.trunc(price - (price * percentage));
    return answer;
}
*/

function solution(price) {
    const percentage = price >= 500000 ? 0.2 : price >= 300000 ? 0.1 : price >= 100000 ? 0.05 : 0;
    return Math.trunc(price - (price * percentage));
}
```

### 문자 반복 출력하기
#### 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
```javascript
/*
function solution(my_string, n) {
    var answer = [];
    for (var i = 0; i < my_string.length; i++) {
        for (var j = 0; j < n; j++) {
            answer.push(my_string[i]);
        }
    }
    return answer.join('').toString();
}
*/

function solution(my_string, n) {
    var answer = [];
    for (var i = 0; i < my_string.length; i++) for (var j = 0; j < n; j++) answer.push(my_string[i])
    return answer.join('').toString();
}
```

```javascript
/* good
function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    return answer;
}

function solution(my_string, n) {
    return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '')
}

function solution(my_string, n) {
    return my_string.split('').map(str => str.repeat(n)).join('');
}

function solution(my_string, n) {
    return Array.from(my_string).map(t => Array(n).fill(t)).flat().join('');
}

function solution(my_string, n) {
    let ans = '';
    for (let s of my_string) ans+=s.repeat(n);
    return ans;
}
*/
```

```javascript
/* memo
String.prototype.repeat()
repeat()        메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.

str.repeat(count);
// count: 반복 횟수는 양의 정수여야 함.
// count: 반복 횟수는 무한대보다 작아야 하며, 최대 문자열 크기를 넘어선 안됨.

'abc'.repeat(2);    // 'abcabc'
*/
```

### 배열의 유사도
#### 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
```javascript
/*
function solution(s1, s2) {
    var answer = 0;
    for (var i = 0; i < s1.length; i++) {
        for (var j = 0; j < s2.length; j++) {
            s1[i] === s2[j] ? answer++ : answer;
        }
    }
    return answer;
}
*/

function solution(s1, s2) {
    var answer = 0;
    for (var i = 0; i < s1.length; i++) for (var j = 0; j < s2.length; j++) s1[i] === s2[j] ? answer++ : answer;
    return answer;
}
```

```javascript
/* good
function solution(s1, s2) {
    return s1.filter((v) => s2.includes(v)).length;
}

function solution(s1, s2) {
    const concat = [...s1, ...s2];
    const setConcat = Array.from(new Set(concat));

    return concat.length - setConcat.length;
}
*/
```

### 순서쌍의 개수
#### 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
```javascript
```

```javascript
```

### 점의 위치 구하기
#### 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
- x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
- x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
- x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
- x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
> x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 
> 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.
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

