const ProductPage = () => {
    const container = document.createElement("div")
    container.className = "product-page-container"

    const text = document.createElement("h1")
    text.textContent = "Product Page..."
    text.addEventListener("click", () => {useUpdateRout("/landing");})

    container.append(text)

    return container
}