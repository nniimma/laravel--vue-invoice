import { createRouter, createWebHashHistory } from "vue-router";
import InvoiceIndex from '../components/invoices/Index.vue'
import NotFound from "../components/NotFound.vue";

const routes = [
    {
        path: '/',
        component: InvoiceIndex
    },
    {
        // ! this path means any path:
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router