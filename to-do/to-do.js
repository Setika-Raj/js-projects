
//selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-btn");
const todoList=document.querySelector(".todo-list");
const option=document.querySelector(".filter");
//event listeners
todoButton.addEventListener("click",function(event){
event.preventDefault();
//todo div
  const todoDiv=document.createElement("div");
  todoDiv.classList.add("todo-div");
//li
const todoLi=document.createElement("li");
todoLi.classList.add("todo-li");
todoLi.textContent=document.querySelector("input").value;
  todoDiv.appendChild(todoLi);
//check
  const checked=document.createElement("button");
  checked.innerHTML='<i class="fas fa-check">';
  checked.classList.add("check-btn");
  todoDiv.appendChild(checked);
  //delete
  const deleted=document.createElement("button");
  deleted.innerHTML='</i><i class="fas fa-trash">';
  deleted.classList.add("delete-btn");
  todoDiv.appendChild(deleted);
document.querySelector("ul").appendChild(todoDiv);
//clear todoInput
document.querySelector("input").value="";
});


todoList.addEventListener("click",function(ev){
const item=ev.target;

if(item.classList[0]=="delete-btn"){
  const parent=item.parentElement;
//  animation
parent.classList.add("remove");
  parent.addEventListener('transitionend',function(){
  parent.remove();
 });
}
if(item.classList[0]=="check-btn"){
  const parent=item.parentElement;
parent.classList.toggle("complete");
}
});
//select-options



  function change(){
    const todos=todoList.childNodes;
    switch(option.value){
      //completed
      case "all":
      todos.forEach(function(e){
e.style.display="flex";
       });
      break;
      case "completed":
      todos.forEach(function(e){
        if(!(e.classList.contains("complete")))
         {e.style.display="none";
         //e.classList.toggle("option-choice");
       }
       else{e.style.display="flex";}
      });
      break;
//Incomplete
case "incomplete":
todos.forEach(function(e){
  if((e.classList.contains("complete")))
   {
   e.style.display="none";
 }
 else{e.style.display="flex";}
});
break;


    }
  }
