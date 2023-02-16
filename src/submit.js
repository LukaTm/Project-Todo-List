
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
    console.log(userToDoStorage)

    // Call Display Data on Page
    showDataOnPage(toDoId)
}


// Add Data on Page Function
function showDataOnPage(id){
    const toDoSection = document.querySelector('#main-list')
    const div = document.createElement('div')
    div.id = `todo${id}`

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

    // Convert date to Named Date
    const date = new Date(userSelectedDate)
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
    // Display Date
    const p4 = document.createElement('p')
    p4.textContent = `Due Date: ${monthName} ${userSelectedDate.slice(-2)}`
    div.appendChild(p4)

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
                console.log('suc')
                const newData = userToDoStorage.filter((item) => item.id != idToRemove);
                userToDoStorage = newData
            }
        });

        // Remove from page 
        div.remove() 

    });
}





