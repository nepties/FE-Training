function getLocalminimumIndex(numArray) {
  if (numArray.length === 0) {
    return -1;
  } else if (numArray.length === 1) {
    return 0;
  }

  numArray.forEach((num, index) => {
    if (index === 0) {
      if (num <= numArray[index + 1]) {
        return index;
      }
    } else if (index === numArray.length - 1) {
      if (num <= numArray[index - 1]) {
        return index;
      }
    } else {
      if (num <= numArray[index - 1] && num <= numArray[index + 1]) {
        return index;
      }
    }
  });

  return -1;
}

// O(log(N))

// O(N) -> O(log(N)) -> 문제를 반으로 줄여나가는 방법이 있는지?

// [..., k, ...]

// compare a_k, a_k-1, a_k+1
// 1) k is local minima -> k
// 2) a_k-1 < a_k < a_k+1 -> 왼쪽
// 3) a_k-1 > a_k > a_k+1 -> 오른쪽
// 4) a_k-1 < a_k > a_k+1 -> 왼쪽 or 오른쪽

// length 0 -> -1
// length 1 -> 0
// length 2 -> 0, 1중에 값이 작은 값
// length >=3 쪼갠다.

function advancedGetLocalminimumIndex(numArrray) {
  return binaryLocalminimunIndexSearch(numArray, 0, numArray.length - 1);
}

function binaryLocalminimunIndexSearch(numArray, left, right) {
  if (left > right) {
    return -1;
  } else if (left === right) {
    return left;
  } else if (left + 1 === right) {
    return numArray[left] <= numArray[right] ? left : right;
  }

  const center = Math.floor((left + right) / 2);

  if (
    numArray[center] <= numArray[center - 1] &&
    numArray[center] <= numArray[center + 1]
  ) {
    return center;
  } else if (numArray[center] > numArray[center - 1]) {
    return binaryLocalminimunIndexSearch(numArray, left, center - 1);
  } else {
    return binaryLocalminimunIndexSearch(numArray, center + 1, right);
  }
}

function advancedGetLocalminimumIndex2(numArrray) {
  // edge case 처리

  // while
  let left = 0;
  let right = length - 1;
  while (left < right) {
    const center = Math.floor((left + right) / 2);
    if (
      numArray[center] <= numArray[center - 1] &&
      numArray[center] <= numArray[center + 1]
    ) {
      return center;
    } else if (numArray[center] > numArray[center - 1]) {
      right = center - 1;
    } else {
      left = center + 1;
    }
  }

  return -1;
}
