//请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，
// 第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
function Print(pRoot) {
  if (!pRoot) {
    return [];
  }
  var queue = [],
    result = [],
    flag = true;
    //头结点推入
  queue.push(pRoot);

  while (queue.length) {
    var len = queue.length;
    var tempArr = [];
    for (var i = 0; i < len; i++) {
      var temp = queue.shift();
      tempArr.push(temp.val);
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
    if (!flag) {
      tempArr.reverse();
    }
    flag = !flag;
    result.push(tempArr);
  }
  return result;
}
function Print2(pRoot) {
  if (!pRoot) {
    return [];
  }
  var queue = [],
    result = [],
    flag = true;
    //推入头节点
  queue.push(pRoot);
    //只要队列不为空
  while (queue.length) {
    var len = queue.length;
    //tempArrs收集这一层的值
    var tempArr = [];
    for (let i = 0; i < len; i++) {
      var temp = queue.shift();
      tempArr.push(temp.val);
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
    if (!flag) {
      tempArr.reverse();
    }
    flag = !flag;
    result.push(tempArr);
  }
  return result;
}
