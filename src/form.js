const buttonClasses = ["low", "medium", "high"];
const buttons = buttonClasses.map((id) => document.querySelector(`.${id}`));
const buttons2 = buttonClasses.map((id) => document.querySelector(`#${id}`));

export function formButtons() {
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener("click", () => {
            Checker();
            button.style.backgroundColor =
                button.className === "low"
                    ? "green"
                    : button.className === "medium"
                    ? "rgb(212, 212, 76)"
                    : "red";
        });
    }
}

export function formEditButtons() {
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons2[i];
        button.addEventListener("click", () => {
            Checker2();
            button.style.backgroundColor =
                button.id === "low"
                    ? "green"
                    : button.id === "medium"
                    ? "rgb(212, 212, 76)"
                    : "red";
        });
    }
}

export const Checker2 = () => {
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons2[i];
        button.style.backgroundColor = "rgb(55, 61, 81)";
    }
};

export const Checker = () => {
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.style.backgroundColor = "rgb(55, 61, 81)";
    }
};
