function menu() {
    const menu = document.querySelector('.slideMobile')
    const menunav = document.querySelector('.navmobile')

    // Adcionando as classes
    if(menu.classList != 'active') {
        menu.classList.add('active')
        menunav.classList.add('active')
    }
}
function fechar() {
    const menu = document.querySelector('.slideMobile')
    
    menu.classList.remove('active')
}
