import { createWebHashHistory, createRouter } from "vue-router"
import faq from "@/components/faq.vue"
import homeLoan from "../components/homeLoan.vue"
import creditCards from "../components/creditCards.vue"
import home from "../components/home.vue"

const routes = [
    {path:'/', name:'home', component: home },
    {path:'/faq', name:'faq', component: faq },
    {path: '/homeloan', name: 'homeloan', component: homeLoan},
    {path: '/creditcards', name: 'creditcards', component: creditCards}
]

const router = createRouter ({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})

export default router