var button=document.getElementById("demobutton");
var emoji=emojione.toShort("🙂");

button.addEventListener("click",function(){
    alert("Thanks, for clicking the button!"+ emoji);
})