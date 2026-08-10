const ProductCard = ({image, title, description}) => {
    const card = document.createElement("div")
    card.className = "product-card"

    const imageControl = document.createElement("div")
    imageControl.className = "image-control"

    const imageElem = document.createElement("img")
    imageElem.setAttribute("src", image)

    const addToFavoriteElem = document.createElement("button")
    addToFavoriteElem.className = "addto-favorite-elem"
    const addToFavoriteIcon = document.createElement("img")

    const infoControl = document.createElement("div")
    infoControl.className = "info-control"

    const titleElem = document.createElement("h1")
    titleElem.className = "title"
    titleElem.innerHTML = title

    const descriptionElem = document.createElement("p")
    descriptionElem.className = "description-elem"
    descriptionElem.innerHTML = description
}