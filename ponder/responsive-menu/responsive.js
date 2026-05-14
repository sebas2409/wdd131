let menuButton = document.querySelector('.menu-btn');
menuButton.addEventListener("click", (e) => {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('hide');
    menuButton.classList.toggle('change');

    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    menu.style.alignItems = 'center';
    menu.style.justifyContent = 'center';

    //each a fit hole width div
    menu.style.width = '100%';

})
