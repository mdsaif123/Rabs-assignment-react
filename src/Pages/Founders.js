import React from 'react';

const Founders = () => {
  return (
    <div>
      <div className="founders container my-5">
        <div className="row justify-content-center p-2 my-2"> {/* Centering the columns */}
          <h1 className="text-center mb-3 my-4">About the <span className='bold'> Founders</span></h1>
          
          <div className="col-md-4 founder-card mx-2 my-2">
            <div className="">
              <div className="text-center">
                <img src="https://rabsnetsolutions.com/experience-center/assets/img/RABS_Landing_Page/team/rehan-halai.jpg"  alt="" />
              </div>
            </div>
            <h5 className='text-center bold'>MR. REHAN HALAI <a href="https://mybusinessprofile.org/rehanhalai-1564"><img src="https://rabsnetsolutions.com/experience-center/assets/img/RABS_Landing_Page/team/my-business-icon.png" style={{width:"30px"}} alt="" /></a></h5>
            <h5 className='text-center bold'>DIRECTOR & FOUNDER</h5>
            <p>Director and Founder of RABS Net Solutions, it’s my pleasure to introduce to you our dynamic organization with the solutions we offer. We always look forward to add real value to your business through our analytical and inventive ways with every single project. We're committed to TAKING YOU FORWARD, with passion, innovation, creating value for our Clients.</p>
          </div>

          <div className="col-md-4 founder-card mx-2 my-2">
            <div className="">
              <div className="text-center">
                <img src="https://rabsnetsolutions.com/experience-center/assets/img/RABS_Landing_Page/team/bilal-halai.jpg" alt="" />
              </div>
            </div>
            <h5 className='text-center bold'>MR. BILAL HALAI <a href="https://mybusinessprofile.org/bilalhalai-1403"><img src="https://rabsnetsolutions.com/experience-center/assets/img/RABS_Landing_Page/team/my-business-icon.png" style={{width:"30px"}} alt="" /></a></h5>
            <h5 className='text-center bold'>STRATEGY & RESEARCH ANALYST</h5>
            <p>Bilal Halai is the brain behind the proprietary technology solution designed by the company for real estate channel partners. He leads the development and business development team and gives them critical insights which give this unique digital platform the cutting edge and helps stakeholders in the real estate business taking their revenue to higher levels.</p>
          </div>
        </div>
      </div>
      <div className="text-center my-2">
  <img className="shake" src="https://rabsnetsolutions.com/experience-center/assets/img/membership/slider/arrow.png" alt="Shaking Image" />
</div>
    </div>
  );
}

export default Founders;
