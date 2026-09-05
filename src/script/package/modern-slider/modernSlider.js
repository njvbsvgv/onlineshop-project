const modernSlider = (photosData, key, btnRightIcon, btnLeftIcon) => {

    let pos = 0
    const sliderHandler = () => {
        pos = sliderMotor("moderSliderBntLeft", "moderSliderBntRight", "moderSliderGallery", pos, 100, photosData.length, "right")
    }

    const sliderContainer = document.createElement("div")
    sliderContainer.className = "modern-slider-container"

    const gallery = document.createElement("div")
    gallery.className = "modern-slider-gallery"
    gallery.setAttribute("id", "moderSliderGallery")

    photosData.forEach((item) => {
        const imageControl = document.createElement("div")
        imageControl.className = "image-control"
        const image = document.createElement("img")
        image.src = item[key]
        imageControl.appendChild(image)
        gallery.appendChild(imageControl)
    })

    const buttonItemControl = document.createElement("div")
    buttonItemControl.className = "bottom-item-control"

    const itemsHolder = document.createElement("div")
    itemsHolder.className = "items-holder"

    const arrowBtnControl = document.createElement("div")
    arrowBtnControl.className = "arrow-btn-control"

    const btnRight = document.createElement("button")
    const btnRightImage = document.createElement("img")
    btnRightImage.src = btnRightIcon
    btnRight.setAttribute("id", "moderSliderBntRight")
    btnRight.appendChild(btnRightImage)

    const btnLeft = document.createElement("button")
    const btnLeftImage = document.createElement("img")
    btnLeftImage.src = btnLeftIcon
    btnLeft.setAttribute("id", "moderSliderBntLeft")
    btnLeft.appendChild(btnLeftImage)
    
    btnRight.addEventListener("click", () => {sliderHandler()})
    btnLeft.addEventListener("click", () => {sliderHandler()})

    arrowBtnControl.append(btnRight, btnLeft)

    itemsHolder.append(arrowBtnControl)
    buttonItemControl.appendChild(itemsHolder)

    sliderContainer.append(gallery, buttonItemControl)

    return sliderContainer
}

export default modernSlider