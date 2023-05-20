import { Checker } from "./form.js";
import { editPopUp } from "./editTodo.js";
import { EditedPopUp } from "./editTodo.js";
import { SidebarProjects } from "./projects.js";
import { Checker2 } from "./form.js";
import { CheckBoxListener } from "./main-page.js";
import { GetUserData } from "./createProject.js";

export const editPopUpUserPriority = () => {
    // Find user Selected Priority
    const buttonIds = ["low", "medium", "high"];
    const buttons = buttonIds.map((id) => document.querySelector(`#${id}`));
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].style.backgroundColor !== "rgb(154, 194, 209)") {
            return buttons[i].id;
        }
    }
};

const findUserPriority = () => {
    // Find user Selected Priority
    const buttonIds = ["low", "medium", "high"];
    const buttons = buttonIds.map((id) => document.querySelector(`.${id}`));
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].style.backgroundColor !== "rgb(154, 194, 209)") {
            return buttons[i].className;
        }
    }
};

// Clear form values
const ClearFormValues = () => {
    const labels = document.querySelectorAll(
        ".todo-form input:not(:last-child)"
    );
    labels.forEach((label) => {
        label.value = "";
    });
    // Use Checker() from form.js to clear colors
    Checker();
};

// Store User TODO In array
let userToDoStorage = [];
let toDoId = 0;

// Make New User ToDo
function UserToDoData(id, title, details, priority, dueDate, project) {
    this.id = id;
    this.title = title;
    this.details = details;
    this.priority = priority;
    this.dueDate = dueDate;
    this.project = project;
}

// Add to Storage User Data
const AddToStorage = (
    userTitle,
    userDetails,
    userPriority,
    userDate,
    projectClass
) => {
    toDoId++;
    const newToDo = new UserToDoData(
        toDoId,
        userTitle,
        userDetails,
        userPriority,
        userDate,
        projectClass
    );
    userToDoStorage.push(newToDo);

    // Call Display Data on Page
    showDataOnPage(toDoId);
};

// Submit Values stored
const form = document.querySelector(".todo-form");
let userSelectedTitle,
    userSelectedDetails,
    userSelectedPriority,
    userSelectedDate;

// Show DEFAULT Values on screen
export const DefaultValues = () => {
    const defaultProject = document.querySelector("#projects ul li");

    userSelectedTitle = "Wake up early";
    userSelectedDetails = "at least 7hr sleep";
    userSelectedPriority = "high";
    userSelectedDate = "2023-12-07";

    AddToStorage(
        "Wake up early",
        "at least 7hr sleep",
        "high",
        "2023-12-07",
        "morning"
    );
};

export function submitButton() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const dueDate = form.querySelector("#date").value;
        const dueDateStyle = form.querySelector("#date");
        const title = form.querySelector("#title").value;
        const titleStyle = form.querySelector("#title");
        if (!title) {
            // const popUp = document.querySelector(".pop-up.empty-title");
            // popUp.style.display = "block"
            titleStyle.style.borderColor = "red";
            titleStyle.addEventListener("input", () => {
                titleStyle.style.borderColor = "black";
                if (titleStyle.value == "") {
                    titleStyle.style.borderColor = "red";
                }
            });
        }
        if (!dueDate) {
            dueDateStyle.style.borderColor = "red";
            dueDateStyle.addEventListener("input", () => {
                dueDateStyle.style.borderColor = "black";
                if (dueDateStyle.value == "") {
                    dueDateStyle.style.borderColor = "red";
                }
            });
        } else {
            // User Submitted Values
            userSelectedTitle = document.querySelector("#title").value;
            userSelectedDetails = document.querySelector("#details").value;
            userSelectedPriority = findUserPriority();
            userSelectedDate = document.querySelector("#date").value;

            AddToStorage(
                userSelectedTitle,
                userSelectedDetails,
                userSelectedPriority,
                userSelectedDate,
                SidebarProjects()
            );

            // Close Pop UP
            const popUp = document.querySelector(".pop-up");
            popUp.style.display = "none";

            // Call Clear Form Values
            ClearFormValues();

            // Add Check Box Listener to New ToDo's
            CheckBoxListener();
        }
    });
}

// Convert date to Named Words - Feb 10
const ConvertDateToWords = (userDate) => {
    const date = new Date(userDate);
    const monthName = new Intl.DateTimeFormat("en-US", {
        month: "short",
    }).format(date);
    return monthName;
};

// Add Data on Page Function
function showDataOnPage(id) {
    const toDoSection = document.querySelector("#main-list");
    const div = document.createElement("div");
    div.id = `todo${id}`;
    // Add class name based on which Project user selected
    div.classList.add(SidebarProjects());

    toDoSection.appendChild(div);

    // Display Title
    const p1 = document.createElement("p");
    p1.textContent = `Title: ${userSelectedTitle}`;
    div.appendChild(p1);

    // Display Details
    const p2 = document.createElement("p");
    p2.textContent = `Details: ${userSelectedDetails}`;
    div.appendChild(p2);

    // Display Priority
    const p3 = document.createElement("p");
    p3.textContent = `Priority: ${userSelectedPriority}`;
    div.appendChild(p3);

    // Display Date
    const p4 = document.createElement("p");

    p4.textContent = `Due Date: ${ConvertDateToWords(
        userSelectedDate
    )} ${userSelectedDate.slice(-2)}`;
    div.appendChild(p4);

    // Call addEditButton
    addEditButton(toDoId, div);

    // Add Delete Button
    const deleteButton = document.createElement("i");
    deleteButton.className = `fas fa-trash-alt todo${id}`;
    div.appendChild(deleteButton);

    // Add Check Mark for ToDo
    const checkMark = document.createElement("input");
    checkMark.type = "checkbox";
    checkMark.id = `checkTodo${id}`;
    checkMark.className = `checkTodo${id}`;
    checkMark.name = "checkTodo";
    const label = document.createElement("label");
    label.setAttribute("for", `checkTodo${id}`);
    // label.for = 'checkTodo'

    div.appendChild(checkMark);
    div.appendChild(label);

    // Add Delete Event Listener
    deleteButton.addEventListener("click", () => {
        // Remove from Storage
        userToDoStorage.forEach((todo) => {
            let idToRemove = div.id.slice(4);
            if (idToRemove == todo.id) {
                const newData = userToDoStorage.filter(
                    (item) => item.id != idToRemove
                );
                userToDoStorage = newData;
            }
        });
        // Remove from page
        div.remove();
    });
}

// Export User Storage to remove Selected Todo's
export const RemoveProjectFromStorage = () => {
    return userToDoStorage;
};

export const UpdateUserData = (newStorage) => {
    userToDoStorage = newStorage;
};

function showEditedOnPage(
    value,
    editedTitle,
    editedDetails,
    editedPriority,
    editedDueDate
) {
    const allToDo = document.querySelectorAll('[id*="todo"]');
    allToDo.forEach((todo) => {
        if (todo.id.slice(4) == value) {
            const title = todo.querySelector(":first-child");
            const details = todo.querySelector(":nth-child(2)");
            const priority = todo.querySelector(":nth-child(3)");
            const dueDate = todo.querySelector(":nth-child(4)");

            title.textContent = `Title: ${editedTitle}`;
            details.textContent = `Details: ${editedDetails}`;
            priority.textContent = `Priority: ${editedPriority}`;
            dueDate.textContent = `Due Date: ${ConvertDateToWords(
                editedDueDate
            )} ${editedDueDate.slice(-2)}`;
        }
    });
}

function addEditButton(addId, div) {
    // const deleteButton = document.createElement("i");
    // deleteButton.className = `fas fa-trash-alt delProject${count}`;
    // deleteButton.style.color = "white";
    // deleteButton.style.borderColor = "#cccccc";

    // Add Edit Button
    const editButton = document.createElement("i");
    editButton.className = `fas fa-edit all-pop-ups`;
    editButton.id = `edit${addId}`;
    div.appendChild(editButton);

    // Add Edit Event Listener | On click display POP UP
    editButton.addEventListener("click", () => {
        const editBtnPopUp = document.querySelector("#edit-pop-up");
        editBtnPopUp.style.display = "grid";

        // Which Edit Button got clicked Values
        let buttonParentElement = editButton.parentElement;
        const title = buttonParentElement
            .querySelector(":first-child")
            .textContent.slice(6);
        const details = buttonParentElement
            .querySelector(":nth-child(2)")
            .textContent.slice(9);

        const dueDate = buttonParentElement
            .querySelector(":nth-child(4)")
            .textContent.slice(14);
        const FindDueDate = () => {
            let test = "";
            userToDoStorage.forEach((element) => {
                let date = element["dueDate"].slice(8, 10);
                if (date == dueDate) {
                    test = element.dueDate;
                }
            });
            return test;
        };

        const FindEditPriority = () => {
            const buttonClasses = ["low", "medium", "high"];
            const buttons2 = buttonClasses.map((id) =>
                document.querySelector(`#${id}`)
            );

            for (let i = 0; i < buttons2.length; i++) {
                const priority = buttonParentElement
                    .querySelector(":nth-child(3)")
                    .textContent.slice(10);
                if (priority == buttons2[i].id) {
                    const button = buttons2[i];
                    // Check and Clear any priority before selecting New One
                    Checker2();
                    button.style.backgroundColor =
                        priority == "low"
                            ? "green"
                            : priority === "medium"
                            ? "rgb(212, 212, 76)"
                            : "red";
                }
            }
        };

        FindEditPriority();

        // Call editToDo Function from editToDo.js
        editPopUp(title, details, FindDueDate());

        // Edit POP UP Screen Submit Button
        const editPopupScreen = document.querySelector("#submitEdit");
        const editPopupScreenFunc = (event) => {
            event.preventDefault();

            // Deconstruct from editTodo.js
            const { title, details, date, priority } = EditedPopUp();
            // Loop and replace with EDITED stuff
            userToDoStorage.forEach((todo) => {
                let idToReplace = editButton.id.slice(4);

                if (idToReplace == todo.id) {
                    todo.title = title;
                    todo.details = details;
                    todo.dueDate = date;
                    todo.priority = priority;
                }
                // Call Show Edited ToDo on PAGE
                showEditedOnPage(idToReplace, title, details, priority, date);
                editPopupScreen.removeEventListener(
                    "click",
                    editPopupScreenFunc
                );

                // Close Pop up
                const editPopUp = document.querySelector("#edit-pop-up");
                editPopUp.style.display = "none";
            });
        };
        editPopupScreen.addEventListener("click", editPopupScreenFunc);
    });
}
