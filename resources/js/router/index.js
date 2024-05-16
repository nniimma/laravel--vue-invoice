import { createRouter, createWebHashHistory } from "vue-router";
import InvoiceIndex from '../components/invoices/Index.vue'
import NotFound from "../components/NotFound.vue";
import createInvoice from '../components/invoices/create.vue'
import showInvoice from '../components/invoices/show.vue'

const routes = [
    {
        path: '/',
        component: InvoiceIndex
    },
    {
        // ! this path means any path:
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
    {
        path: '/invoice/new',
        component: createInvoice
    },
    {
        path: '/invoice/show/:id',
        component: showInvoice,
        props: true
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router