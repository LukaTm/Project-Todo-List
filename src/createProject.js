import { SidebarProjects } from './projects.js';


const Test = () => {
    const projects = document.querySelectorAll('#projects li')
    projects.forEach(element => {
        let whichProjectToUploadToDO = element.childNodes[0].textContent
        element.classList.add(whichProjectToUploadToDO)
    })
}

let projectId = 4
export function createProject(){
    const createNewProjectInput = document.querySelector('#createProject')
    const allProjects = document.querySelector('#projects ul')


    const createProjectSubmit = document.querySelector('#submitNewProject')
    createProjectSubmit.addEventListener('click', (event) => {
        event.preventDefault()

        const newProjectValue = createNewProjectInput.value
        const li = document.createElement('li')
        li.classList.add(`project${projectId}`)

        const textNode = document.createTextNode(newProjectValue);
        li.appendChild(textNode)
        allProjects.appendChild(li)
        createNewProjectInput.value = ''

        deleteBtnProject()
        SidebarProjects()
        Test()

        projectId +=1
    })
}


export function deleteBtnProject() {
    const allProjectDeleteButtons = document.querySelectorAll('[class*="project"]') 
    let count = 0
    allProjectDeleteButtons.forEach(element => {
        if (element.querySelector('button')){
            console.log('1')
        } else {
            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete Project'
            deleteButton.className = `delProject${count}`

            element.appendChild(deleteButton)

            // Delete Project Button Even Listener
            deleteButton.addEventListener('click', (event) => {
                event.preventDefault()
                event.stopPropagation()
        
                const delParentClass = deleteButton.parentElement.className.split(' ')
                const deleteButtonSecondWord = delParentClass.slice(1, 2)[0];
                console.log(deleteButtonSecondWord)
                const allSelectedDeleteClasses = document.querySelectorAll(`.${deleteButtonSecondWord.toString()}`)
                console.log(allSelectedDeleteClasses)
                allSelectedDeleteClasses.forEach(eachClass => {
                    eachClass.remove()
                })

            });
        }
        count += 1
    });
}