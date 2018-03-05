function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
var arr = [];
function Serialize(pRoot)
{
    // write code here
    if(pRoot==null){
        arr.push('#');
    }else{
        arr.push(pRoot.val);
        Serialize(pRoot.left);
        Serialize(pRoot.right);
    }
        
}
function Deserialize(arr)
{
    // write code here
    var node = null;
    if(arr.length<1){
        return null;
    }
    var number = arr.shift();
    if(typeof number == 'number'){
        node = new TreeNode(number);
        node.left = Deserialize(arr);
        node.right = Deserialize(arr);
    }
    return node;
}
function TreeNode2(val){
    this.val=val
    this.left=left
    this.right=right
/**
 * 用一个数组去存储一个二叉树,如果不为空的话存储一个非数字类型的来代表空节点,递归调用.
 * 反序列化的时候使用一个队列,取出
 * 
 * @param {any} pRoot 
 */
function xu(pRoot){
    var arr = []
    
    if(pRoot==null){
        arr.push('#')
    }else{
        arr.push(pRoot.val)
        xu(pRoot.right)
        xu(pRoot.left)
    }
}
function fanxu(arr){
     var node = null
     if(arr.length<1){
         return null
     }
     var value = arr.shift()
     if(typeof value=='number'){
         root=new TreeNode2(value)
         root.left=fanxu(arr)
         root.right=fanxu(arr)
     }
     return node 
}