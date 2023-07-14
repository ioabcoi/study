# level0 : 코딩 기초 트레이닝

Link : [level0](https://school.programmers.co.kr/learn/challenges/training?order=acceptance_desc&languages=javascript "코딩 기초 트레이닝")

### 문자열 출력하기
#### 문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181952
> blog
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
    // console.log(Number(input[0]) + Number(input[1]));
    console.log(`a = ${Number(input[0])}\n` + `b = ${Number(input[1])}`);
});
```

### 문자열 반복해서 출력하기
#### 문자열 str과 정수 n이 주어집니다. str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181950
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
#### 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181935
```javascript
/*
function solution(n) {
    var answer = n % 2 === 0 ?
        [...new Array(n+1).keys()].filter(x => x % 2 === 0).map(x => Math.pow(x, 2)).reduce((a, b) => a + b) : // 짝수
        [...new Array(n+1).keys()].filter(x => x % 2 !== 0).reduce((a, b) => a + b); // 홀수
    return answer;
}
*/

const solution = n => n % 2 === 0 ?
        [...new Array(n+1).keys()].filter(x => x % 2 === 0).map(x => Math.pow(x, 2)).reduce((a, b) => a + b) : // 짝수
        [...new Array(n+1).keys()].filter(x => x % 2 !== 0).reduce((a, b) => a + b); // 홀수
```

```javascript
/* good
function solution(n) {
    if(n%2===1)
        return (n+1)/2*((n + 1)/2);
    else
        return n*(n+1)*(n+2)/6;
}
*/
```

### 조건 문자열
#### 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.
> 두 수가 n과 m이라면
> ">", "=" : n >= m
> "<", "=" : n <= m
> ">", "!" : n > m
> "<", "!" : n < m
#### 두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181934
```javascript
/*
function solution(ineq, eq, n, m) {
    var answer = 0;
    if (ineq === ">") {
        if (eq === "=") {
            answer = n >= m ? 1: 0;
        } else {
            answer = n > m ? 1: 0;
        }
    } else {
        if (eq === "=") {
            answer = n <= m ? 1: 0;
        } else {
            answer = n < m ? 1: 0;
        }
    }
    return answer;
}
*/

function solution(ineq, eq, n, m) {
    var answer = 0;
    if (ineq === ">") {
        if (eq === "=") answer = n >= m ? 1 : 0;
        else answer = n > m ? 1 : 0;
    } else {
        if (eq === "=") answer = n <= m ? 1 : 0;
        else answer = n < m ? 1 : 0;
    }
    return answer;
}
```

```javascript
/* good
const operations = {
    '>=': (n, m) => n >= m,
    '<=': (n, m) => n <= m,
    '>!': (n, m) => n > m,
    '<!': (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
    const op = operations[ineq + eq];
    return Number(op(n, m));
}

function solution(ineq, eq, n, m) {
    var answer = eval(`${n}${ineq}${eq === "!" ? "" : eq}${m}`) ? 1 : 0
    return answer;
}
*/
```

### flag에 따라 다른 값 반환하기
#### 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181933
```javascript
/*
function solution(a, b, flag) {
    var answer = flag === true ? a + b : a - b;
    return answer;
}
*/

const solution = (a, b, flag) => flag === true ? a + b : a - b;
```

```javascript
/* good
const solution = (a, b, flag) => flag ? a + b : a - b;
*/
```

### 코드 처리하기
#### 문자열 code가 주어집니다.
> code를 앞에서부터 읽으면서 만약 문자가 "1"이면 mode를 바꿉니다. mode에 따라 code를 읽어가면서 문자열 ret을 만들어냅니다.
> mode는 0과 1이 있으며, idx를 0 부터 code의 길이 - 1 까지 1씩 키워나가면서 code[idx]의 값에 따라 다음과 같이 행동합니다.
> mode가 0일 때
> > code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
> > code[idx]가 "1"이면 mode를 0에서 1로 바꿉니다.
> mode가 1일 때
> > code[idx]가 "1"이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
> > code[idx]가 "1"이면 mode를 1에서 0으로 바꿉니다.
#### 문자열 code를 통해 만들어진 문자열 ret를 return 하는 solution 함수를 완성해 주세요. 단, 시작할 때 mode는 0이며, return 하려는 ret가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.
> https://school.programmers.co.kr/learn/courses/30/lessons/181932
```javascript
function solution(code) {
    let ret = [];
    let mode = 0;
    for (let i = 0; i < code.length; i++) {
        if (mode === 0) {
            if (code[i] !== "1") {
                if (i % 2 === 0) ret.push(code[i]);
            } else {
                mode = 1;
            }
        }
        else {
            if (code[i] !== "1") {
                if (i % 2 === 1) ret.push(code[i]);
            } else {
                mode = 0;
            }
        }
        // console.log(i, code[i], ret, mode);
    }
    const answer = ret.length === 0 ? "EMPTY" : ret.reduce((a, b) => a + b);
    return answer;
}
```

```javascript
/* good
function solution(code) {
    let odd = false
    return Array.from(code).reduce((acc, v, i) => {
        if (v === '1') {
            odd = !odd
            return acc
        }
        return (i % 2 === (odd ? 1 : 0)) ? acc + v : acc
    }, '') || 'EMPTY'
}

function solution(code) {
    let mode =0;
    let str ="";
    for(let i = 0 ; i < code.length ; i++){
        if(code[i]==="1") {mode = (mode ===0)? 1 : 0; continue;}
        if(mode ===0){
            if(i%2===0) str+= code[i];
        }else{
            if(i%2===1) str+= code[i];
        }
    }
    return str.length===0 ? "EMPTY" : str; 
}

?
function solution(code) {
    let ans ='';
    let m = true;
    [...code].forEach((v,i)=>v==1?m=!m:ans+=!(i%2)==m?v:'')
    return ans||'EMPTY'
}
*/
```

### 등차수열의 특정한 항만 더하기
#### 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181931
```javascript
/*
function solution(a, d, included) {
    let answer = [a, ...new Array(included.length - 1).keys()].fill(0).map((e, i) => i === 0 ? e = a : a + (d * i)).filter((e, i) => included[i] === true).reduce((a, b) => a + b);
    return answer;
}
*/

const solution = (a, d, included) => [a, ...new Array(included.length - 1).keys()].fill(0).map((e, i) => i === 0 ? e = a : a + (d * i)).filter((e, i) => included[i] === true).reduce((a, b) => a + b);
```

```javascript
/* good
function solution(a, d, included) {
    var answer = 0;
    answer = included.map((v,i)=>v==true?d*i+a:0).reduce((a,b)=>a+b)
    return answer;
}

function solution(a, d, included) {
    return included.reduce((acc, flag, i) => {
        return flag ? acc + a + d * i : acc
    }, 0)
}

function solution(a, d, included) {
    let sum = 0;
    let current = a;
    for(let i = 0 ; i < included.length ;i++){
        if(included[i]) sum+= current;
        current+=d;
    }
    return sum
}

function solution(a, d, included) {
    return included.reduce((p, c, i) => c ? p + d * i + a : p, 0);
}
*/
```

### 주사위 게임 2
#### 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.
> 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
> 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
> 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
#### 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181930
```javascript
/*
function solution(a, b, c) {
    var answer = 0;
    if ( a !== b && b !== c ) {
        answer = a + b + c;
    } else if ( a === b && b === c ) {
        answer = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) * (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
    } else {
        answer = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
    } 
    return answer;
}
*/

function solution(a, b, c) {
    let answer = 0;
    let d = 0;
    const sum = (a, b, c, d) => Math.pow(a, d) + Math.pow(b, d) + Math.pow(c, d);
    
    if ( a !== b && b !== c && c !== a) {
        answer = sum(a, b, c, 1);
    } else if ( a === b && b !== c || a !== b && b === c || a === c && b !== c ) {
        answer = sum(a, b, c, 1) * sum(a, b, c, 2);
    } else if ( a === b && b === c && c === a ) {
        answer = sum(a, b, c, 1) * sum(a, b, c, 2) * sum(a, b, c, 3);
    }
    return answer;
}
```

```javascript
/* good
const solution = (a, b, c) => {
    const set = new Set([a, b, c]);
    switch ([...set].length) {
        case 1: return calculate([a, b, c], 3);
        case 2: return calculate([a, b, c], 2);
        case 3: return calculate([a, b, c]);
    }
};
const calculate = (inc, n=1) => {
    const [a, b, c] = inc;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i)
    }
    return result;
};

function solution(a, b, c) {
    let sum1 = a + b + c;
    let sum2 = a * a + b * b + c * c;
    let sum3 = a ** 3 + b**3 + c**3;
    if (a === b && b === c) 
        return sum1*sum2*sum3;
     else if (a === b || a === c || b === c) 
        return sum1*sum2;
     else 
        return sum1;
}
*/
```

### 원소들의 곱과 합
#### 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181929
```javascript
/*
function solution(num_list) {
    var answer = num_list.reduce((a, b) => a * b) < Math.pow(num_list.reduce((a, b) => a + b), 2) ? 1 : 0;
    return answer;
}
*/

const solution = num_list => num_list.reduce((a, b) => a * b) < Math.pow(num_list.reduce((a, b) => a + b), 2) ? 1 : 0;
```

```javascript
/* good
function solution(num_list) {
    let accMul = 1
    let accSum = 0
    for (const num of num_list) {
        accMul *= num
        accSum += num
    }
    return accMul < accSum ** 2 ? 1 : 0
}
*/
```

### 이어 붙인 수
#### 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181928
```javascript
/*
function solution(num_list) {
    const odd = num_list.filter(x => x % 2 === 1).join("");
    const even = num_list.filter(x => x % 2 === 0).join("");
    const answer = parseInt(odd) + parseInt(even);    
    return answer;
}
*/

const solution = num_list => parseInt(num_list.filter(x => x % 2 === 1).join("")) + parseInt(num_list.filter(x => x % 2 === 0).join(""));
```

```javascript
/* good
function solution(num_list) {
    const [e, o] = num_list.reduce((p, c) => (p[c % 2] += String(c), p), [0, 0]);
    return +e + +o;
}

function solution(num_list) {
    let o = e = '';
    for (let n of num_list) n%2==0?o+=n:e+=n;
    return +o+ +e;
}
*/
```

### 마지막 두 원소
#### 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181927
```javascript
function solution(num_list) {
    const a = num_list[num_list.length - 1];
    const b = num_list[num_list.length - 2];
    a > b ? num_list.push(a - b) : num_list.push(a * 2);
    answer = num_list;
    return answer;
}
```

```javascript
/* good
function solution(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a-b):a*2];
}

const solution=n=>[...n,n.at(-1)>n.at(-2)?n.at(-1)-n.at(-2):n.at(-1)*2];
*/
```

### 수 조작하기 1
#### 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.
> "w" : n이 1 커집니다.
> "s" : n이 1 작아집니다.
> "d" : n이 10 커집니다.
> "a" : n이 10 작아집니다.
#### 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181926
```javascript
/*
function solution(n, control) {
    var answer = control.split("").map(x => x === "w" ? n+=1 : x === "s" ? n-=1 : x === "d" ? n+=10 : x === "a" ? n-=10 : n).pop();
    return answer;
}
*/

const solution = (n, control) => control.split("").map(x => x === "w" ? n+=1 : x === "s" ? n-=1 : x === "d" ? n+=10 : x === "a" ? n-=10 : n).pop();
```

```javascript
/* good
const operations = {
    w: (n) => n + 1,
    s: (n) => n - 1,
    d: (n) => n + 10,
    a: (n) => n - 10,
};
function solution(n, control) {
    return [...control].reduce((prev, op) => operations[op](prev), n);
}

function solution(n, control) {
    for(let i = 0 ; i < control.length ; i++){
        switch(control[i]) {
            case "w" : n++;break;
            case "s" : n--;break;
            case "d" : n+=10;break;
            case "a" : n-=10;break;
        }
    }
    return n;
}
*/
```

### 수 조작하기 2
#### 정수 배열 numLog가 주어집니다. 처음에 numLog[0]에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.
> "w" : 수에 1을 더한다.
> "s" : 수에 1을 뺀다.
> "d" : 수에 10을 더한다.
> "a" : 수에 10을 뺀다.
#### 그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다. 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다. 주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181925
```javascript
/*
function solution (numLog) {
    const answer = [...numLog].map((x, i) => x + 1 === numLog[i+1] ? "w" : x - 1 === numLog[i+1] ? "s" : x + 10 === numLog[i+1] ? "d" : x - 10 === numLog[i+1] ? "a" : "");
    return answer;
}
*/

const solution = numLog => numLog.map((x, i) => x + 1 === numLog[i+1] ? "w" : x - 1 === numLog[i+1] ? "s" : x + 10 === numLog[i+1] ? "d" : x - 10 === numLog[i+1] ? "a" : "").join("");
```

```javascript
/* good
function solution(numLog) {
    const convert = {
        '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
    };
    return numLog.slice(1).map((v, i) => {
        return convert[v - numLog[i]]
    }).join('')
}
*/
```

### 수열과 구간 쿼리 3
#### 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다. 각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다. 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181924
```javascript
function solution(arr, queries) {
    let answer = [];
    for (let i = 0; i < queries.length; i++) {
        let n = 0;
        let x = queries[i][0];
        let y = queries[i][1];
        n = arr[x];
        arr[x] = arr[y];
        arr[y] = n;
    }
    answer = arr;
    return answer;
}
```

```javascript
/* good
function solution(arr, queries) {
    queries.forEach( ([a,b]) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    })
    return arr;
}

function solution(arr, queries) {
    for(let [i, j] of queries) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function solution(arr, queries) {
    return queries.reduce((bucket, [a, b]) => {
        const temp = bucket[a]
        bucket[a] = bucket[b]
        bucket[b] = temp
        return bucket
    }, [...arr])
}

function solution(arr, queries) {
    const swap = ([i, j]) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    queries.forEach(swap);
    return arr;
}

function solution(arr, queries) {
    for (let q of queries) [arr[q[0]], arr[q[1]]] = [arr[q[1]], arr[q[0]]];
    return arr;
}
*/
```

### 수열과 구간 쿼리 2
#### 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다. 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다. 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요. 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.
> https://school.programmers.co.kr/learn/courses/30/lessons/181923
```javascript
function solution(arr, queries) {
    let answer = [];
    for (let i = 0; i < queries.length; i++) {
        let x = queries[i][0];
        let y = queries[i][1];
        let z = queries[i][2];
        let array = [...arr].filter((e, i) => i >= x && i <= y && e > z);
        array.length <= 0 ? answer.push(-1) : answer.push(Math.min(...array));
    }
    return answer;
}
```

```javascript
/* good
function solution(arr, queries) {
    return queries.map(([s, e, k]) => arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1);
}
*/
```

### 수열과 구간 쿼리 4
#### 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다. 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다. 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181922
```javascript
function solution(arr, queries) {
    let answer = arr;
    for (let i = 0; i < queries.length; i++) {
        let x = queries[i][0];
        let y = queries[i][1];
        let z = queries[i][2];
        let array = answer.map((e, i) => i >= x && i <= y && i % z === 0 ? e = e + 1 : e);
        // console.log(answer, x, y, z, array);
        answer = array;
    }
    return answer;
}
```

```javascript
/* good
function solution(arr, queries) {
    for(let [s, e, k] of queries) {
        for(let i = s; i <= e; i++) {
            if(i % k === 0) arr[i]++;
        }
    }
    return arr;
}

function solution(arr, queries) {
    return queries.reduce((bucket, [s, e, k]) => {
        for (let i = s; i <= e; i += 1) {
            if (i % k === 0) bucket[i] += 1
        }
        return bucket
    }, [...arr])
}

?
const solution=(a,q)=>q.length?solution(a.map((v,i)=>i>=q[0][0]&&i<=q[0][1]&&!(i%q[0][2])?v+1:v),q.slice(1)):a
*/
```

### 배열 만들기 2
#### 정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요. 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.
> https://school.programmers.co.kr/learn/courses/30/lessons/181921
```javascript
function solution(l, r) {
    let answer = [...new Array(r + 1).keys()].filter(x => x >= l).filter(x => x.toString().split("").every(e => e.includes('0') || e.includes('5')));
    return answer.length > 0 ? answer : answer = [-1];
}
```

```javascript
/* good
function solution(l, r) {
    const result = Array.from({length:r-l+1}, (_,i)=>i+l).filter(n=>!/[^05]/.test(n));
    return result.length ? result : [-1];
}

function solution(l, r) {
    const isFiveAndZero = (num) => /^[05]+$/.test(num.toString());
    const answer = new Array(r - l + 1)
        .fill()
        .map((_, i) => i + l)
        .filter(isFiveAndZero);
    return answer.length === 0 ? [-1] : answer;
}
*/
```

### 카운트 업
#### 정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181920
```javascript
/*
function solution(start, end) {
    var answer = [...new Array(end + 1).keys()].slice(start);
    return answer;
}
*/

const solution = (start, end) => [...new Array(end + 1).keys()].slice(start);
```

```javascript
/* good
function solution(start, end) {
    idx = start;
    return Array.from({length: end-start+1}, ()=> {return start++});
}
*/
```

### 콜라츠 수열 만들기
#### 모든 자연수 x에 대해서 현재 값이 x이면 x가 짝수일 때는 2로 나누고, x가 홀수일 때는 3 * x + 1로 바꾸는 계산을 계속해서 반복하면 언젠가는 반드시 x가 1이 되는지 묻는 문제를 콜라츠 문제라고 부릅니다. 그리고 위 과정에서 거쳐간 모든 수를 기록한 수열을 콜라츠 수열이라고 부릅니다. 계산 결과 1,000 보다 작거나 같은 수에 대해서는 전부 언젠가 1에 도달한다는 것이 알려져 있습니다. 임의의 1,000 보다 작거나 같은 양의 정수 n이 주어질 때 초기값이 n인 콜라츠 수열을 return 하는 solution 함수를 완성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181919
```javascript
function solution(n) {
    let answer = [n];
    let x = n;
    while (x !== 1) {
        let y = 0;
        y = x % 2 === 0 ? x / 2 : 3 * x + 1;
        answer.push(y);
        x = y;
    }
    return answer;
}
```

```javascript
/* good
function solution(n, arr = []) {
    arr.push(n)
    if (n === 1) return arr
    if (n % 2 === 0) return solution(n / 2, arr)
    return solution(3 * n + 1, arr)
}
*/
```

### 배열 만들기 4
#### 정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk를 만드려고 합니다. 변수 i를 만들어 초기값을 0으로 설정한 후 i가 arr의 길이보다 작으면 다음 작업을 반복합니다.
> 만약 stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
> stk에 원소가 있고, stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk의 뒤에 추가하고 i에 1을 더합니다.
> stk에 원소가 있는데 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 stk에서 제거합니다.
#### 위 작업을 마친 후 만들어진 stk를 return 하는 solution 함수를 완성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181918
```javascript
function solution(arr) {
    let stk = [];
    let i = 0;
    while (i < arr.length) {
        if (stk.length === 0) {
            stk.push(arr[i]);
            i++;
        } else {
            if (stk[stk.length - 1] < arr[i]) {
                stk.push(arr[i]);
                i++;
            }
            else {
                stk.pop();
            }
        }
        // console.log(i, arr[i], stk);
    }
    return stk;
}
```

```javascript
/* good
function solution(arr) {
    var stk = [];
    let i = 0 ; 
    while( i < arr.length){
        if(stk.length ===0) stk.push(arr[i++]);
        else {
            let val = stk[stk.length-1];
            if( val < arr[i] ) stk.push(arr[i++]);
            else stk.pop();
        }
    }
    return stk;
}
*/
```

### 간단한 논리 연산
#### boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.
> (x1 ∨ x2) ∧ (x3 ∨ x4)
> https://school.programmers.co.kr/learn/courses/30/lessons/181917
```javascript
/*
function solution(x1, x2, x3, x4) {
    var answer = (x1 || x2) && (x3 || x4);
    return answer;
}
*/

const solution = (x1, x2, x3, x4) => (x1 || x2) && (x3 || x4);
```

### 주사위 게임 3
#### 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.
> 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
> 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
> 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
> 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
> 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
#### 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181916
```javascript
/*
function solution(a, b, c, d) {
    let answer = 0;
    let p = 0;
    let q = 0;
    let r = 0;
    if (a === b && b === c && c === d) {
        p = a;
        answer = 1111 * p;
    } else if (a === b && b === c) {
        p = a;
        q = d;
        answer = Math.pow((10 * p) + q, 2);
    } else if (a === b && b === d) {
        p = a;
        q = c;
        answer = Math.pow((10 * p) + q, 2);
    } else if (a === c && c === d) {
        p = a;
        q = b;
        answer = Math.pow((10 * p) + q, 2);
    } else if (b === c && c === d) {
        p = b;
        q = a;
        answer = Math.pow((10 * p) + q, 2);
    } else if (a === b && c === d) {
        p = a;
        q = c;
        answer = (p + q) * Math.abs(p - q);
    } else if (a === c && b === d) {
        p = a;
        q = b;
        answer = (p + q) * Math.abs(p - q);
    } else if (a === d && b === c) {
        p = a;
        q = b;
        answer = (p + q) * Math.abs(p - q);
    } else if (a === b) {
        p = a;
        q = c;
        r = d;
        answer = q * r;
    } else if (a === c) {
        p = a;
        q = b;
        r = d;
        answer = q * r;
    } else if (a === d) {
        p = a;
        q = b;
        r = c;
        answer = q * r;
    } else if (b === c) {
        p = b;
        q = a;
        r = d;
        answer = q * r;
    } else if (b === d) {
        p = b;
        q = a;
        r = c;
        answer = q * r;
    } else if (c === d) {
        p = c;
        q = a;
        r = b;
        answer = q * r;
    } else {
        answer = Math.min(a, b, c, d);
    }
    return answer;
}
*/

function solution(a, b, c, d) {
    let answer = 0;
    if (a === b && b === c && c === d) { answer = 1111 * a; } 
    else if (a === b && b === c) { answer = Math.pow((10 * a) + d, 2); } 
    else if (a === b && b === d) { answer = Math.pow((10 * a) + c, 2); } 
    else if (a === c && c === d) { answer = Math.pow((10 * a) + b, 2); } 
    else if (b === c && c === d) { answer = Math.pow((10 * b) + a, 2); } 
    else if (a === b && c === d) { answer = (a + c) * Math.abs(a - c); } 
    else if (a === c && b === d) { answer = (a + b) * Math.abs(a - b); } 
    else if (a === d && b === c) { answer = (a + b) * Math.abs(a - b); } 
    else if (a === b) { answer = c * d; } 
    else if (a === c) { answer = b * d; } 
    else if (a === d) { answer = b * c; } 
    else if (b === c) { answer = a * d; } 
    else if (b === d) { answer = a * c; } 
    else if (c === d) { answer = a * b; } 
    else { answer = Math.min(a, b, c, d); }
    return answer;
}
```

```javascript
/* good
function solution(a, b, c, d) {
    if (a === b && a === c && a === d) return 1111 * a
    if (a === b && a === c) return (10 * a + d) ** 2
    if (a === b && a === d) return (10 * a + c) ** 2
    if (a === c && a === d) return (10 * a + b) ** 2
    if (b === c && b === d) return (10 * b + a) ** 2
    if (a === b && c === d) return (a + c) * Math.abs(a - c)
    if (a === c && b === d) return (a + b) * Math.abs(a - b)
    if (a === d && b === c) return (a + b) * Math.abs(a - b)
    if (a === b) return c * d
    if (a === c) return b * d
    if (a === d) return b * c
    if (b === c) return a * d
    if (b === d) return a * c
    if (c === d) return a * b
    return Math.min(a, b, c, d)
}

function solution(a, b, c, d) {
    const map = new Map();
    for (const data of [a, b, c, d]) {
        map.set(data, (map.get(data) || 0) + 1);
    }
    const sortedArr = [...map].sort((a, b) => {if (a[1] === b[1]) return b[0] - a[0]; else return b[1] - a[1]});
    if (map.size === 1) return 1111 * sortedArr[0][0];
    else if (map.size === 3) return sortedArr[1][0] * sortedArr[2][0];
    else if (map.size === 4) return sortedArr[3][0];
    else if (sortedArr[0][1] === 3) return (10 * sortedArr[0][0] + sortedArr[1][0]) ** 2;
    else return (sortedArr[0][0] + sortedArr[1][0]) * (sortedArr[0][0] - sortedArr[1][0]);
}

function solution(a, b, c, d) {
    const maps = new Map();
    [a, b, c, d].forEach(num => maps.set(num, (maps.get(num) || 0) + 1));
    let answer = 1;
    if (maps.size === 1) answer = 1111 * a;
    if (maps.size === 2) {
        const [p, q] = maps.keys();
        if (maps.get(a) !== 2) answer = maps.get(p) === 3 ? Math.pow(10 * p + q, 2) : Math.pow(10 * q + p, 2);
        else answer = (p + q) * Math.abs(p - q);
    }
    if (maps.size === 3) maps.forEach((v, k) => v === 1 ? answer *= k : false);
    if (maps.size === 4) answer = Math.min(a, b, c, d);
    return answer;
}

function solution(a, b, c, d) {
    const dice = [a, b, c, d];
    const counter = new Array(7).fill(0);
    for (let i = 0; i < 4; i++) 
        counter[dice[i]]++;
    let result = 0;
    if (counter.includes(4)) { 
        result = 1111 * counter.indexOf(4);
    } else if (counter.includes(3)) {
        const p = counter.indexOf(3);
        const q = counter.indexOf(1);
        result = (10 * p + q) ** 2;
    } else if (counter.includes(2) && counter.filter(val => val === 2).length === 2) {
        const p = counter.indexOf(2);
        const q = counter.lastIndexOf(2);
        result = (p + q) * Math.abs(p - q);
    } else if (counter.includes(2)) {
        const p = counter.indexOf(2);
        const q = dice.filter(num => num !== p)[0];
        const r = dice.filter(num => num !== p)[1];
        result = q * r;
    } else { 
        result = Math.min(...dice);
    }
    return result;
}
*/
```

### 글자 이어 붙여 문자열 만들기
#### 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181915
```javascript
/*
function solution(my_string, index_list) {
    var answer = '';
    answer = index_list.map(x => my_string.slice(x, x + 1)).join("");
    return answer;
}
*/

const solution = (my_string, index_list) => index_list.map(x => my_string.slice(x, x + 1)).join("");
```

```javascript
/* good
function solution(my_string, index_list) {
    return index_list.map(i => my_string[i]).join('')
}
*/
```

### 9로 나눈 나머지
#### 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다. 이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181914
```javascript
/*
function solution(number) {
    var answer = 0;
    answer = number.split("").reduce((a, b) => parseInt(a) + parseInt(b)) % 9;
    return answer;
}
*/

const solution = number => number.split("").reduce((a, b) => parseInt(a) + parseInt(b)) % 9;
```

```javascript
/* good
function solution(number) {
    var answer = 0;
    for(let i of number){
        answer += Number(i);
    }
    return answer%9;
}

const solution=n=>BigInt(n)%9n
*/
```

### 문자열 여러 번 뒤집기
#### 문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다. queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다. my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181913
```javascript
function solution(my_string, queries) {
    let answer = '';
    let str = '';
    for (let i = 0; i < queries.length; i++) {
        str = [...my_string.substring(queries[i][0], queries[i][1] + 1)].reverse().join("");
        answer = `${my_string.substring(0, queries[i][0])}${str}${my_string.substring(queries[i][1] + 1, my_string.length)}`;
        // console.log(string, reverse, answer);
        my_string = answer;
    }
    return answer;
}
```

```javascript
/* good
function solution(my_string, queries) {
    let str = my_string.split('');
    queries.forEach(([start, end]) => {
        const changeStr = str.slice(start, end + 1);
        str.splice(start, changeStr.length, ...changeStr.reverse());
    });
    return str.join('');
}

function solution(my_string, queries) {
    let answer = [...my_string];
    for(let z=0; z<queries.length; z++){
        const [i, j] = queries[z];
        answer = [
            ...answer.slice(0, i),
            ...answer.slice(i, j+1).reverse(),
            ...answer.slice(j+1, my_string.length),
        ];
    }
    return answer.join("");
}
*/
```

### 배열 만들기 5
#### 문자열 배열 intStrs와 정수 k, s, l가 주어집니다. intStrs의 원소는 숫자로 이루어져 있습니다. 배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환합니다. 이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181912
```javascript
/*
function solution(intStrs, k, s, l) {
    var answer = [];
    answer = intStrs.map(x => parseInt(x.toString().substring(s, s + l))).filter(x => x > k);
    return answer;
}
*/

const solution = (intStrs, k, s, l) => intStrs.map(x => parseInt(x.toString().substring(s, s + l))).filter(x => x > k);
```

### 부분 문자열 이어 붙여 문자열 만들기
#### 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다. parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다. 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181911
```javascript
/*
function solution(my_strings, parts) {
    var answer = '';
    answer = my_strings.map((e, i) => e.substring(parts[i][0], parts[i][1] + 1)).join("");
    return answer;
}
*/

const solution = (my_strings, parts) => my_strings.map((e, i) => e.substring(parts[i][0], parts[i][1] + 1)).join("");
```

### 문자열의 뒤의 n글자
#### 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181910
```javascript
/*
function solution(my_string, n) {
    var answer = '';
    answer = my_string.substring(my_string.length - n);
    return answer;
}
*/

const solution = (my_string, n) => my_string.substring(my_string.length - n);
```

### 접미사 배열
#### 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다. 문자열 my_string이 매개변수로 주어질 때, my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181909
```javascript
/*
function solution(my_string) {
    var answer = [];
    answer = [...Array(my_string.length).keys()].fill(my_string).map((e, i) => e.slice(i, my_string.length)).sort();
    return answer;
}
*/

const solution = my_string => [...Array(my_string.length).keys()].fill(my_string).map((e, i) => e.slice(i, my_string.length)).sort();
```

```javascript
/* good
function solution(my_string) {
    var answer = [];
    return new Array(my_string.length).fill(1).map((e,idx) => my_string.substring(idx)).sort();;
}

function solution(my_string) {
    return Array.from(my_string)
        .map((_, i) => my_string.substring(i))
        .sort();
}
*/
```

### 접미사인지 확인하기
#### 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다. 문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181908
```javascript
/*
function solution(my_string, is_suffix) {
    var answer = [];
    answer = [...Array(my_string.length).keys()].fill(my_string).map((e, i) => e.slice(i, my_string.length)).includes(is_suffix) === true ? 1: 0;
    return answer;
}
*/

const solution = (my_string, is_suffix) => [...Array(my_string.length).keys()].fill(my_string).map((e, i) => e.slice(i, my_string.length)).includes(is_suffix) === true ? 1: 0;
```

```javascript
/* good
const solution = (str, suff) => str.endsWith(suff) ? 1 : 0

function solution(my_string, is_suffix) {
    return my_string.slice(my_string.length - is_suffix.length) === is_suffix ? 1 : 0
}

function solution(my_string, is_suffix) {
    return Number(new RegExp(`${is_suffix}$`).test(my_string))
}
*/
```

### 문자열의 앞의 n글자
#### 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181907
```javascript
/*
function solution(my_string, n) {
    var answer = '';
    answer = my_string.substring(0, n);
    return answer;
}
*/

const solution = (my_string, n) => my_string.substring(0, n);
```

```javascript
/* good
function solution(my_string, n) {
   return my_string.slice(0, n)
}
*/
```

### 접두사인지 확인하기
#### 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다. 문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181906
```javascript
/*
function solution(my_string, is_prefix) {
    var answer = [];
    answer = [...Array(my_string.length).keys()].fill(my_string).map((e, i) => e.slice(0, i)).includes(is_prefix) === true ? 1: 0;
    return answer;
}
*/

const solution = (my_string, is_prefix) => [...Array(my_string.length).keys()].fill(my_string).map((e, i) => e.slice(0, i)).includes(is_prefix) === true ? 1: 0;
```

```javascript
/* good
function solution(my_string, is_prefix) {
    return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0
}

function solution(my_string, is_prefix) {
    return +my_string.startsWith(is_prefix);
}
*/
```

### 문자열 뒤집기
#### 문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181905
```javascript
/*
function solution(my_string, s, e) {
    var answer = '';
    answer = `${my_string.substring(0, s)}${[...my_string.substring(s, e + 1)].reverse().join("")}${my_string.substring(e + 1, my_string.length)}`;
    return answer;
}
*/

const solution = (my_string, s, e) => `${my_string.substring(0, s)}${[...my_string.substring(s, e + 1)].reverse().join("")}${my_string.substring(e + 1, my_string.length)}`;
```

```javascript
/* good
function solution(my_string, s, e) {
    return my_string.substr(0,s)+my_string.split("").slice(s,e+1).reverse().join("")+my_string.substr(e+1);
}

const solution = (st, s, e) => st.slice(0,s)+st.slice(s, e+1).split('').reverse().join('')+st.slice(e+1);
*/
```

### 세로 읽기
#### 문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181904
```javascript
/*
function solution(my_string, m, c) {
    var answer = '';
    answer = [...my_string].filter((e, i) => i % m === c - 1).join("");
    return answer;
}
*/

const solution = (my_string, m, c) => [...my_string].filter((e, i) => i % m === c - 1).join("");
```

```javascript
/* good
const solution=(s,m,c)=>s.match(new RegExp(`.{${m}}`,'g')).map(v=>v[c-1]).join('')
*/
```

### qr code
#### 두 정수 q, r과 문자열 code가 주어질 때, code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181903
```javascript
/*
function solution(q, r, code) {
    var answer = '';
    answer = [...code].filter((e, i) => i % q === r).join("");
    return answer;
}
*/

const solution = (q, r, code) => [...code].filter((e, i) => i % q === r).join("");
```

### 문자 개수 세기
#### 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181902
```javascript
```

```javascript
/* good
*/
```

### 배열 만들기 1
#### 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181901
```javascript
/*
function solution(n, k) {
    const answer = [...new Array(n + 1).keys()].slice(1).filter(x => x % k === 0).sort((a, b) => a - b);
    return answer;
}
*/

const solution = (n, k) => [...new Array(n + 1).keys()].slice(1).filter(x => x % k === 0).sort((a, b) => a - b);
```

### 글자 지우기
#### 문자열 my_string과 정수 배열 indices가 주어질 때, my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181900
```javascript
/*
function solution(my_string, indices) {
    const answer = [...my_string].filter((e, i) => !indices.includes(i)).join("");
    return answer;
}
*/

const solution = (my_string, indices) => [...my_string].filter((e, i) => !indices.includes(i)).join("");
```

### 카운트 다운
#### 정수 start와 end가 주어질 때, start에서 end까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181899
```javascript
/*
function solution(start, end) {
    var answer = [...new Array(start + 1).keys()].slice(end).sort((a, b) => b - a);
    return answer;
}
*/

const solution = (start, end) => [...new Array(start + 1).keys()].slice(end).sort((a, b) => b - a);
```

```javascript
/* good

2
const solution = (start, end) => Array(start-end+1).fill(start).map((v,i)=>v-i);
*/
```

### 가까운 1 찾기
#### 정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다. 정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요. 단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.
> https://school.programmers.co.kr/learn/courses/30/lessons/181898
```javascript
```

```javascript
/* good
*/
```

### 리스트 자르기
#### 정수 n과 정수 3개가 담긴 리스트 slicer 그리고 정수 여러 개가 담긴 리스트 num_list가 주어집니다. slicer에 담긴 정수를 차례대로 a, b, c라고 할 때, n에 따라 다음과 같이 num_list를 슬라이싱 하려고 합니다.
> n = 1 : num_list의 0번 인덱스부터 b번 인덱스까지
> n = 2 : num_list의 a번 인덱스부터 마지막 인덱스까지
> n = 3 : num_list의 a번 인덱스부터 b번 인덱스까지
> n = 4 : num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로
#### 올바르게 슬라이싱한 리스트를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181897
```javascript
```

```javascript
/* good
*/
```

### 첫 번째로 나오는 음수
#### 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.
> https://school.programmers.co.kr/learn/courses/30/lessons/181896
```javascript
/*
function solution(num_list) {
    var answer = num_list.indexOf(num_list.filter(x => x < 0)[0]);
    return answer;
}
*/

const solution = num_list => num_list.indexOf(num_list.filter(x => x < 0)[0]);
```

```javascript
/* good
const solution = num_list => num_list.findIndex(v => v < 0)
*/
```

### 배열 만들기 3
#### 정수 배열 arr와 2개의 구간이 담긴 배열 intervals가 주어집니다. intervals는 항상 [[a1, b1], [a2, b2]]의 꼴로 주어지며 각 구간은 닫힌 구간입니다. 닫힌 구간은 양 끝값과 그 사이의 값을 모두 포함하는 구간을 의미합니다. 이때 배열 arr의 첫 번째 구간에 해당하는 배열과 두 번째 구간에 해당하는 배열을 앞뒤로 붙여 새로운 배열을 만들어 return 하는 solution 함수를 완성해 주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/181895
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