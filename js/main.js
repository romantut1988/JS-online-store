import { getHeader } from "./components/header.js"
import { getPageContainer } from "./components/pageContainer.js"


import { getMainPage } from "./pages/main.js"
import { getCatalogPage } from "./pages/catalog.js"
import { getProductPage } from "./pages/product.js"
import { getBasketPage } from "./pages/basket.js"

const app = document.getElementById("app")

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