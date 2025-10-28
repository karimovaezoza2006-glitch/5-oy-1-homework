import React from 'react'
import logotip from '../assets/img/logotip.png'
const Logo = () => {
  return (
    <div>
        <section className='container'>
            <div className='logo'>
                <div>
                    <p>Join 200+ amazing companies</p>
                </div>
                <div>
                    <img src={logotip}/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Logo