export function mainPage() {
    const header = document.querySelector("header");
    const mainPage = document.querySelector("#sidebar");

    const h1 = document.createElement("h1");
    h1.textContent = "TO-DO";
    header.appendChild(h1);

    // Add Button
    const addButton = document.createElement("div");
    addButton.id = "addButton";
    addButton.className = "all-pop-ups";
    // mainPage.appendChild(addButton)
    const container = document.createElement("div");
    container.className = "container";
    container.appendChild(addButton);
    mainPage.appendChild(container);
}

export const CheckBoxListener = () => {
    const checkBox = document.querySelectorAll('[class*="checkTodo"]');
    checkBox.forEach((element) => {
        element.addEventListener("click", () => {
            const parent = element.parentElement;
            const p = parent.getElementsByTagName("p");
            if (element.checked) {
                for (let i = 0; i < p.length; i++) {
                    p[i].style.textDecoration = "line-through";
                    p[i].style.opacity = "0.5";
                }
            } else {
                for (let i = 0; i < p.length; i++) {
                    p[i].style.textDecoration = "";
                    p[i].style.opacity = "1";
                }
            }
        });
    });
};
