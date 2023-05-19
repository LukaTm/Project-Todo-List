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

let selectedProject = null;
let projectId = 4;

const AddUnderlineForProject = () => {
    const lis = document.querySelectorAll("#projects li");

    lis.forEach((li) => {
        const text = li.innerText;
        const span = document.createElement("span");
        span.innerText = text;
        li.innerHTML = "";
        li.appendChild(span);

        const underline = document.createElement("div");
        underline.classList.add("underline");
        li.appendChild(underline);

        li.addEventListener("mouseenter", () => {
            // SPAN WIDTH
            if (selectedProject !== li) {
                const spanWidth = span.offsetWidth;
                underline.style.width = `${spanWidth}px`;
                underline.style.opacity = 1;
            }
        });

        li.addEventListener("click", () => {
            if (selectedProject !== li) {
                const spanWidth = span.offsetWidth;
                underline.style.width = `${spanWidth}px`;
                underline.style.opacity = 1;
                if (selectedProject) {
                    selectedProject.querySelector(".underline").style.width =
                        "0";
                    selectedProject.querySelector("div").style.opacity = "0";
                }
                selectedProject = li;
            }
        });

        li.addEventListener("mouseleave", () => {
            if (selectedProject !== li) {
                underline.style.width = "0";
                underline.style.opacity = 0;
            }
        });
        window.addEventListener("resize", () => {
            const allSpanProject = document.querySelectorAll("li span");
            allSpanProject.forEach((element) => {
                const spanWidth = element.offsetWidth;
                const underline = document.querySelector(".underline");
                underline.style.width = `${spanWidth}px`;
            });
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
        Test();

        AddUnderlineForProject();

        projectId += 1;
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
                    deleteButton.parentElement.className;
                const allSelectedDeleteClasses = document.querySelectorAll(
                    `.${deleteButtonSecondWord.toString()}`
                );
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
