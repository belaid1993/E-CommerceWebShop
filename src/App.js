import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import { Products, Navbar, Cart } from './components';

const App = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    //fonction pour obtenir les produits au niveau de store
    const fetchProducts = async () => {
        const { data } = await commerce.products.list()
        setProducts(data)
    }

    //fonction pour mise a jour le contenu de la cart
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    //fonction pour ajouter les produits
    const handleAddToCart = async (productId, quantity) => {
        const response = await commerce.cart.add(productId, quantity)
        setCart(response.cart)
    }

    //mise a jour la quantity de produit
    const handleUpdateCartQty = async (productId, quantity) => {
        const response = await commerce.cart.update(productId, { quantity })
        setCart(response.cart)
    }

    //supression d'un produit
    const handleRemoveFromCart = async (productId) => {
        const response = await commerce.cart.remove(productId)
        setCart(response.cart)
    }

    //vider la cart
    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty()
        setCart(response.cart)
    }

    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart
                            cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
