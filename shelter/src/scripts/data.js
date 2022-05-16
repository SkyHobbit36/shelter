import petsList from './pets.json'

const Card = (card, className) => {
    return `
        <div class="card ${className}">
            <div class="card__image">
            <img
                width="300px"
                height="400px"
                src="${card.img}"
                alt="${card.type} ${card.breed} ${card.name}"
            />
            </div>
            <h3 class="card__title">${card.name}</h3>
            <button class="card__button button-secondary">Learn more</button>
        </div>
    `
}

const sliderContent = document.querySelector('.slider__content')
const petsCards = document.querySelector('.pets__cards')
const petsArray = []
petsList.forEach(item => {
    if (sliderContent) {
        sliderContent.innerHTML += Card(item, 'slider__card')
    }
    if (petsCards) {
        petsArray.push(Card(item, 'pets__card'))
    }
})

//randomize cards
if (petsCards) {
    for (let i = 0; i < 6; i++) {
        petsArray.sort(() => {
            return Math.random() - 0.5
        })
        petsCards.innerHTML += petsArray.join(' ')
    }
}