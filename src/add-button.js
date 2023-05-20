const popUp = document.querySelector(".pop-up");
import { ClearFormValues } from "./submit";

// ADD BUTTON
export function addButton() {
    const plusBtn = document.querySelector("#addButton");

    plusBtn.addEventListener("click", () => {
        popUp.style.display = "grid";
    });
}
// Close POP UP
export function closePopUp() {
    const closePopUp = document.querySelectorAll(".close-btn");
    closePopUp.forEach((popUpScreen) => {
        popUpScreen.addEventListener("click", () => {
            ClearFormValues();

            // Add Pop Up Screen
            popUp.style.display = "none";

            // Edit Pop Up Screen
            const EditpopUp = document.querySelector("#edit-pop-up");
            EditpopUp.style.display = "none";
        });
    });
}
