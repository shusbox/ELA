function hover(className) {
    const elements = document.getElementsByClassName(className);

    for (let el of elements) {
        el.addEventListener('mouseenter', () => {
            el.classList.add('sizeup-hover');
            el.classList.remove('sizeup-hover-leave');
        });

        el.addEventListener('mouseleave', () => {
            el.classList.remove('sizeup-hover');
            el.classList.add('sizeup-hover-leave');

            setTimeout(() => {
                el.classList.remove('sizeup-hover-leave');
            }, 200);
        });
    };
}

hover('hyperlink-img')