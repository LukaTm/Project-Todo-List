import { Checker } from './form.js';
import { editPopUp } from './editTodo.js';
import { EditedPopUp } from './editTodo.js';
import { SidebarProjects } from './projects.js';

export const editPopUpUserPriority = () => {
    // Find user Selected Priority
    const buttonIds = ['low', 'medium', 'high'];
    const buttons = buttonIds.map((id) => document.querySelector(`#${id}`));
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].style.backgroundColor !== 'rgb(154, 194, 209)'){
            return buttons[i].id;
        }
    }
}

const findUserPriority = () => {
    // Find user Selected Priority
    const buttonIds = ['low', 'medium', 'high'];
    const buttons = buttonIds.map((id) => document.querySelector(`.${id}`));
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].style.backgroundColor !== 'rgb(154, 194, 209)'){
            return buttons[i].className;
        }
    }
}

// Clear form values
const ClearFormValues = () => {
    const labels = document.querySelectorAll('.todo-form input:not(:last-child)');
    labels.forEach(label =>{
        label.value = ''
    });
    // Use Checker() from form.js to clear colors 
    Checker()
}

// Submit Values stored
const form = document.querySelector('.todo-form') 
let userSelectedTitle, userSelectedDetails, userSelectedPriority, userSelectedDate;

export function submitButton(){
    form.addEventListener("submit", (event) =>{
        event.preventDefault();

        // User Submitted Values
        userSelectedTitle = document.querySelector('#title').value;
        userSelectedDetails = document.querySelector('#details').value;
        userSelectedPriority = findUserPriority();
        userSelectedDate = document.querySelector('#date').value

        AddToStorage()

        // Close Pop UP  
        const popUp = document.querySelector('.pop-up')
        popUp.style.display = 'none'

        // Call Clear Form Values
        ClearFormValues()
    });
}


// Convert date to Named DateDelete
const ConvertDateToWords = (userDate) => {
    const date = new Date(userDate)
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
    return monthName
}


// Add Data on Page Function
function showDataOnPage(id){
    const toDoSection = document.querySelector('#main-list')
    const div = document.createElement('div')
    div.id = `todo${id}`
    // Add class name based on which Project user selected
    div.className = SidebarProjects()


    toDoSection.appendChild(div)

    // Display Title
    const p1 = document.createElement('p')
    p1.textContent = `Title: ${userSelectedTitle}`
    div.appendChild(p1)

    // Display Details
    const p2 = document.createElement('p')
    p2.textContent = `Details: ${userSelectedDetails}`
    div.appendChild(p2)

    // Display Priority
    const p3 = document.createElement('p')
    p3.textContent = `Priority: ${userSelectedPriority}`
    div.appendChild(p3)

    // Display Date
    const p4 = document.createElement('p')
    p4.textContent = `Due Date: ${ConvertDateToWords(userSelectedDate)} ${userSelectedDate.slice(-2)}`
    div.appendChild(p4)

    // Call addEditButton
    addEditButton(toDoId,div)

    // const allToDo = document.querySelectorAll('[id*="todo"]');

    // if (allToDo.length > 1) {
    //     for (let x = 0;x < allToDo.length;x++){
    //         console.log('many')
    //         if (allToDo[x].className != SidebarProjects()){
    //             console.log(allToDo[x].className)
    //             console.log(SidebarProjects())
    //             allToDo[x].style.display = 'none'
    //         }
    //     }
    // }
    // else{
    //     const allToDoOne = document.querySelector('[id*="todo"]');
    //     console.log('one')
    //     if (allToDoOne.className != SidebarProjects()){
    //         console.log(allToDoOne.className)
    //         console.log(SidebarProjects())
    //         allToDoOne.style.display = 'none'
    // }
    // }


    // Add Delete Button 
    const deleteButton = document.createElement('button')
    deleteButton.className = `todo${id}`
    deleteButton.textContent = 'Delete'
    div.appendChild(deleteButton)

    // Add Delete Event Listener
    deleteButton.addEventListener('click', () => {

        // Remove from Storage
        userToDoStorage.forEach(todo => { 
            let idToRemove = div.id.slice(4)
            if (idToRemove == todo.id){
                const newData = userToDoStorage.filter((item) => item.id != idToRemove);
                userToDoStorage = newData
            }
        });
        // Remove from page 
        div.remove() 
    });
}


// Make New User ToDo
function UserToDoData(id,title, details, priority,dueDate) {
    this.id = id;
    this.title = title;
    this.details = details;
    this.priority = priority;
    this.dueDate = dueDate
}

// Store User TODO In array
let userToDoStorage = [];
let toDoId = 0;

const AddToStorage = () => {
    toDoId++;
    const newToDo = new UserToDoData(toDoId,userSelectedTitle, userSelectedDetails, userSelectedPriority,userSelectedDate);
    userToDoStorage.push(newToDo);

    // Call Display Data on Page
    showDataOnPage(toDoId)
}

function showEditedOnPage(value,editedTitle,editedDetails,editedPriority,editedDueDate){
    const allToDo = document.querySelectorAll('[id*="todo"]');
    allToDo.forEach(todo => {
        if (todo.id.slice(4) == value){
            const title = todo.querySelector(':first-child')
            const details = todo.querySelector(':nth-child(2)')
            const priority = todo.querySelector(':nth-child(3)')
            const dueDate = todo.querySelector(':nth-child(4)')

            title.textContent = `Title ${editedTitle}`
            details.textContent = `Details: ${editedDetails}`
            priority.textContent = `Priority: ${editedPriority}`
            dueDate.textContent = `Due Date: ${ConvertDateToWords(editedDueDate)} ${editedDueDate.slice(-2)}`

        }
    })
}

function addEditButton(addId,div){
    // Add Edit Button 
    const editButton = document.createElement('button')
    editButton.className = `all-pop-ups`
    editButton.id = `edit${addId}`
    editButton.textContent = 'Edit'
    div.appendChild(editButton)

    // Add Edit Event Listener | On click display POP UP
    editButton.addEventListener('click', () => {
        const editBtnPopUp = document.querySelector('#edit-pop-up') 
        editBtnPopUp.style.display = 'grid'

        // Call editToDo Function from editToDo.js
        editPopUp(userSelectedTitle,userSelectedDetails,userSelectedDate)


        // Edit POP UP Screen Submit Button
        const editPopupScreen = document.querySelector('#submitEdit')
        editPopupScreen.addEventListener('click', (event) => {
            event.preventDefault()

            // Deconstruct from editTodo.js
            const {title,details,date,priority} = EditedPopUp();
            // Loop and replace with EDITED stuff
            userToDoStorage.forEach(todo => { 
                console.log(userToDoStorage)
                let idToReplace = editButton.id.slice(4)  

                if (idToReplace == todo.id){
                    todo.title = title
                    todo.details = details
                    todo.date = date
                    todo.priority = priority

                }
                // Call Show Edited ToDo on PAGE
                showEditedOnPage(idToReplace,title,details,priority,date,)
            });
        });
    });
    
}







