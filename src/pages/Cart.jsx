import React, { useContext, useEffect, useState } from 'react'
import ShopContext from '../context/ShopContext'
import Title from '../components/Title'

const Cart = () => {

  const { products, currency, cartItem } = useContext(ShopContext);

  console.log('cart items', cartItem)

  const [cartData, setCartItem] = useState([])

  useEffect(() => {
    const tempData = [];

    for (const items in cartItem) {

      console.log("frist", items)
      for (const item in cartItem[items]) {
        console.log("second", item)
        if (cartItem[items]) {
          tempData.push({
            _id: items,
            size: item,
            quatity: cartItem[items][item]
          })
        }
      }
    }
    setCartItem(tempData)
  }, [cartItem])
  return (
    <div className='border-t pt-4'>

      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {cartData && cartData.length > 0 ? (<div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_.0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt='' />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency} {productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type='number' min={1} defaultValue={item.quatity}/>
              </div>
            )
          })
        }

      </div>) : (<div> <p>NO Cart items </p></div>)}
    </div>
  )
}

export default Cart
