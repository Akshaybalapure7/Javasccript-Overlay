 /******************* For Video Controls ************************/

 const video =document.getElementById("myVideo");
 const btn =document.getElementById("myBtn");

 function myFunction(){
     if(video.paused)
     {
         video.play();
         btn.innerHTML="Pause";
     }else{
         video.pause();
         btn.innerHTML="Play";
     }
 }



 /**************** Java Script for different pages *********************/

//Buttons
 const login= document.getElementById("l_btn");
 const signup= document.getElementById("r_btn");
 const Enrollment= document.getElementById("Enroll");
 const result= document.getElementById("resultBtn");
 const controlBtn=document.getElementById("controlBtn");
/*************** target all overlay divs ***********/
let l_form= document.getElementById("login_form");
let s_form= document.getElementById("reg_form");
let enroll= document.getElementById("get_en");
let result_form= document.getElementById("result");
let control=document.getElementById("controls");


 //For Event for loginform
 login.addEventListener("click",loginForm);
 
 //Event for signup form
 signup.addEventListener("click",SignupForm);

// Event for Enrollment

Enrollment.addEventListener("click",getEnroll);

 // Even t For Result
 result.addEventListener("click",displayResult);

//Event for control page
// controlBtn.addEventListener("click",controlPage);

// Reload function 




//Login Form 
 
function loginForm(){
 l_form.style.display="block";
 control.style.display="none";
 s_form.style.display="none";
 result_form.style.display="none";
 enroll.style.display="none";
}

function SignupForm()
{
    s_form.style.display="block";
    l_form.style.display="none";
    control.style.display="none";  
    result_form.style.display="none";
    enroll.style.display="none";   
}

function displayResult(){
    result_form.style.display="block";
    s_form.style.display="none";
    l_form.style.display="none";
    control.style.display="none";  
    enroll.style.display="none";
} 

function getEnroll(){
    enroll.style.display="block";
    result_form.style.display="none";
    s_form.style.display="none";
    l_form.style.display="none";
    control.style.display="none"; 
}

function controlPage(){
    control.style.display="block";
    enroll.style.display="none";
    result_form.style.display="none";
    s_form.style.display="none";
    l_form.style.display="none";
}

/******* Reload Function ******/
function myReload(){
    location.reload();
}

