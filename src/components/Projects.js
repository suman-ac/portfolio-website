import React from 'react'
import Project1 from "../images/project1.jpg"
import Project2 from "../images/project2.jpg"
import Project3 from "../images/project3.jpg"
import Project4 from "../images/project4.jpg"
import Project5 from "../images/project5.jpg"
import Project6 from "../images/project6.jpg"
const Projects = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>My Projects</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              <div className='col-md-4 col-10 mx-auto'>
                <div class="card" >
                  <img src={Project1} class="card-img-top" alt="..." style={{height:"200px", width:"auto"}} />
                  <div class="card-body">
                    <h5 class="card-title">Youtube Homepage Clone</h5>
                    <p class="card-text">A copy of YouTube Homepage created with the fundamental knowledge of HTML and CSS during the learning period.</p>
                    <a href="https://github.com/suman-ac/Youtube-Clone.git" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Github Link</a>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-10 mx-auto'>
                <div class="card" >
                  <img src={Project2} class="card-img-top" alt="..." style={{height:"200px", width:"auto"}} />
                  <div class="card-body">
                    <h5 class="card-title">Weather App</h5>
                    <p class="card-text">React Application that uses API to fetch the weather details and displays the search results.</p>
                    <a href="https://github.com/suman-ac/react-weather-app.git" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Github Link</a>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-10 mx-auto'>
                <div class="card" >
                  <img src={Project3} class="card-img-top" alt="..." style={{height:"200px", width:"auto"}} />
                  <div class="card-body">
                    <h5 class="card-title">Todo App</h5>
                    <p class="card-text">A kind of app used to maintain our day-to-day tasks that helps in planning our daily schedules.</p>
                    <a href="https://github.com/suman-ac/Todo-App.git" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Github Link</a>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-10 mx-auto'>
                <div class="card" >
                  <img src={Project4} class="card-img-top" alt="..." style={{height:"200px", width:"auto"}} />
                  <div class="card-body">
                    <h5 class="card-title">Electronic Shop</h5>
                    <p class="card-text">A complete interacting ecommerce app built in React with the use of Sass, Redux and Formik.</p>
                    <a href="https://github.com/suman-ac/suman-electronic-shop.git" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Github Link</a>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-10 mx-auto'>
                <div class="card" >
                  <img src={Project5} class="card-img-top" alt="..." style={{height:"200px", width:"auto"}} />
                  <div class="card-body">
                    <h5 class="card-title"> Final Year Project</h5>
                    <p class="card-text">Comparative analysis and selecting the best algorithm to predict whether the person has heart disease or not.</p>
                    <a href="#" class="btn btn-primary">Github Link</a>
                  </div>  
                </div>
              </div>
              <div className='col-md-4 col-10 mx-auto'>
                <div class="card" >
                  <img src={Project6} class="card-img-top" alt="..." style={{height:"200px", width:"auto"}} />
                  <div class="card-body">
                    <h5 class="card-title">Landing Page</h5>
                    <p class="card-text">A simple landing page built with the knowledge of  html, CSS and using some basics of JavaScript.</p>
                    <a href="https://github.com/suman-ac/Landing-Page.git" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Github Link</a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Projects