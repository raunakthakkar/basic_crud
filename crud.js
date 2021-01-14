// for reading we need some data to be present in our html
// for updating we need some data to be present in our js file (array,object,etc)
//for deleting we have a function delItem,for adding we have addingElement
//items is the array we have created 
let items=["item1","item2","item3"];
window.addEventListener("load",()=>{
    mapping();
}
);

let mapping=()=>{
    document.getElementById("items").innerHTML=null
    items.map((ele,i)=>{
        let inp=document.createElement("label")
        inp.innerHTML=ele+"<br/>"
        inp.style.border="1 solid black";
        document.getElementById("items").appendChild(inp)
    })
}

let delItem=()=>{
    if(items.length>0){
        items.pop()
        mapping()
    }else{
        alert("cannot delete items")
    }
}
let addingElement=()=>{
    if (document.getElementById('inpValue').value=="")
     {
         alert("cannot add blank values");
         return false
    }
        else
        {
        let val=document.getElementById('inpValue').value
        items.includes(val)==true?alert("ehh duplicate values"):items.push(val)
        mapping()
        document.getElementById('inpValue').value=null
        }
   
}