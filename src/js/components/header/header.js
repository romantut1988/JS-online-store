import { router } from "/src/js/main"
import "./header.css"

export function getHeader() {
    const header = document.createElement("header")
    header.classList.add("header")

    const container = document.createElement("div")
    container.classList.add("container", "header__container")

    const nav = document.createElement("nav")
    nav.classList.add("navigation")

    let link1 = document.createElement("a")
    link1.href = "/"
    link1.classList.add("btn")
    link1.textContent = "Главная страница"
    link1.addEventListener("click", function (event) {
        event.preventDefault()
        router.navigate('/');
    })

    let link2 = document.createElement("a")
    link2.href = "/catalog"
    link2.classList.add("btn")
    link2.textContent = "Каталог"

    link2.addEventListener("click", function (event) {
        event.preventDefault()
        router.navigate('/catalog');
    })

    let link3 = document.createElement("a")
    link3.href = "/basket"
    link3.classList.add("btn")
    link3.textContent = "Корзина"

    link3.addEventListener("click", function (event) {
        event.preventDefault()
        router.navigate('/basket');
    })

    nav.append(link1, link2, link3)
    container.append(nav)

    header.append(container)
    return header
}