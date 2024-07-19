import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js"
import { getDesc } from "/src/js/components/desc/desc.js"

export function getProductPage(title) {
    const page = document.createElement("div")
    page.classList.add("page", "product-page", "container")

    const mainTitle = getMainTitle(title)
    const desc = getDesc("Каталог в разработке")

    page.append(mainTitle, desc)
    return page
}