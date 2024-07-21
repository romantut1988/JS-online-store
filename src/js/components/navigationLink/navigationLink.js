import { router } from "/src/js/main"
import "./navigationLink.css"

export function getNavigationLink(path, title = "") {
    let link = document.createElement("a")
    link.href = path
    link.classList.add("btn")
    link.textContent = title
    link.addEventListener("click", function (event) {
        event.preventDefault()
        router.navigate(path);
    })
    return link
}