// 因为n级台阶，第一步有n种跳法：跳1级、跳2级、到跳n级
// 跳1级，剩下n-1级，则剩下跳法是f(n-1)
// 跳2级，剩下n-2级，则剩下跳法是f(n-2)
// 所以f(n)=f(n-1)+f(n-2)+...+f(1)
// 因为f(n-1)=f(n-2)+f(n-3)+...+f(1)
// 所以f(n)=2*f(n-1)
function jumpFloor2(n){
    if(n<=1){return 1}
    return 2*jumpFloor2(n-1)
}