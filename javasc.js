const stepbtn = document.querySelectorAll('#btn');
const steps = document.querySelector('.box-content').children;
var n = 0;
stepbtn.forEach((btn)=>{
    btn.addEventListener('click' , ()=>{
        for(i=0;i<stepbtn.length;i++){
            stepbtn[i].classList.remove('active')
            steps[i].classList.remove('active')
        }
        btn.classList.add('active');
        let num = btn.getAttribute('data-num');
        steps[num].classList.add('active')
        n = num;
        
    })
})

const nextBTN = document.querySelectorAll('.btn');
const backBTN = document.querySelectorAll('.back-btn');

backBTN.forEach((back)=>{
    back.addEventListener('click',function(){
        n--
        for(i=0;i<steps.length;i++){
            steps[i].classList.remove('active');
            stepbtn[i].classList.remove('active');
        }
        stepbtn[n].classList.add('active');
        steps[n].classList.add('active');
    })
})

nextBTN.forEach((next)=>{
    next.addEventListener('click' , function(){
        for(i=0; i<steps.length;i++){
            steps[i].classList.remove('active');
            stepbtn[i].classList.remove('active')
        }
        n++
        steps[n].classList.add('active');
        stepbtn[n].classList.add('active');
    })
})



var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
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
    }else{
        success(phone , "success")
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
    if(index==Name){
        erorename.innerHTML = massege;
    }
    if(index==email){
        eroreemail.innerHTML = massege;
    }
    if(index==phone){
        erorePhone.innerHTML = massege;
    }
};