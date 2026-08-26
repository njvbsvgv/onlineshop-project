const FilterBoxGenerator = (filterData, inputType="checkbox", boxType, select, labelText, clickHandler) => {
    const boxContainer = document.createElement("div")
    boxContainer.setAttribute("class", "filter-box-container")

    const topItem = document.createElement("div")
    topItem.setAttribute("class", "filter-box-top-item")

    const labelTextElem = document.createElement("span")
    labelTextElem.textContent = labelText

    const bottomItem = document.createElement("div")
    bottomItem.setAttribute("class", "filter-box-bottom-item")

    topItem.appendChild(labelTextElem)

    filterData.forEach((item, index) => {
        const filterItem = document.createElement("div")
        filterItem.setAttribute("class", "filter-item")
        const checkBox = document.createElement("input")
        checkBox.setAttribute("type", inputType == "checkbox" ? "checkbox" : "radio")
        checkBox.setAttribute("id", `${boxType}${index+1}`)
        checkBox.setAttribute("name", `${boxType}`)
        const filterText = document.createElement("span")
        filterText.textContent = item[select]
        const label = document.createElement("label")
        label.setAttribute("for", `${boxType}${index+1}`)
        label.appendChild(filterText)
        filterItem.append(checkBox, label)
        bottomItem.appendChild(filterItem)
    })
    boxContainer.append(topItem, bottomItem)
    return boxContainer
}