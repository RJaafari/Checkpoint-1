var str= "Life is full of possibilities and opportunities."
console.log(str.length)
var result= str.split(" ")
console.log(result)
console.log(result.length)
var vowels=0
for(i=0;i<str.length;i++){
    if(str[i]=="a"||str[i]=="e" || str[i]=="i" || str[i]=="o" ||str[i]=="u" ||str[i]=="y"){
        vowels=vowels + 1
}}
console.log(vowels)