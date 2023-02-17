const projects = document.querySelectorAll('#projects li')

let whichProjectToUploadToDO;
export const SidebarProjects = () => {

    projects.forEach(element => {
        element.addEventListener('click', () => {
            projects.forEach(thing =>{
                thing.style.backgroundColor = '#dab785'
            });
            element.style.backgroundColor = 'red'
            const allToDo = document.querySelectorAll('[id*="todo"]');
            allToDo.forEach(element => {
                if (element.className != whichProjectToUploadToDO){
                    element.style.display = 'none'
                }
                else{
                    element.style.display = 'block'
                }
            });
            whichProjectToUploadToDO = element.textContent
            
        })
    });
    return whichProjectToUploadToDO
}

