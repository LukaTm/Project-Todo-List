const popUp = document.querySelector('.pop-up')

export function addButton() {
	const plusBtn = document.querySelector('#addButton')
	
	plusBtn.addEventListener('click', () => {
		popUp.style.display = 'grid'

	});
}

export function closePopUp() {
	const closePopUp = document.querySelector('.close-btn')
	closePopUp.addEventListener('click', () => {
		popUp.style.display = 'none'
	});
}






