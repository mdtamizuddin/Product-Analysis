import React from 'react'
import './Home.css'
import product from './images/headset.jpg'
function Home() {
    return (
        <section className='container'>
           <div className="header">
           <div className='header-content '>
                <h1>BENGOO G9000 Stereo</h1>
                <h2>Gaming Headset for PS4 PC Xbox One PS5 Controller,
                    <br />
                    Noise Cancelling Over Ear Headphones with Mic,<br />
                    LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac
                </h2>
                <button className='header-btn'>Live Demo</button>
            </div>
            <div className='image'>
                <img src={product} alt="" />
            </div>
           </div>

            
        </section>
    )
}

export default Home