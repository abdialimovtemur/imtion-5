import React from 'react'
import { Banner } from '../../components/banner'
import aboutImg from '../../assets/about.png'
import salad from '../../assets/salad.png'
import traktor from '../../assets/traktor.png'
import fabric from '../../assets/fabric.png'
import PrimaryButton from '../../components/primary-button'
import { ArrowIcon } from '../../assets/icons/arrow-icon'
import limons from '../../assets/limons.png'
import { Servises } from './components/servises'
import servises1 from '../../assets/servises1.png'
import servises2 from '../../assets/servises2.png'
import servises3 from '../../assets/servises3.png'
import servises4 from '../../assets/servises4.png'
import { Avtors } from './components/avtors'
import avtor1 from '../../assets/avtor1.png'
import avtor2 from '../../assets/avtor2.png'
import avtor3 from '../../assets/avtor3.png'
import { ProductSpace } from './components/product-space'
import space1 from '../../assets/space1.png'
import space2 from '../../assets/space2.png'
import space3 from '../../assets/space3.png'
import space4 from '../../assets/space4.png'
import { FooterTop } from '../../components/footer-top'

export const AboutUs = () => {
    return (
        <div>
            <div className='container px-0'>
                <Banner img={aboutImg} title={"About Us"} />
            </div>

            <div className='container flex justify-between items-center py-32'>
                <div><img src={salad} alt="img" /></div>

                <div className='flex flex-col gap-5 w-[600px]'>
                    <p className='text-[36px] text-secondary font-cursive'>About Us</p>
                    <h1 className='text-h4 text-primary'>We do Creative Things for Success</h1>
                    <p className='text-darkGray'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <p className='text-darkGray'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <div className='flex gap-5 items-center'>
                        <div className='flex gap-3 items-center'>
                            <img src={traktor} alt="img" />
                            <div>
                                <h4 className='text-primary text-[23px] font-bold'>Modern Agriculture Equipment</h4>
                            </div>
                        </div>

                        <div className='flex gap-3 items-center'>
                            <img src={fabric} alt="img" />
                            <div>
                                <h4 className='text-primary text-[23px] font-bold'>No growth hormones are used</h4>
                            </div>
                        </div>
                    </div>

                    <div>
                        <PrimaryButton icon={<ArrowIcon />} bgColor='bg-primary' textColor='text-white'>
                            Explore More
                        </PrimaryButton>
                    </div>
                </div>
            </div>





            <div className='container gap-52 flex justify-between items-center py-32'>

                <div className='flex flex-col gap-5 w-[600px]'>
                    <p className='text-[36px] text-secondary font-cursive'>Why Choose us?</p>
                    <h1 className='text-h4 text-primary'>We do not buy from the open market & traders.</h1>
                    <p className='text-darkGray'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                    <div className='flex gap-5 flex-col'>
                        <div className='flex gap-3 items-center'>
                            <div>
                                <h4 className='w-72 rounded-full my-4 text-primary text-[23px] font-medium bg-[#ECECEC] p-3'>100% Natural Product</h4>
                                <p className='text-darkGray pl-12'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>

                        <div className='flex gap-3 items-center'>
                            <div>
                                <h4 className='w-72 rounded-full my-4 text-primary text-[23px] font-medium bg-[#ECECEC] p-3'>Increases resistance</h4>
                                <p className='text-darkGray pl-12'>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div><img className='rounded-3xl' src={limons} alt="img" /></div>
            </div>

            <div className='flex justify-between container gap-7 pt-12 pb-60'>
                <Servises img={servises1} title={'Return Policy'} discription={'Simply dummy text of the printintypesetting industry.'} />
                <Servises img={servises2} title={'100% Fresh'} discription={'Simply dummy text of the printintypesetting industry.'} />
                <Servises img={servises3} title={'Support 24/7'} discription={'Simply dummy text of the printintypesetting industry.'} />
                <Servises img={servises4} title={'Secured Payment'} discription={'Simply dummy text of the printintypesetting industry.'} />
            </div>

            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-3 text-center w-[852px]'>
                    <p className='text-[36px] text-secondary font-cursive'>Team</p>
                    <h1 className='text-h4 text-primary'>Our Organic Experts</h1>
                    <p className='text-darkGray text-[18px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                </div>

                <div className='flex justify-between gap-5 pt-20'>
                    <Avtors img={avtor1} fullName={'Giovani Bacardo'} positon={'Farmer'} />
                    <Avtors img={avtor2} fullName={'Marianne Loreno'} positon={'Designer'} />
                    <Avtors img={avtor3} fullName={'Riga Pelore'} positon={'Farmer'} />
                </div>
            </div>

            <div className='container py-52 flex flex-col gap-3 items-center mt-32 bg-primary'>
                <div className='flex flex-col gap-3 pb-7 text-center w-[852px]'>
                    <p className='text-[36px] text-secondary font-cursive'>About Us</p>
                    <h1 className='text-h4 text-white'>What We Offer for You</h1>
                </div>

                <div className='flex justify-between gap-4'>
                    <ProductSpace img={space1} title={'Spicy'}/>
                    <ProductSpace img={space2} title={'Nuts & Feesd'}/>
                    <ProductSpace img={space3} title={'Fruits'}/>
                    <ProductSpace img={space4} title={'Vegetable'}/>
                </div>
            </div>

            <div className='container pt-24'>
                <FooterTop/>
            </div>

        </div>
    )

}
