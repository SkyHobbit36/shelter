const next = document.querySelector('.pagination__next')
const prev = document.querySelector('.pagination__prev')

const nextMore = document.querySelector('.pagination__next-more')
const prevMore = document.querySelector('.pagination__prev-more')

const cards = document.querySelector('.pets__cards')
const pageNumber = document.querySelector('.pagination__page-number')

let cardHeight = 465
let pageCount = 1
let onePageHeight = cardHeight * 2
let cardsHeight = cards.offsetHeight
let maxPageNumber = cardsHeight / onePageHeight

const scrollNext = () => {
    pageCount++
    scrollPage()
}
const scrollPrev = () => {
    pageCount--
    scrollPage()
}
const scrollMoreNext = () => {
    pageCount = maxPageNumber
    scrollPage()
}
const scrollMorePrev = () => {
    pageCount = 1
    scrollPage()
}

const scrollPage = () => {
    cards.style.transform = `translateY(${- onePageHeight * (pageCount - 1)}px)`
    showPagination()
}

const showPagination = () => {
    pageNumber.innerHTML = pageCount

    if (pageCount === 1) {
        prev.disabled = true
        prevMore.disabled = true
    } else {
        prev.disabled = false
        prevMore.disabled = false
    }

    if (pageCount === maxPageNumber) {
        next.disabled = true
        nextMore.disabled = true
    } else {
        next.disabled = false
        nextMore.disabled = false
    }
}

const checkWidth = () => {
    cardsHeight = cards.offsetHeight

    if (document.body.offsetWidth < 950) {
        onePageHeight = cardHeight * 3
    } else {
        onePageHeight = cardHeight * 2
    }

    maxPageNumber = Math.ceil(cardsHeight / onePageHeight)

    showPagination()
}

checkWidth()
window.addEventListener("resize", checkWidth, true);

next.addEventListener('click', scrollNext)
prev.addEventListener('click', scrollPrev)
nextMore.addEventListener('click', scrollMoreNext)
prevMore.addEventListener('click', scrollMorePrev)