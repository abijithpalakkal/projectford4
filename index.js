function changeImage(filename)
{

var img=document.querySelector(".section-6 img");
img.setAttribute("src",filename);

}

document.querySelector("#Special1").addEventListener("click",handlecolor1);
   function handlecolor1()
   {
    this.style.backgroundColor="blue";
    this.style.color="white";

    document.querySelector("#Special2").style.backgroundColor="white";
    document.querySelector("#Special3").style.backgroundColor="white";

    document.querySelector("#Special2").style.color="black";
    document.querySelector("#Special3").style.color="black";
   } 

   document.querySelector("#Special2").addEventListener("click",handlecolor2);
   function handlecolor2()
   {
    this.style.backgroundColor="blue";
    this.style.color="white";
    document.querySelector("#Special1").style.backgroundColor="white";
    document.querySelector("#Special3").style.backgroundColor="white";

    document.querySelector("#Special1").style.color="black";
    document.querySelector("#Special3").style.color="black";
   } 

   document.querySelector("#Special3").addEventListener("click",handlecolor3);
   function handlecolor3()
   {
    this.style.backgroundColor="blue";
    this.style.color="white";
    document.querySelector("#Special2").style.backgroundColor="white";
    document.querySelector("#Special1").style.backgroundColor="white";

    document.querySelector("#Special2").style.color="black";
    document.querySelector("#Special1").style.color="black";
   } 

/*for(var i=0;i<3;i++)
document.querySelectorAll(".button-box button")[i].addEventListener("click",handledclick);

function handledclick()
{
    this.style.backgroundColor="blue";
    for(var i=0;i<3;i++){
    document.querySelectorAll(".button-box")[i].style.backgroundColor="blue";
    }
}*/
var display=0;


document.querySelector(".section-11 .section-11-a ").addEventListener("click",handleclick);

function handleclick(){
    
    if(display==0){

    document.querySelector(".section-11 .paracontainer").style.display='block';
    display=1;
    }
    else{
        document.querySelector(".section-11 .paracontainer").style.display='none';
        display=0;
    }
}

var displayA=0;
document.querySelector(".section-13-sub h4").addEventListener("click",handlehidden);

function handlehidden(){
   
    if(displayA==0){
for(var i=0;i< document.querySelectorAll(".section-13-sub .col-1-div p").length;i++){
    document.querySelectorAll(".section-13-sub .col-1-div p ")[i].style.display='block';
   
}
displayA=1;
}
else{
    for(var i=0;i< document.querySelectorAll(".section-13-sub .col-1-div p").length;i++){
        document.querySelectorAll(".section-13-sub .col-1-div p ")[i].style.display='none';
        
}
displayA=0;
}
}

var displayB=0;
document.querySelectorAll(".section-13-sub h4")[1].addEventListener("click",handlehidden1);

function handlehidden1(){
    if(displayB==0){
for(var i=0;i< document.querySelectorAll(".section-13-sub .col-2-div p").length;i++){
    document.querySelectorAll(".section-13-sub .col-2-div p ")[i].style.display="block";
}
displayB=1;
    }
    else{
        for(var i=0;i< document.querySelectorAll(".section-13-sub .col-2-div p").length;i++){
            document.querySelectorAll(".section-13-sub .col-2-div p ")[i].style.display="none";
    }
    displayB=0;
}
}

var displayC=0;
document.querySelectorAll(".section-13-sub h4")[2].addEventListener("click",handlehidden2);

function handlehidden2(){
    if(displayC==0){
for(var i=0;i< document.querySelectorAll(".section-13-sub .col-3-div p").length;i++){
    document.querySelectorAll(".section-13-sub .col-3-div p ")[i].style.display="block";
}
displayC=1;
}
else{
    for(var i=0;i< document.querySelectorAll(".section-13-sub .col-3-div p").length;i++){
        document.querySelectorAll(".section-13-sub .col-3-div p ")[i].style.display="none";
}
displayC=0;
}
}

var displayD=0;
document.querySelectorAll(".section-13-sub h4")[3].addEventListener("click",handlehidden3);

function handlehidden3(){
    if(displayD==0){
for(var i=0;i< document.querySelectorAll(".section-13-sub .col-4-div p").length;i++){
    document.querySelectorAll(".section-13-sub .col-4-div p ")[i].style.display="block";
}
displayD=1;
}
else{
    for(var i=0;i< document.querySelectorAll(".section-13-sub .col-4-div p").length;i++){
        document.querySelectorAll(".section-13-sub .col-4-div p ")[i].style.display="none";
}
displayD=0;
}
}

var displayE=0;
document.querySelectorAll(".section-13-sub h4")[4].addEventListener("click",handlehidden4);

function handlehidden4(){
    if(displayE==0){
for(var i=0;i< document.querySelectorAll(".section-13-sub .col-5-div p").length;i++){
    document.querySelectorAll(".section-13-sub .col-5-div p ")[i].style.display="block";
}
displayE=1;
}
else{
    for(var i=0;i< document.querySelectorAll(".section-13-sub .col-5-div p").length;i++){
        document.querySelectorAll(".section-13-sub .col-5-div p ")[i].style.display="none";
}
displayE=0;
}
}
var displayF=0;
document.querySelector(".fourth-nav").addEventListener("click",menudisplay);
function menudisplay(){
    if(displayF==0){
    document.querySelector(".section-0-menu").style.display="block";
    displayF=1;
}
else{
    document.querySelector(".section-0-menu").style.display="none";
    displayF=0;
}
}

/*section-4-sub*/
 function changeImage1(filename1){
document.querySelector(".section-4-img img").setAttribute("src",filename1);
}