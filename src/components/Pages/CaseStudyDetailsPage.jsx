import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Hero4 from '../Hero/Hero4';
import './CylinderText.css'; // Import the CSS file for styling
import VideoModal from '../VideoModal';



export default function CaseStudyDetailsPage() {
  pageTitle('Workshop Details Page');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>

    {/* Start About Section */}
    <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Your trusted partner for business"
              subtitle="About Our Agency"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining. Through our years of experience, we’ve also learned
                that while each channel.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="https://w0.peakpx.com/wallpaper/970/401/HD-wallpaper-man-s-half-face.jpg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
     
        </Div>
      </Div>
      {/* End About Section */}

 {/* Start Video Block Section */}
 <Spacing lg="140" md="70" />
      <Div className="container">
      <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
    Master The Art Of <br /> 
    <span style={{ color: 'orange', fontWeight: 'bold' }}>Smart Money</span> 
    <br /> Trading Using Our Squeeze Strategy
</h2>

      </Div>
      {/* End Video Block Section */}

      
   
      <Div className="container">
      
      <Spacing lg="25" md="45" />

      
        <p className="cs-m0 text-center">
        Unlock The Secrets Of Professional Institutional Traders
        </p>
        <Spacing lg="55" md="45" />


        <div className="cylinder">
      <div className="cylinder-inner">
        <span className="orange-text">1st May, 2024, 9:00 PM</span>
      </div>
    </div>
    <Spacing lg="55" md="45" />

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
      </Div>
      <Spacing lg="55" md="45" />
      <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
    After Attending This Webinar <br /> 
    <span style={{ color: 'orange', fontWeight: 'bold' }}>You Will Be Able To</span> 
</h2>
<Spacing lg="55" md="45" />



      <div className="box-container">
    <div className="box">
    <img src="path/to/your/bulb.gif" alt="Bulb GIF" />
    <p>This is the content of Box 1.</p>
</div>



      <div className="box">
        <h3>Box 2</h3>
        <p>This is the content of Box 2.</p>
      </div>

      <div className="box">
        <h3>Box 3</h3>
        <p>This is the content of Box 3.</p>
      </div>
    </div>

    <Spacing lg="75" md="80" />

    <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
     Webinar 
    <span style={{ color: 'orange', fontWeight: 'bold' }}>Information</span> 
</h2>
<Spacing lg="35" md="80" />

    <div className="box-container">
      <div className="box">
        <div className="box-content">
          <h2 className="size">Upcoming Webinar</h2>
          <p className="para text-center">Date & Time</p>
          <h2 className="size text-center">Apr 27, 2024 6:00 PM</h2>
          <button className="buy-button">Buy Now</button>
        </div>
      </div> 
      <div className="box">
        <div className="box-content">
        <h2 className="size">Webinar Bonuses</h2>
          <h2 className="size"><span className="orange">📚 Free</span> E-book</h2>
          <h2 className="size"><span className="orange">🎁 25% Discount</span> On Course</h2>

          <button className="buy-button">Join Webinar Now</button>
        </div>
      </div>
    </div>
      <Spacing lg="145" md="80" />
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