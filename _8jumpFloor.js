function jumpFloor(n){
    if(n<=0){
        return 0
    }
    if(n==1){
        return 1
    }
    if(n==2){
        return 2
    }
    var jump1=1
    var jump2=2
    var jumpResult=0
    for(var i =3;i<=n;i++){
        jumpResult=jump1+jump2
        jump1=jump2
        jump2=jumpResult
    }
    return jumpResult
}
console.log(jumpFloor(3));
console.log(jumpFloor(4))
