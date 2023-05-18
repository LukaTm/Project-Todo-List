export function mainPage() {
    // const header = document.querySelector("header");
    const mainPage = document.querySelector("#sidebar");

    // const h1 = document.createElement("h1");
    // h1.textContent = "TO-DO";
    // header.appendChild(h1);

    // Add Button
    const addButton = document.createElement("div");
    addButton.id = "addButton";
    addButton.className = "all-pop-ups";

    const container = document.createElement("div");
    container.className = "container";
    container.appendChild(addButton);
    mainPage.appendChild(container);

    // DEFAULT PROJECT
    const defaultMorning = document.querySelector(".project1.morning div");
    const span = document.querySelector(".project1 span");
    const spanWidth = span.offsetWidth;
    defaultMorning.style.width = `${spanWidth ? spanWidth : "60"}px`;
    defaultMorning.style.opacity = "1";
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

export const Drawer = () => {
    const drawer = document.querySelector(".drawer");
    const sidebar = document.querySelector("#sidebar");
    drawer.addEventListener("click", () => {
        if (drawer.classList.contains("active")) {
            sidebar.style.display = "none";
            drawer.className = drawer.className.replace("active", "").trim();
        } else {
            sidebar.style.display = "grid";
            drawer.classList.add("active");
        }
    });
    window.addEventListener("resize", () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 669) {
            sidebar.style.display = "grid";
            drawer.className = drawer.className.replace("active", "").trim();
        }
        if (screenWidth < 670 && !drawer.classList.contains("active")) {
            sidebar.style.display = "none";
        }
    });
};
