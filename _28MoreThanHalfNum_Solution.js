//对象保存法
function MoreThanHalfNum_Solution(numbers){
    var len =numbers.length
    var map={}
    for (let i = 0; i < numbers.length; i++) {
        if(map[numbers[i]]){
            map[numbers[i]]++
        }else{
            map[numbers[i]]=1
        }
    }
    for(var key in map){
        if(map[key]>len/2){
            return +key
        }
    }
    return 0
}
console.log(MoreThanHalfNum_Solution([1,1,1,2,1]))

function MoreThanHalfNum_Solution2(numbers)
{
    // write code here
    var len=numbers.length;
    if(len==0)return 0;
    var num=numbers[0];
        count=1;
    for(var i=0;i<len;i++){
        if(num==numbers[i]){
            count++;
        }else{
            count--;
        }
        if(count==0){
            num=numbers[i];
            count=1;
        }
    }
    count=0;
    for(var i=0;i<len;i++){
        if(numbers[i]==num)count++;
    }
    if(count*2>len)return num;
    return 0;
}
function MoreThanHalfNum_Solution3(numbers){
    var len = numbers.length
    var arr=[]
    for(var i =0;i<numbers.length;i++){
        if(arr[numbers[i]]){
            arr[numbers[i]]++
        }else{
            arr[numbers[i]]=1
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>len/2)       {
            return arr[i]
        }
    }
    return  0
}