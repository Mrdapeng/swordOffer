//一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。

function FindNumsAppearOnce(array){
    var map = {}
     result =[],
     index=0
    array.forEach(element => {
        if(map[element]){
            map[element]++
        }else{
            map[element]=1
        }
    });
    for(key in map){
        if(map[key]==1){
            result[index++]=key
        }
    }
    return result
}