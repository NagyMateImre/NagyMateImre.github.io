const Name = document.getElementById('Name');
const Email = document.getElementById('Email')
const Mobile = document.getElementById('Mobile');
const Message = document.getElementById('Message');
const SubmitB = document.getElementById('SubmitButton');
SubmitB.style.display = "none";
const ClearB = document.getElementById('ClearButton');

Name.addEventListener('input', function(){
    if(Name.value.length === 0 || Email.value.length === 0 || Mobile.value.length === 0 || Message.value.length === 0){
        SubmitB.style.display = "none"
    }
    else{
        SubmitB.removeAttribute("style");
    }
})

Email.addEventListener('input', function(){
    if(Name.value.length === 0 || Email.value.length === 0 || Mobile.value.length === 0 || Message.value.length === 0){
        SubmitB.style.display = "none"
    }
    else{
        SubmitB.removeAttribute("style");
    }
})

Mobile.addEventListener('input', function(){
    if(Name.value.length === 0 || Email.value.length === 0 || Mobile.value.length === 0 || Message.value.length === 0){
        SubmitB.style.display = "none"
    }
    else{
        SubmitB.removeAttribute("style");
    }
})

Message.addEventListener('input', function(){
    if(Name.value.length === 0 || Email.value.length === 0 || Mobile.value.length === 0 || Message.value.length === 0){
        SubmitB.style.display = "none"
    }
    else{
        SubmitB.removeAttribute("style");
    }
})

SubmitB.addEventListener('submit', (item) => {
    item.preventDefault();

})

ClearB.addEventListener('click', (item) =>{
    item.preventDefault();

    Name.value = "";
    Email.value = "";
    Mobile.value = "";
    Message.value = "";
    SubmitB.style.display = "none"
})