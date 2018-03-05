/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// function IsBalanced_Solution(pRoot)
// {
//     if(!pRoot) return true;
//     return Math.abs(height(pRoot.left)-height(pRoot.right))<=1;

//     function height(node){
//         if(!node) return 0;
//         if(!(node.left) && !(node.right)) return 1;

//         return Math.max(height(node.left),height(node.right))+1;
//     }
// }

function IsBalanced_Solution(pRoot) {
  if (!pRoot) {
    return true;
  }
  return Math.abs(height(pRoot.left) - height(pRoot.right)) <= 1;
  function height(node) {
    if (!node) {
      return 0;
    }
    if (!(node.left) && !(node.right)) {
      return 1;
    }
    return Math.max(height(node.left), height(node.right)) + 1;
  }
}
