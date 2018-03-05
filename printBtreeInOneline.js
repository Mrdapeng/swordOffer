//二叉树按行打印 

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
/**
 * 利用了队列，首先头结点进入队列，
 * 进入就打印其值,但是有一个tempArr存每一层的结果,
 * 外层的while是看队列是否为空,内层的for是为了顺训打印队列的节点的值,
 * 依次的加入左节点，右节点,并将其打印。
 * 
 * 
 * @param {any} pRoot 
 * @returns 
 */
function print(pRoot) {
  if (!pRoot) {
    return [];
  }
  var queue = [],result = [];
  
  queue.push(pRoot);

  while (queue.length) {
    var len = queue.length;
    var tempArr = [];
   for (var i = 0; i < len; i++) {
      var tempNode= queue.shift();
      tempArr.push(tempNode.val);
      if (tempNode.left) {
        queue.push(tempNode.left);
      }
      if (tempNode.right) {
        queue.push(tempNode.right);
      }
    }
    result.push(tempArr);
  }
  return result;
}
