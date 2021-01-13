import React from 'react';
import { Container, Grid, Typography, Button } from "@material-ui/core";
import CartItem from './CartItem/CartItem';
import useStyles from "./styles";
import { Link } from 'react-router-dom';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles()

    const EmptyCart = () => (
        <Typography variant="h5">You have no items in your shoping Cart
            <Link to="/" className={classes.link}> start adding some !</Link>
        </Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3} >
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4" >Subtotal : {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} type="button" size="large" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Card</Button>
                    <Button component={Link} to="/checkout" className={classes.checkout} type="button" size="large" variant="contained" color="primary">Checkout</Button>

                </div>
            </div>

        </>
    );

    if (!cart.line_items) return "Loading... "

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
