import { mainPage } from './main-page.js';
import { addButton } from './add-button.js';
import { closePopUp } from './add-button.js';
import { formButtons } from './form.js';

document.addEventListener('DOMContentLoaded', () => {
    formButtons();
	mainPage();
    addButton();
    closePopUp();
});

