const buttonIds = ['low', 'medium', 'high'];
const buttons = buttonIds.map((id) => document.querySelector(`#${id}`));


export function formButtons() {
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', () => {
      Checker();
      button.style.backgroundColor = (button.id === 'low') ? 'green' : (button.id === 'medium') ? 'rgb(212, 212, 76)' : 'red';
    });
  }
}

const Checker = () => {
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.style.backgroundColor = 'rgb(154, 194, 209)';
  }
}
