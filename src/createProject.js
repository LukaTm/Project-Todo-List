import { SidebarProjects } from "./projects.js";
import { RemoveProjectFromStorage } from "./submit.js";
import { UpdateUserData } from "./submit.js";

let projectId = 4;

const AddUnderlineForProject = () => {
    const lis = document.querySelectorAll("#projects li");

    let selectedProject = null;

    lis.forEach((li) => {
        const span = document.createElement("span");
        span.innerText = li.innerText;
        li.innerHTML = "";
        li.appendChild(span);

        span.addEventListener("click", () => {
            if (selectedProject !== li) {
                if (selectedProject) {
                    selectedProject
                        .querySelector("span")
                        .classList.remove("active");
                }

                span.classList.add("active");
                span.parentNode.parentNode.classList.add("active");

                selectedProject = li;
                // remove project active class
                const projectDiv = document.querySelectorAll("#projects div");
                projectDiv.forEach((div) => {
                    const childLi = div.querySelector("li");
                    if (childLi != selectedProject) {
                        div.classList.remove("active");
                    } else {
                        div.classList.add("active");
                    }
                });
            }
        });
    });
};

AddUnderlineForProject();

export function createProject() {
    const createNewProjectInput = document.querySelector("#createProject");

    const allProjects = document.querySelector("#projects ul");

    const createProjectSubmit = document.querySelector("#submitNewProject");

    createProjectSubmit.addEventListener("click", (event) => {
        event.preventDefault();

        if (createNewProjectInput.value == "") {
            const popUp = document.querySelector(".pop-up.empty-project-popup");
            popUp.style.display = "flex";
        } else {
            const newProjectValue = createNewProjectInput.value;

            const li = document.createElement("li");
            const div = document.createElement("div");
            li.classList.add(`project${projectId}`, "wrap-text");

            const textNode = document.createTextNode(newProjectValue);

            li.appendChild(textNode);

            div.appendChild(li);
            div.className = `prox${projectId}`;
            allProjects.appendChild(div);
            createNewProjectInput.value = "";

            deleteBtnProject();
            SidebarProjects();

            AddUnderlineForProject();

            projectId += 1;
            // Select Latest Project after CREATING IT
            let firstRun = true;

            setTimeout(() => {
                const lastLi = document.querySelector(
                    "#projects ul div:last-child li span"
                );
                lastLi.click();
            }, 100);
            firstRun = false;
        }
    });

    // Close POP UP Button
    const modalBtn = document.querySelector(
        ".pop-up.empty-project-popup button"
    );
    modalBtn.addEventListener("click", () => {
        const modal = document.querySelector(".pop-up.empty-project-popup ");
        modal.style.display = "none";
    });
}
export function deleteBtnProject() {
    const allProjectDeleteButtons =
        document.querySelectorAll('[class*="prox"]');
    let count = 0;
    allProjectDeleteButtons.forEach((element) => {
        if (element.querySelector("i")) {
            return;
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

                const deleteButtonSecondWord =
                    deleteButton.parentElement.className.split(" ")[0];
                const allSelectedDeleteClasses = document.querySelectorAll(
                    `.${deleteButtonSecondWord.toString()}`
                );
                const selectedElement = document.querySelector(
                    `.${deleteButtonSecondWord.toString()}`
                );
                allSelectedDeleteClasses.forEach((eachClass) => {
                    eachClass.remove();

                    // Remove project from userToDoStorage
                    const userStorage = RemoveProjectFromStorage();
                    const index = userStorage.findIndex(
                        (obj) => obj.project == deleteButtonSecondWord
                    );
                    if (index !== -1) {
                        userStorage.splice(index, 1);
                    }
                    UpdateUserData(userStorage);

                    // Remove project from projectTodoMapping
                    const projectTodoMapping =
                        JSON.parse(
                            localStorage.getItem("projectTodoMapping")
                        ) || {};
                    delete projectTodoMapping[deleteButtonSecondWord];
                    localStorage.setItem(
                        "projectTodoMapping",
                        JSON.stringify(projectTodoMapping)
                    );

                    // Automatically select the top project after DELETING project
                    if (selectedElement.classList.contains("active")) {
                        const project = document.querySelector(
                            "#projects li:not(.exclude) span"
                        );
                        project.click();
                    }
                });
            });
        }
        count += 1;
    });
}
