let whichProjectToUploadToDO = 'morning'
export const SidebarProjects = () => {

    const projects = document.querySelectorAll('#projects li')
    projects.forEach(element => {
        
        element.addEventListener('click', () => {
            projects.forEach(thing =>{
                thing.style.backgroundColor = '#dab785'
            });
            element.style.backgroundColor = 'red'
            const allToDo = document.querySelectorAll('[id*="todo"]');

            whichProjectToUploadToDO = element.childNodes[0].textContent
            element.className = whichProjectToUploadToDO
            
            allToDo.forEach(element => {
                if (element.className != whichProjectToUploadToDO){
                    element.style.display = 'none'
                }
                else{
                    element.style.display = 'flex'
                }
            });
            
        })
    });
    ShowAllToDo()
    return whichProjectToUploadToDO
}

// Show ALL ToDo's 
const ShowAllToDo = () => {
    const showAllToDos = document.querySelector('.show-all-todos')
        showAllToDos.addEventListener('click', () => {
            const allToDo = document.querySelectorAll('[id*="todo"]');
            allToDo.forEach(element => {
                element.style.display = 'flex'
        });
    })
};

