# level0 : 코딩 테스트 입문

Link : [level0](https://school.programmers.co.kr/learn/challenges?order=acceptance_desc&levels=0&languages=javascript "코딩 테스트 입문")

### 중복된 숫자 개수
#### 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120583
> blog
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

### 머쓱이보다 키 큰 사람
#### 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120585
> blog
```javascript
/*
function solution(array, height) {
    return array.filter(x => x > height).length;
}
*/

const solution = (array, height) => array.filter(x => x > height).length;
```

### 두 수의 합
#### 정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120802
> blog
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
> https://school.programmers.co.kr/learn/courses/30/lessons/120803
> blog
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
> https://school.programmers.co.kr/learn/courses/30/lessons/120804
> blog
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

### 몫 구하기
#### 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120805
> blog
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

### 두 수의 나눗셈
#### 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120806
> blog
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

### 숫자 비교하기
#### 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120807
> blog
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

### 분수의 덧셈
#### 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120808
```javascript
function solution(numer1, denom1, numer2, denom2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    
    const numer = (numer1 * denom2) + (numer2 * denom1);
    const denom = denom1 * denom2;
    
    const answer = [numer / gcd(numer, denom), denom / gcd(numer, denom)];
    return answer;
}
```

### 배열 두 배 만들기
#### 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120809
> blog
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

### 나머지 구하기
#### 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120810
> blog
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

### 중앙값 구하기
#### 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120811
> blog
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

### 최빈값 구하기
#### 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
> https://school.programmers.co.kr/learn/courses/30/lessons/120812
> blog
```javascript
/*
function solution(array) {
    const set = [...new Set(array)];
    const num = new Array(set.length).fill(0);
    
    // const count = array.map(e => console.log(set, e, set.indexOf(e), num[set.indexOf(e)]++));
    array.forEach(e => num[set.indexOf(e)]++);
    const max = Math.max(...num);
    //console.log(set, num, array, max);
    
    // console.log(num.indexOf(max), num.lastIndexOf(max), set[num.indexOf(max)]);
    const answer = num.indexOf(max) === num.lastIndexOf(max) ? set[num.indexOf(max)] : -1;
    
    return answer;
}
*/

function solution(array) {
    const set = [...new Set(array)];
    const num = new Array(set.length).fill(0);
    array.forEach(e => num[set.indexOf(e)]++);
    const max = Math.max(...num);
    const answer = num.indexOf(max) === num.lastIndexOf(max) ? set[num.indexOf(max)] : -1;
    return answer;
}
```

```javascript
/* good
function solution(array) {
    let m = new Map();
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    m = [...m].sort((a,b)=>b[1]-a[1]);
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
*/
```

### 짝수는 싫어요
#### 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120813
> blog
```javascript
/*
function solution(n) {
    var answer = [];
    var range = [...Array(n+1).keys()].map(i => i); // [0, 1, ...., n]
    var range2 = range.filter(v => v % 2 === 1); // [1, 3, ...., n]
    return range2;
}

function solution(n) {
    return [...Array(n+1).keys()].filter(v => v % 2 === 1);
}
*/

const solution = n => [...Array(n+1).keys()].filter(v => v % 2 === 1);
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

### 피자 나눠 먹기 (1)
#### 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120814
> blog
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

### 피자 나눠 먹기 (2)
#### 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120815
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

### 피자 나눠 먹기 (3)
#### 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120816
> blog
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

### 배열의 평균값
#### 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120817
> blog
```javascript
/*
function solution(numbers) {
    return numbers.reduce((p, c) => p + c) / numbers.length;
}
*/

const solution = numbers => numbers.reduce((p, c) => p + c) / numbers.length;
```

### 옷가게 할인 받기
#### 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다. 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120818
> blog
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

### 아이스 아메리카노
#### 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120819
> blog
```javascript
/*
function solution(money) {
    var answer = [Math.trunc(money / 5500), money % 5500];
    return answer;
}
*/

const solution = money => [Math.trunc(money / 5500), money % 5500];
```

### 나이 출력
#### 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120820
> blog
```javascript
/*
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

### 배열 뒤집기
#### 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120821
> blog
```javascript
/*
function solution(num_list) {
    return num_list.reverse();
}
*/

const solution = num_list => num_list.reverse();
```

### 문자열 뒤집기
#### 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120822
> blog
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

### 직각삼각형 출력하기
#### "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
> 입력 #1 
> 3
> 출력 #1
> *
> **
> ***
> https://school.programmers.co.kr/learn/courses/30/lessons/120823
> blog
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    /*
    // console.log(Number(input[0]));
    const arr = [...Array(Number(input[0])+1).keys()].map(i => i); // [0, 1, ...., n]
    arr.shift();
    // console.log(arr);
    console.log(arr.map(e => [...Array(e).keys()].map(e => "*").join("")).join("\n"));
    
    for(let i = 1; i < Number(input[0]) + 1; i++) {
        console.log('*'.repeat(i));
    }
    
    console.log([...Array(Number(input[0])).keys()]);
    console.log([...Array(Number(input[0])).keys()].map(e => [...Array(e+1).keys()]));
    console.log([...Array(Number(input[0])).keys()].map(e => [...Array(e+1).keys()].map(e => "*")));
    console.log([...Array(Number(input[0])).keys()].map(e => [...Array(e+1).keys()].map(e => "*").join("")));
    */
    
    console.log([...Array(Number(input[0])).keys()].map(e => [...Array(e+1).keys()].map(e => "*").join("")).join("\n"));
});
```

```javascript
/* good
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(let i = 1 ; i <= input[0] ; i++){
        console.log('*'.repeat(i));
    }
});

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    solution(Number(input[0]));
});
function solution(n) {
    for(let i = 1; i < n + 1; i++) {
        console.log('*'.repeat(i));
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const text = Array(+input[0]).fill(0)
        .map((v, i) => Array(i + 1).fill('*').join(''))
        .join('\n');
    console.log(text)
});

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    [...new Array(Number(input[0])).keys()].forEach(i=>console.log(new Array(i+1).fill('*').join('')))
});
*/
```

### 짝수 홀수 개수
#### 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120824
> blog
```javascript
/*
function solution(num_list) {
    var answer = [];
    var even = num_list.filter(x => x % 2 === 0);
    var odd = num_list.filter(x => x % 2 !== 0);
    answer = [even.length, odd.length]
    return answer;
}
*/

const solution = num_list => [num_list.filter(x => x % 2 === 0).length, num_list.filter(x => x % 2 !== 0).length];
```

```javascript
/* good
function solution(num_list) {
    var answer = [0,0];
    for(let a of num_list){
        answer[a%2] += 1
    }
    return answer;
}
*/
```

### 문자 반복 출력하기
#### 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120825
> blog
```javascript
function solution(my_string, n) {
    var answer = [];
    for (var i = 0; i < my_string.length; i++) {
        for (var j = 0; j < n; j++) {
            answer.push(my_string[i]);
        }
    }
    return answer.join('');
}
```

```javascript
/* good
function solution(my_string, n) {
	var answer = [...my_string].map(x => x.repeat(n)).join("");
    return answer;
}
*/
```

### 특정 문자 제거하기
#### 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120826
> blog
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

### 각도기
#### 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
- 예각 : 0 < angle < 90
- 직각 : angle = 90
- 둔각 : 90 < angle < 180
- 평각 : angle = 180
> https://school.programmers.co.kr/learn/courses/30/lessons/120829
> blog
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

function solution(angle) {    
    return angle > 0 && angle < 90 ? answer = 1 : angle == 90 ? answer = 2 : angle > 90 && angle < 180 ? answer = 3 : 4;
}
*/

const solution = angle => angle > 0 && angle < 90 ? answer = 1 : angle == 90 ? answer = 2 : angle > 90 && angle < 180 ? answer = 3 : 4;
```

```javascript
/* good
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle >= x).length;
}

const solution = angle => [0, 90, 91, 180].filter(x => angle >= x).length;
*/
```

### 양꼬치
#### 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120830
> blog
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

### 짝수의 합
#### 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120831
> blog
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
    return [...Array(n+1).keys()].filter((v) => (v % 2 === 0)).reduce((p, c) => p + c);
}
*/

const solution = n => [...Array(n+1).keys()].filter((v) => (v % 2 === 0)).reduce((p, c) => p + c);
```

### 배열 자르기
#### 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120833
> blog
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

### 외계행성의 나이
#### 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120834
> blog
```javascript
/* 
// String.fromCharCode(65, 66, 67);  // "ABC"

function solution(age) {
    var answer = '';
    answer = age.toString().split("").map(n => String.fromCharCode(65 + parseInt(n)).toLowerCase()).join("");
    return answer;
}
*/

const solution = age => age.toString().split("").map(n => String.fromCharCode(65 + parseInt(n)).toLowerCase()).join("");
```

```javascript
/* good
function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}

function solution(age) {
    let char = 'abcdefghij'
    return Array.from(age.toString()).map(t => char[+t]).join('');
}
*/
```

### 진료순서 정하기
#### 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120835
> blog
```javascript
/*
function solution(emergency) {
    var answer = [...emergency];
    answer = answer.map(n => emergency.sort((a, b) => b - a).indexOf(n) + 1);
    return answer;
}
*/

const solution = emergency => [...emergency].map(n => emergency.sort((a, b) => b - a).indexOf(n) + 1);
```

### 순서쌍의 개수
#### 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120836
> blog
```javascript
/*
function solution(n) {
    var answer = 0;
    for(var a = 1; a < n+1; a++) {
        for(var b = 1; b < n+1; b++) {
            if (a * b === n) {
                answer++;
                console.log(a, b, a * b);
            }
        }
    }
    return answer;
}

function solution(n) {
    var answer = 0;
    answer = [...Array(n+1).keys()].filter(i => n % i == 0).length
    return answer;
}
*/

const solution = n =>[...Array(n+1).keys()].filter(i => n % i == 0).length;
```

```javascript
/* good
function solution(n) {
    let ans = 0;
    for (let i = 1; i < Math.sqrt(n); i++)
        if (n%i === 0) ans+=2;

    return Number.isInteger(Math.sqrt(n)) ? ans+1 : ans;
}

function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}
*/
```

### 개미 군단
#### 개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120837
> blog
```javascript
/*
function solution(hp) {
    var answer = 0;
    var a = Math.trunc(hp / 5);
    var b = Math.trunc(hp % 5 / 3);
    var c = Math.trunc(hp % 5 % 3);
    answer = a + b + c;
    return answer;
}

function solution(hp) {
    var answer = Math.trunc(hp / 5) + Math.trunc(hp % 5 / 3) + Math.trunc(hp % 5 % 3);
    return answer;
}
*/

const solution = hp => Math.trunc(hp / 5) + Math.trunc(hp % 5 / 3) + Math.trunc(hp % 5 % 3);
```

### 모스부호 (1)
#### 머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다. 그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다. 문자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
> 모스부호는 다음과 같습니다.
> morse = { 
>     '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
>     '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
>     '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
>     '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
>     '-.--':'y','--..':'z'
> } 
> ".... . .-.. .-.. ---" => "hello"
> ".--. -.-- - .... --- -."	=> "python"
> 입출력 예 #1
> .... = h
> . = e
> .-.. = l
> .-.. = l
> --- = o
> 따라서 "hello"를 return 합니다.
> 입출력 예 #2
> .--. = p
> -.-- = y
> - = t
> .... = h
> --- = o
> -. = n
> 따라서 "python"을 return 합니다.
> a ~ z에 해당하는 모스부호가 순서대로 담긴 배열입니다.
> {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."}
> https://school.programmers.co.kr/learn/courses/30/lessons/120838
```javascript
const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

/*
function solution(letter) {
    var answer = '';
    answer = letter.split(" ").map(n => Object.values(morse)[Object.keys(morse).indexOf(n)]).join("");
    return answer;
}
*/

const solution = letter => letter.split(" ").map(n => Object.values(morse)[Object.keys(morse).indexOf(n)]).join("");
```

```javascript
/* good
function solution(letter) {
    return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '')
}

function solution(letter) {
    return letter.split(' ').map(v=>morse[v]).join('');
}
*/
```

### 가위 바위 보
#### 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120839
> blog
```javascript
/*
function solution(rsp) {
    var answer = [];
    answer = rsp.split("").map(x => parseInt(x) === 2 ? 0 : parseInt(x) === 0 ? 5 : 2).join("");
    return answer;
}
*/

const solution = rsp => rsp.split("").map(x => parseInt(x) === 2 ? 0 : parseInt(x) === 0 ? 5 : 2).join("");
```

### 구슬을 나누는 경우의 수
#### 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120840
```javascript
```

```javascript
/* good
*/
```

### 점의 위치 구하기
#### 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
- x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
- x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
- x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
- x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
> x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 
> 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120841
> blog
```javascript
/*
function solution(dot) {
    var answer = dot[0] > 0 && dot[1] > 0 ? 1 : dot[0] < 0 && dot[1] > 0 ? 2 : dot[0] > 0 && dot[1] < 0 ? 3 : 4;
    return answer;
}
*/

const solution = dot => dot[0] > 0 && dot[1] > 0 ? 1 : dot[0] < 0 && dot[1] > 0 ? 2 : dot[0] < 0 && dot[1] < 0 ? 3 : 4;
```

```javascript
/* good
function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}

function solution(dot) {
    return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
}
*/
```

### 2차원으로 만들기

#### 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
#### num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.
> num_list	                    n	    result
> [1, 2, 3, 4, 5, 6, 7, 8]	    2	    [[1, 2], [3, 4], [5, 6], [7, 8]]
> https://school.programmers.co.kr/learn/courses/30/lessons/120842
> blog
```javascript
function solution(num_list, n) {
    var answer = new Array(num_list.length / n);
    for (let i = 0; i < num_list.length / n; i++) {
        answer[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            // console.log(i, j, i * n + j, num_list[i * n + j])
            answer[i][j] = num_list[i * n + j];
        }
    }
    return answer;
}
```

```javascript
/* good
function solution(num_list, n) {
    return Array
        .from({length: num_list.length / n})
        .map((v, i) => num_list.slice(i * n, i * n + n));
}

function solution(num_list, n) {
    return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n));
}

function solution(num_list, n) {
    var answer = [];
    for (let i = 0; i < num_list.length; i += n) {
        answer.push(num_list.slice(i, i + n));
    }
    return answer;
}

function solution(num_list, n) {
    const m=Array.from(Array(num_list.length/n),()=>Array(n).fill(0))
    num_list.forEach((e,i)=>m[~~(i/n)][i%n]=e);
    return m
}

var solution=(a,n)=>a.reduce((t,v,i)=>(!(i%n)?t.push([v]):t[t.length-1].push(v))&&t,[]);
*/
```

### 공 던지기
#### 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120843
> blog
```javascript
function solution(numbers, k) {
    let odd = numbers.filter((e, i) => i % 2 === 0);
    let even = numbers.filter((e, i) => i % 2 !== 0);
    let arr = numbers.length % 2 === 0 ? odd : odd.concat(even);
    // console.log(odd, even, arr, k, (k - 1) % arr.length);
    const answer = arr[(k - 1) % arr.length];
    return answer;
}
```

```javascript
/* good
function solution(numbers, k) {
    return numbers[(--k*2)%numbers.length];
}

function solution(numbers, k) {
    return numbers[((2 * (k -1))) % numbers.length];
}
*/
```

### 배열 회전시키기
#### 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120844
> blog
```javascript
/*
function solution(numbers, direction) {
    var answer = [];
    direction === "right" ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift())
    answer = numbers;
    return answer;
}
*/

const solution = (numbers, direction) =>  {
    direction === "right" ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift())
    return numbers;
}
```

```javascript
/* good
function solution(numbers, direction) {
    return direction === "right"
        ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
        : [...numbers.slice(1), numbers[0]];
}
*/
```

### 주사위의 개수
#### 머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120845
> blog
```javascript
// chatGPT 
function solution(box, n) {
    // 주어진 상자의 가로, 세로, 높이 중 가장 작은 값과 주사위 모서리의 길이 n을 비교하여 n이 더 큰 경우 0을 리턴
    if (n > Math.min(...box)) {
        return 0;
    }
    
    // 최대 변 길이 계산
    const max_length = Math.max(...box);
    
    // 각 면에서 넣을 수 있는 주사위의 개수 계산
    const count_x = Math.floor((box[0] - n) / n) + 1;
    const count_y = Math.floor((box[1] - n) / n) + 1;
    const count_z = Math.floor((box[2] - n) / n) + 1;
    
    // 최소값을 찾아서 반환
    return Math.min(count_x * count_y * Math.floor(box[2] / n), count_y * count_z * Math.floor(box[0] / n), count_z * count_x * Math.floor(box[1] / n));
}
```

```javascript
/* good
function solution(box, n) {
    let [width, length, height] = box;
    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}

function solution(box, n) {
    return box.reduce((acc,v) => acc * Math.floor(v / n), 1);
}

function solution(box, n) {
    return box.map(v=>~~(v/n)).reduce((a,v)=>a*v,1);
}

function solution(box, n) {
    return Math.floor(box[0]/n)*Math.floor(box[1]/n)*Math.floor(box[2]/n);
}

function solution(box, n) {
    return box.map(num => Math.floor(num/n)).reduce((acc, cur) => acc * cur, 1);
}
*/
```

### 합성수 찾기
#### 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120846
> blog
```javascript
/*
function solution(n) {
    var answer = 0;
    answer = [...Array(n+1).keys()]
    answer = [...Array(n+1).keys()].filter(x => [...Array(x+1).keys()].filter(e => x % e === 0).length >= 3)
    // answer = [...Array(n+1).keys()].filter(x => [...Array(x+1).keys()].filter(e => x % e === 0).length >= 3).length
    return answer;
}
*/

const solution = n => [...Array(n+1).keys()].filter(x => [...Array(x+1).keys()].filter(e => x % e === 0).length >= 3).length;
```

### 최댓값 만들기 (1)
#### 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
> 0 ≤ numbers의 원소 ≤ 10,000
> 2 ≤ numbers의 길이 ≤ 100
> https://school.programmers.co.kr/learn/courses/30/lessons/120847
> blog
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
> https://school.programmers.co.kr/learn/courses/30/lessons/120862
> blog
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

### 팩토리얼
#### i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
> i! ≤ n
> https://school.programmers.co.kr/learn/courses/30/lessons/120848
> blog
```javascript
function solution(n) {
    let answer = 0;
    let div = 0;
    while (answer < n) {
        answer++;
        div = Math.trunc(n / answer);
        // console.log(answer, n, div);
        n = div;
    }
    return answer;
}
```

```javascript
/* good
function solution(n) {
    let i = 1;
    let f = 1;
    while (f*i < n) f*=++i;
    return i;
}

function solution(n) {
    for(let i = 1, v = 1; true; v *= ++i) if(v > n) return --i;
}

function solution(n) {
    return Array(11).fill(1).map((v,i) => v + i).reduce((a,b,i,arr) => { if(a*b > n) {arr.splice(i); return i  ;} ; return a*b;})   
}
*/
```

### 모음 제거
#### 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120849
> blog
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

### 문자열 정렬하기 (1)
#### 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120850
```javascript
/*
function solution(my_string) {
    var answer = my_string.replace(/[^0-9]/g, "").split("").map(x => parseInt(x)).sort((a, b) => a - b);
    return answer;
}
*/

const solution = my_string => my_string.replace(/[^0-9]/g, "").split("").map(x => parseInt(x)).sort((a, b) => a - b);
```

```javascript
/* good
function solution(my_string) {
    return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
}

function solution(my_string) {
    return my_string.split("").filter((v) => !isNaN(v)).map((v) => v*1).sort((a,b) => a-b)
}

function solution(my_string) {
    return Array.from(my_string).filter(v => !isNaN(+v)).sort((a,b) => a - b).map(v => +v);
}

function solution(my_string) {
    return my_string.replace(/[^\d]/g,'').split('').map(v=>+v).sort();
}
*/
```

### 문자열 정렬하기 (2)
#### 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120911
```javascript
/*
function solution(my_string) {
    var answer = '';
    answer = [...my_string.toLowerCase()].sort().join("");
    return answer;
}
*/

const solution = my_string => [...my_string.toLowerCase()].sort().join("");
```

```javascript
/* good
function solution(my_string) {
    var answer = my_string.toLowerCase().split('').sort().join('')
    return answer;
}

function solution(my_string) {
    return my_string.toLowerCase().split('').sort().join('');
}

function solution(my_string) {
    return Array.from(my_string.toLowerCase()).sort().join('');
}
*/
```

### 숨어있는 숫자의 덧셈 (1)
#### 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120851
> blog
```javascript
/*
function solution(my_string) {
    var answer = 0;
    var regex = /[^0-9]/g;
    var str = my_string.replace(regex, "").split("");
    var num = str.map(x => parseInt(x));
    answer = num.reduce((x, y) => x + y);
    return answer;
}

function solution(my_string) {
    var answer = my_string.replace(/[^0-9]/g, "").split("").map(x => parseInt(x)).reduce((x, y) => x + y);
    return answer;
}
*/

const solution = my_string => my_string.replace(/[^0-9]/g, "").split("").map(x => parseInt(x)).reduce((x, y) => x + y);
```

```javascript
/* good
function solution(my_string) {
    const answer = my_string.replace(/[^0-9]/g, '')
                            .split('')
                            .reduce((acc, curr) => acc + Number(curr), 0);
    return answer;
}

function solution(my_string) {
    return my_string.replaceAll(/[^\d]/g, '').split('').map(v=>+v).reduce((a,v)=>a+v,0);
}

function solution(my_string) {
    return my_string.match(/\d/g).reduce((acc, cur) => acc + Number(cur), 0)
}
*/
```

### 숨어있는 숫자의 덧셈 (2)
#### 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120864
> blog
```javascript
/*
function solution(my_string) {
    var answer = 0;
    var regex = /[a-zA-Z]/g;
    var str = my_string.replace(regex, " ").split(" ");
    var num = str.filter(x => x !== "").map(x => parseInt(x));
    answer = num.length > 0 ? num.reduce((x, y) => x + y) : 0;
    return answer;
}

function solution(my_string) {
    var answer = 0;
    var regex = /[a-zA-Z]/g;
    var str = my_string.replace(regex, " ").split(" ");
    var num = str.map(x => x === "" ? 0 : parseInt(x));
    answer = num.reduce((x, y) => x + y);
    return answer;
}
*/

const solution = my_string => my_string.replace(/[a-zA-Z]/g, " ").split(" ").map(x => x === "" ? 0 : parseInt(x)).reduce((x, y) => x + y);
```

```javascript
/* good
function solution(my_string) {
    return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

function solution(my_string) {
    return my_string.toLowerCase().replace(/[a-z]/g, " ").split(" ").map((v) => v*1).reduce((a,b) => a+b)
}

function solution(s) {
    return s.match(/(\d+)/g)?.reduce((t,m)=>t+Number(m),0) || 0;
}

function solution(my_string) {
    return my_string.split(/[a-z]|[A-Z]/g).reduce((a,b) => { if(b.length == 0 ) b = 0; return parseInt(a) + parseInt(b)}, 0);
}

*/
```

### 소인수분해
#### 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120852
```javascript
function solution(n) {
    let answer = [...Array(n+1).keys()].filter(x => n % x === 0).slice(1);

    for (let i = 0; i < answer.length; i++) {
        let num = answer[i];
        let arr = answer.map(x => x % num === 0 ? num : x);
        let set = new Set(arr);
        answer = [...set];
        // console.log(num, arr, set, answer, answer.length);
    }
    
    return answer;
}
```

### 컨트롤 제트
#### 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120853
> blog
```javascript
/*
function solution(s) {
    var answer = 0;
    answer = s.split(" ").map((x, idx) => x === "Z" ? -parseInt(s.split(" ")[idx-1]) : parseInt(x)).reduce((a, b) => a + b);
    return answer;
}
*/

const solution = s => s.split(" ").map((x, idx) => x === "Z" ? -parseInt(s.split(" ")[idx-1]) : parseInt(x)).reduce((a, b) => a + b);
```

```javascript
/* good
function solution(s) {
    s = s.split(' ');
    let arr = [];
    for (let v of s) v === 'Z' ? arr.length ? arr.pop() : '' : arr.push(v);
    return arr.reduce((a,v)=>a+ +v,0);
}

var solution=s=>s.split(' ').reduce((t,c)=>c=='Z'?t.slice(0,-1):[...t,c],[]).map(Number).reduce((a,b)=>a+b,0)
*/
```

### 배열 원소의 길이 
#### 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120854
> blog
```javascript
/*
function solution(strlist) {
    return strlist.map(x => x.length);
}
*/

const solution = strlist => strlist.map(x => x.length);
```

### 직사각형 넓이 구하기
#### 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120860
```javascript
```

```javascript
/* good
*/
```

### 캐릭터의 좌표
#### 머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.
#### [0, 0]은 board의 정 중앙에 위치합니다. 예를 들어 board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.
> https://school.programmers.co.kr/learn/courses/30/lessons/120861
```javascript
function solution(keyinput, board) {
    let answer = [0, 0];
    let x = answer[0];
    let y = answer[1];
    const x_max = (board[0] - 1) / 2;
    const x_min = -x_max;
    const y_max = (board[1] - 1) / 2;
    const y_min = -y_max;
            
    for (let i = 0; i < keyinput.length; i++) {
        // console.log(i, keyinput[i]);
                
        if (keyinput[i] === "right") {
            x++;
            x > x_max ? x = x_max : x;
        } else if (keyinput[i] === "left") {
            x--;
            x < x_min ? x = x_min : x;
        } else if (keyinput[i] === "up") {
            y++;
            y > y_max ? y = y_max : y;
        } else {
            y--;
            y < y_min ? y = y_min : y;
        }        
        answer = [x, y];
        // console.log(i, keyinput[i], answer, x, y);
    }
    // console.log(`[${x_min} <= x <= ${x_max}, ${y_min} <= y <= ${y_max}] result: [${answer}]`);
    return answer;
}

/* 
테스트 케이스 추가
["down", "down", "down", "down", "down", "up", "up", "up", "up"], [7, 9] => [0, 0]
[], [7, 9] => [0, 0]
*/
```

```javascript
/* good
function solution(keyinput, board) {
    let res = [0,0];
    for (let p of keyinput) {
        switch(p){
            case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
            case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
            case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
            case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
        }
    }
    return res;
}
*/
```

### 다항식 더하기
#### 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.
> https://school.programmers.co.kr/learn/courses/30/lessons/120863
```javascript
function solution(polynomial) {
    const poly = polynomial.split(" ").filter(x => x !== "+");
    let sum = poly.filter(x => x.includes("x") === true);
    let num = poly.filter(x => x.includes("x") === false);
    let x = '';
    let y = '';
    
    if (sum.length > 0 ) {
        sum = sum.map(x => x === "x" ? 1 : parseInt(x.replace("x", ""))).reduce((a, b) => a + b);
        if (sum > 1) {
            x = `${sum}x`;
        } else {
            x = `x`;
        }
    } else {
        x = ``;
    }    
    
    if (num.length > 0) {
        num = num.reduce((a, b) => parseInt(a) + parseInt(b));
        y = `${num}`;
    } else {
        y = ``;
    }
    
    const answer = x.length > 0 ? y.length > 0 ? `${x} + ${y}` : `${x}` : `${y}`;
    return answer;
}
```

```javascript
/* good
function solution(polynomial) {
    const arr = polynomial.split(" + ");
    const xNum = arr
                .filter(n => n.includes("x"))
                .map(n => n.replace('x', '') || '1')
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    const num = arr
                .filter(n => !isNaN(n))
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

    let answer = [];
    if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
    if(num) answer.push(num);

    return answer.join(" + ");
}

function solution(p) {
    var [x, c] = p.split('+').reduce(([a,b],s) => {
        if (s.includes('x')) {
            return [a + Number(s.trim().replace('x','') || 1), b];
        }
        return [a, b + Number(s)];
    }, [0, 0]);

    if (!x && !c) return '0';
    if (!x) return c.toString();
    x = `${x==1?'':x}x`;
    if (!c) return x;
    return `${x} + ${c}`;
}
*/
```

### 안전지대
#### 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다. 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다. 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120866
```javascript
```

```javascript
/* good
*/
```

### 삼각형의 완성조건 (1)
#### 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
> 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
> 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 
> 세 변으로 삼각형을 만들 수 있다면 1,
> 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120889
> blog
```javascript
function solution(sides) {
    var answer = sides.sort((a, b) => b - a);
    return answer[0] < answer[1] + answer[2] ? 1 : 2;
}
```

### 삼각형의 완성조건 (2)
#### 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다. 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다. 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120868
> blog
```javascript
/*
function solution(sides) {
    var answer = 0;
    num1 = [...Array(sides[0] + sides[1]).keys()];
    // console.log(num1);
    num2 = [...Array(Math.max(...sides) - Math.min(...sides) + 1).keys()];
    // console.log(num2);
    
    // for(let i = 0; i < num2.length; i ++) num1.shift();
    // answer = num1;
    // return answer.length;
       
    console.log(num1.slice(num2.length))
    return num1.slice(num2.length).length;
}
*/

const solution = sides => [...Array(sides[0] + sides[1]).keys()].slice([...Array(Math.max(...sides) - Math.min(...sides) + 1).keys()].length).length;
```

```javascript
/* good
function solution(sides) {
    return Math.min(...sides)*2-1
}

function solution(sides) {
    return 2 * Math.min(...sides) - 1;
}

function solution(sides) {
    sides.sort((a,b) => b - a);
    return sides[1] + sides[1] -1;
}

function solution(sides) {
    var num = [...sides].sort((a,b)=>b-a);
    var answer = num[1]*2 - 1;
    return answer;
}

function solution(sides) {
    return (sides[0] +sides[1] -Math.max(...sides) +Math.min(...sides) -1)
}

const solution = (sides) => sides[0] + sides[1] - Math.abs(sides[0] - sides[1]) - 1
*/
```

### 외계어 사전
#### PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120869
```javascript
```

```javascript
/* good
*/
```

### 저주의 숫자 3
#### 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.
10진법	3x 마을에서 쓰는 숫자	10진법	3x 마을에서 쓰는 숫자
1	    1	                    6	    8
2	    2	                    7	    10
3	    4	                    8	    11
4	    5	                    9	    14
5	    7	                    10	    16
#### 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120871
```javascript
```

```javascript
/* good
*/
```

### 평행
#### 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
> [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
#### 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120875
```javascript
```

```javascript
/* good
*/
```

### 겹치는 선분의 길이
#### 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요. lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.
#### 선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.
> https://school.programmers.co.kr/learn/courses/30/lessons/120876
```javascript
```

```javascript
/* good
*/
```

### 유한소수 판별하기
#### 소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다. 두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.
> 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
> https://school.programmers.co.kr/learn/courses/30/lessons/120878
```javascript
```

```javascript
/* good
*/
```

### 특이한 정렬
#### 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120880
> blog
```javascript
function solution(numlist, n) {
    let answer = [];
    const arr = numlist.map(x => Math.abs(x - n));
    const abs = [...arr].sort((a, b) => a - b);
    // console.log(numlist, arr, abs);
    for (let i = 0; i < abs.length; i++) {
        if (abs[i] === abs[i-1]) {
            numlist.includes(n - abs[i]) ? answer.push(n - abs[i]) : answer.push(n + abs[i]);
        } else {
            numlist.includes(n + abs[i]) ? answer.push(n + abs[i]) : answer.push(n - abs[i]);
        }
        // console.log(i, n - abs[i], n + abs[i]);
    }
    return answer;
}
```

```javascript
/* good
function solution(numlist, n) {
    return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
*/
```

### 등수 매기기
#### 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120882
> blog
```javascript
function solution(score) {
    let average = [...score].map(x => (x[0] + x[1]) / 2);
    let answer = average.map(x => [...average].sort((a, b) => b - a).indexOf(x) + 1);
    return answer;
}
```

```javascript
/* good
function solution(score) {
    return score.map((el) => {
        return (
            score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
        );
    });
}

var solution=s=>s.map(([a,b])=>(a+b)/2).map((n,_,r)=>[...r].sort((a, b)=>b-a).indexOf(n)+1)
*/
```

### 로그인 성공?
#### 머쓱이는 프로그래머스에 로그인하려고 합니다. 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때, 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.
> 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
> 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.
> https://school.programmers.co.kr/learn/courses/30/lessons/120883
> blog
```javascript
function solution(id_pw, db) {
    var answer = '';
    answer = db.map(x => x[0] === id_pw[0] ? x[1] === id_pw[1] ? "login" : "wrong pw" : "fail")
    answer = answer.includes("login") ? "login" : answer.includes("wrong pw") ? "wrong pw" : "fail";

    answer 
    return answer;
}
```

```javascript
/* good
function solution(id_pw, db) {
    const [id, pw] = id_pw;
    const map = new Map(db);
    return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}

var solution=([a,b],d)=>d.some(([p,q])=>a==p&&b==q)?'login':d.some(([p])=>a==p)?'wrong pw':'fail'
*/
```

### 치킨 쿠폰
#### 프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다. 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120884
```javascript
function solution(chicken) {
    let answer = 0;
    let num1 = 0;
    let num2 = 0;
    while (chicken >= 10) {
        num1 = Math.trunc(chicken / 10);
        num2 = Math.trunc(chicken % 10);
        chicken = num1 + num2;        
        answer = answer + num1;
    }
    return answer;
}
```

```javascript
/* good
function solution(chicken) {
    var answer = parseInt((chicken-1) / 9);
    return answer;
}

function solution(chicken) {
    return ~~(chicken*0.111111)
}
*/
```

### 이진수 더하기
#### 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120885
```javascript
function solution(bin1, bin2) {
    var answer = [];
    const sum = bin => [...bin].reverse().map((x, i) => x * Math.pow(2, i)).reduce((a, b) => a + b);
    const dec1 = sum(bin1);
    const dec2 = sum(bin2);
    const dec3 = dec1 + dec2;
    // console.log(`${dec1} + ${dec2} = ${dec3}`);
    let num0 = dec3;
    while (Math.trunc(num0 / 2) > 0) {
        let num1 = Math.trunc(num0 / 2);
        let num2 = Math.trunc(num0 % 2);
        answer.unshift(num2);
        // console.log(`${num0} ${num1} ${num2} [${answer}]`);
        num0 = num1;
    }
    num0 > 0 ? answer.unshift(1) : answer.unshift(0);
    // console.log(`${num0} [${answer}]`);
    const bin3 = answer.join("");
    // console.log(`${dec1} + ${dec2} = ${dec3}, ${bin1} + ${bin2} = ${bin3}`);
    return bin3;
}
```

```javascript
/* good
function solution(bin1, bin2) {
    const sum = parseInt(bin1, 2) + parseInt(bin2, 2)
    return sum.toString(2)
}

function solution(bin1, bin2) {
  let temp = Number(bin1) + Number(bin2);
  temp = [...temp.toString()].reverse().map((v) => +v);

  for (let i = temp.length; i < 11; i++) {
    temp.push(0);
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      temp[i] = 0;
      temp[i + 1]++;
    } else if (temp[i] === 3) {
      temp[i] = 1;
      temp[i + 1]++;
    }
  }
  return Number(temp.reverse().join("")).toString();
}
*/
```

### A로 B 만들기
#### 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
```javascript
/*
function solution(before, after) {
    var answer = 0;
    answer = before.split("").reverse().join("") === after ? 1 : 0;
    return answer;
}

const solution = (before, after) => before.split("").reverse().join("") === after ? 1 : 0;
*/

/*
function solution(before, after) {
    var answer = 0;
    answer = [...before].sort().join("") === [...after].sort().join("") ? 1 : 0;
    return answer;
}
*/

const solution = (before, after) => [...before].sort().join("") === [...after].sort().join("") ? 1 : 0;
```

### k의 개수
#### 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120887
> blog
```javascript
function solution(i, j, k) {
    var answer = 0;
    // console.log([...Array(j+1).keys()].slice(i, j+1));
    // console.log([...Array(j+1).keys()].slice(i, j+1).map(n => n.toString().split("")));
    [...Array(j+1).keys()].slice(i, j+1).map(n => n.toString().split("").map(n => n.includes(k) === true ? answer++ : answer));
    return answer;
}
```

```javascript
/* good
function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }
    return a.split(k).length-1;
}

function solution(i, j, k) {
    let str = Array(j - i + 1).fill(i).map((v, i) => v + i).join('')
    return Array.from(str).filter(t => +t === k).length;
}

function solution(i, j, k) {
    return Array(j-i+1).fill(i).map((v,i)=>v+i).join('').split(k).length-1;
}

function solution(i, j, k) {
    let count = 0
    for(; i <= j; i++){
        if((i+'').includes(k)) count += (i+'').split('').filter(n => n === k+'').length
    }
    return count;
}

var solution=(i,j,k)=>new Array(j-i+1).fill(0).map((_,n)=>n+i).join('').split('').filter(n=>n==k).length

function solution(i, j, k) {
    var answer = 0;
    var arr = Array(j-i+1).fill().map((m,idx) => idx+=i).join('').split('').filter(f=> f == k);
    return arr.length;
}
*/
```

### 중복된 문자 제거
#### 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120888
```javascript
/*
function solution(my_string) {
    let anwser = '';
     answer = [...new Set(my_string)].join("");
    return answer;
}
*/

const solution = my_string => [...new Set(my_string)].join("");
```

### 가까운 수
#### 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120890
> blog
```javascript
function solution(array, n) {
    const abs = array.sort((a, b) => a - b).map(x => Math.abs(x - n));
    const min = Math.min(...abs);    
    const answer = array[abs.indexOf(min)];
    // console.log(array, abs, min, answer);
    return answer;
}
```

```javascript
/* good
function solution(array, n) {
    return array.reduce((a,c)=> Math.abs(a-n) < Math.abs(c-n) ? a : Math.abs(a-n) === Math.abs(c-n) ? Math.min(a, c) : c);
}

function solution(array, n) {
    array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
    return array[0];
}

let solution=(r,n)=>r.map(e=>[e,Math.abs(e-n)]).sort((a,b)=>a[1]-b[1]||a[0]-b[0])[0][0]

function solution(array, n) {
    return array[array.sort((a,b) => a-b).map((v) => Math.abs(v-n)).indexOf(Math.min(...array.map((v) => Math.abs(v-n))))]
}

var solution=(a,n)=>a.reduce((t,i)=>Math.abs(t-n)<Math.abs(i-n)?t:Math.abs(t-n)==Math.abs(i-n)?Math.min(t,i):i)
*/
```

### 369게임
#### 머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120891
> blog
```javascript
/*
function solution(order) {
    var answer = 0;
    answer = order.toString().split("").filter(n => parseInt(n) === 3 || parseInt(n) === 6 || parseInt(n) === 9).length;
    return answer;
}
*/

const solution = order => order.toString().split("").filter(n => parseInt(n) === 3 || parseInt(n) === 6 || parseInt(n) === 9).length;
```

```javascript
/* good
function solution(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
}

function solution(order) {
    return (''+order).split(/[369]/).length-1;
}

function solution(order) {
    const mySet = new Set([3,6,9]);
    return String(order).split('')
                        .filter(num => mySet.has(Number(num)))
                        .length;
}

function solution(order) {
    return Array.from(order.toString()).filter(t => ['3', '6', '9'].includes(t)).length;
}

function solution(order) {
    var answer = String(order).split(/[369]/g).length - 1;
    return answer;
}
*/
```

### 암호 해독
#### 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
> 암호화된 문자열 cipher를 주고받습니다.
> 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
> 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120892
> blog
```javascript
function solution(cipher, code) {
    let answer = [];
    let arr = cipher.split("");
    for (let i = 1; i * code <= cipher.length; i++) {
        answer.push(arr[(code*i)-1]);
    }
    return answer.join("");
}
```

```javascript
/* good
function solution(cipher, code) {
    var answer = "";
    for (let i = code - 1; i < cipher.length; i += code) {
        answer += cipher[i];
    }
    return answer;
}

function solution(cipher, code) {
    return cipher.split('').filter((v,i)=>(i+1)%code===0).join('');
}
*/
```

### 대문자와 소문자
#### 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120893
> blog
```javascript
/*
대문자 /[A-Z]/g
소문자 /[a-z]/g
String.prototype.toUpperCase() 
String.prototype.toLowerCase()

function solution(my_string) {
    var answer = '';
    // answer = [...my_string].map(n => n.match(/[A-Z]/g) ? n.toLowerCase() : n.toUpperCase()).join("")
    answer = [...my_string].map(n => n.match(/[a-z]/g) ? n.toUpperCase() : n.toLowerCase()).join("")
    return answer;
}

const solution = my_string => [...my_string].map(n => n.match(/[a-z]/g) ? n.toUpperCase() : n.toLowerCase()).join("");
*/

const solution = my_string => [...my_string].map(n => n.match(/[A-Z]/g) ? n.toLowerCase() : n.toUpperCase()).join("");
```

```javascript
/* good
function solution(my_string) {
    var answer = '';
    for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    return answer;
}

function solution(my_string) {
    return my_string.split('').map(n => n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()).join('')
}

function solution(my_string) {
    return my_string.split("").map((v, index) => my_string.charCodeAt(index) < 97 ? v.toLowerCase() : v.toUpperCase()).join("");
}
*/
```

### 영어가 싫어요
#### 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120894
```javascript
function solution(numbers) {    
    let answer = 0;
    const str = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i = 0; i < str.length; i++) {
        numbers = numbers.replaceAll(str[i], i);
        // console.log(numbers, answer, i, str[i]);
    }
    answer = parseInt(numbers);
    return answer;
}
```

```javascript
/* good
function solution(numbers) {
    const obj = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9
    };
    const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
        return obj[v];
    });
    return Number(num);
}

function solution(numbers) {
    const number = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]
    for(let i = 0 ; i<number.length; i++){
        numbers = numbers.split(number[i]).join(i)
    }
    return +numbers
}

var solution=n=>Number(['zero','one','two','three','four','five','six','seven','eight','nine'].reduce((t,s,i)=>t.replaceAll(s,i),n))
*/
```

### 인덱스 바꾸기
#### 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120895
> blog
```javascript
function solution(my_string, num1, num2) {
    let answer = [];
    answer = my_string.split("");
    let n1 = answer[num1];
    let n2 = answer[num2];
    answer[num1] = n2;
    answer[num2] = n1;    
    return answer.join("");
}
```

```javascript
/* good
function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}

function solution(my_string, num1, num2) {
    let temp = '';
    const strArray = my_string.split('');
    temp = strArray[num1];
    strArray[num1] = strArray[num2];
    strArray[num2] = temp;
    return strArray.join('');
}
*/
```

### 한 번만 등장한 문자
#### 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
> https://school.programmers.co.kr/learn/courses/30/lessons/120896
> blog
```javascript
/*
function solution(s) {
    var answer = '';
    answer = [...s].sort().filter(x => s.indexOf(x) === s.lastIndexOf(x)).join("");
    return answer;
}
*/

const solution = s => [...s].sort().filter(x => s.indexOf(x) === s.lastIndexOf(x)).join("");
```

```javascript
/* good
function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}

var solution=s=>[...s].filter(c=>s.match(new RegExp(c,'g')).length==1).sort().join('')
*/
```

### 약수 구하기
#### 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120897
> blog
```javascript
/*
function solution(n) {
    var answer = [];
    answer = [...Array(n+1).keys()].filter(x => n % x === 0)
    return answer;
}
*/

const solution = n => [...Array(n+1).keys()].filter(x => n % x === 0);
```

```javascript
/* good
function solution(n) {
    return Array(n).fill(0).map((v, index) => v+index+1).filter((v) => n%v===0);
}

var solution=n=>new Array(n).fill(1).map((_,i)=>i+1).filter(a=>!(n%a))
*/
```

### 편지
#### 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120898
> blog
```javascript
/*
function solution(message) {
    return message.split('').length * 2;
}
*/

const solution = message => message.split('').length * 2;
```

### 가장 큰 수 찾기
#### 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120899
> blog
```javascript
/*
function solution(array) {
    var answer = [];
    answer.push(Math.max(...array), array.indexOf(Math.max(...array)));
    return answer;
}

function solution(array) {
    var answer = [Math.max(...array), array.indexOf(Math.max(...array))];
    return answer;
}
*/

const solution = array => [Math.max(...array), array.indexOf(Math.max(...array))];
```

```javascript
/* good
function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}

function solution(array) {
    return [Math.max(...array), array.indexOf(Math.max(...array))]
}

function solution(array) {
    return [Math.max(...array), array.findIndex(el => el === Math.max(...array))];
}
*/
```

### 문자열 계산하기
#### my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120902
```javascript
function solution(my_string) {
    let answer = 0;
    let cal = my_string.trim().split(" ");
    let sum = parseInt(cal[0]);
    let i = 0;
    while(i <= cal.length) {
        if( cal[i+1] === "+") {
            answer = sum + parseInt(cal[i+2]);
        } else if( cal[i+1] === "-") {
            answer = sum - parseInt(cal[i+2]);
        }
        sum = answer;
        // console.log(i, parseInt(cal[i]), cal[i+1], parseInt(cal[i+2]), sum);
        i = i + 2;
    }
    return answer;
}
```

```javascript
/* good
function solution(my_string) {
    const arr = my_string.split(' ').filter(e=>e);
    while(arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift())
    return arr[0]
}

function solution(my_string) {
    const arr = my_string.split(" ");
    const nums = [arr[0]];

    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i - 1] === "+") {
            nums.push(arr[i]);
        } else {
            if (arr[i].includes("-")) {
                nums.push(arr[i].substring(1));
            } else {
                nums.push("-" + arr[i]);
            }
        }
    }
    return nums.reduce((acc, cur) => acc + parseInt(cur, 10), 0);
}

function solution(my_string) {
    const stack = [];

    let sign = 1;
    for (const ch of my_string.split(" ")) {
        if (ch === "+") {
            sign = 1;
        } else if (ch === "-") {
            sign = -1;
        } else {
            stack.push(ch * sign);
        }
    }

    return stack.reduce((a,b) => a + b, 0);
}

function solution(my_string) {
    return my_string.split('+').map(e => e.split('-').reduce((acc, el, i) => {
        if (i !== 0) {
            return acc - +el;
        } else {
            return acc + +el;
        }
    }, 0)).reduce((acc, e) => acc + e, 0);
}
*/
/* check
var solution=eval
>> 주의: 문자열로부터 **eval()**을 실행하는 것은 엄청나게 위험합니다. **eval()**을 사용하면 해커가 위험한 코드를 사용할 수 있습니다. 
>> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval
*/
```

### 배열의 유사도
#### 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120903
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

### 숫자 찾기
#### 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120904
> blog
```javascript
/*
function solution(num, k) {
    var answer = 0;
    if ( [...''+num].findIndex(n => parseInt(n) === k) !== -1 ) {
        answer = [...''+num].findIndex(n => parseInt(n) === k) + 1;
    }else{
        answer = -1;
    }

    return answer;
}

function solution(num, k) {
    var answer = 0;
    answer = [-1].concat([...''+num]).findIndex(n => parseInt(n) === k);
    return answer;
}
*/

const solution = (num, k) => [-1].concat([...''+num]).findIndex(n => parseInt(n) === k);
```

```javascript
/* good
function solution(num, k) {
    return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
}

function solution(num, k) {
    let ind = (''+num).indexOf(k);
    return ind === -1 ? -1 : ind+1;
}

function solution(num, k) {
    var answer = num.toString()
    if (answer.includes(k)) {
        return answer.indexOf(k) + 1;
    } else {
        return -1;
    }
}

function solution(num, k) {
    var answer = num.toString().indexOf(k);
    return answer === -1 ? -1 : answer += 1;
}

function solution(num, k) {
    let result = Array.from(num.toString())
        .findIndex(t => t === k.toString());

    return result < 0 ? result : result + 1
}
*/
```

### n의 배수 고르기
#### 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120905
> blog
```javascript
/*
function solution(n, numlist) {
    var answer = [];
    answer = numlist.filter(x => x % n === 0)
    return answer;
}
*/

const solution = (n, numlist) => numlist.filter(x => x % n === 0);
```

### 자릿수 더하기
#### 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120906
> blog
```javascript
/*
function solution(n) {
    return n.toString().split("").map(x => parseInt(x)).reduce((x, y) => x + y);
}
*/

const solution = n => n.toString().split("").map(x => parseInt(x)).reduce((x, y) => x + y);
```

```javascript
/* good
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
*/
```

### OX퀴즈
#### 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120907
> blog
```javascript
function solution(quiz) {
    const answer = [];
    const cal = [...quiz].map(e => e.split(" ").map((e, i) => i === 0 || i === 2 || i === 4 ? parseInt(e) : e));
    
    for (let i = 0; i < cal.length; i++) {
        let num1 = parseInt(cal[i][0]);
        let num2 = parseInt(cal[i][2]);
        let num3 = parseInt(cal[i][4]);
        let result = cal[i][1] === "+" ? num1 + num2 : num1 - num2;
        let ox = result === num3 ? answer.push("O") : answer.push("X");
        // console.log(`${num1} ${cal[i][1]} ${num2} = ${num3}`);
    }
    
    return answer;
}
```

```javascript
/* good
function solution(quiz) {
    var answer = [];
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        return +a + (+b * sign) === +result ? 'O' : 'X'
    });
}

function solution(quiz) {
  return quiz
    .map((el) => el.split(" = "))
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X";
    });
}

function solution(quiz) {
    let ans = [];
    for (let q of quiz) {
        let c = q.split('=');
        ans.push(eval(c[0]) === +c[1] ? 'O' : 'X');
    }
    return ans;
}

var solution=q=>q.map(r=>r.split('=')).map(([a,b])=>eval(a)==b?'O':'X')
*/
```

### 문자열안에 문자열
#### 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120908
> blog
```javascript
/*
function solution(str1, str2) {
    var answer = str1.match(str2) ? 1 : 2;
    return answer;
}
*/

const solution = (str1, str2) => str1.match(str2) ? 1 : 2;
```

```javascript
/* good
function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2
}

function solution(str1, str2) {
    return str1.indexOf(str2) === -1 ? 2 : 1;
}

function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2;
}

function solution(str1, str2) {
    return str1.search(str2) !== -1 ? 1 : 2
}
*/
```

### 제곱수 판별하기
#### 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120909
> blog
```javascript
/*
function solution(n) {
    var answer = Math.trunc(Math.sqrt(n)) * Math.trunc(Math.sqrt(n)) === n ? 1 : 2;
    return answer;
}
*/

const solution = n => Math.trunc(Math.sqrt(n)) * Math.trunc(Math.sqrt(n)) === n ? 1 : 2;
```

```javascript
/* good
function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
*/
```

### 세균 증식
#### 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120910
> blog
```javascript
/*
function solution(n, t) {
    var answer = n * Math.pow(2, t);
    return answer;
}
*/

const solution = (n, t) => n * Math.pow(2, t);
```

```javascript
/* good
function solution(n, t) {
    return n << t;
}
*/
```

### 7의 개수
#### 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120912
> blog
```javascript
/*
function solution(array) {
    var answer = 0;
    answer = array.join("").split("").filter(x => parseInt(x) === 7).length
    return answer;
}
*/

const solution = array => array.join("").split("").filter(x => parseInt(x) === 7).length;
```

### 잘라서 배열로 저장하기
#### 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120913
> blog
```javascript
function solution(my_str, n) {
    var answer = [];
    for (let i = 0; i < Math.ceil(my_str.length / n); i++) {
        answer.push(my_str.slice(n * i, (n * i) + n));
    }
    return answer;
}
```

```javascript
/* good
function solution(my_str, n) {
    return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
*/
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

### 문자열 밀기
#### 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120921
```javascript
function solution(A, B) {
    let answer = 0;
    let arr = [...A];    
    let i = 0;    
    while (arr.join("") !== B) {
        if (i < arr.length) {
            i++;
            let pop = arr.pop();
            arr.unshift(pop);
        } else if (i === arr.length) {
            return -1;
        }
        // console.log(`${i} - ${arr} - ${arr.join("")}`);
    }
    answer = i;
    return answer;
}
```

```javascript
/* good
let solution=(a,b)=>(b+b).indexOf(a)

var solution=(A,B)=>new Array(A.length).fill(A).map((s,i)=>s.slice(A.length-i)+s.slice(0,A.length-i)).indexOf(B)
*/
```

### 종이 자르기
#### 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.
#### 정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120922
```javascript
```

```javascript
/* good
*/
```

### 연속된 수의 합
#### 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120923
> blog
```javascript
/*
function solution(num, total) {
    var answer = [];
    // answer = [...Array(num).keys()];
    // answer = [...Array(num).keys()].reduce((a, b) => a + b);
    // (num * n) + [...Array(num).keys()].reduce((a, b) => a + b) = total
    var start = (total - [...Array(num).keys()].reduce((a, b) => a + b)) / num;
    // answer = start;
    answer = [...Array(num).keys()].map(n => n + start);
    return answer;
}

function solution(num, total) {
    const answer = [...Array(num).keys()].map(n => n + (total - [...Array(num).keys()].reduce((a, b) => a + b)) / num);
    return answer;
}
*/

const solution = (num, total) => answer = [...Array(num).keys()].map(n => n + (total - [...Array(num).keys()].reduce((a, b) => a + b)) / num);

/*
num = 1
n

num = 2
n + (n+1)
2n + (1)

num = 3
n + (n+1) + (n+2)
3n + (1+2)

num = 4
n + (n+1) + (n+2) + (n+3) = 4n + (1+2+3)

num = 5
n + (n+1) + (n+2) + (n+3) + (n+4)
5n + (1+2+3+4)
*/
```

```javascript
/* good
function solution(num, total) {
    var min = Math.ceil(total/num - Math.floor(num/2));
    var max = Math.floor(total/num + Math.floor(num/2));
    return new Array(max-min+1).fill(0).map((el,i)=>{return i+min;});
}

function solution(num, total) {
    const a = (2 * total / num + 1 - num) / 2
    return Array(num).fill().map((_, i) => i + a)
}
*/
```

### 다음에 올 숫자
#### 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120924
```javascript
```

```javascript
/* good
*/
```

### 옹알이 (1)
#### 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
> babbling : result
> ["aya", "yee", "u", "maa", "wyeoo"] : 1
> ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"] : 3
```javascript
```

```javascript
/* good
*/
```