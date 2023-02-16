const popUp = document.querySelector('.pop-up')

// ADD BUTTON
export function addButton() {
	const plusBtn = document.querySelector('#addButton')
	
	plusBtn.addEventListener('click', () => {
		popUp.style.display = 'grid'

	});
}
// Close POP UP
export function closePopUp() {
	const closePopUp = document.querySelector('.close-btn')
	closePopUp.addEventListener('click', () => {
		popUp.style.display = 'none'
	});
}






