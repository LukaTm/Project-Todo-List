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
        createNewProjectInput.value = ''

        SidebarProjects()
        deleteBtnProject()
    })
}

export function deleteBtnProject() {
    const allProjectDeleteButtons = document.querySelectorAll('[class*="project"]') 
    let count = 0
    allProjectDeleteButtons.forEach(element => {
        if (element.querySelector('button')){
            console.log('1')
        } else {
            console.log('tried')
            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete Project'
            deleteButton.className = `delProject${count}`

            element.appendChild(deleteButton)

            deleteButton.addEventListener('click', (event) => {
                event.preventDefault()
                event.stopPropagation()
            });
        }
        count += 1
    });
}