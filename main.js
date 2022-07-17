
let btn = document.getElementById('btn');
let name1 =document.getElementById('name');
let email =document.getElementById('email');
let pass1 =document.getElementById('password1');
let pass2 =document.getElementById('password2');
//NAME
let num = [20,5,6];
name1.addEventListener("input",()=>{
    if(name1.value.length <`${ num.length}`){
        name1.style.border="2px solid red";
        msgName.innerHTML="at least 3";
        s1.style.backgroundColor="red"
        s1.innerHTML=`<i class="fa-solid fa-x"></i>`
        btn.setAttribute("disabled","disabled")
    }
    else{
        name1.style.border="2px solid green";
        msgName.innerHTML="";
        s1.style.backgroundColor="green"
        s1.innerHTML=`<i class="fa-solid fa-check"></i>`
    }
    if(name1.value==""){
        name1.style.border="2px solid #fff"; 
        msgName.innerHTML="";
        s1.style.backgroundColor=""
    }
})
//EMAIL
let num2 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
email.addEventListener("input",()=>{
    if(email.value.length <`${ num2.length}`){
        email.style.border="2px solid red";
        msgEmail.innerHTML="please enter correct Email !";
        s2.style.backgroundColor="red"
        s2.innerHTML=`<i class="fa-solid fa-x"></i>`
        btn.setAttribute("disabled","disabled")
    }
    else{
        email.style.border="2px solid green";
        msgEmail.innerHTML="";
        s2.style.backgroundColor="green"
        s2.innerHTML=`<i class="fa-solid fa-check"></i>`
    }
    if(email.value==""){
        email.style.border="2px solid #fff"; 
        msgEmail.innerHTML="";
        s2.style.backgroundColor=""
    }
})
//password
let min= 8;
pass1.addEventListener("input",()=>{
    if(pass1.value.length < min){
        pass1.style.border="2px solid red";
        msgPass1.innerHTML="at least 8";
        s3.style.backgroundColor="red"
        s3.innerHTML=`<i class="fa-solid fa-x"></i>`
        btn.setAttribute("disabled","disabled")
    }
    else{
        pass1.style.border="2px solid green";
        msgPass1.innerHTML="";
        s3.style.backgroundColor="green"
        s3.innerHTML=`<i class="fa-solid fa-check"></i>`
    }
    if(pass1.value==""){
        pass1.style.border="2px solid #fff"; 
        msgPass1.innerHTML="";
        s3.style.backgroundColor=""
    }
})
//pass Again
pass2.addEventListener("input",()=>{
    if(pass2.value != pass1.value){
        pass2.style.border="2px solid red";
        msgPass2.innerHTML="not identical";
        s4.style.backgroundColor="red"
        s4.innerHTML=`<i class="fa-solid fa-x"></i>`
        btn.setAttribute("disabled","disabled")
    }
    else{
        pass2.style.border="2px solid green";
        msgPass2.innerHTML="";
        s4.style.backgroundColor="green"
        s4.innerHTML=`<i class="fa-solid fa-check"></i>`
    }
    if(pass2.value==""){
        pass2.style.border="2px solid #fff"; 
        msgPass2.innerHTML="";
        s4.style.backgroundColor=""
    }
})
const mo = function(){
    if(pass1.value.length >= min ){
        if( pass2.value == pass1.value){
            if(name1.value.length >=`${ num.length}`){
                if(email.value.length >=`${ num2.length}`){
                    btn.removeAttribute("disabled")
                }
            }
        }
    }
}
setInterval(mo,0)