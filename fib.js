function Fibonacci(n){
    //递归方法容易爆栈
    if(n==0||n==1){
        return n
    }
    var n0=0
    var n1=1 
    var fibResult=0
    for(i=2;i<=n;i++){
        fibResult=n0+n1
        n0=n1
        n1=fibResult
    }
    return fibResult
}
console.log(Fibonacci(3))