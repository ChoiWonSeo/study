// 수행 문제 풀이


// 1, 2, 3 문제
const fruits = ['apple', 'banana', 'cherry', 'apple'];

// 1. forEach 사용해서 fruits의 모든 원소 출력하기
fruits.forEach(function(f) {
    console.log(f);
});

// 2. grape를 배열의 맨 끝에 추가하기
fruits.push('grape');

// 3. 배열의 맨 끝 요소를 제거하고 제거된 요소를 출력하기
const a = fruits.add;
console.log(a);


// 4, 5 문제
sub = function(n1, n2) {
    return n1 + n2;
}

// 4. arrow function 형태로 변경하기
sub = (n1, n2) => {
    return n1 + n2;
}

// 5. arrow function 또 다른 형태로 변경하기
sub = (n1, n2) => n1 + n2;


// 6. 0 === false?
console.log(0 === false);   // false


// 7. 다음에 해당하는 모듈의 이름은?
// 메모리, 파일 시스템, 프로세스, 네트워크 인터페이스 등과 같은 운영 체제의 기본 리소스와 상호 작용하는 방법을 제공함
require('os');  // os << 아직 안배움, 애들이 다 fs인줄 알았음


// 8. node의 전역변수로, 실행 중인 파일이 포함된 디렉토리의 절대경로를 나타내는 것은?
__dirname


// 9, 10 문제
const str = "Hello world";
// 9. world 부분을 everyone으로 대체하여 출력하기
b = str.replace('world', 'everyone');   // 뭔지도 몰랐음 console.log로 찍을 생각만 함;
console.log(a);

// 10. str에 Hello가 포함되었는지의 여부를 출력하는 코드 작성하기 << 뭔지는 아는데 헷갈렸음 ㅜ.ㅜ
c = str.includes('Hello');
console.log(b);