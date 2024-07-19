import { getProductCard } from "../components/productCard.js"
import { getMainTitle } from "../components/mainTitle.js"

export function getMainPage() {
    const page = document.createElement("div")
    page.classList.add("page", "main-page", "container")

    const mainTitle = getMainTitle("Главная страница")

    const list = document.createElement("ul")
    list.classList.add("product-list", "list-reset")

    list.append(
        getProductCard("Товар_1", 400),
        getProductCard("Товар_2", 300),
        getProductCard("Товар_3", 700)
    )

    page.append(mainTitle, list)
    return page
}