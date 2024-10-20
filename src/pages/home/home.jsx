import React from 'react';
import banner from '../../assets/banner.jpg';
import PrimaryButton from '../../components/primary-button';
import { ArrowIcon } from '../../assets/icons/arrow-icon';
import { Fruits } from './components/fruits';
import fruit1 from '../../assets/shops1.svg';
import fruit2 from '../../assets/shops2.svg';
import aboutImg from '../../assets/shops4.svg';
import about1 from '../../assets/about1.png';
import about2 from '../../assets/about2.png';
import data from '../../data/data.js'
import { ProductCart } from '../../components/product-cart'
import customerbg from '../../assets/customerbg.png'
import girl from '../../assets/girl.png'
import { Sircle } from './components/sircle.jsx';
import { Sweites } from './components/sweites.jsx';
import { FooterTop } from '../../components/footer-top.jsx';
import { ProductNews } from '../../components/product-news.jsx';


export const Home = () => {
    return (
        <>
            <div className=''>
                <div className='bg-cover bg-center container' style={{ backgroundImage: `url(${banner})` }}>
                    <div className='py-60 w-[537px] flex flex-col gap-4'>
                        <p className='text-[#68A47F] font-cursive text-[36px]'>100% Natural Food</p>
                        <h1 className='text-h1 text-primary font-secondary tracking-wide'>Choose the best  healthier way of life</h1>
                        <div>
                            <PrimaryButton icon={<ArrowIcon />}>Explore Now</PrimaryButton>
                        </div>
                    </div>
                </div>

                <div className='container flex justify-between gap-8 py-[145px]'>
                    <Fruits title={'Natural!!'} discription={'Get Garden Fresh Fruits'} bgImg={fruit1} />
                    <Fruits title={'Offer!!'} hColor={`text-primary`} pColor={`text-secondary`} discription={'Get 10% off on Vegetables'} bgImg={fruit2} />
                </div>

                <div className='container flex justify-between items-center bg-[#F9F8F8]'>
                    <div><img src={aboutImg} alt="" /></div>

                    <div className='flex flex-col gap-5 w-[600px]'>
                        <p className='text-[36px] text-secondary font-cursive'>About Us</p>
                        <h1 className='text-h4 text-primary'>We Believe in Working Accredited Farmers</h1>
                        <p className='text-darkGray'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <div className='flex gap-3 items-center'>
                            <img src={about1} alt="" />
                            <div>
                                <h4 className='text-primary text-[23px] font-bold'>Organic Foods Only</h4>
                                <p className='text-darkGray'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>

                        <div className='flex gap-3 items-center'>
                            <img src={about2} alt="" />
                            <div>
                                <h4 className='text-primary text-[23px] font-bold'>Quality Standards</h4>
                                <p className='text-darkGray'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>

                        <div>
                            <PrimaryButton icon={<ArrowIcon />} bgColor='bg-primary' textColor='text-white'>
                                Shop Now
                            </PrimaryButton>
                        </div>
                    </div>
                </div>

                <div className='container py-40'>
                    <div className='flex flex-col items-center justify-center gap-2 pb-6'>
                        <p className='font-cursive text-secondary text-[36px]'>Categories</p>
                        <h3 className='font-bold text-primary text-[50px]'>Our Products</h3>
                    </div>
                    <div className='grid grid-cols-4 gap-4'>
                        {data.products.slice(0, 8).map((item) => (
                            <ProductCart key={item.id} id={item.id} topTitle={item.buttontitle} img={item.img} title={item.title} oldPrice={item.price} price={item.price2} />
                        ))}
                    </div>
                    <div className='flex justify-center py-24'>
                        <PrimaryButton bgColor='bg-primary' textColor='text-white' icon={<ArrowIcon />}>Load More</PrimaryButton>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${customerbg})` }} className='py-52 container'>
                    <div className='flex flex-col items-center gap-4'>
                        <p className='font-cursive text-secondary text-[36px]'>Testimonial</p>
                        <h2 className='text-h2 text-primary'>What Our Customer Saying?</h2>
                        <img src={girl} alt="img" />
                        <p>⭐⭐⭐⭐⭐</p>
                        <p className='text-darkGray text-[18px] w-[720px] text-center'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        <h5 className='text-primary text-[25px] font-bold'>Sara Taylor</h5>
                        <p className='text-darkGray text-[15px]'>Consumer</p>
                    </div>

                    <div className='flex justify-between pt-32 px-32'>
                        <Sircle prasent={'100%'} info={'Organic'} />
                        <Sircle prasent={'285'} info={'Active Product'} />
                        <Sircle prasent={'350+'} info={'Organic Orchads'} />
                        <Sircle prasent={'25+'} info={'Years of Farming'} />
                    </div>
                </div>

                <div className='bg-primary container py-36'>
                    <div className='flex justify-between items-end'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-cursive text-[36px] text-secondary'>Offer</p>
                            <h3 className='text-white text-[50px]'>We Offer Organic For You</h3>
                        </div>
                        <PrimaryButton icon={<ArrowIcon />}>View All Product</PrimaryButton>
                    </div>

                    <div className='flex gap-4 py-20'>
                        {data.food.map((item) => (
                            <ProductCart key={item.id} id={item.id} topTitle={item.buttontitle} img={item.img} title={item.title} oldPrice={item.price} price={item.price2} />
                        ))}
                    </div>
                </div>

                <div>
                    {
                        data.friendly.map((item) => (
                            <div className='flex relative container pl-0 ' key={item.id}>
                                <div>
                                    <img src={item.img} alt="img" />
                                </div>

                                <div className='bg-white py-24 pl-24 rounded-3xl absolute left-[790px] top-24 flex flex-col gap-4'>
                                    <p className='text-[36px] font-cursive text-secondary'>Eco Friendly</p>
                                    <h3 className='text-[50px] font-primary text-primary font-bold'>Econis is a Friendly Organic Store</h3>
                                    <div>
                                        <h5 className='text-[25px] text-primary font-semibold'>Start with Our Company First</h5>
                                        <p className='text-[18px] text-[#525C60]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                                    </div>

                                    <div>
                                        <h5 className='text-[25px] text-primary font-semibold'>Learn How to Grow Yourself</h5>
                                        <p className='text-[18px] text-[#525C60]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                                    </div>

                                    <div>
                                        <h5 className='text-[25px] text-primary font-semibold'>Farming Strategies of Today</h5>
                                        <p className='text-[18px] text-[#525C60]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                                    </div>
                                </div>


                            </div>

                        ))

                    }
                </div>

                <div className='flex justify-between gap-9 container px-0 bg-[#F1F8F4] py-24'>
                    {data.friendlycard.map((item => (
                        <Sweites key={item.id} img={item.img} title={item.title} />
                    )))}
                </div>

                <div className='flex flex-col container gap-3 pb-[258px]'>
                    <div className='pt-28'>
                        <p className='text-secondary font-cursive text-[36px]'>New</p>
                    </div>
                    <div>
                        <div className='flex justify-between pb-10'>
                            <h4 className='text-h3 w-[702px] text-primary'>Discover weekly content about organic food, & more</h4>
                            <div>
                                <PrimaryButton icon={<ArrowIcon />} >More News</PrimaryButton>
                            </div>
                        </div>
                        <div className='flex justify-between gap-11'>
                            {data.discover.map((item) => (
                                <ProductNews img={item.img} date={item.buttons} avtor={item.disc} title={item.title} discription={item.info} buttonTitle={item.btn} key={item.id}/>
                            ))}
                        </div>
                    </div>
                </div>


                <div className='container'>
                    <FooterTop />
                </div>
            </div>
        </>
    )
}
