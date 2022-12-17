let col = document.getElementsByClassName('col');

for (let i = 0; i < col.length; i++) {
    col[i].setAttribute("data-aos", "fade-right");
    col[i].setAttribute('data-aos-offset', `${300 + 5 * i}`);
    col[i].setAttribute('data-aos-duration', `300`);
}

let animatedLi = document.querySelectorAll('body > main > section.for > div > ul > li');

for (let i = 0; i < animatedLi.length; i++) {
    animatedLi[i].setAttribute('data-aos', 'fade-up');
    animatedLi[i].setAttribute('data-aos-duration', `${1000}`)
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

const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
});

document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
        var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});
