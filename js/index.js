import { Router } from "./router.js";

const router = new Router()
router.add('/', "/Pages/home.html")
router.add("/exploration", "/Pages/exploration.html")
router.add("/universe", "/Pages/universe.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()