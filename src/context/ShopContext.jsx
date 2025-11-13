import React, { createContext, useEffect, useState } from 'react'
import { products } from '../assets/assets';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 75;
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItem, setCartItem] = useState({});

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select product size');
            return;
        }

        let cartData = structuredClone(cartItem);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData)
    }


    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item]) {
                        totalCount += cartItem[items][item];
                    }
                } catch (error) {
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItem);

        console.log(cartItem);


        cartData[itemId][size] = quantity;

        // update or remove size
        if (quantity <= 0) {
            delete cartData[itemId][size];
        } else {
            cartData[itemId][size] = quantity;
        }

        // remove item if no sizes left
        if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId];
        }


        setCartItem(cartData)
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItem) {
            let itemInfo = products.find((products) => products._id === items);
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        // add total amount of all quntity
                        totalAmount += itemInfo.price * cartItem[items][item];

                    }
                } catch (err) {

                }
            }
        }

        return totalAmount;
    }


    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItem,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContext;

