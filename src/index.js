import { mainPage } from './main-page.js';
import { addButton } from './add-button.js';
import { closePopUp } from './add-button.js';
import { formButtons } from './form.js';
import { formEditButtons } from './form.js';
import { submitButton } from './submit.js';
import { SidebarProjects } from './projects.js';
import { DefaultValues } from './submit.js';

document.addEventListener('DOMContentLoaded', () => {
	mainPage();
    formEditButtons()
    formButtons();
    addButton();
    closePopUp();
    submitButton()
    SidebarProjects()
    DefaultValues()
});

