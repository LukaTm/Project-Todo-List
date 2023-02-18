import { SidebarProjects } from './projects.js';

export function createProject(){
    const createNewProjectInput = document.querySelector('#createProject')
    const allProjects = document.querySelector('#projects ul')


    const createProjectSubmit = document.querySelector('#submitNewProject')
    createProjectSubmit.addEventListener('click', (event) => {
        event.preventDefault()

        const newProjectValue = createNewProjectInput.value
        const li = document.createElement('li')

        const textNode = document.createTextNode(newProjectValue);
        li.appendChild(textNode)

        allProjects.appendChild(li)

        SidebarProjects()
    })
}