export function mainPage() { 
    const header = document.querySelector('header')
    const mainPage = document.querySelector('#main-list')

    const h1 = document.createElement('h1')
    h1.textContent = 'TO-DO'
    header.appendChild(h1)

    // Add Button
    const addButton = document.createElement('div')
    addButton.id = 'addButton'
    addButton.className = 'all-pop-ups'
    mainPage.appendChild(addButton)
}
