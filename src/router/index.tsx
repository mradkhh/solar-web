import {Bags, Category, CategoryId, Favourites, Home, Product, Profile} from "../pages";
import Sign from "../pages/sign/sign";


export const publicRoutes = [
    { path: '/', component: <Home/> },
    { path: '/category', component: <Category/> },
    { path: '/category/:id', component: <CategoryId/> },
    { path: '/profile', component: <Profile/> },
    { path: '/bags', component: <Bags/> },
    { path: '/favourites', component: <Favourites/> },
    { path: '/product/:id', component: <Product/> },
    { path: '/sign', component: <Sign/> },
]

export const privateRoutes = [
    { path: '/profile', component: <Profile/> },

]
