import React from 'react'
import data from '../../data/data'
import { FooterTop } from '../../components/footer-top'
import { Banner } from '../../components/banner'
import shop from '../../assets/shop.png'
import { ProductCart } from '../../components/product-cart'


export const Shop = () => {
    return (
        <div>


            <div className='container px-0'>
                <Banner title={'Shop'} img={shop} />
            </div>
            <div className='container text-center flex flex-col gap-7 py-32'>
                <h3 className='text-primary font-bold text-h2'>Related Products</h3>
                <div className='grid grid-cols-4 gap-6'>
                    {
                        data.products.map((item) => (
                            <ProductCart key={item.id} id={item.id} img={item.img} topTitle={item.buttontitle} oldPrice={item.price} title={item.title} price={item.price2} />
                        ))
                    }
                </div>
            </div>

            <div className='container'>
                <FooterTop />
            </div>
        </div>
    )
}
