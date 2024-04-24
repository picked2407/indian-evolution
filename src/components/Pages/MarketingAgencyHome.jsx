import React, { useEffect } from 'react';
import Cta from '../Cta';
import Div from '../Div';
import Hero5 from '../Hero/Hero5';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import Spacing from '../Spacing';
import VideoModal from '../VideoModal';
import { pageTitle } from '../../helper';
import PostSlider from '../Slider/PostSlider';
import SectionHeading from '../SectionHeading';
import TestimonialSlider from '../Slider/TestimonialSlider';
import PricingTableList from '../PricingTable/PricingTableList';
import FunFact2 from '../FunFact/FunFact2';
import PortfolioSlider2 from '../Slider/PortfolioSlider2';
import ServiceList from '../ServiceList';
const heroSocialLinks = [
  {
    name: 'Instagram',
    links: 'https://www.instagram.com/indian_trade_evolution/',
  },

];
const funfaceData = [
  {
    title: 'Digital products',
    factNumber: '550',
  },
  {
    title: 'Global happy clients',
    factNumber: '40K',
  },
  {
    title: 'Project completed',
    factNumber: '50k',
  },
  {
    title: 'Team members',
    factNumber: '250',
  },
];

export default function MarketingAgencyHome() {
  pageTitle('Indian Evolution');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero5
        title="Welcome To <br/> The World <br/> Of <br/> Institutional Trading"
        subtitle="Innovating investments, shaping futures. Welcome to Indian Trade Evolution"
        btnLink="contact"
        btnText="Let’s talk"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
      />
      {/* End Hero Section */}

       {/* Start Video Block Section */}
       <Div className="cs-video_block_1_wrap">
        <Div className="container">
          <VideoModal
            videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
            bgUrl="/images/video_bg_2.jpeg"
          />
        </Div>
      </Div>
      {/* End Video Block Section */}

         {/* Start Services Section */}
         <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our core services"
          subtitle="Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList variant="cs-style2" />
      </Div>
      <Spacing lg="120" md="50" />
      {/* End Services Section */}
      {/* End Service Section */}

     
 
    
      {/* Start FunFact Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <FunFact2
          data={funfaceData}
          variant="cs-no_shadow"
          bgUrl="/images/funfact_shape_bg.svg"
        />
      </Div>
      {/* End FunFact Section */}


      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="100" md="70" />
      {/* End MovingText Section */}


      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg_3.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
