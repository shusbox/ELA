function txthover(id) {
    const el = document.getElementById(id);
    
    el.addEventListener('mouseenter', () => {
        el.classList.add('txthover');
        el.classList.remove('txthover-leave');
    });

    el.addEventListener('mouseleave', () => {
        el.classList.remove('signuphover');
        el.classList.add('signuphover-leave');

        setTimeout(() => {
            el.classList.remove('signuphover-leave');
        }, 200)
    });
}

function btnhover(id) {
    const el = document.getElementById(id);

    el.addEventListener('mouseenter', () => {
        el.classList.add('btnhover');
        el.classList.remove('btnhover-leave');
    });

    el.addEventListener('mouseleave', () => {
        el.classList.remove('btnhover');
        el.classList.add('btnhover-leave');

        setTimeout(() => {
            el.classList.remove('btnhover-leave');
        }, 200)
    });
}

txthover('signup')
btnhover('login')
btnhover('joinbtn')