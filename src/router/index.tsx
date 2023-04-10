import Home from "../pages/home/home";
import About from "../pages/about/about_us";
import ProductsPage from "../pages/products/products";
import ContactUsPage from "../pages/contact/contact";
import SolutionsPage from "../pages/solutions/solutions";

export const publicRoutes = [
    { path: '/', component: <Home/> },
    { path: '/about', component: <About/> },
    { path: '/products', component: <ProductsPage/> },
    { path: '/contact-us', component: <ContactUsPage/> },
    { path: '/solutions', component: <SolutionsPage/> },
]