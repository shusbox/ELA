// 텍스트 호버 애니메이션 (색깔 어둡게)
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

// 버튼 호버 애니메이션 (색깔 어둡게)
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

// 버튼 호버 애니메이션 (버튼 크기 키움)
function btnsizeuphover(id) {
    const el = document.getElementById(id);

    el.addEventListener('mouseenter', () => {
        el.classList.add('btnsizeuphover');
        el.classList.remove('btnsizeuphover-leave');
    });

    el.addEventListener('mouseleave', () => {
        el.classList.remove('btnsizeuphover');
        el.classList.add('btnsizeuphover-leave');

        setTimeout(() => {
            el.classList.remove('btnsizeuphover-leave');
        }, 200);
    });
}

txthover('signup')
btnhover('login')
btnsizeuphover('joinbtn')
btnsizeuphover('memberbtn')