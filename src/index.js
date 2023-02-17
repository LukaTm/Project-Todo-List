import { mainPage } from './main-page.js';
import { addButton } from './add-button.js';
import { closePopUp } from './add-button.js';
import { formButtons } from './form.js';
import { formEditButtons } from './form.js';
import { submitButton } from './submit.js';
import { SidebarProjects } from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
    formEditButtons()
    formButtons();
	mainPage();
    addButton();
    closePopUp();
    submitButton()
    SidebarProjects()
});

