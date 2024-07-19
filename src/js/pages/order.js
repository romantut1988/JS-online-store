import { getMainTitle } from "/src/js/components/mainTitle.js"
import { getDesc } from "/src/js/components/desc.js"

export function getOrderPage() {
    const page = document.createElement("div")
    page.classList.add("page", "catalog-page", "container")

    const mainTitle = getMainTitle("Оформление")
    const desc = getDesc("Здесь оформление заказа")

    page.append(mainTitle, desc)
    return page
}