console.log("hello")
const first=1;
const second=2;
console.log("first")
const str="Angel";
console.log(str)
const fruits=["apple","mango","graps"]
console.log(fruits[0])
fruits[1]="jackfruit"
console.log(fruits[1])
const arr=[1,"name",false,2.0]
console.log(arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
const fourth=document.getElementById("ptag")
fourth.innerHTML="This is my fourth class"
function htmlclass(){
    console.log("The class is boring")
}
const input=document.getElementById("eventListener")
const output=document.getElementById("Ptag")
input.addEventListener("input",()=>{
    output.textContent=input.value
})
const newvar=document.createElement("p")
newvar.textContent="New paragraph";
document.body.appendChild(newvar)
newvar.remove()