function register()
 {
   var xx=false;
  var username=document.getElementById("username");
  var usernamee=document.getElementById("usernamee");
  var useremail=document.getElementById("useremail");
  var userpassword=document.getElementById("userpassword");
  var userpasswordd=document.getElementById("userpasswordd");
  var checkbox=document.getElementById("checkbox");
  if(useremail.value && userpassword.value && userpasswordd.value && username.value && usernamee.value){
    if((useremail.value).search("@")==-1||(useremail.value).search(".")==-1)
    {
    confirm("E-mail must has '@'and '.' on it");
    }
    else if((useremail.value).search("@")<6 &&(useremail.value).search("@")!=-1)
{
  confirm("E-mail must has at least 6 characters");
}
else if((useremail.value).search("@gmail.com")==-1 &&(useremail.value).search("@yahoo.com")==-1&&(useremail.value).search("@outlock.com")==-1)
{
confirm("you must input your E-mail location");
}
else if(userpassword.value!=userpasswordd.value){
  confirm("your password isn't identical");
}
else if(checkbox.checked!=1)
confirm("you should accept the Terms of Use & Privacy Policy");
else {
  var x=0;
  for(var z=0;z<localStorage.length;z++){
  if(localStorage.key(z)==useremail.value){
  alert("this E-mail used before");x++;}
  }
  if(!x){
  localStorage.setItem(useremail.value,userpassword.value);
  alert("SUCCESSFUL REGISTERATION");
  xx=true;
window.open("User.html","_self");
}}
}

else{
alert("please fill the empty cell");
}
return xx;
}


function login(){
  var useremail=document.getElementById("useremail").value;
  var userpassword=document.getElementById("userpassword").value;
  if(localStorage.getItem(useremail) == userpassword){
    alert("WELCOME !!");
window.open("User.html","_self");
    }
  else {
  alert("Wrong Password Or E-mail")
  }
}
