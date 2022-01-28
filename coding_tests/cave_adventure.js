// n = 9
// path = [[0,1],[0,3],[0,7],[8,1],[3,6],[1,2],[4,7],[7,5]]
// order = [[8,5],[6,7],[4,1]]

// starts = [0] -> [1,3,7] -> [8,2,6,4,5]

// O(n^3)
function solution(n, path, order) {
  let answer = true;

  // sort path
  let sortedPaths = [];
  let starts = [0];

  while (path.length > 0) {
    let newStarts = [];

    for (let i = 0; i < starts.length; i++) {
      let newPath = [];
      for (let j = 0; j < path.length; j++) {
        if (path[j][0] === starts[i]) {
          sortedPaths.push(path[j].reverse());
          newStarts.push(path[j][0]);
        } else if (path[j][1] === starts[i]) {
          sortedPaths.push(path[j]);
          newStarts.push(path[j][0]);
        } else {
          newPath.push(path[j]);
        }
      }
      path = newPath;
    }
    starts = newStarts;
  }
  sortedPaths.reverse();

  while (order.length > 0) {
    let lasts = [];
    let newOrder = [];

    for (let i = 0; i < order.length; i++) {
      lasts.push(order[i][1]);
    }

    for (let i = 0; i < order.length; i++) {
      let accessible = true;
      let target = order[i][0];
      let waypoints = [];
      for (let j = 0; j < sortedPaths.length; j++) {
        if (sortedPaths[j][0] === target) {
          target = sortedPaths[j][1];
          waypoints.push(target);
        }
      }

      target = order[i][1];
      for (let j = 0; j < sortedPaths.length; j++) {
        if (sortedPaths[j][0] === target) {
          target = sortedPaths[j][1];
          waypoints.push(target);
        }
      }

      for (let j = 0; j < lasts.length; j++) {
        for (let k = 0; k < waypoints.length; k++) {
          if (lasts[j] === waypoints[k]) {
            accessible = false;
            break;
          }
        }
      }

      if (!accessible) {
        newOrder.push(order[i]);
      }
    }

    if (order.length === newOrder.length) {
      answer = false;
      break;
    }
    order = newOrder;
  }
  return answer;
}
