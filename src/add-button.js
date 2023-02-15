const popUp = document.querySelector('.pop-up')

export function addButton() {
	const plusBtn = document.querySelector('#addButton')
	
	plusBtn.addEventListener('click', () => {
		popUp.style.opacity = 1;
	});
}

export function closePopUp() {
	const closePopUp = document.querySelector('.close-btn')
	closePopUp.addEventListener('click', () => {
		popUp.style.opacity = '0'
	});
}

const closePopOutsideBox = document.querySelector('body')
const popUpOpacity = document.querySelector('.pop-up')

closePopOutsideBox.addEventListener('click', () => {
	if (popUp.style.opacity === '1'){
		closePopOutsideBox.style.opacity = '0.4'
		popUpOpacity.style.opacity = '1'
	}
});




