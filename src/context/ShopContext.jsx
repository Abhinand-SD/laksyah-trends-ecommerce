import React, { createContext, useState } from 'react'
import { products } from '../assets/assets';

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 10;
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(true)
    
    const value = {
        products,
        currency,
        delivery_fee,
        products,
        search,
        setSearch,
        showSearch,
        setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContext;

