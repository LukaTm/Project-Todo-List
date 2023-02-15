import { mainPage } from './main-page.js';
import { addButton } from './add-button.js';
import { closePopUp } from './add-button.js';
import { formButtons } from './form.js';
import { submitButton } from './submit.js';

document.addEventListener('DOMContentLoaded', () => {
    formButtons();
	mainPage();
    addButton();
    closePopUp();
    submitButton()
});

