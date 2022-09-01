import React from 'react'
import { useNavigate } from 'react-router-dom';
import MyImage from "../images/myphoto.jpg"


const Home = () => {
  const navigate = useNavigate();

  const navigateToProjects = () => {
    navigate('/projects');
  };

  return (
    <>
      <section id="header" className='d-flex align-items-center'>
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1>Hello Everyone, It's me <strong className='brand-name'>Suman Acharya</strong></h1>
                  <h5 className='my-3'>
                  Disciplined and hardworking individual with a great foundation in Computer Engineering. Always have been passionate about developing creative and responsive web pages. Aspiring to combine broad background with strong technical skills to excel as a Front-End Developer.
                  </h5>
                  <div className='mt-3'>
                  <button onClick={navigateToProjects}  className="get-button">Get Started</button>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img src={MyImage} className="img-fluid animated" alt="home img" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home