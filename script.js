// nav
let menu = document.querySelector('.barMenu')
let openednav = document.querySelector('.openedNav')
menu.addEventListener('click', () => {
    menu.classList.toggle('change')
    openednav.classList.toggle('change')
})

//  queryselectorAll ile isledim ve her birini fora saldim ne qeder eledim islemedi ona gore
// mecbur ayri ayri verdim :(
let head1 = document.querySelector('#name1')
let text1 = document.querySelector('.text1')
let head2 = document.querySelector('#name2')
let text2 = document.querySelector('.text2')
let head3 = document.querySelector('#name3')
let text3 = document.querySelector('.text3')
head1.addEventListener('click',()=>{
    if (text1.style.display==='block') {
        text1.style.display='none'
        text1.style.transition='0.4s'
    }else{text1.style.display='block'}
})
head2.addEventListener('click',()=>{
    if (text2.style.display==='block') {
        text2.style.display='none'
    }else{text2.style.display='block'}
})
head3.addEventListener('click',()=>{
    if (text3.style.display==='block') {
        text3.style.display='none'
    }else{text3.style.display='block'}
})

