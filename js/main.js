const app = document.getElementById("app")

function getHeader() {
    const header = document.createElement("header")
    header.classList.add("header")

    const container = document.createElement("div")
    container.classList.add("container", "header__container")

    const nav = document.createElement("nav")
    nav.classList.add("navigation")

    let link1 = document.createElement("a")
    link1.href = ""
    link1.classList.add("btn")
    link1.textContent = "Главная страница"

    let link2 = document.createElement("a")
    link2.href = ""
    link2.classList.add("btn")
    link2.textContent = "Каталог"

    let link3 = document.createElement("a")
    link3.href = ""
    link3.classList.add("btn")
    link3.textContent = "Корзина"

    nav.append(link1, link2, link3)
    container.append(nav)

    header.append(container)
    return header
}

function getPageContainer() {
    const main = document.createElement("main")
    main.classList.add("page-container")

    return main
}

function getProductCard(title, price) {
    const item = document.createElement("li")
    item.classList.add("product-list__item")

    const productTitle = document.createElement("h2")
    productTitle.classList.add("product-list__title")
    productTitle.textContent = title

    const productPrice = document.createElement("strong")
    productPrice.classList.add("product-list__price")
    productPrice.textContent = `${price} руб`

    const addBasket = document.createElement("button")
    addBasket.classList.add("btn")
    addBasket.textContent = "В корзину"

    item.append(productTitle, productPrice, addBasket)

    return item
}

function getMainTitle(text) {
    const title = document.createElement("h1")
    title.classList.add("main-title")
    title.textContent = text

    return title
}

function getDesc(text) {
    const desc = document.createElement("p")
    desc.classList.add("desc")
    desc.textContent = text

    return desc
}

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

// const mainPage = getMainPage()
// pageContainer.append(mainPage)

// const productPage = getProductPage()
// pageContainer.append(productPage)

// const catalogPage = getCatalogPage()
// pageContainer.append(catalogPage)

const basketPage = getBasketPage()
pageContainer.append(basketPage)

app.append(header, pageContainer)