const MainPageLayout = (children) => {
    const holderContainer = document.createElement("div")
    holderContainer.className = "pages-holder-container"
    holderContainer.style.width = "100%"
    holderContainer.style.display = "flex"
    holderContainer.style.flexDirection = "column"
    holderContainer.style.alignItems = "center"

    const holder = document.createElement("div")
    holder.className = "pages-holder"
    holder.style.width = "90%"
    holder.appendChild(children)

    holderContainer.append(PageHeader(), holder, PageFooter())
    return holderContainer
}