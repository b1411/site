let col = document.getElementsByClassName('col');

for (let i = 0; i < col.length; i++) {
    col[i].setAttribute("data-aos", "fade-right");
    col[i].setAttribute('data-aos-offset', `${300 + 5 * i}`);
    col[i].setAttribute('data-aos-duration', `300`);
}

let animatedLi = document.querySelectorAll('body > main > section.for > div > ul > li');

for (let i = 0; i < animatedLi.length; i++) {
    animatedLi[i].setAttribute('data-aos', 'fade-up');
    animatedLi[i].setAttribute('data-aos-duration', `${1500 - 10 * i}`)
}

AOS.init();