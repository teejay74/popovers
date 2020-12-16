export default class Popover {
  constructor(button) {
    this.button = button;
  }

  action() {
    const div = document.createElement('div');
    div.setAttribute('class', 'popover popover-hide');
    div.innerHTML = `
           <span class="popover-header">${this.button.dataset.title}</span>
           <div class="popover-body">${this.button.dataset.content}</div>
          `;
    this.button.offsetParent.appendChild(div);

    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      if (div.classList.contains('popover-hide')) {
        div.classList.remove('popover-hide');
        div.style.left = `${this.button.offsetLeft - (div.offsetWidth - this.button.offsetWidth) / 2}px`;
        div.style.top = `${this.button.offsetTop - div.offsetHeight - 10}px`;
      } else {
        div.classList.add('popover-hide');
      }
    });
  }
}
