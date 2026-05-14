let menuButton = document.querySelector('.menu-btn');
menuButton.addEventListener("click", (e) => {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('hide');
    menuButton.classList.toggle('change');

    menu.classList.toggle('vertical');

})
