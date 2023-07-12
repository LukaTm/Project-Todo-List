let clickProjectOnce = true;

export function mainPage() {
    // const header = document.querySelector("header");
    const mainPage = document.querySelector("#sidebar");

    const screenWidth = window.innerWidth;
    if (screenWidth <= 670) {
        mainPage.style.display = "flex";
        mainPage.style.opacity = "0";
    }

    // Add Button
    const addButton = document.createElement("div");
    addButton.id = "addButton";
    addButton.className = "all-pop-ups";

    const container = document.createElement("div");
    container.className = "container-add-button";
    container.appendChild(addButton);
    mainPage.appendChild(container);

    let runOnce = true;
    // DEFAULT PROJECT
    setTimeout(() => {
        const defaultClick = document.querySelector(
            "#projects ul div:first-child li span"
        );
        if (defaultClick && runOnce) {
            defaultClick.click();
            runOnce = false;
        } else {
            runOnce = false;
        }
    }, 100);

    if (screenWidth <= 670) {
        mainPage.style.display = "none";
        mainPage.style.opacity = "1";
    }
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
            sidebar.style.display = "flex";
            drawer.classList.add("active");
        }
    });
    window.addEventListener("resize", () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 670) {
            sidebar.style.display = "flex";
            drawer.className = drawer.className.replace("active", "").trim();
        }
        if (screenWidth <= 670 && !drawer.classList.contains("active")) {
            sidebar.style.display = "none";
        }
    });
};
