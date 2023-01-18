function addTodo(){
    //get input from input box
    const inputBox = document.getElementById("input-box");
    const text = inputBox.value;

    if(text ==""){
        alert("Write something ");
    }

   else{
     // create div list-item
     const list_item = document.createElement("div");
     list_item.className = "list-item";
 
     const checkbox = document.createElement("input");
     checkbox.type = "checkbox";
 
     //element
     const p = document.createElement("p");
     p.innerText = text;
 
     checkbox.onclick =()=>{
         if(checkbox.checked){
             p.className="striked";
         }
         else{
             p.className =" ";
         }
     }
     // close Button
     const button = document.createElement("button");
     button.className = "delete";
     button.innerText = "x";
 
     button.onclick = () => {
         list_item.remove();
     }
 
     list_item.appendChild(checkbox);
     list_item.appendChild(p);
     list_item.append(button);
 
 
     //Append that to thelist divs
     const listDiv = document.getElementById("list");
     listDiv.append(list_item);
     inputBox.value = "";
 
   }




}
