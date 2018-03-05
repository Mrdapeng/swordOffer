function mirror(pRoot){
    if(pRoot==null){
        return null
    }
    var temp = pRoot.right
    pRoot.right= pRoot.left
    pRoot.left=temp
    mirror(pRoot.left)
    mirror(pRoot.right)
}