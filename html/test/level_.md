# level0 : 코딩 기초 트레이닝

Link : [level0](https://school.programmers.co.kr/learn/challenges/training?order=acceptance_desc&languages=javascript "코딩 기초 트레이닝")

### 문자열 출력하기
#### 문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181952
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(str);
});
```

### a와 b 출력하기
#### 정수 a와 b가 주어집니다. 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181951
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
    // console.log(Number(input[0]) + Number(input[1]));
    console.log(`a = ${Number(input[0])}\n` + `b = ${Number(input[1])}`);
});
```

### 문자열 반복해서 출력하기
#### 문자열 str과 정수 n이 주어집니다. str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181950
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
    str = input[0];
    n = Number(input[1]);
    console.log(str.repeat(n));
});
```

### 대소문자 바꿔서 출력하기
#### 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181949
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log([...str].map(e => e.match(/[a-z]/g) ? e.toUpperCase() : e.toLowerCase()).join(""));
});
```

### 특수문자 출력하기
#### 다음과 같이 출력하도록 코드를 작성해 주세요. ->>>> !@#$%^&*(\'"<>?:;
> https://school.programmers.co.kr/learn/courses/30/lessons/181948
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log(`!@#$%^&*(\\'"<>?:;`); // \ → \\ 로 수정
});
```

### 덧셈식 출력하기
#### 두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181947
> a + b = c
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
    // console.log(Number(input[0]) + Number(input[1]));
    console.log(`${Number(input[0])} + ${Number(input[1])} = ${Number(input[0]) + Number(input[1])}`);
});
```

### 문자열 붙여서 출력하기
#### 두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다. 입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181946
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
    str1 = input[0];
    str2 = input[1];
    console.log(`${str1}${str2}`);
});
```

### 문자열 돌리기
#### 문자열 str이 주어집니다. 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181945
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    str.split("").forEach(e => console.log(e));
});
```

### 홀짝 구분하기
#### 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181944
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
    n = Number(input[0]);
    n % 2 === 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`);
});
```

### 문자열 겹쳐쓰기
#### 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181943
```javascript
/*
function solution(my_string, overwrite_string, s) {
    const answer = `${my_string.substring(0, s)}${overwrite_string}${my_string.substring(s + overwrite_string.length)}`;
    return answer;
}
*/

const solution = (my_string, overwrite_string, s) => `${my_string.substring(0, s)}${overwrite_string}${my_string.substring(s + overwrite_string.length)}`;
```

### 문자열 섞기
#### 길이가 같은 두 문자열 str1과 str2가 주어집니다. 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181942
```javascript
function solution(str1, str2) {
    let answer = [];
    for (let i = 0; i < str1.length; i++) {
        answer.push(str1[i]);
        answer.push(str2[i]);   
    }
    return answer.join("");
}
```

```javascript
/* good
function solution(str1, str2) {
    return [...str1].map((x, idx)=> x+str2[idx]).join("");
}
*/
```

### 문자 리스트를 문자열로 변환하기
#### 문자들이 담겨있는 배열 arr가 주어집니다. arr의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181941
```javascript
/*
function solution(arr) {
    var answer = arr.join("");
    return answer;
}
*/

const solution = arr => arr.join("");
```

### 문자열 곱하기
#### 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181940
```javascript
/*
function solution(my_string, k) {
    var answer = my_string.repeat(k);
    return answer;
}
*/

const solution = (my_string, k) => my_string.repeat(k);
```

### 더 크게 합치기
#### 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
> 12 ⊕ 3 = 123
> 3 ⊕ 12 = 312
> 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
> 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.
> https://school.programmers.co.kr/learn/courses/30/lessons/181939
```javascript
function solution(a, b) {
    const x = a.toString();
    const y = b.toString();
    const xy = parseInt(x + y);
    const yx = parseInt(y + x);
    const answer = xy >= yx ? xy : yx;
    return answer;
}
```

```javascript
/* good
function solution(a, b) {
    return Math.max(+(a.toString()+b.toString()),+(b.toString()+a.toString()));
}

function solution(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}
*/
```

### 두 수의 연산값 비교하기
#### 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
> 12 ⊕ 3 = 123
> 3 ⊕ 12 = 312
> 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.
> 단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.
> https://school.programmers.co.kr/learn/courses/30/lessons/181938
```javascript
function solution(a, b) {
    const x = a.toString();
    const y = b.toString();
    const z = 2 * a * b;
    const xy = parseInt(x + y);
    const answer = xy >= z ? xy : z;
    return answer;
}
```

```javascript
/* good
function solution(a, b) {
    return Math.max( +(a.toString()+b.toString()),2*a*b)
}

function solution(a, b) {
    return Math.max(Number(`${a}${b}`), 2 * a * b);
}
*/
```

### n의 배수
#### 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181937
```javascript
/*
function solution(num, n) {
    var answer = num % n === 0 ? 1 : 0;
    return answer;
}
*/

const solution = (num, n) => num % n === 0 ? 1 : 0;
```

### 공배수
#### 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181936
```javascript
/*
function solution(number, n, m) {
    var answer = number % n === 0 && number % m === 0 ? 1 : 0;
    return answer;
}
*/

const solution = (number, n, m) => number % n === 0 && number % m === 0 ? 1 : 0;
```

```javascript
/* good
function solution(number, n, m) {
    return +!(number % n || number % m);
}
*/
```

### 홀짝에 따라 다른 값 반환하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 조건 문자열
#### 
```javascript
```

```javascript
/* good
*/
```

### flag에 따라 다른 값 반환하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 코드 처리하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 등차수열의 특정한 항만 더하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 주사위 게임 2
#### 
```javascript
```

```javascript
/* good
*/
```

### 원소들의 곱과 합
#### 
```javascript
```

```javascript
/* good
*/
```

### 이어 붙인 수
#### 
```javascript
```

```javascript
/* good
*/
```

### 마지막 두 원소
#### 
```javascript
```

```javascript
/* good
*/
```

### 수 조작하기 1
#### 
```javascript
```

```javascript
/* good
*/
```

### 수 조작하기 2
#### 
```javascript
```

```javascript
/* good
*/
```

### 수열과 구간 쿼리 3
#### 
```javascript
```

```javascript
/* good
*/
```

### 수열과 구간 쿼리 2
#### 
```javascript
```

```javascript
/* good
*/
```

### 수열과 구간 쿼리 4
#### 
```javascript
```

```javascript
/* good
*/
```

### 배열 만들기 2
#### 
```javascript
```

```javascript
/* good
*/
```

### 카운트 업
#### 
```javascript
```

```javascript
/* good
*/
```

### 콜라츠 수열 만들기
#### 
```javascript
```

```javascript
/* good
*/
```

### 배열 만들기 4
#### 
```javascript
```

```javascript
/* good
*/
```

### 간단한 논리 연산
#### 
```javascript
```

```javascript
/* good
*/
```

### 주사위 게임 3
#### 
```javascript
```

```javascript
/* good
*/
```

### 글자 이어 붙여 문자열 만들기
#### 
```javascript
```

```javascript
/* good
*/
```

### 9로 나눈 나머지
#### 
```javascript
```

```javascript
/* good
*/
```

### 문자열 여러 번 뒤집기
#### 
```javascript
```

```javascript
/* good
*/
```

### 배열 만들기 5
#### 
```javascript
```

```javascript
/* good
*/
```

### 부분 문자열 이어 붙여 문자열 만들기
#### 
```javascript
```

```javascript
/* good
*/
```

### 문자열의 뒤의 n글자
#### 
```javascript
```

```javascript
/* good
*/
```

### 접미사 배열
#### 
```javascript
```

```javascript
/* good
*/
```

### 접미사인지 확인하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 문자열의 앞의 n글자
#### 
```javascript
```

```javascript
/* good
*/
```

### 접두사인지 확인하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 문자열 뒤집기
#### 
```javascript
```

```javascript
/* good
*/
```

### 세로 읽기
#### 
```javascript
```

```javascript
/* good
*/
```

### qr code
#### 
```javascript
```

```javascript
/* good
*/
```

### 문자 개수 세기
#### 
```javascript
```

```javascript
/* good
*/
```

### 배열 만들기 1
#### 
```javascript
```

```javascript
/* good
*/
```

### 글자 지우기
#### 
```javascript
```

```javascript
/* good
*/
```

### 카운트 다운
#### 
```javascript
```

```javascript
/* good
*/
```

### 가까운 1 찾기
#### 
```javascript
```

```javascript
/* good
*/
```

### 리스트 자르기
#### 
```javascript
```

```javascript
/* good
*/
```

### 첫 번째로 나오는 음수
#### 
```javascript
```

```javascript
/* good
*/
```

### 배열 만들기 3
#### 
```javascript
```

```javascript
/* good
*/
```

### 2의 영역
#### 
```javascript
```

```javascript
/* good
*/
```

### 배열 조각하기
#### 
```javascript
```

```javascript
/* good
*/
```

### n 번째 원소부터
#### 
```javascript
```

```javascript
/* good
*/
```

### 순서 바꾸기
#### 
```javascript
```

```javascript
/* good
*/
```

### 왼쪽 오른쪽
#### 
```javascript
```

```javascript
/* good
*/
```

### n 번째 원소까지
#### 
```javascript
```

```javascript
/* good
*/
```

### n개 간격의 원소들
#### 
```javascript
```

```javascript
/* good
*/
```

### 홀수 vs 짝수
#### 
```javascript
```

```javascript
/* good
*/
```

### 5명씩
#### 
```javascript
```

```javascript
/* good
*/
```

### 할 일 목록
#### 
```javascript
```

```javascript
/* good
*/
```

### n보다 커질 때까지 더하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 수열과 구간 쿼리 1
#### 
```javascript
```

```javascript
/* good
*/
```

### 조건에 맞게 수열 변환하기 1
#### 
```javascript
```

```javascript
/* good
*/
```

### 조건에 맞게 수열 변환하기 2
#### 
```javascript
```

```javascript
/* good
*/
```

### 1로 만들기
#### 
```javascript
```

```javascript
/* good
*/
```

### 길이에 따른 연산
#### 
```javascript
```

```javascript
/* good
*/
```

### 원하는 문자열 찾기
#### 
```javascript
```

```javascript
/* good
*/
```

### 대문자로 바꾸기
#### 알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.
```javascript
/*
function solution(myString) {
    var answer = '';
    answer = myString.toUpperCase();
    return answer;
}
*/

const solution = myString => myString.toUpperCase();
```

### 소문자로 바꾸기
#### 알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 소문자로 변환하여 return 하는 solution 함수를 완성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181876
```javascript
/*
function solution(myString) {
    var answer = '';
    answer = myString.toLowerCase();
    return answer;
}
*/

const solution = myString => myString.toLowerCase();
```

### 배열에서 문자열 대소문자 변환하기
#### 
```javascript
```

```javascript
/* good
*/
```

### A 강조하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 특정한 문자를 대문자로 바꾸기
#### 
```javascript
```

```javascript
/* good
*/
```

### 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
#### 
```javascript
```

```javascript
/* good
*/
```

### 문자열이 몇 번 등장하는지 세기
#### 
```javascript
```

```javascript
/* good
*/
```

### ad 제거하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 공백으로 구분하기 1
#### 
```javascript
```

```javascript
/* good
*/
```

### 공백으로 구분하기 2
#### 
```javascript
```

```javascript
/* good
*/
```

### x 사이의 개수
#### 
```javascript
```

```javascript
/* good
*/
```

### 문자열 잘라서 정렬하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 간단한 식 계산하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 문자열 바꿔서 찾기
#### 
```javascript
```

```javascript
/* good
*/
```

### rny_string
#### 
```javascript
```

```javascript
/* good
*/
```

### 세 개의 구분자
#### 
```javascript
```

```javascript
/* good
*/
```

### 배열의 원소만큼 추가하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 빈 배열에 추가, 삭제하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 배열 만들기 6
#### 
```javascript
```

```javascript
/* good
*/
```

### 무작위로 K개의 수 뽑기
#### 
```javascript
```

```javascript
/* good
*/
```

### 배열의 길이를 2의 거듭제곱으로 만들기
#### 
```javascript
```

```javascript
/* good
*/
```

### 배열 비교하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 문자열 묶기
#### 
```javascript
```

```javascript
/* good
*/
```

### 배열의 길이에 따라 다른 연산하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 뒤에서 5등까지
#### 
```javascript
```

```javascript
/* good
*/
```

### 뒤에서 5등 위로
#### 
```javascript
```

```javascript
/* good
*/
```

### 전국 대회 선발 고사
#### 
```javascript
```

```javascript
/* good
*/
```

### 정수 부분
#### 
```javascript
```

```javascript
/* good
*/
```

### 문자열 정수의 합
#### 
```javascript
```

```javascript
/* good
*/
```

### 문자열을 정수로 변환하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 0 떼기
#### 
```javascript
```

```javascript
/* good
*/
```

### 두 수의 합
#### 
```javascript
```

```javascript
/* good
*/
```

### 문자열로 변환
#### 
```javascript
```

```javascript
/* good
*/
```

### 배열의 원소 삭제하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 부분 문자열인지 확인하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 부분 문자열
#### 
```javascript
```

```javascript
/* good
*/
```

### 꼬리 문자열
#### 
```javascript
```

```javascript
/* good
*/
```

### 정수 찾기
#### 
```javascript
```

```javascript
/* good
*/
```

### 주사위 게임 1
#### 
```javascript
```

```javascript
/* good
*/
```

### 날짜 비교하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 커피 심부름
#### 
```javascript
```

```javascript
/* good
*/
```

### 그림 확대
#### 
```javascript
```

```javascript
/* good
*/
```

### 조건에 맞게 수열 변환하기 3
#### 
```javascript
```

```javascript
/* good
*/
```

### l로 만들기
#### 
```javascript
```

```javascript
/* good
*/
```

### 특별한 이차원 배열 1
#### 
```javascript
```

```javascript
/* good
*/
```

### 정수를 나선형으로 배치하기
#### 
```javascript
```

```javascript
/* good
*/
```

### 특별한 이차원 배열 2
#### 
```javascript
```

```javascript
/* good
*/
```

### 정사각형으로 만들기
#### 
```javascript
```

```javascript
/* good
*/
```

### 이차원 배열 대각선 순회하기
#### 
```javascript
```

```javascript
/* good
*/
```