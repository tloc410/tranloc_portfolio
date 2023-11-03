var home = document.querySelector('.home');
window.addEventListener("scroll",function(){
    
    const x=window.pageYOffset;
    console.log(x);
    if (x>40){
        document.querySelector('.about-title').style.animation = ' linear downIn 1s';
    }
    if (x>180){
        document.querySelector('.about-image').style.animation = ' linear leftIn 1s';
    }
    if (x>180){
        document.querySelector('.about-description').style.animation = ' linear rightIn 1s';
    }
    if (x>600){
        document.querySelector('.timeline-title').style.animation = ' linear downIn 1s';
    }
    if (x>600){
        document.querySelector('.timeline-title').style.animation = ' linear downIn 1s';
    }
    if(x>640){
        document.querySelector('.number-1').style.animation = ' ease leftIn 3s';
        document.querySelector('.number-2').style.animation = ' ease leftIn 3.25s';
        // document.querySelector('.number-2').style.animationDelay = '0.5s';
        document.querySelector('.number-3').style.animation = ' ease leftIn 3.75s';
        // document.querySelector('.number-3').style.animationDelay = '1s';
        document.querySelector('.number-4').style.animation = ' ease leftIn 4s';
        // document.querySelector('.number-4').style.animationDelay = '1.5s';
    }
    if(x>1170){
        document.querySelector('.contract-title').style.animation = ' ease downIn 2.5s'
    }
    if(x>1317){
        document.querySelector('.socical-heading').classList.remove('none');
        document.querySelector('.socical-heading').style.animation = ' ease downIn 6s';
        document.querySelector('.contract-image').classList.remove('none');
        document.querySelector('.contract-image').style.animation = ' ease rightIn 6s';
    }
    if (x>1584){
        document.querySelector('.facebook').classList.remove('none');
        document.querySelector('.facebook').style.animation = ' ease downIn 2.5s';
    }
    if (x>1700){
        document.querySelector('.tiktok').classList.remove('none');
        document.querySelector('.tiktok').style.animation = ' ease downIn 2.5s';
    }
    if (x>1750){
        document.querySelector('.instagram').classList.remove('none');
        document.querySelector('.instagram').style.animation = ' ease downIn 2.5s';
    }
})
var navbar = document.querySelector('.header-list');
 window.addEventListener("scroll",function(){
    const x=window.pageYOffset;
     if (0< x && x <400) {
        document.querySelector('.hhome').classList.add('active');
        document.querySelector('.habout').classList.remove('active');
        document.querySelector('.htimeline').classList.remove('active');
        document.querySelector('.hcontract').classList.remove('active');
     } else {if (400< x && x <1040){
        document.querySelector('.hhome').classList.remove('active');
        document.querySelector('.habout').classList.add('active');
        document.querySelector('.htimeline').classList.remove('active');
        document.querySelector('.hcontract').classList.remove('active');
     }}
     if (1040< x && x <1683){
        document.querySelector('.hhome').classList.remove('active');
        document.querySelector('.habout').classList.remove('active');
        document.querySelector('.htimeline').classList.add('active');
        document.querySelector('.hcontract').classList.remove('active');
     }
     if (1683< x && x <2587){
        document.querySelector('.hhome').classList.remove('active');
        document.querySelector('.habout').classList.remove('active');
        document.querySelector('.htimeline').classList.remove('active');
        document.querySelector('.hcontract').classList.add('active');
     }
 })
 document.querySelector('.submit').onclick = function (){
    document.querySelector('input[type="text"]').value="";
    document.querySelector('input[type="email"]').value="";
    document.querySelector('.enditem__textarea').value="";

 }
var button = document.querySelector('.header-btn');
button.onclick = function(){
    document.querySelector('.header-list').classList.toggle('block');
    if(document.querySelector('.header-list').classList.contains('block')){
        document.querySelector('.header-btn').style.backgroundColor = 'transparent';
        document.querySelector('.header-btn-before').style.backgroundColor= '#fff';
        document.querySelector('.header-btn-after').style.backgroundColor= '#fff';
        
    } else {
        button.style.backgroundColor = "var(--primary-color)";
        document.querySelector('.header-btn-before').style.backgroundColor= 'var(--primary-color)';
        document.querySelector('.header-btn-after').style.backgroundColor= 'var(--primary-color)';
    }
    document.querySelector('.header-btn-before').classList.toggle('xoay1');
    document.querySelector('.header-btn-after').classList.toggle('xoay');
}