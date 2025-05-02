// 버튼 호버 애니메이션 (버튼 크기 키움)
function btnsizeuphover(id) {
    const el = document.getElementById(id);
    if (!el) return;

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

btnsizeuphover('joinbtn')
btnsizeuphover('memberbtn')