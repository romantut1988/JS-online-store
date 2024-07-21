import { router } from "/src/js/main"
import { getNavigationLink } from "/src/js/components/navigationLink/navigationLink.js"
import "./header.css"

export function getHeader() {
    const header = document.createElement("header")
    header.classList.add("header")

    const container = document.createElement("div")
    container.classList.add("container", "header__container")

    const nav = document.createElement("nav")
    nav.classList.add("header__navigation")

    let link1 = getNavigationLink("/", "Главная страница")
    let link2 = getNavigationLink("/catalog", "Каталог")
    let link3 = getNavigationLink("/basket", "Корзина")

    nav.append(link1, link2, link3)
    container.append(nav)

    header.append(container)
    return header
}