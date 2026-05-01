let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        const imgUrl = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png";
        document.querySelector('img').setAttribute('src', imgUrl);
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('main').style.color = 'white';
        document.querySelector('.content-wrapper').style.color = 'white';

    } else {
        const imgUrl = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp";
        document.querySelector('img').setAttribute('src', imgUrl);
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('main').style.color = 'black';
        document.querySelector('.content-wrapper').style.color = 'black';
    }
}
