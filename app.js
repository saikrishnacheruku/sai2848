function greet( Name,age){
    console.log(Name,age)
    console.log("hello")
}
greet("sai",21)
function add(a=0,b=0){
    var sum=a+b
    return sum
}
var add=function(a=0,b=0){
    var sum=a+b
    return sum
}
console.log(add(10,20))