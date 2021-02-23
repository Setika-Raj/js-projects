const inputs=document.querySelectorAll("form div");
const arrows=document.querySelectorAll(".fa-arrow-down");
const check=document.querySelectorAll(".fa-check-circle");
const cross=document.querySelectorAll(".fa-times-circle");



arrows.forEach(function(arrow,index){
  const parent=arrow.parentElement;
  arrow.addEventListener("click",function (){
    switch(index){
    case 0:
    case 2:
    if(valid(($("input")[index].value))){
    error(index);
    no(parent);


    }
    else{
      correct(index);
    }

    break;
    case 1:
    if(!validateEmail($("input")[index])){
      error(index);
      no(parent);

      //alert("You have entered an invalid email address!");

    }
    else{  correct(index);}
    break;}

  if(!valid(($("input")[0].value))===true && !valid(($("input")[2].value))===true && validateEmail($("input")[1])===true){
    $("body").css({"background-color":"rgb(87,189,130)","transition":"0.3s ease"});}
});
});







//error
function error(index){
  $("body").css({"background-color":"rgb(189,87,87)",
  "transition":"0.3s ease"});
  check[index].style.display="none";
  cross[index].style.display="inline";


}
//correct
function correct(index){

  check[index].style.display="inline";
  cross[index].style.display="none";



}

//validate user/Password
function valid(user){
  if(user.length<6){
    return true;
  }

}

//validate user/Password
function validateEmail(mail)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(mail.value.match(mailformat))
{
return true;}
    return (false);
}
//animation
function no(parent,callback){
  parent.style.animation="shake 0.5s ease";
  parent.addEventListener("animationend",function(){
    //callback();
    parent.style.animation="";});

}
function invalid1(){
  alert("minimum 6 characters");
}
