const input=document.getElementById("input");
input.addEventListener("keydown",function(event){
    if(event.key=="Enter")
      getmessage();
})
function getmessage(){
    document.getElementById("output").innerHTML=input.value;
}