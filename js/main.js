import { getHeader } from "./components/header.js"
import { getPageContainer } from "./components/pageContainer.js"
import { getProductCard } from "./components/productCard.js"
import { getMainTitle } from "./components/mainTitle.js"
import { getDesc } from "./components/desc.js"

const app = document.getElementById("app")

function getMainPage() {
    const page = document.createElement("div")
    page.classList.add("page", "main-page", "container")

    const mainTitle = getMainTitle("Главная страница")

    const list = document.createElement("ul")
    list.classList.add("product-list", "list-reset")

    list.append(
        getProductCard("Товар 1", 400),
        getProductCard("Товар 2", 300),
        getProductCard("Товар 3", 700)
    )

    page.append(mainTitle, list)
    return page
}

function getProductPage() {
    const page = document.createElement("div")
    page.classList.add("page", "product-page", "container")

    const mainTitle = getMainTitle("Продукт")
    const desc = getDesc("Каталог в разработке")

    page.append(mainTitle, desc)
    return page
}

function getCatalogPage() {
    const page = document.createElement("div")
    page.classList.add("page", "catalog-page", "container")

    const mainTitle = getMainTitle("Каталог")
    const desc = getDesc("Страница в разработке")

    page.append(mainTitle, desc)
    return page
}

function getBasketPage() {
    const page = document.createElement("div")
    page.classList.add("page", "basket-page", "container")

    const mainTitle = getMainTitle("Корзина")
    const desc = getDesc("Страница в разработке")

    page.append(mainTitle, desc)
    return page
}
const header = getHeader()
const pageContainer = getPageContainer()

export function navigation(page) {
    pageContainer.innerHTML = ""
    switch (page) {
        case "catalog":
            const catalogPage = getCatalogPage()
            pageContainer.append(catalogPage)
            break
        case "basket":
            const basketPage = getBasketPage()
            pageContainer.append(basketPage)
            break
        default:
            const mainPage = getMainPage()
            pageContainer.append(mainPage)
            break
    }
}
navigation()
app.append(header, pageContainer)