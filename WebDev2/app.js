

function chatBot(){
var reply = document.getElementById("response");
var userRes = document.getElementById("typein").value;
    if( userRes == "What's your catchphrase?"){
        reply.innerHTML="don't be rash, take out the trash! =D";
    }
    else if(userRes =="Hi"){
        reply.innerHTML="Hi there, did you throw out the trash today? >;]";
    }
    else if(userRes == "Where are the trash cans?"){
        reply.innerHTML="They are usually located at the front of the classrooms uwu ";
    }
    else if(userRes == "What if I don't throw away my trash?"){
        reply.innerHTML= "you don't want to make my job harder do you >:[";
    }
    else if(userRes == "restart"){
        reply.innerHTML=" ";
    }
    else{
        reply.innerHTML = "Sorry I can't understand you. You must be more focused on throwing out the trash";
    }
}
var submitRes = document.getElementById("submit");
submitRes.addEventListener("click", chatBot);
console.log("test");