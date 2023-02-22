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
    n=0;
    if(index==Name){
        erorename.innerHTML = massage;
    }
    if(index==email){
        eroreemail.innerHTML = massage;
    }
    if(index==phone){
        erorePhone.innerHTML = massage;
    }
    for(i=0;i<steps.length;i++){
        steps[i].classList.remove('active');
        stepbtn[i].classList.remove('active');
    }
    steps[n].classList.add('active');
    stepbtn[n].classList.add('active');
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
const priceP= document.querySelector('.p-4');
const changeBTN = document.querySelectorAll('.change'),
      packageName = document.querySelector('.package-name'),
      packagePrice = document.querySelector('.package-price');
changeBTN.forEach((btn)=>{
    btn.addEventListener('click' , function(){
        let NameVal = btn.getAttribute('data-name');
        let prices = btn.getAttribute('data-price');
        for(i=0;i<changeBTN.length;i++){
            changeBTN[i].classList.remove('active');
        }
        btn.classList.add('active');
        packagePrice.innerHTML = "$";
        packageName.innerHTML=NameVal + ' (Monthly)' ;
        packagePrice.innerHTML += prices;
        priceP.innerHTML= prices;
        boxse()
    })
});
const move=document.querySelector('.move-in');
move.addEventListener('click' , function(){
    move.classList.toggle('active');
    const h3 = document.querySelectorAll('.h3');
    if(move.classList.contains('active')){
        for(i=0;i<h3.length;i++){
            h3[i].classList.remove('active');
        }
        h3[1].classList.add('active');
        yearlyP()
    }else{
        for(i=0;i<h3.length;i++){
            h3[i].classList.remove('active');
        }
        h3[0].classList.add('active');
        yearlyOff()
    }
    boxse();
});
const checkBoxOS = document.querySelector('.checkbox-OS'),
checkBoxLS =document.querySelector('.checkbox-LS'),
checkBoxCP=document.querySelector('.checkbox-CP'),
checkedBoxOS=document.querySelector('.checkedbox'),
checkedBoxLS=document.querySelector('.checkedbox1'),
checkedBoxCP=document.querySelector('.checkedbox2');

checkBoxCP.onclick=()=>{
    boxse();
}
checkBoxLS.onclick=()=>{
    boxse();
}
checkBoxOS.onclick=()=>{
    boxse();
}
let b = 0;
let priceINput = 2;
let priceINPUT1=1;
function boxse(){
    const DATAp = document.querySelector('.box-fix .active');
    let attre = +DATAp.getAttribute('data-price');
    if(move.classList.contains('active')){
        priceINput = 20;
        priceINPUT1 = 10;
        attre=attre*10;
    console.log(attre,priceINPUT1,priceINput);
    }
    b= attre;

    console.log(attre,priceINPUT1,priceINput);

    if(checkBoxOS.checked==true){
        checkedBoxOS.style.opacity= '1' ; 
        checkedBoxOS.style.display= 'flex' ; 
        checkedBoxOS.style.visibility= ' visibel'; 
        b= b+priceINPUT1;

    }else{
        checkedBoxOS.style.opacity= '0' ; 
        checkedBoxOS.style.display= 'none' ;
        priceP.innerHTML = "$";
        priceP.innerHTML += `${attre}`;
        b = b;
    }
    if(checkBoxLS.checked==true){
        checkedBoxLS.style.opacity= '1' ; 
        checkedBoxLS.style.display= 'flex' ; 
        checkedBoxLS.style.visibility= ' visibel';
        b= b+priceINput
    }else{
        checkedBoxLS.style.opacity= '0' ; 
        checkedBoxLS.style.display= 'none' ;
        b=b;
    }
    if(checkBoxCP.checked==true){
        checkedBoxCP.style.opacity= '1' ; 
        checkedBoxCP.style.display= 'flex' ; 
        checkedBoxCP.style.visibility= ' visibel';
        b=b+priceINput;

    }else{
        checkedBoxCP.style.opacity= '0' ; 
        checkedBoxCP.style.display= 'none' ;
        b=b;
    }
    priceP.innerHTML = '$';
    priceP.innerHTML += `${b}`;
}
function yearlyP(){
const pYearly = document.querySelectorAll('.price-yearly');
const priceMonthly = document.querySelectorAll('.price');
pYearly[0].innerHTML= '$90'
pYearly[1].innerHTML= '$120'
pYearly[2].innerHTML='$150'
for(i=0;i<priceMonthly.length;i++){
    priceMonthly[i].innerHTML= '+20/yr'
}
priceMonthly[0].innerHTML = '+10/yr'
}
function yearlyOff(){
const pYearly = document.querySelectorAll('.price-yearly');
const priceMonthly = document.querySelectorAll('.price');
pYearly[0].innerHTML= '$9'
pYearly[1].innerHTML= '$12'
pYearly[2].innerHTML='$15'
for(i=0;i<priceMonthly.length;i++){
    priceMonthly[i].innerHTML= '+2/mo'
}
priceMonthly[0].innerHTML = '+1/mo'
}