const stepbtn = document.querySelectorAll('#btn');
const steps = document.querySelector('.box-content').children;
stepbtn.forEach((btn)=>{
    btn.addEventListener('click' , ()=>{
        for(i=0;i<stepbtn.length;i++){
            stepbtn[i].classList.remove('active')
            steps[i].classList.remove('active')
        }
        btn.classList.add('active');
        let num = btn.getAttribute('data-num');
        steps[num].classList.add('active')

    })
})
var phoneRegex = /^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/;
var emailRegex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
function test(user){
    return nameRegex.test(user);
}
function testemail(email){
    return emailRegex.test(email)
}
function testPhone(phone){
    return phoneRegex.test(phone);
}
const form = document.querySelector('.form'),
      Name = document.querySelector('.name'),
      email = document.querySelector('.email'),
      phone = document.querySelector('.phone'),
      erorename = document.querySelector('.eroreName'),
      eroreemail = document.querySelector('.eroreEmail'),
      erorePhone = document.querySelector('.erorePhone');
      form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    let NameVal = Name.value,
          emailVal = email.value,
          phoneVal =phone.value; 
          console.log(NameVal);
    if(NameVal===""){
        Erorsub(Name,'This fild is empty');
    }else if(!test(NameVal)){
        Erorsub(Name,'Name is not Valid . Try again!');
    }else{
        success(Name,"Success");
    };
    if(emailVal===""){
        Erorsub(email,"This fild is empty.")
    }else if(!testemail(emailVal)){
        Erorsub(email,"Email is not Valid . Try again!")
    }else{
        success(email , "Success")
    }
    if(phoneVal===""){
        Erorsub(phone,"This fild is empty.")
    }if(!testPhone(phoneVal)){
        Erorsub(phone,"Phone Number is not Valid . Try again!")
    }
})
function Erorsub(index , massage){
    if(index==Name){
        erorename.innerHTML = massage;
    }
    if(index==email){
        eroreemail.innerHTML = massage;
    }
    if(index==phone){
        erorePhone.innerHTML = massage;
    }
}
function success(index,massege){

};
