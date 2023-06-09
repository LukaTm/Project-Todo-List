import { editPopUpUserPriority } from "./submit.js";

const popUpTitle = document.querySelector('#edit-pop-up input[name="title"]');
const popUpDetails = document.querySelector(
    '#edit-pop-up input[name="details"]'
);
const popUpDate = document.querySelector('#edit-pop-up input[name="date"]');

export const editPopUp = (title, details, date) => {
    popUpTitle.value = title;
    popUpDetails.value = details;
    popUpDate.value = date;
};

export const EditedPopUp = () => {
    let title = popUpTitle.value;
    let details = popUpDetails.value;
    let date = popUpDate.value;
    let priority = editPopUpUserPriority();

    return { title, details, date, priority };
};
