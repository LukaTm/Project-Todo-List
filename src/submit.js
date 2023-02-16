import { func } from "prop-types";

const findUserPriority = () => {
    // Find user Selected Priority
    const buttonIds = ['low', 'medium', 'high'];
    const buttons = buttonIds.map((id) => document.querySelector(`#${id}`));
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].style.backgroundColor !== 'rgb(154, 194, 209)'){
            return buttons[i].id;
        }
    }
}

// Submit Values stored
const form = document.querySelector('form') 
let userSelectedTitle, userSelectedDetails, userSelectedPriority;

export function submitButton(){
    form.addEventListener("submit", (event) =>{
        event.preventDefault();

        // User Submitted Values
        userSelectedTitle = document.querySelector('#title').value;
        userSelectedDetails = document.querySelector('#details').value;
        userSelectedPriority = findUserPriority();

        AddToStorage()


    });
}

// Make New User ToDo
function UserToDoData(id,title, details, priority) {
    this.id = id;
    this.title = title;
    this.details = details;
    this.priority = priority;
}

// Store User TODO In array
let UserToDoStorage = [];
let toDoId = 0;

const AddToStorage = () => {
    const newToDo = new UserToDoData(toDoId,userSelectedTitle, userSelectedDetails, userSelectedPriority);
    UserToDoStorage.push(newToDo);
    toDoId++;
    console.log(UserToDoStorage)

    // Call Display Data on Page
    showDataOnPage(toDoId)

    // create id DeleteButton with storage Class
    // add Class to also The Text 
    // Add event Class.listener{ 'click'
        //queryselector.deleteButton[Class]
        //  
    //}
}


// Add Data on Page Function
function showDataOnPage(id){
    const dataContainer = document.querySelector('#main-list')
    const div = document.createElement('div')
    div.id = id

    dataContainer.appendChild(div)

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


}





