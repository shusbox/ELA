function logo(id) {
    const el = document.getElementById(id);

    el.addEventListener('click', () => {
        location.href='../index.html';
    });
}

logo('logo')