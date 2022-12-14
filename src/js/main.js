let col = document.getElementsByClassName('col');

for (let i = 0; i < col.length; i++) {
    col[i].setAttribute("data-aos", "fade-right");
    col[i].setAttribute('data-aos-offset', `${300 + 5 * i}`);
    col[i].setAttribute('data-aos-duration', `300`);
}

let animatedLi = document.querySelectorAll('body > main > section.for > div > ul > li');

for (let i = 0; i < animatedLi.length; i++) {
    animatedLi[i].setAttribute('data-aos', 'fade-up');
    animatedLi[i].setAttribute('data-aos-duration', `${1500}`)
}

AOS.init();

function adaptiveNav(idOfBtn, idOfAdaptiveElement, nameOfClass) {
    let ahb = document.getElementById(idOfBtn);
    let nav = document.getElementById(idOfAdaptiveElement);

    document.addEventListener('click', function (e) {
        if (e.target.id === idOfBtn) {
            nav.classList.toggle(nameOfClass);
        }
    });
    document.addEventListener('click', function (e) {
        if (e.target.id !== idOfBtn && nav.classList.contains(nameOfClass)) {
            nav.classList.remove(nameOfClass);
        }
    });
}

adaptiveNav('ahb', 'header-nav', 'relative');
adaptiveNav('apb', 'contacts', 'relative-contacts');