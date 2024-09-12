const textareaEl=document.getElementById("textarea");
const totalcountEl=document.getElementById("total-counter");
const remainingcountEl=document.getElementById("remaining-counter");


textareaEl.addEventListener('keyup',() =>{
   updatecounter();
});
function updatecounter(){
    totalcountEl.innerHTML=textareaEl.value.length;
    remainingcountEl.innerHTML=textareaEl.getAttribute('maxlength')-
         textareaEl.value.length;
}