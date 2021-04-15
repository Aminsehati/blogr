const bars = document.querySelector('.bars');
const sidbar = document.querySelector('.sidbar');
const close = document.querySelector('.close');
close.addEventListener('click',(e)=>{
    e.preventDefault();
    sidbar.classList.remove('show');
});
bars.addEventListener('click',(e)=>{
    e.preventDefault();
    sidbar.classList.add('show');
});