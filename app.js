const panel = document.querySelectorAll('.panel');

panel.forEach(panel => panel.addEventListener('click', ev => {
    ev.currentTarget.classList.toggle('open');
}));


function toggleActive(ev) {
    if(ev.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panel.forEach(panel => panel.addEventListener('transitionend', toggleActive));