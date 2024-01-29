const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open')
} 
function toggleOpenActive() {
    this.classList.toggle('open-active');
}

panels.forEach((panel)  => panel.addEventListener('click',toggleOpen))
panels.forEach((panel) => panel.addEventListener('click',toggleOpenActive))