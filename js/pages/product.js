import { getMainTitle } from "../components/mainTitle.js"
import { getDesc } from "../components/desc.js"

export function getProductPage() {
    const page = document.createElement("div")
    page.classList.add("page", "product-page", "container")

    const mainTitle = getMainTitle("Продукт")
    const desc = getDesc("Каталог в разработке")

    page.append(mainTitle, desc)
    return page
}