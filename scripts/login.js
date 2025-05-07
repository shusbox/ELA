// 텍스트 호버 애니메이션
function txthover(id) {
    const el = document.getElementById(id);
    
    el.addEventListener('mouseenter', () => {
        el.classList.add('txthover');
        el.classList.remove('txthover-leave');
    });

    el.addEventListener('mouseleave', () => {
        el.classList.remove('txthover');
        el.classList.add('txthover-leave');

        setTimeout(() => {
            el.classList.remove('txthover-leave');
        }, 200);
    });
}

// 버튼 호버 애니메이션
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
        }, 200);
    });
}

function close(id) {
    const el = document.getElementById(id);
    if (!el) return;

    el.addEventListener('click', () => {
        const notice = el.parentElement.querySelector('.notice');
        if (notice) {
            notice.classList.add('notice-close');
        }
        el.style.display = "none";
    })
}

window.addEventListener('DOMContentLoaded', () => {
    txthover('signup');
    btnhover('login');
    close('close');
});