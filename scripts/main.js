function signuphover(id) {
    const el = document.getElementById(id);
    
    el.addEventListener('mouseenter', () => {
        el.classList.add('signuphover');
        el.classList.remove('signuphover-leave');
    });

    el.addEventListener('mouseleave', () => {
        el.classList.remove('signuphover');
        el.classList.add('signuphover-leave');

        setTimeout(() => {
            el.classList.remove('signuphover-leave');
        }, 200)
    });
}

function loginhover(id) {
    const el = document.getElementById(id);

    el.addEventListener('mouseenter', () => {
        el.classList.add('loginhover');
        el.classList.remove('loginhover-leave');
    });

    el.addEventListener('mouseleave', () => {
        el.classList.remove('loginhover');
        el.classList.add('loginhover-leave');

        setTimeout(() => {
            el.classList.remove('loginhover-leave');
        }, 200)
    });
}

signuphover('signup')
loginhover('login')