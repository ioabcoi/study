# memo

## 비교연산자
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators
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

비트연산자
비트 AND	                    a & b       // 두 피연산자의 각 자리 비트의 값이 모두 1인 위치에 1을 반환합니다.
비트 OR     	                a | b       // 두 피연산자의 각 자리 비트의 값이 모두 0인 위치에 0을 반환합니다.
비트 XOR	                    a ^ b       // 두 피연산자의 각 자리 비트의 값이 서로 같은 위치에 0을 반환합니다. [두 피연산자의 각 자리 비트의 값이 서로 다른 위치에 1을 반환합니다.]
비트 NOT	                    ~ a         // 피연산자의 각 자리의 비트를 뒤집습니다.
왼쪽 시프트	                    a << b      // a의 이진 표현을 b만큼 왼쪽으로 이동하고, 오른쪽은 0으로 채웁니다.
오른쪽 시프트	                a >> b      // a의 이진 표현을 b만큼 오른쪽으로 이동하고, 1 미만으로 이동한 비트는 버립니다.
부호 없는 오른쪽 시프트         a >>> b     // a의 이진 표현을 b만큼 오른쪽으로 이동하고, 1 미만으로 이동한 비트는 버립니다. 왼쪽은 0으로 채웁니다.
*/
```

## Math
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math
```javascript
/* memo
Math.trunc()                                // 소수점버림. 주어진 숫자의 정수부분 (양수, 음수 상관없이 소수점 이하 우측부분을 제거)
Math.floor()                                // 내림. 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
Math.ceil()                                 // 올림. 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환
Math.round()                                // 반올림. 반올림한 수와 가장 가까운 정수 값을 반환
Math.abs()                                  // 절대값. 주어진 숫자의 절대값을 반환합니다.
Math.sign()                                 // 부호. 주어진 수의 부호를 나타내는 +/-1을 반환합니다. 단, Math.sign()에 제공한 수가 0일 경우 부호에 따라 +/-0을 반환합니다.
Math.sqrt()                                 // 함수는 숫자의 제곱근을 반환합니다.
Math.cbrt()                                 // 함수는 주어진 수의 세제곱근을 반환합니다.
Math.pow(x, y)                              // x의 y 제곱을 반환합니다.
Math.max()                                  // 0개 이상의 인수에서 제일 큰 수를 반환합니다.
Math.min()                                  // 0개 이상의 인수에서 제일 작은 수를 반환합니다.
Math.random()                               // 0과 1 사이의 난수를 반환합니다.
Math.round(x)                               // 숫자에서 가장 가까운 정수를 반환합니다.
*/
```

## Number
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number
```javascript
/* memo 
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt
BigInt()                                    // Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체입니다.
parseInt()                                  // 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.

Number(value)                               // 문자열이나 다른 값을 Number 타입으로 변환합니다. 만약 만약 인수를 숫자로 변환할 수 없으면 NaN을 리턴합니다.
Number.isFinite()                           // 주어진 값이 유한수인지 판별합니다.
Number.isInteger()                          // 주어진 값이 정수인지 판별합니다.
Number.isNaN()                              // 주어진 값이 NaN인지 판별합니다. 기존부터 존재한 전역 isNaN() 함수의 더 엄격한 버전입니다.
Number.isSafeInteger()                      // 전달된 값이 안전한 정숫값인지 확인합니다.
Number.parseFloat()                         // 주어진 값을 필요한 경우 문자열로 변환한 후 부동소수점 실수로 파싱해 반환합니다. 숫자를 파싱할 수 없는 경우 NaN을 반환합니다.
Number.parseInt()                           // 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
Number.prototype.toExponential()            // 숫자를 지수 표기법으로 표기해 반환합니다.
Number.prototype.toFixed()                  // 숫자를 고정 소수점 표기법(fixed-point notation)으로 표시합니다.
Number.prototype.toPrecision()              // Number 객체를 지정된 정밀도로 나타내는 문자열을 반환한다.
Number.prototype.toString()                 // 특정한 Number 객체를 나타내는 문자열을 반환합니다.
Number.prototype.valueOf()                  // Number 객체가 감싼(wrapped) 원시 값을 반환합니다.
*/
```
```javascript
/* memo
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt
parseInt(string)
parseInt(string, radix)
    string
        파싱할 값입니다. 
        문자열이 아닐 경우 ToString 추상 연산을 사용해 문자열로 변환합니다. 
        문자열의 선행 공백은 무시합니다.
    radix Optional
        string의 진수를 나타내는 2부터 36까지의 정수입니다. 주의하세요. 
        기본 값이 10이 아닙니다! Number 자료형이 아닌 경우 Number로 변환합니다.
    parseInt 함수는 첫 번째 인자를 문자열로 변환하고, 
    그 값을 파싱하여 정수나 NaN을 반환합니다.
    NaN을 반환할 것이 아니면, parseInt는 첫 번째 인자를 지정한 radix 진수로 표현한 정수를 반환합니다. 
    예를 들어 radix가 10인 경우 10진수, 8인 경우는 8진수, 16인 경우 16진수 등등으로 변환합니다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
numObj.toString([radix])
    radix Optional
        수의 값을 나타내기 위해 사용되기 위한 기준을 정하는 2와 36사이의 정수. (진수를 나타내는 기수의 값.)
    반환 값
        Number 객체를 명시하는 문자열.
    Number 객체는 Object 객체의 toString()메소드를 오버라이딩하며, Object.prototype.toString() 를 상속받지 않습니다. 
    Number 객체에서 toString() 메소드는 특정 진수로 객체를 표현한 문자열을 환원합니다.
    toString() 메소드는 메소드의 첫 번째 아규먼트를 파싱하여, 메소드는 특정 기수(radix)를 기준으로 한 진수 값의 문자열을 환원하기 위한 시도를 합니다. 
    진수를 나타내는 기수 값(radix) 이 10 이상의 값일 때는, 알파벳의 글자는 9보다 큰 수를 나타냅니다. 
    예를 들면, 16진수(base 16)는, 알파벳 f 까지 사용하여 표현됩니다.
    만약에 radix값 이 지정되지 않으면, 임의로 10진수로 가정하게 됩니다.
*/
```

## Date
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
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

Date.prototype.getDate()                    // Date에서 현지 시간 기준 일(1–31)을 반환합니다.
Date.prototype.getDay()                     // Date에서 현지 시간 기준 요일(0–6)을 반환합니다.
Date.prototype.getFullYear()                // Date에서 현지 시간 기준 연도(네 자리 연도면 네 자리로)를 반환합니다.
Date.prototype.getHours()                   // Date에서 현지 시간 기준 시(0–23)를 반환합니다.
Date.prototype.getMilliseconds()            // Date에서 현지 시간 기준 밀리초(0–999)를 반환합니다.
Date.prototype.getMinutes()                 // Date에서 현지 시간 기준 분(0–59)을 반환합니다.
Date.prototype.getMonth()                   // Date에서 현지 시간 기준 월(0–11)을 반환합니다.
Date.prototype.getSeconds()                 // Date에서 현지 시간 기준 초(0–59)를 반환합니다.
Date.prototype.getTime()                    // 1970년 1월 1일 00:00:00 UTC로부터의 경과시간을 밀리초 단위로 반환합니다. 
                                            // Date가 기준 시간 이전을 나타낼 경우 음수 값을 반환합니다.
*/
```

## Array
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
```javascript
/* memo
Array.of()                                  // 인자의 수나 유형에 관계없이 가변 인자를 갖는 새 Array 인스턴스를 만듭니다.
                                            // Array.of()와 Array 생성자의 차이는 정수형 인자의 처리 방법에 있습니다. 
                                            // Array.of(7)은 하나의 요소 7을 가진 배열을 생성하지만 Array(7)은 length 속성이 7인 빈 배열을 생성합니다.
Array.from()                                // 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.
Array.isArray()                             // 인자가 Array인지 판별합니다.
Array.length                                // 배열의 길이를 반환합니다. 반환값은 부호 없는 32비트 정수형이며, 배열의 최대 인덱스보다 항상 큽니다. 
                                            // length 속성에 값을 설정할 경우 배열의 길이를 변경합니다.

Array.prototype.fill()                      // 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.
Array.prototype.keys()                      // 배열의 각 인덱스를 키 값으로 가지는 새로운 Array Iterator 객체를 반환합니다.
Array.prototype.values()                    // 배열에서 각 인덱스에 대한 값을 순회하는 array iterator 객체를 반환합니다.
Array.prototype.entries()                   // 배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 Array Iterator 객체를 반환합니다.

Array.prototype.filter()                    // 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
Array.prototype.map()                       // 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
Array.prototype.reduce()                    // 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

Array.prototype.push()                      // 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
Array.prototype.pop()                       // 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
Array.prototype.shift()                     // 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.
Array.prototype.unshift()                   // 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
Array.prototype.toString()                  // 지정된 배열 및 그 요소를 나타내는 문자열을 반환합니다.
Array.prototype.concat()                    // 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.

Array.prototype.slice()                     // 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 
                                            // 원본 배열은 바뀌지 않습니다.
Array.prototype.splice()                    // 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
Array.prototype.join()                      // 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
Array.prototype.reverse()                   // 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.
Array.prototype.sort()                      // 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬은 stable sort가 아닐 수 있습니다. 
                                            // 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.
Array.prototype.find()                      // 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.
Array.prototype.findIndex()                 // 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.
Array.prototype.findLast()                  // 배열을 역순으로 반복하고 제공된 테스트 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 
                                            // 테스트 함수를 만족하는 요소가 없다면 undefined가 반환될 것입니다.
Array.prototype.findLastIndex()             // 배열을 역순으로 반복하고 제공된 테스트 함수를 충족하는 첫 번째 요소의 인덱스를 반환합니다. 
                                            // 테스트 함수를 만족하는 요소가 없으면 -1이 반환됩니다.
Array.prototype.indexOf()                   // 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
Array.prototype.lastIndexOf()               // 배열에서 주어진 값을 발견할 수 있는 마지막 인덱스를 반환하고, 요소가 존재하지 않으면 -1을 반환합니다.
                                            // 배열 탐색은 fromIndex에서 시작하여 뒤로 진행합니다.
Array.prototype.forEach()                   // 주어진 함수를 배열 요소 각각에 대해 실행합니다.
Array.prototype.includes()                  // 배열이 특정 요소를 포함하고 있는지 판별합니다.
Array.prototype.every()                     // 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다. Boolean 값을 반환합니다.
Array.prototype.some()                      // 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트합니다. 
                                            // 만약 배열에서 주어진 함수가 true을 반환하면 true를 반환합니다. 그렇지 않으면 false를 반환합니다. 이 메서드는 배열을 변경하지 않습니다.

// 배열로 전환하기
const arrFromArr = [...arr]
const arrFromMap = [...map]
const arrFromSet = [...set]
const arrFromStr = [...str]
const arrFromGene = [...gene]
*/
```

### 오름차순, 내림차순
```javascript
/* memo
nums.sort((a, b) => a - b);                 // 오름차순 
nums.sort((a, b) => b - a);                 // 내림차순
*/
```

### map
```javascript
/* memo
Array.prototype.map()
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

구문
arr.map(callback(currentValue[, index[, array]])[, thisArg])

매개변수
callback                                    // 새로운 배열 요소를 생성하는 함수. 
    다음 세 가지 인수를 가집니다.
    currentValue                            // 처리할 현재 요소.
    index Optional                          // 처리할 현재 요소의 인덱스.
    array Optional                          // map()을 호출한 배열.
    thisArg Optional                        // callback을 실행할 때 this로 사용되는 값.

반환 값
배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열.

ex)
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots는 [1, 2, 3]
// numbers는 그대로 [1, 4, 9]
*/
```

### filter
```javascript
/* memo
Array.prototype.filter()
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

구문
arr.filter(callback(element[, index[, array]])[, thisArg])

매개변수
callback                                    // 각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버립니다.
    다음 세 가지 매개변수를 받습니다.
    element                                 // 처리할 현재 요소.
    index Optional                          // 처리할 현재 요소의 인덱스.
    array Optional                          // filter를 호출한 배열.
    thisArg Optional                        // callback을 실행할 때 this로 사용하는 값.

반환 값
테스트를 통과한 요소로 이루어진 새로운 배열. 어떤 요소도 테스트를 통과하지 못했으면 빈 배열을 반환합니다.

ex)
function isBigEnough(value) {
    return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered 는 [12, 130, 44]
*/
```

### reduce
```javascript
/* memo
Array.prototype.reduce()
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

구문
arr.reduce(callback[, initialValue])

매개변수
callback                                    // 배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 받습니다.
accumulator                                 // 누산기는 콜백의 반환값을 누적합니다. 
                                            // 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.
currentValue                                // 처리할 현재 요소.
currentIndex Optional                       // 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.
array Optional                              // reduce()를 호출한 배열.
initialValue Optional                       // callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 
                                            // 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.

반환 값
누적 계산의 결과 값.

ex)
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

### includes
```javascript
/* memo
Array.prototype.includes()
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

구문
arr.includes(valueToFind[, fromIndex])

매개변수
valueToFind                                 // 탐색할 요소.> 참고: 문자나 문자열을 비교할 때, includes()는 대소문자를 구분합니다.
fromIndex Optional                          // 이 배열에서 searchElement 검색을 시작할 위치입니다. 음의 값은 array.length + fromIndex의 인덱스를 asc로 검색합니다. 기본값은 0입니다.

반환 값
Boolean

ex)
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// Expected output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// Expected output: true
console.log(pets.includes('at'));
// Expected output: false
*/
```

## String
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
```javascript
/* memo
String.fromCharCode()                       // UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환합니다.
String.prototype.concat()                   // 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환합니다.
String.prototype.split()                    // String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.
String.prototype.slice()                    // 문자열의 일부를 추출하면서 새로운 문자열을 반환합니다.
String.prototype.substring()                // string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.
String.prototype.toString()                 // 객체의 문자열 표현을 반환합니다.
String.prototype.join()                     // 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
String.prototype.match()                    // 문자열이 정규식과 매치되는 부분을 검색합니다.
String.prototype.repeat()                   // 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
String.prototype.includes()                 // 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 또는 false 로 반환합니다. 검색 시 대소문자를 구분합니다.
String.prototype.valueOf()                  // String 객체의 원시값을 반환합니다.
String.prototype.toUpperCase()              // 문자열을 대문자로 변환해 반환합니다.
String.prototype.toLowerCase()              // 문자열을 소문자로 변환해 반환합니다.
String.prototype.toLocaleUpperCase()        // 어떤 지역 특정 대/소문자 매핑에 따른 대문자로 변환된 문자열 값을 반환합니다.
String.prototype.toLocaleLowerCase()        // 어떤 지역 특정 대/소문자 매핑에 따른 소문자로 변환된 문자열 값을 반환합니다.
String.prototype.indexOf()                  // 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다.
String.prototype.lastIndexOf()              // 주어진 값과 일치하는 부분을 fromIndex로부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환합니다. 
                                            // 일치하는 부분을 찾을 수 없으면 -1을 반환합니다.
String.prototype.replace()                  // 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환합니다. 
                                            // 그 패턴은 문자열이나 정규식(RegExp)이 될 수 있으며, 교체 문자열은 문자열이나 모든 매치에 대해서 호출된 함수일 수 있습니다.
String.prototype.replaceAll()               // pattern의 모든 일치 항목이 replacement로 대체된 새 문자열을 반환합니다. 
                                            // pattern은 문자열 또는 RegExp일 수 있으며 replacement는 각 일치 항목에 대해 호출되는 문자열 또는 함수일 수 있습니다. 
                                            // 원래 문자열은 변경되지 않습니다.
String.prototype.trim()                     // 문자열 양 끝의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환합니다. 
                                            // 여기서 말하는 공백이란 모든 공백문자(space, tab, NBSP 등)와 모든 개행문자(LF, CR 등)를 의미합니다.
String.prototype.endsWith()                 // 어떤 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며, 그 결과를 true 혹은 false로 반환한다.
String.prototype.startsWith()               // 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환합니다.
*/
```

```javascript
/* memo
배열 -> 문자열

1. arr.join(separator)
const arr = ['Apple', 'Banana', 'Orange'];
const str1 = arr.join();                    // Apple,Banana,Orange
const str2 = arr.join('-');                 // Apple-Banana-Orange
const str3 = arr.join('');                  // AppleBananaOrange

2. arr.toString()
const arr = ['Apple', 'Banana', 'Orange'];
console.log(arr.toString());                // Apple,Banana,Orange
console.log(arr);                           // Apple,Banana,Orange

UTF-16 -> 문자

String.fromCharCode(65, 66, 67);  // "ABC"

문자 -> 숫자
parseInt()                                  // 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
parseFloat()                                // 주어진 값을 필요한 경우 문자열로 변환한 후 부동소수점 실수로 파싱해 반환합니다.

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

## 정규표현식
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions
```javascript
/* memo
replace()의 정규표현식 

var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

정규 표현식, 또는 정규식은 문자열에서 특정 문자 조합을 찾기 위한 패턴입니다. 
JavaScript에서는 정규 표현식도 객체로서, RegExp의 exec()와 test() 메서드를 사용할 수 있습니다. 
String의 match(), matchAll() (en-US), replace(), replaceAll(), search(), split() 메서드와도 함께 사용할 수 있습니다. 

정규 표현식 만들기
- 정규 표현식 리터럴. 다음과 같이 슬래시로 패턴을 감싸서 작성합니다.
    const re = /ab+c/
정규 표현식 리터럴은 스크립트를 불러올 때 컴파일되므로, 바뀔 일이 없는 패턴의 경우 리터럴을 사용하면 성능이 향상될 수 있습니다.
- RegExp 객체의 생성자 호출.
    const re = new RegExp('ab+c')
생성자 함수를 사용하면 정규 표현식이 런타임에 컴파일됩니다. 바뀔 수 있는 패턴이나, 사용자 입력 등 외부 출처에서 가져오는 패턴의 경우 이렇게 사용하세요.
*/
```

```javascript
/* memo
참고 페이지

RegExr
https://regexr.com/
정규 표현식을 배우고, 만들고, 시험할 수 있는 온라인 도구입니다.

Regex tester
https://regex101.com/
정규 표현식 생성기/디버거입니다.

Regex visualizer
https://extendsclass.com/regex-tester.html
시각적 정규 표현식 테스터입니다.

참고 블로그
https://eadgnus.tistory.com/87
https://velog.io/@jangws/JS-정규표현식특수문자-숫자-등-6766k8d6
https://m.blog.naver.com/cjinnnn/221329842667
https://hamait.tistory.com/342

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

const re = /a/                          -- a 가 있는 문자열
const re = /a/i                         -- a 가 있는 문자열, 대소문자 구분 안함
const re = /apple/                      -- apple가 있는 문자열
const re = /[a-z]/                      -- a~z 사이의 모든 문자
const re = /[a-zA-Z0-9]/                -- a~z, A~Z, 0~9 사이의 모든 문자
const re = /[a-z]|[0-9]/                -- a~z 혹은 0~9사이의 문자
const re = /a|b|c/                      -- a 혹은 b 혹은 c인 문자
const re = /[^a-z]/                     -- a~z까지의 문자가 아닌 문자("^" 부정)
const re = /^[a-z]/                     -- 문자의 처음이 a~z로 시작되는 문장
const re = /[a-z]$/                     -- 문자가 a~z로 끝남

소문자                                  const regExp = /[a-z]/g
대문자                                  const regExp = /[A-Z]/g
숫자                                    const regExp = /[0-9]/g

특수문자 체크 정규식                    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
모든 공백 체크 정규식                   const regExp = /\s/g;
숫자만 체크 정규식                      const regExp = /[0-9]/g;
이메일 체크 정규식                      const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
핸드폰번호 정규식                       const regExp = /^\d{3}-\d{3,4}-\d{4}$/;
일반 전화번호 정규식                    const regExp = /^\d{2,3}-\d{3,4}-\d{4}$/;
아이디나 비밀번호 정규식                const regExp = /^[a-z0-9_]{4,20}$/;
휴대폰번호 체크 정규식                  const regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
*/
```

## Object
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object
```javascript
/* memo
Object.prototype.toString()             // 문자열을 반환하는 object의 대표적인 방법이다
Object.keys()                           // 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.
Object.values()                         // 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴합니다. 
                                        // 이 배열은 for...in 구문과 동일한 순서를 가집니다. (for in 반복문은 프로토타입 체인 또한 열거한다는 점에서 차이가 있습니다.)
Object.entries()                        // for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환합니다. 
                                        // (for-in 루프가 다른점은 프로토 타입 체인의 속성도 열거한다는 점입니다).
*/
```

## Set
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set
```javascript
/* memo
Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있습니다.
Set 객체는 값 콜렉션으로, 삽입 순서대로 요소를 순회할 수 있습니다. 
하나의 Set 내 값은 한 번만 나타날 수 있습니다. 즉, 어떤 값은 그 Set 콜렉션 내에서 유일합니다.
*/
```

```javascript
/* memo
Set.prototype[@@iterator]()             // Set 인스턴스의 [@@iterator]() 메서드는 반복 가능한 프로토콜을 구현하고 
                                        // spread 구문 및 for... 루프의. 집합의 값을 생성하는 집합 반복자 개체를 반환합니다.
                                        // 이 속성의 초기 값은 Set.prototype.values 속성의 초기 값과 동일한 함수 객체입니다.
Set.prototype.add()                     // Set 개체의 맨 뒤에 주어진 value의 새 요소를 추가합니다.
Set.prototype.clear()                   // Set 객체를 비웁니다.
Set.prototype.delete()                  // 지정한 요소를 Set 객체에서 제거합니다.
Set.prototype.entries()                 // Set 객체의 각각의 요소를 삽입순서대로 [값, 값]의 형태로 가진 배열의 새로운 Iterator 객체를 반환합니다. 
                                        // Set객체에는 Map객체의 key가 없습니다. 그러나, Map 객체의 API와 비슷하게 유지하기 위해, 
                                        // 각각의 "요소"는 "키"와 "값" 자리에 같은 값을 가지게 됩니다. 결과적으로 [값, 값] 형태의 배열이 반환되게 됩니다.
Set.prototype.forEach()                 // 주어진 함수를 Set 요소 각각에 대해 삽입 순서대로 실행합니다.
Set.prototype.has()                     // Set 객체에 주어진 요소가 존재하는지 여부를 판별해 반환합니다.
Set.prototype.keys()                    // values() 메서드의 별칭입니다.
Set.prototype.values()                  // Set 객체에 요소가 삽입된 순서대로 각 요소의 값을 순환할 수 있는 새로운 Iterator 객체를 반환합니다.
*/
```

## WeakSet
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
```javascript
/* memo
WeakSet 객체는 약하게 유지되는(held, 잡아두는) 객체를 컬렉션에 저장할 수 있습니다.
WeakSet 객체는 객체 컬렉션입니다. WeakSet 내 객체는 오직 한 번만 발생할 수 있습니다. 즉, WeakSet 컬렉션 내에서 유일합니다.
Set 객체와 주된 차이는 다음과 같습니다:
Set과 달리, WeakSet은 객체 만의 컬렉션이며 모든 유형의 임의 값(의 컬렉션)은 아닙니다.
WeakSet은 약합니다(weak): 컬렉션 내 객체 참조는 약하게 유지됩니다. WeakSet 내 저장된 객체에 다른 참조가 없는 경우, 쓰레기 수집(garbage collection)될 수 있습니다. 
이는 또한 컬렉션 내 현재 저장된 객체 목록이 없음을 뜻합니다. WeakSets은 열거불가입니다.
*/
```

```javascript
/* memo
WeakSet() constructor
WeakSet.prototype.add()                 // 
WeakSet.prototype.delete()              // 
WeakSet.prototype.has()                 // 
*/
```

## Map
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map
```javascript
/* memo
Map 객체는 키-값 쌍인 집합입니다. 한 Map에서의 키는 오직 단 하나만 존재 합니다. 
Map 객체는 키-값 쌍으로 반복됩니다. for...of 루프는 각 반복에 대해 [key, value]로 이루어진 멤버가 2개인 배열을 반환합니다. 반복은 삽입한 순서대로 발생합니다. 
즉, set() 메서드로 맵에 처음 삽입한 각각의 키-값 쌍 순서와 대응됩니다. (set()이 호출되었을때 맵에서 해당 키가 없었을 경우입니다)
*/
```

```javascript
/* memo
Map.prototype[@@iterator]()             // Map 객체의 @@iterator 메서드는 반복가능 프로토콜을 구현하여 전개 구문와 for...of 루프같은 반복이 필요한  
                                        // 대부분의 구문에서 맵을 사용할 수 있게 합니다. 맵의 키-값 쌍을 생성하는 반복자를 반환합니다.
Map.prototype.clear()                   // Map 객체의 모든 요소를 제거합니다.
Map.prototype.delete()                  // 키로 Map 객체에서 특정 요소를 제거합니다.
Map.prototype.entries()                 // 새 반복자 객체를 반환합니다. 이 객체에는 Map 객체의 각 요소에 대한 [key, value] 쌍이 삽입 순서대로 포함됩니다.
                                        // 이 특별한 경우, 이 반복자 객체도 반복이 가능하므로 for-of 루프를 사용할 수 있습니다. 
                                        // [Symbol.iterator] 프로토콜이 사용될 경우, 호출될 때 반복자 자체를 반환하는 함수를 반환합니다.
Map.prototype.forEach()                 // 삽입 순서에 따라 Map 객체의 각 키/값 쌍마다 한 번씩 제공된 함수를 실행합니다.
Map.prototype.get()                     // Map 객체에서 특정 요소를 반환합니다. 만약 주어진 키와 관련된 값이 객체라면 해당 객체에 대한 참조만 가져오고, 
                                        // 해당 객체에 대한 모든 변경은 Map 내에서 효율적으로 수정됩니다.
Map.prototype.has()                     // 주어진 키에 해당하는 요소가 존재 여부를 가리키는 불리언 값을 반환합니다.
Map.prototype.keys()                    // 배열에서 각 인덱스의 키를 포함하는 새로운 맵 반복자 (en-US) 객체를 반환합니다.
Map.prototype.set()                     // Map 객체에서 주어진 키와 값을 추가하거나 업데이트합니다.
Map.prototype.values()                  // 배열의 각 아이템의 값을 순회하는 새로운 맵 반복자 (en-US) 객체를 반환합니다.
*/
```

## WeakMap
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
```javascript
/* memo
WeakMap 은 키/값 쌍의 모음으로, 키는 반드시 객체 또는 등록되지 않은 심볼이며 값은 임의의 JavaScript 타입입니다.
WeakMap은 키에 대한 강력한 참조를 생성하지 않으므로, 객체가 WeakMap의 키에 포함되더라도 가비지 컬렉션의 대상이 됩니다. 
키 객체가 가비지 컬렉터에 의해 정리된 후에는, 다른 곳에 강력한 참조가 존재하지 않는 한, 키에 연결됐던 값 또한 가비지 컬렉션 대상이 됩니다. 
WeakMap의 키로 사용할 수 있는 유일한 원시 값은 심볼, 정확히는 등록되지 않은 심볼인데, 등록되지 않은 심볼은 고유함이 보장되며 다시 생성할 수 없기 때문입니다.

WeakMap을 사용하면 값이 키를 참조하더라도 키 객체의 가비지 컬렉션을 방지하지 않는 방식으로 데이터를 객체에 연결할 수 있습니다. 
그러나 WeakMap은 키의 활성 상태를 관찰하는 것을 허용하지 않으며, 이는 WeakMap의 키를 열거할 수 없는 이유입니다. 
만약 WeakMap이 키 목록을 얻을 수 있는 어떤 메서드를 제공했다면, 그 목록은 가비지 컬렉션 상태에 따라 달라질 것이므로 비결정성이 발생합니다. 
키 목록이 필요하면 WeakMap 대신 Map을 사용해야 합니다.
*/
```

```javascript
/* memo
WeakMap() constructor
WeakMap.prototype.delete()              // WeakMap 객체에서 특정 요소를 제거합니다.
WeakMap.prototype.get()                 // WeakMap 객체에서 특정 요소를 반환합니다.
WeakMap.prototype.has()                 // 지정된 키를 가진 요소가 WeakMap 객체에 존재하는지를 나타내는 불리언 값을 반환합니다.
WeakMap.prototype.set()                 // 지정된 키와 값을 가진 새 요소를 WeakMap 객체에 추가합니다.
*/ 
```

## for
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for
```javascript
/* memo
for 문은 괄호로 감싸고 세미콜론으로 구분한 세 개의 선택식과, 반복을 수행할 문(주로 블럭문)으로 이루어져 있습니다.

for ([initialization]; [condition]; [final-expression])
    statement

for ([initialization]; [condition]; [final-expression]) {
    statement
}

initialization
식(할당식 포함) 또는 변수 선언. 주로 카운터 변수를 초기화할 때 사용합니다. 
var 또는 let 키워드를 사용해 새로운 변수를 선언할 수도 있습니다. 
var 키워드로 선언한 변수는 반복문에 제한되지 않습니다. 즉 for 문과 같은 범위에 위치합니다. 
let 키워드로 선언한 변수는 반복문의 지역 변수가 됩니다.
식의 결과는 버려집니다.

condition
매 반복마다 평가할 식. 평가 결과가 참이라면 statement를 실행합니다. 
이 식을 넣지 않았을 때 계산 결과는 언제나 참이 됩니다. 
계산 결과가 거짓이라면 for 문의 바로 다음 식으로 건너 뜁니다.

final-expression
매 반복 후 평가할 식. 다음번 condition 평가 이전에 발생합니다. 
주로 카운터 변수를 증감하거나 바꿀 때 사용합니다.

statement
조건의 평가 결과가 참일 때 실행하는 문. 
여러 문을 반복 실행하려면 블럭문({ ... })으로 묶어야 합니다. 
아무것도 실행하지 않으려면 공백문 (;)을 사용하세요.
*/
```

## for ... in
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in
```javascript
/* memo
for...in문은 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복합니다. (Symbol로 키가 지정된 속성은 무시합니다.)

for (const variable in object) {
    statement
}

variable
매번 반복마다 다른 속성이름(Value name)이 변수(variable)로 지정됩니다.

object
반복작업을 수행할 객체로 열거형 속성을 가지고 있는 객체.

설명
for...in문은 열거 가능한 non-Symbol 속성에 대해서만 반복합니다.
*/
```

## while
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/while
```javascript
/* memo
while문은 조건문이 참일 때 실행되는 반복문이다. 조건은 문장안이 실행되기 전에 참, 거짓을 판단한다.

while (condition)
    statement

while (condition) {
    statement
}

조건
반복이 시작되기 전에 조건문은 참,거짓을 판단받게 된다. 
만약 조건문이 참이라면, while문 안의 문장들이 실행된다. 
거짓이라면, 문장은 그냥 while 반복문 후로 넘어간다.

문장
조건문이 참일 때만 while문 속의 문장들이 실행된다. 
반복문 속에 여러개의 문장을 사용하고 싶다면 중괄호 { } 를 통해 문장들을 하나로 묶어야 한다.    
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