import {Bags, Category, CategoryId, Favourites, Home, Product, Profile} from "../pages";
import Sign from "../pages/sign/sign";
import Orders from "../pages/orders/orders";
import Countries from "../pages/countries/countries";
import Filter from "../pages/filter/filter";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Confirm from "../pages/register/confirm";
import CreateAccount from "../pages/register/create_account";
import Search from "../pages/search/search";


export const publicRoutes = [
    { path: '/', component: <Home/> },
    { path: '/category', component: <Category/> },
    { path: '/category/:id', component: <CategoryId/> },
    { path: '/profile', component: <Profile/> },
    { path: '/bags', component: <Bags/> },
    { path: '/favourites', component: <Favourites/> },
    { path: '/product/:id', component: <Product/> },
    { path: '/sign', component: <Sign/> },
    { path: '/orders', component: <Orders/> },
    { path: '/countries', component: <Countries/> },
    { path: '/filter', component: <Filter/> },
    { path: '/login', component: <Login/> },
    { path: '/register', component: <Register/> },
    { path: '/register/confirm', component: <Confirm/> },
    { path: '/create-account', component: <CreateAccount/> },
    { path: '/search', component: <Search/> }
]

export const privateRoutes = [
    { path: '/profile', component: <Profile/> },
]
