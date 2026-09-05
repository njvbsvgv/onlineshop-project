const AuthPageContaienr = (children) => {
    const container = document.createElement("div")
    container.className = "auth-page-container"

    container.appendChild(children)
    return container
}

export default AuthPageContaienr