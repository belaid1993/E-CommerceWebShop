import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';



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
        const item = await commerce.cart.add(productId, quantity)
        setCart(item.cart)
    }

    return (
        <div>
            <Navbar totalItems={cart.total_items} />
            {/*<Products products={products} onAddToCart={handleAddToCart} />*/}
            <Cart cart={cart}/>
        </div>
    )
}

export default App
