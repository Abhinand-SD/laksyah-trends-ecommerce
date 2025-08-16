import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShopContext from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* ---------- Product Image -----------------*/}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt='' />
              ))
            }
          </div>

          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>

        </div>

        {/* --------- Product Info ------------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_dull_icon} alt='' className='w-3 5' />
            <p className='pl-2'>(122)</p>

          </div>
          <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 rounded ${item === size ? 'bg-gray-900 text-white' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>

          <button onClick={()=> addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is avilable on this product</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Desacription & Review section */}
      <div className='mt-20'>
        <div className='flex'>
          <p className='border px-5 py-3 text-sm'>Desacription</p>
          <p className='border px-5 py-3 text-sm'>Review(122)</p>
        </div>

        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>When you look good, you feel good. Our fashion line is more than just clothes - it's a reflection of your personal style and an expression of your vibrant personality. Invest in pieces that make you look and feel your absolute best, from the boardroom to the bar.</p>
          <p>When you look good, you feel good. Our fashion line is more than just clothes - it's a reflection of your personal style and an expression of your vibrant personality. Invest in pieces that make you look and feel your absolute best, from the boardroom to the bar.</p>
        </div>
      </div>

      {/* ---------- display related products --------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>

  ) : <div className='opcity-0'></div>
}

export default Product
