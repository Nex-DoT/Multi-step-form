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