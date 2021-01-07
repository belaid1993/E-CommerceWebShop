import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, nom: 'a', description: 'blalalala', price: '$12', image: 'https://www.leparisien.fr/resizer/P_fjHpR5pTAuf_ZJud3Bl1PSz-w=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/LFTEZ6YS3ERLJKGKXPIZKW3H4I.jpg' },
    { id: 2, nom: 'b', description: 'blalalala', price: '$12', image: 'https://www.leparisien.fr/resizer/P_fjHpR5pTAuf_ZJud3Bl1PSz-w=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/LFTEZ6YS3ERLJKGKXPIZKW3H4I.jpg' },
    { id: 3, nom: 'c', description: 'blalalala', price: '$12', image: 'https://www.leparisien.fr/resizer/P_fjHpR5pTAuf_ZJud3Bl1PSz-w=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/LFTEZ6YS3ERLJKGKXPIZKW3H4I.jpg' },
    { id: 4, nom: 'a', description: 'blalalala', price: '$12', image: 'https://www.leparisien.fr/resizer/P_fjHpR5pTAuf_ZJud3Bl1PSz-w=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/LFTEZ6YS3ERLJKGKXPIZKW3H4I.jpg' },
    { id: 5, nom: 'b', description: 'blalalala', price: '$12', image: 'https://www.leparisien.fr/resizer/P_fjHpR5pTAuf_ZJud3Bl1PSz-w=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/LFTEZ6YS3ERLJKGKXPIZKW3H4I.jpg' },
    { id: 6, nom: 'c', description: 'blalalala', price: '$12', image: 'https://www.leparisien.fr/resizer/P_fjHpR5pTAuf_ZJud3Bl1PSz-w=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/LFTEZ6YS3ERLJKGKXPIZKW3H4I.jpg' }
];

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>

        </main>
    )
}

export default Products