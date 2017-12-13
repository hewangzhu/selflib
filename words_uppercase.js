const name = "aaa bbb ccc";
// 将此字符串里的每个单词首字母变大写
const str2 = name.replace(
    // \b 单词的开头  \w 表a-z或A-Z或0-9的字符
    /\b\w+\b/g,function(word){
        // console.log(word);
        return word.substring(0,1).toUpperCase() + word.substring(1);
    })

console.log(str2)
// 分成数组 split
// Song.trim(str,2)
// map toUppercase()
// String.prototype.firstUppercase = function(){

// }