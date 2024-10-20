import React from 'react'
import { Banner } from '../../components/banner'
import shopSingle from '../../assets/single-shop.png'
import data from '../../data/data'
import { useParams } from 'react-router-dom'
import PrimaryButton from '../../components/primary-button'
import { ArrowIcon } from '../../assets/icons/arrow-icon'
import { ProductCart } from '../../components/product-cart'
import { FooterTop } from '../../components/footer-top'


export const ShopSingle = () => {
    const { id } = useParams()
    const product = data.products.find((item) => item.id == (id))

    return (
        <div>
            <div className='container px-0'>
                <Banner img={shopSingle} title={"Shop Single"} />
            </div>

            <div className='py-32 container flex justify-between items-center'>
                <div className='border w-[600px] h-[600px] px-12 py-8 rounded-3xl items-center justify-center overflow-hidden'>
                    <div className='flex justify-start'>
                        <p className='bg-primary text-white py-1 px-3 rounded-xl'>{product.buttontitle}</p>
                    </div>
                    <img className='w-[95%]' src={product.img} alt="img" />
                </div>

                <div className='flex flex-col gap-6'>
                    <h3 className='text-primary text-[40px] font-bold pb-3'>{product.title}</h3>
                    <p>⭐⭐⭐⭐⭐</p>
                    <div className='flex gap-4 items-center'>
                        <p className='text-[#B8B8B8] text-[20px] line-through'>{product.price}</p>
                        <p className='text-[23px] text-primary font-bold'>{product.price2}</p>
                    </div>
                    <p className='w-[658px] text-darkGray text-[18px]'>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>

                    <div className='flex gap-3 items-center'>
                        <p className='text-[23px] text-primary font-bold'>Quantity :</p>
                        <div className='border-primary border-2 font-bold rounded-xl px-12 py-3'>1</div>
                        <PrimaryButton bgColor='bg-primary' textColor='text-white' icon={<ArrowIcon />}>Add To Cart</PrimaryButton>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-6 items-center justify-center'>
                <div className='flex gap-5'>
                    <PrimaryButton bgColor='bg-primary' textColor='text-white'>Product Description</PrimaryButton>
                    <PrimaryButton bgColor='bg-[#EFF6F1]' textColor='text-primary'>Additional Info</PrimaryButton>
                </div>
                <p className='w-[1137px] text-center text-darkGray text-[18px]'>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
            </div>

            <div className='container text-center flex flex-col gap-7 py-32'>
                <h3 className='text-primary font-bold text-h2'>Related Products</h3>
                <div className='flex gap-6'>
                    {
                        data.products.slice(0, 4).map((item) => (
                            <ProductCart key={item.id} id={item.id} img={item.img} topTitle={item.buttontitle} oldPrice={item.price} title={item.title} price={item.price2} />
                        ))
                    }
                </div>
            </div>

            <div className='container'>
                <FooterTop/>
            </div>
        </div>
    )
}
