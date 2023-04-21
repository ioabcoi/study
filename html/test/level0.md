# level0

Link : [level0](https://school.programmers.co.kr/learn/challenges?order=acceptance_desc&levels=0&languages=javascript "level0")

## + - * / %

### 두 수의 합
#### 정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120802
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
> https://school.programmers.co.kr/learn/courses/30/lessons/120806
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
> https://school.programmers.co.kr/learn/courses/30/lessons/120805
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

### 나머지 구하기
#### 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120810
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

## 비교연산자

```javascript
/* memo
삼항(조건) 연산자
조건문 ? true인 경우 실행할 표현식 : false인 경우 실행할 표현식
num === 10 ? true : false;

비교연산자
==
!=
===
!==
>
>= 
< 
<=

논리연산자
&&
||
!
*/
```

### 숫자 비교하기
#### 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120807
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

### 각도기
#### 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
- 예각 : 0 < angle < 90
- 직각 : angle = 90
- 둔각 : 90 < angle < 180
- 평각 : angle = 180
> https://school.programmers.co.kr/learn/courses/30/lessons/120829
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

### 점의 위치 구하기
#### 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
- x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
- x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
- x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
- x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
> x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 
> 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120841
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

### 옷가게 할인 받기
#### 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다. 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120818
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

## Math
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math
```javascript
/* memo
Math.trunc()                // 소수점버림. 주어진 숫자의 정수부분 (양수, 음수 상관없이 소수점 이하 우측부분을 제거)
Math.floor()                // 내림. 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
Math.ceil()                 // 올림. 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환
Math.round()                // 반올림. 반올림한 수와 가장 가까운 정수 값을 반환
Math.abs()                  // 절대값. 주어진 숫자의 절대값을 반환합니다.
Math.sign()                 // 부호. 주어진 수의 부호를 나타내는 +/-1을 반환합니다. 단, Math.sign()에 제공한 수가 0일 경우 부호에 따라 +/-0을 반환합니다.
Math.sqrt()                 // 함수는 숫자의 제곱근을 반환합니다.
Math.pow(x, y)              // x의 y 제곱을 반환합니다.
Math.max()                  // 0개 이상의 인수에서 제일 큰 수를 반환합니다.
Math.min()                  // 0개 이상의 인수에서 제일 작은 수를 반환합니다.
Math.random()               // 0과 1 사이의 난수를 반환합니다.
Math.round(x)               // 숫자에서 가장 가까운 정수를 반환합니다.

비트연산자
비트 AND	                a & b       // 두 피연산자의 각 자리 비트의 값이 모두 1인 위치에 1을 반환합니다.
비트 OR     	            a | b       // 두 피연산자의 각 자리 비트의 값이 모두 0인 위치에 0을 반환합니다.
비트 XOR	                a ^ b       // 두 피연산자의 각 자리 비트의 값이 서로 같은 위치에 0을 반환합니다. [두 피연산자의 각 자리 비트의 값이 서로 다른 위치에 1을 반환합니다.]
비트 NOT	                ~ a         // 피연산자의 각 자리의 비트를 뒤집습니다.
왼쪽 시프트	                a << b      // a의 이진 표현을 b만큼 왼쪽으로 이동하고, 오른쪽은 0으로 채웁니다.
오른쪽 시프트	            a >> b      // a의 이진 표현을 b만큼 오른쪽으로 이동하고, 1 미만으로 이동한 비트는 버립니다.
부호 없는 오른쪽 시프트     a >>> b     // a의 이진 표현을 b만큼 오른쪽으로 이동하고, 1 미만으로 이동한 비트는 버립니다. 왼쪽은 0으로 채웁니다.
*/
```

### 세균 증식
#### 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120910
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

### 아이스 아메리카노
#### 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120819
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
> https://school.programmers.co.kr/learn/courses/30/lessons/120814
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

### 피자 나눠 먹기 (3)
#### 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120816
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

### 양꼬치
#### 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120830
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

### 주사위의 개수
#### 머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120845
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

## Number

```javascript
/* memo
Number.isInteger()          // 주어진 값이 정수인지 판별합니다.

function fits(x, y) {
    if (Number.isInteger(y / x)) {
        return 'Fits!';
    }
    return 'Does NOT fit!';
}
console.log(fits(5, 10));
// Expected output: "Fits!"
console.log(fits(5, 11));
// Expected output: "Does NOT fit!"
*/
```

### 제곱수 판별하기
#### 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120909
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

### 개미 군단
#### 개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120837
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

## 오름차순, 내림차순

```javascript
/* memo
nums.sort((a, b) => a - b);     // 오름차순 
nums.sort((a, b) => b - a);     // 내림차순
*/
```

### 중앙값 구하기
#### 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120811
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

### 삼각형의 완성조건 (1)
#### 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
> 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
> 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 
> 세 변으로 삼각형을 만들 수 있다면 1,
> 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120889
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
> https://school.programmers.co.kr/learn/courses/30/lessons/120847
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

## 최대공약수 gcd / 최소공배수 lcm 
```javascript
/* memo 
function solution(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)];
}
*/
```

```javascript
/* memo 
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

### 분수의 덧셈
#### 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
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

## Date
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

Date.prototype.getDate()            // Date에서 현지 시간 기준 일(1–31)을 반환합니다.
Date.prototype.getDay()             // Date에서 현지 시간 기준 요일(0–6)을 반환합니다.
Date.prototype.getFullYear()        // Date에서 현지 시간 기준 연도(네 자리 연도면 네 자리로)를 반환합니다.
Date.prototype.getHours()           // Date에서 현지 시간 기준 시(0–23)를 반환합니다.
Date.prototype.getMilliseconds()    // Date에서 현지 시간 기준 밀리초(0–999)를 반환합니다.
Date.prototype.getMinutes()         // Date에서 현지 시간 기준 분(0–59)을 반환합니다.
Date.prototype.getMonth()           // Date에서 현지 시간 기준 월(0–11)을 반환합니다.
Date.prototype.getSeconds()         // Date에서 현지 시간 기준 초(0–59)를 반환합니다.
Date.prototype.getTime()            // 1970년 1월 1일 00:00:00 UTC로부터의 경과시간을 밀리초 단위로 반환합니다. 
                                    // Date가 기준 시간 이전을 나타낼 경우 음수 값을 반환합니다.
*/
```

### 나이 출력
#### 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120820
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

const solution = age => 2022 - age + 1;/
```

## Array
```javascript
/* memo
Array.prototype.reverse()       // 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.
Array.prototype.map()           // 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
Array.prototype.filter()        // 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
Array.prototype.reduce()        // 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
Array.prototype.push()          // 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
Array.prototype.pop()           // 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
Array.prototype.shift()         // 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.
Array.prototype.unshift()       // 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
Array.prototype.concat()        // 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
Array.prototype.splice()        // 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
Array.prototype.join()          // 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
Array.prototype.sort()          // 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬은 stable sort가 아닐 수 있습니다. 
                                // 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.
Array.prototype.findIndex()     // 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.
*/
```

### 배열 뒤집기
#### 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120821
```javascript
/*
function solution(num_list) {
    return num_list.reverse();
}
*/

const solution = num_list => num_list.reverse();
```

### 배열 두배 만들기
#### 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120809
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

### 머쓱이보다 키 큰 사람
#### 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120585
```javascript
/*
function solution(array, height) {
    return array.filter(x => x > height).length;
}
*/

const solution = (array, height) => array.filter(x => x > height).length;
```

### 배열 원소의 길이 
#### 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120854
```javascript
/*
function solution(strlist) {
    return strlist.map(x => x.length);
}
*/

const solution = strlist => strlist.map(x => x.length);
```

### n의 배수 고르기
#### 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120905
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

### 짝수 홀수 개수
#### 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120824
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

### 가위 바위 보
#### 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120839
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

```javascript
/* good
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

### 배열의 평균값
#### 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120817
```javascript
/*
function solution(numbers) {
    return numbers.reduce((p, c) => p + c) / numbers.length;
}
*/

const solution = numbers => numbers.reduce((p, c) => p + c) / numbers.length;
```

### 중복된 숫자 개수
#### 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120583
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

### 짝수는 싫어요
#### 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120813
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

### 짝수의 합
#### 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120831
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

### 문자열 뒤집기
#### 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120822
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

### 배열 회전시키기
#### 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/challenges/beginner?order=acceptance_desc&page=3
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

### 배열 자르기
#### 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120833
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

### 순서쌍의 개수
#### 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120836
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
*/
```

### 암호 해독
#### 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
> 암호화된 문자열 cipher를 주고받습니다.
> 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
> 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120892
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

### 자릿수 더하기
#### 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120906
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

### 숨어있는 숫자의 덧셈 (1)
#### 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120851
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

### 문자 반복 출력하기
#### 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120825
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

### 가장 큰 수 찾기
#### 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
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

## String
```javascript
/* memo
String.fromCharCode()                   //  UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환합니다.
String.prototype.concat()               // 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환합니다.
String.prototype.split()                // String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.
String.prototype.slice()                // 문자열의 일부를 추출하면서 새로운 문자열을 반환합니다.
String.prototype.substring()            // string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.
String.prototype.toString()             // 객체의 문자열 표현을 반환합니다.
String.prototype.join()                 // 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
String.prototype.match()                // 문자열이 정규식과 매치되는 부분을 검색합니다.
String.prototype.repeat()               // 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
String.prototype.includes()             // 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 또는 false 로 반환합니다. 검색 시 대소문자를 구분합니다.
String.prototype.valueOf()              // String 객체의 원시값을 반환합니다.
String.prototype.toUpperCase()          // 문자열을 대문자로 변환해 반환합니다.
String.prototype.toLowerCase()          // 문자열을 소문자로 변환해 반환합니다.
String.prototype.toLocaleUpperCase()    // 어떤 지역 특정 대/소문자 매핑에 따른 대문자로 변환된 문자열 값을 반환합니다.
String.prototype.toLocaleLowerCase()    // 어떤 지역 특정 대/소문자 매핑에 따른 소문자로 변환된 문자열 값을 반환합니다.
String.prototype.indexOf()              // 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다.
String.prototype.lastIndexOf()          // 주어진 값과 일치하는 부분을 fromIndex로부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환합니다. 
                                        // 일치하는 부분을 찾을 수 없으면 -1을 반환합니다.
String.prototype.replace()              // 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환합니다. 
                                        // 그 패턴은 문자열이나 정규식(RegExp)이 될 수 있으며, 교체 문자열은 문자열이나 모든 매치에 대해서 호출된 함수일 수 있습니다.
String.prototype.replaceAll()           // pattern의 모든 일치 항목이 replacement로 대체된 새 문자열을 반환합니다. 
                                        // pattern은 문자열 또는 RegExp일 수 있으며 replacement는 각 일치 항목에 대해 호출되는 문자열 또는 함수일 수 있습니다. 
                                        // 원래 문자열은 변경되지 않습니다.
String.prototype.trim()                 // 문자열 양 끝의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환합니다. 
                                        // 여기서 말하는 공백이란 모든 공백문자(space, tab, NBSP 등)와 모든 개행문자(LF, CR 등)를 의미합니다.

배열 -> 문자열

1. arr.join(separator)
const arr = ['Apple', 'Banana', 'Orange'];
const str1 = arr.join();        // Apple,Banana,Orange
const str2 = arr.join('-');     // Apple-Banana-Orange
const str3 = arr.join('');      // AppleBananaOrange

2. arr.toString()
const arr = ['Apple', 'Banana', 'Orange'];
console.log(arr.toString());    // Apple,Banana,Orange
console.log(arr);               // Apple,Banana,Orange

UTF-16 -> 문자

String.fromCharCode(65, 66, 67);  // "ABC"

문자 -> 숫자
parseInt()                      // 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
parseFloat()                    // 주어진 값을 필요한 경우 문자열로 변환한 후 부동소수점 실수로 파싱해 반환합니다.

Math로 문자열을 숫자로 변환 (정수로 변환)
const str = '1234.1';
const num1 = Math.ceil(str);
const num2 = Math.floor('1234.6');
const num3 = Math.round('1234.5');
const num4 = Math.round('1234.4');
console.log(num1 + ', ' + typeof num1);
console.log(num2 + ', ' + typeof num2);
console.log(num3 + ', ' + typeof num3);
console.log(num4 + ', ' + typeof num4);
*/
```

### 인덱스 바꾸기
#### 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120895
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

### 특정 문자 제거하기
#### 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120826
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
> https://school.programmers.co.kr/learn/courses/30/lessons/120898
```javascript
/*
function solution(message) {
    return message.split('').length * 2;
}
*/

const solution = message => message.split('').length * 2;
```

### 문자열안에 문자열
#### 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120908
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

### 외계행성의 나이
#### 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120834
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

## 정규표현식

```javascript
/* memo
replace()의 정규표현식 

var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

정규 표현식, 또는 정규식은 문자열에서 특정 문자 조합을 찾기 위한 패턴입니다. 
JavaScript에서는 정규 표현식도 객체로서, RegExp의 exec()와 test() 메서드를 사용할 수 있습니다. 
String의 match(), matchAll() (en-US), replace(), replaceAll(), search(), split() 메서드와도 함께 사용할 수 있습니다. 

정규표현식 
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions

참고 블로그
https://eadgnus.tistory.com/87
https://velog.io/@jangws/JS-정규표현식특수문자-숫자-등-6766k8d6

확장문자 (: backslash)
    s : 공백 문자(스페이스, 탭, 폼 피드, 라인 피드)
    b : 단어의 경계
    B 이를 제외한 모든 문자 매칭
    d : 숫자
    D : 숫자가 아닌 문자 [^0-9] 와 동일
    w : 알파벳, 숫자로 된 문자, 밑줄 기호(_) [A-Za-z0-9]
    W : w의 반대 문자 [^a-za-z0-9]
    특수문자 : 특수문자 자체를 의미 예) + (+ 기호 자체)
특수문자
    * : 0회 이상 반복
    + : 1회 이상 반복
    ? : 0 또는 1개의 문자 매칭
    . : 정확히 1개 문자 매칭
플래그
    g : 전역매칭
    https://stackoverflow.com/questions/15610251/why-pattern-testname-opposite-results-on-consecutive-calls
    i : 대소문자 무시
    m : 여러 줄 매칭
기타
    () : 괄호로 묶인 패턴은 매칭된 다음, 그 부분을 기억한다.
    $1,...,$9 : 괄호로 갭처한 부분 문자열이 저장 됨.
    | : ~또는~
    {} : 반복 횟수

const re = /a/              --a 가 있는 문자열
const re = /a/i             --a 가 있는 문자열, 대소문자 구분 안함
const re = /apple/          -- apple가 있는 문자열
const re = /[a-z]/          -- a~z 사이의 모든 문자
const re = /[a-zA-Z0-9]/    -- a~z, A~Z 0~9 사이의 모든 문자
const re = /[a-z]|[0-9]/    -- a~z 혹은 0~9사이의 문자
const re = /a|b|c/          -- a 혹은 b 혹은 c인 문자
const re = /[^a-z]/         -- a~z까지의 문자가 아닌 문자("^" 부정)
const re = /^[a-z]/         -- 문자의 처음이 a~z로 시작되는 문장
const re = /[a-z]$/         -- 문자가 a~z로 끝남

소문자                     const regExp = /[a-z]/g
대문자                     const regExp = /[A-Z]/g

특수문자 체크 정규식        const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
모든 공백 체크 정규식       const regExp = /\s/g;
숫자만 체크 정규식          const regExp = /[0-9]/g;
이메일 체크 정규식          const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
핸드폰번호 정규식           const regExp = /^\d{3}-\d{3,4}-\d{4}$/;
일반 전화번호 정규식        const regExp = /^\d{2,3}-\d{3,4}-\d{4}$/;
아이디나 비밀번호 정규식    const regExp = /^[a-z0-9_]{4,20}$/;
휴대폰번호 체크 정규식      const regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
*/
```

### 숨어있는 숫자의 덧셈 (2)
#### 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120864
```javascript
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

const solution = my_string => my_string.replace(/[^0-9]/g, "").split("").map(x => parseInt(x)).reduce((x, y) => x + y);
```

### 모음 제거
#### 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120849
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

### 대문자와 소문자
#### 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
> https://school.programmers.co.kr/learn/courses/30/lessons/120893
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

### 최빈값 구하기
#### 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
> https://school.programmers.co.kr/learn/courses/30/lessons/120812
```javascript
```

```javascript
/* good
*/
```

### 369게임
#### 머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.
```javascript
```

```javascript
/* good
*/
```

```javascript
/* memo
*/
```

### 
#### 
```javascript
```

```javascript
/* good
*/
```

```javascript
/* memo
*/
```

### 
#### 
```javascript
```

```javascript
/* good
*/
```

```javascript
/* memo
*/
```

### 
#### 
```javascript
```

```javascript
/* good
*/
```

```javascript
/* memo
*/
```

### 
#### 
```javascript
```

```javascript
/* good
*/
```

```javascript
/* memo
*/
```

### 
#### 
```javascript
```

```javascript
/* good
*/
```

```javascript
/* memo
*/
```


