// hWord
// vWord
// pos, coord

function solution(h, v) {
  // h: horizontal word, v: vertical word
  const p = findCrossPosition(h, v);
  if (p === null) return null;

  return createCrossWord(h, v, p);
}

function findCrossPosition(h, v) {
  const map = {};
  for (let i = 0; i < h.length; i++) {
    map[h[i]] = i;
  }

  for (let j = 0; j < v.length; j++) {
    if (map[v[j]] !== undefined) {
      return [map[v[j]], j];
    }
  }
  return null;
}

function createCrossWord(h, v, p) {
  // h: horizontal, v: vertical, p: position [h, v]
  const crossword = [];

  for (let i = 0; i < v.length; i++) {
    const line = [];
    if (i === p[1]) {
      for (let j = 0; j < h.length; j++) {
        line.push(h[j]);
      }
    } else {
      for (let j = 0; j < h.length; j++) {
        if (j === p[0]) {
          line.push(v[i]);
        } else {
          line.push("*");
        }
      }
    }
    crossword.push(line);
  }
  return crossword;
}

console.log(solution("AZZZ", "YYYYA"));
