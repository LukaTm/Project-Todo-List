import { SidebarProjects } from "./projects.js";
import { RemoveProjectFromStorage } from "./submit.js";
import { UpdateUserData } from "./submit.js";

const Test = () => {
    const projects = document.querySelectorAll("#projects li");
    projects.forEach((element) => {
        let whichProjectToUploadToDO = element.childNodes[0].textContent;
        element.classList.add(whichProjectToUploadToDO);
    });
};

let projectId = 4;
export function createProject() {
    const createNewProjectInput = document.querySelector("#createProject");
    const allProjects = document.querySelector("#projects ul");

    const createProjectSubmit = document.querySelector("#submitNewProject");
    createProjectSubmit.addEventListener("click", (event) => {
        event.preventDefault();

        const newProjectValue = createNewProjectInput.value;
        const li = document.createElement("li");
        li.classList.add(`project${projectId}`);

        const textNode = document.createTextNode(newProjectValue);
        li.appendChild(textNode);
        allProjects.appendChild(li);
        createNewProjectInput.value = "";

        deleteBtnProject();
        SidebarProjects();
        Test();

        projectId += 1;
    });
}

// let newArray;
// export NewArray = () => {
//     return newArrayy
// }

export function deleteBtnProject() {
    const allProjectDeleteButtons =
        document.querySelectorAll('[class*="project"]');
    let count = 0;
    allProjectDeleteButtons.forEach((element) => {
        if (element.querySelector("button")) {
            console.log("1");
        } else {
            // TRASH ICON DELETE BUTTON
            const deleteButton = document.createElement("i");
            deleteButton.className = `fas fa-trash-alt delProject${count}`;
            deleteButton.style.color = "white";
            deleteButton.style.borderColor = "#cccccc";

            element.appendChild(deleteButton);

            // Delete Project Button Even Listener
            deleteButton.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();

                const delParentClass =
                    deleteButton.parentElement.className.split(" ");
                const deleteButtonSecondWord = delParentClass.slice(1, 2)[0];
                console.log(deleteButtonSecondWord);
                const allSelectedDeleteClasses = document.querySelectorAll(
                    `.${deleteButtonSecondWord.toString()}`
                );
                console.log(allSelectedDeleteClasses);
                allSelectedDeleteClasses.forEach((eachClass) => {
                    eachClass.remove();

                    // New Array with Removed Project and Todo's
                    const userStorage = RemoveProjectFromStorage();
                    const index = userStorage.findIndex(
                        (obj) => obj.project == deleteButtonSecondWord
                    );
                    if (index !== -1) {
                        userStorage.splice(index, 1);
                    }
                    UpdateUserData(userStorage);

                    // Automatically select the top project after DELETING project
                    document.querySelector("#projects li").click();
                });
            });
        }
        count += 1;
    });
}
