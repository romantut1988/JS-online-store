import { getHeader } from "./components/header.js"
import { getPageContainer } from "./components/pageContainer.js"


const app = document.getElementById("app")

const header = getHeader()
const pageContainer = getPageContainer()

export async function navigation(page) {
    pageContainer.innerHTML = ""
    switch (page) {
        case "catalog":
            const moduleCatalog = await import("./pages/catalog.js")
            const catalogPage = moduleCatalog.getCatalogPage()
            pageContainer.append(catalogPage)
            break
        case "basket":
            const moduleBasket = await import("./pages/basket.js")
            const basketPage = moduleBasket.getBasketPage()
            pageContainer.append(basketPage)
            break
        default:
            const moduleMain = await import("./pages/main.js")
            const mainPage = moduleMain.getMainPage()
            pageContainer.append(mainPage)
            break
    }
}
navigation()
app.append(header, pageContainer)