import petsList from './pets.json'

let close
const popup = document.createElement('div')
popup.className = 'popup'

const closePopup = () => {
    popup.remove()
    document.body.style.overflow = 'auto'
}

const openPopup = pet => {
    document.body.append(popup)
    document.body.style.overflow = 'hidden'

    popup.innerHTML = `
        <div class="popup__window">
            <div class="popup__image">
                <img src="${pet.img}" alt="${pet.type} ${pet.breed} ${pet.name}" />
            </div>
            <div class="popup__content popup-content">
            <h4 class="popup-content__title">${pet.name}</h4>
            <div class="popup-content__breed h4">${pet.type} - ${pet.breed}</div>
            <p class="popup-content__text h5">${pet.description}</p>
            <ul class="popup-content__list">
                <li class="popup-content__item h5-modal-window">
                    <strong>Age:</strong> ${pet.age}</li>
                <li class="popup-content__item h5-modal-window">
                    <strong>Inoculations:</strong> ${pet.inoculations.join(', ')}
                </li>
                <li class="popup-content__item h5-modal-window">
                    <strong>Diseases:</strong> ${pet.diseases.join(', ')}
                </li>
                <li class="popup-content__item h5-modal-window">
                    <strong>Parasites:</strong> ${pet.parasites.join(', ')}
                </li>
            </ul>
            </div>
            <button class="popup__close button-round">
                <svg width="12" height="12">
                    <use xlink:href="assets/icons.svg#close"></use>
                </svg>
            </button>
        </div>
    `

    close = popup.querySelector('.popup__close')
    close.addEventListener('click', closePopup)
}

popup.addEventListener('click', event => {
    if (event.target === event.currentTarget) {
        closePopup()
    }
})

popup.addEventListener('mouseover', event => {
    if (event.target === event.currentTarget || event.target === close) {
        event.currentTarget.style.cursor = 'pointer'
        close.style.backgroundColor = '#FDDCC4'
    } else {
        event.currentTarget.style.cursor = 'auto'
        close.style.backgroundColor = 'transparent'
    }
})

const pets = document.querySelectorAll('.card')
pets.forEach(pet => {
    pet.addEventListener('click', () => {
        const cardName = pet.querySelector('.card__title').textContent
        const findedPet = petsList.find(item => item.name == cardName)
        console.log(findedPet)
        openPopup(findedPet)
    })
})








