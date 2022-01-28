// Given two arrays of integer, find the differences A - B and B - A.

// Examples:

// A: [1, 2, 3]
// B: [2, 3, 4, 5]

// A - B: [1]
// B - A: [4, 5]

function diff(a, b) {
  const aSet = new Set(a);
  const aMinusB = a.filter((elementA) => !bSet.has(elementA));
}

function solution(a, b) {
  return {
    aMinusB: diff(a, b),
    bMinusA: diff(b, a),
  };
}

console.log(solution([1, 2, 3], [2, 3, 4, 5]));
console.log(solution([1, 2, 3], [1, 2, 3]));
console.log(solution([], [1, 2, 3]));
console.log(solution([], []));

// * 다양한 접근 방법 생각해보기 (책에 있는 내용)
// 	* Brute force, divide & conquer, tree나 hash 같은 데이터 스트럭쳐, 특정 알고리즘.
// * 문제의 조건에 대해서 질문
// 	* 두 array의 값들이 unique한가요? 두 array가 정렬되어 있나요? 두 array의 크기가 비슷한가요?
// 	* return 값은 어떻게 해야 할까요?
// * 어떤 방식으로 접근할지 설명
// 	* 먼저 brute force 방식으로 A를 순회하면서 B를 순회하는 이중 for문으로 작성하려고 합니다. 시간 복잡도는 O(n^2)입니다.
// 	* Set을 사용하려고 합니다.
// * 알맞은 변수명 사용하기
// * 문제가 간단한 경우에는 map, filter, forEach 등을 사용하는 것이 좋고, 좀 복잡한 경우에는 for, for of 를 사용하는 것이 좋다.
// * const를 사용할 수 있는 경우에는 let 보다 const 사용.
// * indexOf 보다는 includes가 더 간단하다.
