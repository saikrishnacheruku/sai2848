const greet =() => 'hi'
module.exports.greet= greet
const add =()=>{
    console.log("im add")
}
const sub =()=>{
        console.log("im sub")
    }
const mul =()=>{
    console.log("im mul")

}
module.exports.add=add
module.exports.sub=sub
module.exports.mul=mul
console.log(module)