//重建二叉树 给出前序排列，中序排列,还原二叉树
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
     if(pre.length==0 || vin.length==0) return null;
    var index=vin.indexOf(pre[0]);
    var left=vin.slice(0,index);//中序左子树
    var right=vin.slice(index+1);//中序右子树
    return {
        val:pre[0],
        //递归左右子树的前序，中序 
        left:reConstructBinaryTree(pre.slice(1,index+1),left),
        right:reConstructBinaryTree(pre.slice(index+1),right)
     }; 
}
function reConstructBinaryTree2(preorder,inorder){
    if(preorder==null||inorder==null){
            return null
    }
    // preorder[0]在前序遍历中是头结点
    var index=vin.indexOf(preorder[0])
    var left= vin.slice(0,index)
    var right = vin.slice(index+1)
    return {
        val:preorder[0],
        left:reConstructBinaryTree2(pre.slice(1,index+1),left),
        right:reConstructBinaryTree2(pre.slice(index+1),right)
    }
}