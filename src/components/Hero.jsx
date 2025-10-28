import React from 'react'
import heroImage from '../assets/img/hero.png'
const Hero = () => {
  return (
    <div>
        <section className='container'>
                    <div className='hero'>
                        <div>
                            <img src={heroImage} alt="Hero Image" />
                        </div>
                        <div>
                            <h1>The best finance stack for entrepreneurs</h1>
                            <p>70% of companies switch to us from their DIY or legacy system. Now, get your bookkeeping, tax prep and CFO problems, solved. Complete our  {" "}
          <a href="#" className="text-blue-600 underline">
            contact form
          </a>{" "}, and find out why 9 out of 10 customers recommend us.</p>
                           
                        </div>
                        
                    </div>
                </section>
    </div>
  )
}

export default Hero