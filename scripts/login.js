function logo(id) {
    const el = document.getElementById(id);

    el.addEventListener('click', () => {
        location.href='../main.html';
    });
}

logo('logo')