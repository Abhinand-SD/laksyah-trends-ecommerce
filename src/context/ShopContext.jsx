import React, { createContext, useEffect, useState } from 'react'
// import { products } from '../assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 75;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItem, setCartItem] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('')
    const navigate = useNavigate();

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

        if(token) {
            try {
                
                await axios.post(backendUrl + '/api/cart/add', {itemId, size}, {headers:{token}})

            } catch (err) {
                console.log(err)
                toast.error(err.message)
            }
        }
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

    const getProductData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            
            if(response.data.success){
                setProducts(response.data.products)
            }else{
                toast.error(response.data.message)
            }
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }

    useEffect(()=>{
        getProductData()
    },[])

    useEffect(()=>{
        if(!token && localStorage.getItem('token')){
            console.log("token added")
            setToken(localStorage.getItem('token'))
        }
    },[])


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
        getCartAmount,
        navigate,
        backendUrl,
        token,
        setToken

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContext;

