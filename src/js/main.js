import Navigo from "navigo";
import { getHeader } from "/src/js/components/header.js"
import { getPageContainer } from "/src/js/components/pageContainer.js"


const app = document.getElementById("app")

export const router = new Navigo('/');

const header = getHeader()
const pageContainer = getPageContainer()

router.on('/', async () => {
    pageContainer.innerHTML = ""
    const moduleMain = await import("/src/js/pages/main.js")
    const mainPage = moduleMain.getMainPage()
    pageContainer.append(mainPage)
});

router.on('/catalog', async () => {
    pageContainer.innerHTML = ""
    const moduleCatalog = await import("/src/js/pages/catalog.js")
    const catalogPage = moduleCatalog.getCatalogPage()
    pageContainer.append(catalogPage)
});

router.on('/product/:title', async ({ data }) => {
    pageContainer.innerHTML = ""
    const moduleProduct = await import("/src/js/pages/product.js")
    const productPage = moduleProduct.getProductPage(data.title)
    pageContainer.append(productPage)
});

router.on('/basket', async () => {
    pageContainer.innerHTML = ""
    const moduleBasket = await import("/src/js/pages/basket.js")
    const basketPage = moduleBasket.getBasketPage()
    pageContainer.append(basketPage)
});

router.on('/order', async () => {
    if (true) {
        router.navigate("/");
        return
    }

    pageContainer.innerHTML = ""
    const moduleOrder = await import("/src/js/pages/order.js")
    const orderPage = moduleOrder.getOrderPage()
    pageContainer.append(orderPage)
});

router.notFound(async () => {
    pageContainer.innerHTML = ""
    const moduleNotFound = await import("/src/js/pages/notFound.js")
    const notFoundPage = moduleNotFound.getNotFoundPage()
    pageContainer.append(notFoundPage)
})

router.resolve();

app.append(header, pageContainer)