import React from 'react'
import './Hero.css';
import { Link } from 'react-router-dom';
import learn from "../Asset/learn.svg";


const Hero = () =>{
    return(
        <div style={{ 
            width:"100%",
            height:"100%",
         }}>

        <div className="hero-main">
        <div className="hero-con">
            <div className='right-hero'>
                <div className='learn'>
                Learn the<br/> <span className='ind'>indemand</span> skill and <br/><span className='ind'>access</span> global <br/>opportunities
                </div>

                <Link to ='/' className='get2'>Get Started</Link>
            </div>

            <div className='left-hero'>
                <img src={learn} alt="e-ben" />
            </div>
        
            </div>

            <div className='num'>
                <div className='num-hold'>
                    <div className='fact'>
                        <h1>300+</h1>
                        <h5>Verified Tutors</h5>
                    </div>

                    <div className='fact'>
                        <h1>500+</h1>
                        <h5>Total Registered Students </h5>
                    </div>

                    <div className='fact'>
                        <h1>800+</h1>
                        <h5>Graduated Students</h5>
                    </div>
                </div>
            </div>

        </div>

        <div className='who'>
            <div className='we'>
            <h2>Who We Are.</h2>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante facilisi varius odio orci ut est pretium. Gravida massa viverra porta arcu. Nulla volutpat mauris tortor lacus, leo. Arcu tortor non tempor sollicitudin volutpat tristique ultricies. Magna nisl massa, magna amet, purus, etiam gravida mi. Aliquet iaculis suspendisse condimentum non lectus enim, pharetra est, elementum. Cursus lacus morbi sem orci pellentesque. In auctor sed diam, vel adipiscing sit lacus aenean adipiscing. In augue amet, urna, turpis feugiat ultricies. Velit suspendisse quis id adipiscing. Lorem lectus vulputate ut aliquam amet purus. Ornare </h4>
            </div>
        </div>

        

        
               
        </div>
    )
}

export default Hero;