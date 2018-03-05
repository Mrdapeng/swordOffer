function FirstNotRepeatingChar(str) {
  let len = str.length;
  for (let i = 0; i < len; i++) {
    //从前往后找和从后往前找
    if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
      return str.indexOf(str.charAt(i));
    }
  }
  return -1;
}
function FistNotReapeatStr(str) {
  var map = {};
  var len = str.length;
  if (len) {
    for (var i = 0; i < len; i++) {
      if (!map[str[i]]) {
        map[str[i]] = 1;
        map[str[i]].index = i;
      } else {
        map[str[i]]++;
      }
    }
    console.log(map);
    for (var ch in map) {
      if (map.hasOwnProperty(ch)) {
        if (map[ch] == 1) {
            return ch
        }
      }
    }
  }
}
function FistNotReapeatStr2(str){
    var len = str.length
    for(var i=0;i<len;i++){
        if(str.indexOf(str[i])===i&& str.indexOf(str[i],i+1)===-1){
            return i
        }
    }
}
function FistNotReapeatStr3(str){
    var len = str.length
    for (let i = 0; i < len; i++) {
      if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
        return i
      }       
    }
}
// console.log(FistNotReapeatStr("aabcc"));
console.log(FistNotReapeatStr2('aaabc'))