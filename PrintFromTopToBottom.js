//二叉树的层级遍历 二叉树的从左到右打印
function PrintFromTopToBottom(pRoot){
    var queue = []
    var result=[] 
    if(pRoot){
        queue.push(pROot)
    }
    while(queue.length!=0){
        //取出刚才存的根结点
        var rootNode=arr.shift()
        if(rootNode.left!=null){
            queue.push(rootNode.left)
        }
        if(rootNode.right!=null){
            queue.push(rootNode.right)
        }
        result.push(rootNode.val)
    }
}