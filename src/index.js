import { mainPage } from './main-page.js';
import { addButton } from './add-button.js';
import { closePopUp } from './add-button.js';
import { formButtons } from './form.js';
import { formEditButtons } from './form.js';
import { submitButton } from './submit.js';
import { SidebarProjects } from './projects.js';
import { DefaultValues } from './submit.js';
import { CheckBoxListener } from './main-page.js';
import { createProject } from './createProject.js';
import { deleteBtnProject } from './createProject.js';

document.addEventListener('DOMContentLoaded', () => {
	mainPage();
    deleteBtnProject()
    formEditButtons();
    formButtons();
    addButton();
    closePopUp();
    submitButton();
    SidebarProjects();
    DefaultValues();
    CheckBoxListener();
    createProject()
});

