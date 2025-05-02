function profilehover(className) {
    const elements = document.getElementsByClassName(className);

    for (let el of elements) {
        el.addEventListener('mouseenter', () => {
            el.classList.add('profile-hover');
            el.classList.remove('profile-hover-leave');
        });

        el.addEventListener('mouseleave', () => {
            el.classList.remove('profile-hover');
            el.classList.add('profile-hover-leave');

            setTimeout(() => {
                el.classList.remove('profilehover-leave');
            }, 200);
        });
    }
}

profilehover('profile');