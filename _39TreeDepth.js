/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
    // write code here
    if(pRoot==null){
        return 
    }
    var leftDepth =TreeDepth(pRoot.left)
    var rightDepth=TreeDepth(pRoot.right)
    return Math.max(leftDepth,rightDepth)
}