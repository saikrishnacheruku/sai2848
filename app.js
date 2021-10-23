var list =document.querySelector('ul')
var arr=['go to gym','cooking','eat']
arr.push('submit assignment')
for(var i=0;i<arr.length;i++){
    var element =document.createElement('li')
    var textnode=document.createTextNode(arr[i])
    element.appendChild(textnode)
    list.appendChild(element)
    
}