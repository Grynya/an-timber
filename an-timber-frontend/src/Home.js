import * as React from 'react';
import SwipeableProduct from './components/product/SwipeableProduct';
import ProductValues from './components/product/ProductValues';
import Header from './components/Header';
import withRoot from './style/withRoot';
import Footer from "./components/Footer";

function Index() {
    return (
        <React.Fragment>
            <Header/>
            <SwipeableProduct/>
            <ProductValues/>
            <Footer/>
        </React.Fragment>
    );
}

export default withRoot(Index);
